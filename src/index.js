// 全局数据库
import Database from './scripts/database.js';
GAME.Data = new Database('global_' + ENV.input.mode);
// 游戏设置
GAME.Data.Map('Setting').Set({ Audio: true, Shock: true });
// TODO 游戏圈、Banner、更多游戏
import * as Native from './scripts/native.js';
GAME.Native = Native;
GAME.Native.Shared.SetSize(750, 750 / GAME.Api.System.ratio);
//载入场景
import LoadScene from './scenes/load.js';
import HomeScene from './scenes/home.js';
import PlayScene from './scenes/play.js';
GAME.Director.setScenes({ Load: LoadScene, Home: HomeScene, Play: PlayScene });
//初始化项目
GAME.SetSize(750, 750 / GAME.Api.System.ratio).Run(GAME.Director, 1000 / 60); //初始化渲染器并按60帧刷新
GAME.Touch.on('touchEnd', touch => {
	if (touch.endTime - touch.startTime > 200) return;
	if (Math.sqrt(Math.pow(touch.startX - touch.endX, 2) + Math.pow(touch.startY - touch.endY, 2)) > 12) return;
	GAME.Collsion.Recursive(GAME.Director, { x: touch.endX, y: touch.endY });
});
//初始化资源加载监听器
import * as Loader from './scripts/loader.js';
Loader.Listen();
//运行流程
Promise.all([
	Promise.all([
		GAME.Image.preLoad(GAME.Utils.LoadMap(ENV.dynamic.resourceMap.local, 'resource/local/', '', ['png', 'jpg'])), //载入本地图片
		GAME.Data.Map('Setting')
			.GetStorage(true)
			.then(() => (GAME.Audio.mute = !GAME.Data.Map('Setting').Get('Audio'))), //读取声音配置
	]).then(() => GAME.Director.Go('Load')),
	Loader.Remote(ENV.dynamic.assetsUrl || 'resource/remote').then(res => {
		console.log('得到远程资源路径', res);
		GAME.Native.Shared.Send({ resource: GAME.Utils.LoadMap(res.resourceMap.rank, res.assetsUrl + '/rank/', '', ['png', 'jpg']) });
		return Promise.all([
			GAME.Image.preLoad(GAME.Utils.LoadMap(res.resourceMap, res.assetsUrl + '/', '', ['png', 'jpg'])), //载入远程图片
			GAME.Audio.preLoad(GAME.Utils.LoadMap(res.resourceMap.audio, res.assetsUrl + '/audio/', '', ['mp3'])), //载入远程音频
		]);
	}),
	Promise.resolve(), //用户登陆
])
	.then(() => GAME.Director.Go('Home')) //显示主要界面
	.catch(e => {
		//载入出错
		console.error(e);
		// GAME.Ald.UploadError('载入失败', e);
	});
