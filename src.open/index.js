//挂载组件生成器
import '../plugins/components/sprite.js';
import '../plugins/components/scroll.js';
import '../plugins/components/text.js';
// import '../plugins/components/cache.js';
//载入项目配置
import Shared from '../plugins/shared.js';
app.shared = new Shared();
// import boardScene from './scenes/board.js';
// import beforeScene from './scenes/before.js';
// import rangeScene from './scenes/range.js';
// app.stage.set(boardScene, beforeScene, rangeScene);

// app.resize(750); //初始化渲染器

var Current = Promise.resolve(); //生成队列
wx.onMessage(data => {
	//进行队列处理
	Current = Current.then(() => {
		console.log('开放域收到信息', data);
		return app.shared.Receive(data);
	}).catch(e => console.error(e) || Promise.resolve());
});
