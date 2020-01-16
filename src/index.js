// 全局数据库
import Database from './scripts/database.js';
GAME.Data = new Database('global_' + ENV.input.mode);
// 游戏设置
GAME.Data.Map('Setting').Merge({ Audio: true, Shock: true });
//开放域
// import Shared from './scripts/wechat/shared.js';
// GAME.Shared = Shared.SetSize(750, 750 / GAME.System.ratio);
//载入场景
import LoadScene from './scenes/load.js';
import HomeScene from './scenes/home.js';
import PlayScene from './scenes/play.js';
GAME.Director.setScenes({ Load: LoadScene, Home: HomeScene, Play: PlayScene });
//初始化项目
GAME.SetSize(750, (750 / GAME.System.width) * GAME.System.height); //初始化渲染器并按60帧刷新

//初始化资源加载监听器
import * as Loader from './scripts/loader.js';
let ResLoader = new Loader.Listen();
//运行流程
Promise.all([
	Promise.all([
		GAME.Image.preLoad(GAME.Image.loadMap(ENV.dynamic.resourceMap.local, 'resource/local/', '', ['png', 'jpg'])), //载入本地图片
		GAME.Data.Map('Setting')
			.GetStorage(true)
			.then(() => (GAME.Audio.mute = !GAME.Data.Map('Setting').Get('Audio'))), //读取声音配置
	]).then(() => GAME.Director.Go('Load', ResLoader)),
	Promise.resolve(ResLoader.add('资源包下载', 100))
		.then(DownloadLoader => Loader.Remote(ENV.dynamic.assetsUrl || 'resource/remote', progress => (DownloadLoader.current = progress)))
		.then(res => {
			console.log('得到远程资源路径', res);
			// GAME.Shared.Send({ resource: GAME.Image.loadMap(res.resourceMap.rank, res.assetsUrl + '/rank/', '', ['png', 'jpg']) });
			let images = GAME.Image.loadMap(res.resourceMap, res.assetsUrl + '/', '', ['png', 'jpg']);
			let ImageLoader = ResLoader.add('图片预读', Object.keys(images).length);
			let audios = GAME.Audio.loadMap(res.resourceMap.audio, res.assetsUrl + '/audio/', '', ['mp3']);
			let AudioLoader = ResLoader.add('音频加载', Object.keys(audios).length);
			return Promise.all([GAME.Image.preLoad(images, '', () => ImageLoader.current++), GAME.Audio.preLoad(audios, '', () => AudioLoader.current++)]);
		})
		.then(() => {
			GAME.Image.SetClip('play/Common', 'button', 121, 7.3, 37, 21.7);
		}),
	// Promise.resolve().then(() => (ResLoader.add('登陆', 5, 0).current = 5)), //用户登陆
])
	.then(() => ResLoader.destroy())
	.then(() => GAME.Director.Go('Home')) //显示主要界面
	.catch(e => {
		//载入出错
		console.error(e);
		// GAME.Ald.UploadError('载入失败', e);
	});
