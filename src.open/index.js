//挂载组件生成器
import '../scripts/components/sprite.js';
import '../scripts/components/scroll.js';
import '../scripts/components/text.js';
// import '../scripts/components/cache.js';
//载入项目配置
import Shared from './scripts/shared.js';
app.shared = new Shared();

app.run({ width: 750 });

var Current = Promise.resolve(); //生成队列
wx.onMessage(data => {
	//进行队列处理
	Current = Current.then(() => {
		console.log('开放域收到信息', data);
		return app.shared.Receive(data);
	}).catch(e => console.error(e) || Promise.resolve());
});
