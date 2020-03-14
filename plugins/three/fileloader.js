import { UtilVary } from '@icanvas/core-wxgame';
export default function FileLoaderFactory(THREE) {
	if (ENV.target != 'wxgame') return;
	var loading = {};
	let ReadFile = UtilVary('readFile', wx.getFileSystemManager());
	return class FileLoader extends THREE.Loader {
		load(url, onLoad, onProgress, onError) {
			if (url === undefined) url = '';
			if (this.path !== undefined) url = this.path + url;
			url = this.manager.resolveURL(url);
			if (loading[url] !== undefined) {
				loading[url].push({
					onLoad: onLoad,
					onProgress: onProgress,
					onError: onError,
				});
				return;
			}
			var callbacks = (loading[url] = []);
			loading[url].push({
				onLoad: onLoad,
				onProgress: onProgress,
				onError: onError,
			});
			console.log('response', url);
			ReadFile({ filePath: url, encoding: 'utf8' })
				.then(res => res.data)
				.then(response => {
					console.log('response', response);
					delete loading[url];
					for (var i = 0, il = callbacks.length; i < il; i++) {
						var callback = callbacks[i];
						if (callback.onLoad) callback.onLoad(response);
					}
					this.manager.itemEnd(url);
				})
				.catch(e => {
					console.log('response', e);
					delete loading[url];
					for (var i = 0, il = callbacks.length; i < il; i++) {
						var callback = callbacks[i];
						if (callback.onError) callback.onError(event);
					}
					this.manager.itemError(url);
					this.manager.itemEnd(url);
				});
			this.manager.itemStart(url);
		}
	};
}
