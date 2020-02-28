// 全局数据库
import Database from './scripts/database.js';
GAME.Data = new Database('global_' + ENV.input.mode);
// 游戏设置
GAME.Data.Map('Setting').Merge({ Audio: true, Shock: true });
//开放域
// import Shared from './scripts/wechat/shared.js';
// GAME.Shared = Shared.SetSize(750, 750 / GAME.System.ratio);
//载入场景
//初始化项目
app.resize(750); //设置场景大小
app.clock.run(1000 / 60); //按60帧刷新

import loadScene from './scenes/load.js';
import homeScene from './scenes/home.js';
//初始化资源加载监听器
import * as Loader from './scripts/loader.js';
let ResLoader = new Loader.Listen();
//运行流程
Promise.all([
	Promise.all([
		app.image.loads(Loader.loadMap(ENV.dynamic.resource.local, 'resource/local/', '', ['png', 'jpg'])), //载入本地图片
		GAME.Data.Map('Setting')
			.GetStorage(true)
			.then(() => (app.audio.mute = !GAME.Data.Map('Setting').Get('Audio'))), //读取声音配置
	]),
	// .then(() => app.go(new loadScene(ResLoader))),
	Promise.resolve(ResLoader.add('资源包下载', 100))
		.then(DownloadLoader => Loader.Remote(ENV.dynamic.assetsUrl || 'resource/remote', progress => (DownloadLoader.current = progress)))
		.then(res => {
			console.log('得到远程资源路径', res);
			// GAME.Shared.Send({ resource: GAME.Image.loadMap(res.resourceMap.rank, res.assetsUrl + '/rank/', '', ['png', 'jpg']) });
			let images = Loader.loadMap(res.resourceMap, res.assetsUrl + '/', '', ['png', 'jpg']);
			let ImageLoader = ResLoader.add('图片预读', Object.keys(images).length);
			let audios = Loader.loadMap(res.resourceMap.audio, res.assetsUrl + '/audio/', '', ['mp3']);
			let AudioLoader = ResLoader.add('音频加载', Object.keys(audios).length);
			return Promise.all([app.image.loads(images, '', () => ImageLoader.current++), app.audio.loads(audios, '', () => AudioLoader.current++)]);
		})
		.then(() => {
			app.image.sprite('play/Common', 'button', 121, 7.3, 37, 21.7);
		}),
	// Promise.resolve().then(() => (ResLoader.add('登陆', 5, 0).current = 5)), //用户登陆
])
	.then(() => ResLoader.destroy())
	.then(() => app.go(new homeScene())) //显示主要界面
	.catch(e => {
		//载入出错
		console.error(e);
		// GAME.Ald.UploadError('载入失败', e);
	});
