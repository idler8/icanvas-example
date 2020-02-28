//载入项目配置
import Shared from './scripts/shared.js';
app.shared = new Shared();

app.resize(750); //初始化渲染器

var Current = Promise.resolve(); //生成队列
wx.onMessage(data => {
	//进行队列处理
	Current = Current.then(() => {
		console.log('开放域收到信息', data);
		return app.shared.Receive(data);
	}).catch(e => console.error(e) || Promise.resolve());
});
