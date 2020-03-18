//挂载组件生成器
import '../plugins/components/core/sprite.js';
import '../plugins/components/core/scroll.js';
import '../plugins/components/core/text.js';
// import '../plugins/components/core/cache.js';
// 挂载场景
import loadScene from './scenes/load.js';
import homeScene from './scenes/home.js';
app.stage.set('Load', loadScene);
app.stage.set('Home', homeScene);
// 全局数据库预设配置
import Database from '../plugins/database.js';
app.data = new Database('global_' + ENV.mode);
app.data.Map('Setting').Merge({ Audio: true, Shock: true });
//开放域加载
import Shared from '../plugins/components/shared.js';
if (ENV.target == 'wxgame') app.shared = Shared();
//初始化项目
app.run({ width: 750, interval: 1000 / 60 });

//初始化资源加载监听器
import * as Loader from '../plugins/loader.js';
let ResLoader = new Loader.Listen();
//运行流程
Promise.all([
	Promise.all([
		app.image.loads(Loader.loadMap(ENV.resource.local, 'resource/local/', '', ['png', 'jpg'])), //载入本地图片
		app.data
			.Map('Setting')
			.GetStorage(true)
			.then(() => (app.audio.muted = !app.data.Map('Setting').Get('Audio'))), //读取声音配置
	]).then(() => app.stage.go(new loadScene(ResLoader))),
	Promise.resolve(ResLoader.add('资源包下载', 100))
		.then(DownloadLoader => Loader.Remote(ENV.assetsUrl || 'resource/remote', progress => (DownloadLoader.current = progress)))
		.then(res => {
			console.log('得到远程资源路径', res);
			let images = Loader.loadMap(res.resourceMap, res.assetsUrl + '/', '', ['png', 'jpg']);
			let ImageLoader = ResLoader.add('图片预读', Object.keys(images).length);
			let audios = Loader.loadMap(res.resourceMap.audio, res.assetsUrl + '/audio/', '', ['mp3']);
			let AudioLoader = ResLoader.add('音频加载', Object.keys(audios).length);
			return Promise.all([app.image.loads(images, '', () => ImageLoader.current++), app.audio.loads(audios, '', () => AudioLoader.current++)]);
		})
		.then(() => {
			app.image.get('play/Common').sprite = {
				button: { x: 121, y: 7.3, width: 37, height: 21.7 },
			};
		}),
	// Promise.resolve().then(() => (ResLoader.add('登陆', 5, 0).current = 5)), //用户登陆
])
	.then(() => ResLoader.destroy())
	.then(() => app.stage.go('Home')) //显示主要界面
	.catch(e => {
		//载入出错
		console.error(e);
		// GAME.Ald.UploadError('载入失败', e);
	});
