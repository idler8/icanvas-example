import * as Wxgame from '@icanvas/core-wxgame';
function LoaderFactory() {
	if (ENV.input.target != 'wxgame') return;
	let FileManager = wx.getFileSystemManager();
	let Apis = {
		unzip: Wxgame.Vary('unzip', FileManager),
		rmdir: Wxgame.Vary('rmdir', FileManager),
		writeFile: Wxgame.Vary('writeFile', FileManager),
		readFile: Wxgame.Vary('readFile', FileManager),
	};
	function Download(url, loaded) {
		return new Promise((success, fail) => {
			wx.downloadFile({ url, success, fail }).onProgressUpdate(res => loaded(res.progress));
		})
			.then(res => (res.statusCode != 200 ? Promise.reject('文件资源，下载失败') : res.tempFilePath))
			.catch(() => {
				loaded(0);
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
	return function(url, loaded) {
		let encode = encodeURIComponent(url);
		return ReadStorage('resource.json').then(options => {
			if (options.url == url) {
				loaded(100);
				return { assetsUrl: wx.env.USER_DATA_PATH + '/' + encode + '/', resourceMap: options.resourceMap };
			}
			return Remove(options.url)
				.then(() => Download(url, loaded))
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
export function Remote(url, loaded) {
	if (ENV.dynamic.assetsUrl && Loader) return Loader(url, loaded);
	loaded(100);
	return Promise.resolve({
		assetsUrl: url,
		resourceMap: ENV.dynamic.resourceMap.remote,
	});
}
export class Progress extends GAME.Event {
	get progress() {
		return this._full ? this._current / this._full : 1;
	}
	constructor(name = '', full, current = 0) {
		super();
		this.name = name;
		this.full = full || 0;
		this.current = current;
	}
	set full(n) {
		this._full = n;
		this.emit('loading');
	}
	set current(n) {
		this._current = n;
		this.emit('loading');
	}
	get current() {
		return this._current;
	}
}
export class Listen extends GAME.Event {
	constructor() {
		super();
		this.loading = null;
		this.progresses = [];
	}
	add(name, full, current = 0) {
		let start = this.progresses.length;
		let progress = new Progress(name, full, current);
		this.progresses.push(progress);
		this.tagNext(start);
		return progress;
	}
	tagNext(start) {
		if (this.loading) return this.loading.emit('loading');
		for (let i = start; i < this.progresses.length; i++) {
			let progress = this.progresses[i];
			if (progress.finish) continue;
			this.loading = progress;
			progress.on('loading', () => this.emit('loading', progress));
			progress.once('finish', () => {
				this.loading = null;
				progress.finish = true;
				progress.off('loading');
				this.tagNext(i);
			});
		}
	}
	extendLoading(progress) {
		this.emit('loading', progress);
	}
	extend(load) {
		this.on('loading', this.extendLoading, load);
		load.once('destroy', () => this.off('loading', this.extendLoading, load));
		if (this.loading) this.loading.emit('loading', this.loading);
	}
	destroy() {
		this.off('loading');
		this.loading = null;
		this.progresses.length = 0;
		this.emit('finish');
	}
}
