import { UtilWxgameVary } from '@icanvas/core';
function LoaderFactory() {
	if (ENV.input.target != 'wxgame') return;
	let FileManager = wx.getFileSystemManager();
	let Apis = {
		unzip: UtilWxgameVary('unzip', FileManager),
		rmdir: UtilWxgameVary('rmdir', FileManager),
		writeFile: UtilWxgameVary('writeFile', FileManager),
		readFile: UtilWxgameVary('readFile', FileManager),
	};
	function Download(url) {
		return new Promise((success, fail) => {
			wx.downloadFile({ url, success, fail }).onProgressUpdate(res => GAME.Event.emit('resourceDownload', res.progress));
		})
			.then(res => (res.statusCode != 200 ? Promise.reject('文件资源，下载失败') : res.tempFilePath))
			.catch(() => {
				GAME.Event.emit('resourceDownload', 0);
				return new Promise(reslove => {
					//TODO 是否改为点击重试
					setTimeout(() => {
						reslove();
					}, 600);
				}).then(() => Download(url));
			});
	}
	function UnZip(zipFilePath, url) {
		return Apis.unzip({
			zipFilePath,
			targetPath: wx.env.USER_DATA_PATH + '/' + encodeURIComponent(url),
		});
	}
	function Remove(url) {
		if (!url) return Promise.resolve();
		return Apis.rmdir({
			dirPath: wx.env.USER_DATA_PATH + '/' + encodeURIComponent(url),
			recursive: true,
		}).catch(e => {
			if (!e.errMsg) return;
			if (e.errMsg.indexOf('fail no such file or directory') >= 0) return;
		});
	}
	function WriteStorage(key, json) {
		return Apis.writeFile({
			filePath: wx.env.USER_DATA_PATH + '/' + key,
			data: JSON.stringify(json),
		});
	}
	function ReadStorage(key) {
		return Apis.readFile({
			filePath: wx.env.USER_DATA_PATH + '/' + key,
			encoding: 'utf8',
		})
			.then(res => JSON.parse(res.data) || {})
			.catch(res => ({}));
	}
	return function(url) {
		let encode = encodeURIComponent(url);
		return ReadStorage('resource.json').then(options => {
			if (options.url == url) {
				GAME.Event.emit('resourceDownload', -1);
				return { assetsUrl: wx.env.USER_DATA_PATH + '/' + encode + '/', resourceMap: options.resourceMap };
			}
			return Remove(options.url)
				.then(() => Download(url))
				.then(path => UnZip(path, url))
				.then(() => ReadStorage(encode + '/option.json'))
				.then(resourceMap => {
					return WriteStorage('resource.json', { url, resourceMap }).then(() => ({
						assetsUrl: wx.env.USER_DATA_PATH + '/' + encode + '/',
						resourceMap: resourceMap,
					}));
				});
		});
	};
}
export const Loader = LoaderFactory();
export function Remote(url) {
	if (ENV.dynamic.assetsUrl && Loader) return Loader(url);
	return Promise.resolve({
		assetsUrl: url,
		resourceMap: ENV.dynamic.resourceMap.remote,
	});
}
export function Listen(event = 'preLoadProgress', endEvent = 'preLoaded') {
	let Progress = { P1: 100, T1: 100, V1: 0.75 * 0.7, P2: 1, T2: 1, V2: 0.75 * 0.3, P3: 5, T3: 5, V3: 0.25 };
	let Compute = function() {
		let Total = (Progress.P1 / Progress.T1) * Progress.V1 + (Progress.P2 / Progress.T2) * Progress.V2 + (Progress.P3 / Progress.T3) * Progress.V3;
		if (Total > 100) Total = 100;
		if (Total < 0) Total = 0;
		GAME.Event.emit(event, (Total * 100).toFixed(1));
	};
	let ResDownload = function(progress) {
		console.log('资源下载进度', progress);
		if (progress == -1) {
			Progress.V2 += Progress.V1;
			Progress.V1 = 0;
		}
		Progress.P1 = progress;
		Compute();
	};
	let ResLoad = function(length) {
		console.log(arguments.length == 1 ? '资源文件准备加载' + length : '资源文件加载完成');
		if (arguments.length == 1) {
			Progress.T2 += length;
		} else {
			Progress.P2 += 1;
		}
		Compute();
	};
	let Loging = function(progress) {
		console.log('登陆进度', progress);
		Progress.P3 = progress;
		if (progress == -1) {
			Progress.V1 += Progress.V3 * (Progress.V1 / 0.75);
			Progress.V2 += Progress.V3 * (Progress.V2 / 0.75);
			Progress.V3 = 0;
		}
		Compute();
	};
	Compute();
	GAME.Event.on('loging', Loging, this);
	GAME.Event.on('resourceDownload', ResDownload);
	GAME.Image.on('preLoad', ResLoad);
	GAME.Audio.on('preLoad', ResLoad);
	GAME.Image.on('loaded', ResLoad);
	GAME.Audio.on('loaded', ResLoad);
	GAME.Event.once(endEvent, function() {
		GAME.Event.off('loging', Loging);
		GAME.Event.off('resourceDownload', ResDownload);
		GAME.Image.off('preLoad', ResLoad);
		GAME.Audio.off('preLoad', ResLoad);
		GAME.Image.off('loaded', ResLoad);
		GAME.Audio.off('loaded', ResLoad);
	});
	return endEvent;
}
