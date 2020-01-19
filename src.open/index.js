//载入项目配置
import Shared from './scripts/shared.js';
GAME.Shared = new Shared();
//载入场景
import BoardSence from './scenes/board.js';
import BeforeSence from './scenes/before.js';
import RangeSence from './scenes/range.js';
GAME.Director.setScenes({
	None: null,
	Null: null,
	Board: BoardSence,
	Before: BeforeSence,
	Range: RangeSence,
});
GAME.Director.Switch = Type => {
	GAME.Director.Go(Type);
	GAME.Event.emit('draw');
};
GAME.SetSize(750, 750 / GAME.Api.System.ratio); //初始化渲染器

var Current = Promise.resolve(); //生成队列
wx.onMessage(data => {
	//进行队列处理
	Current = Current.then(() => {
		console.log('开放域收到信息', data);
		return GAME.Shared.Receive(data);
	}).catch(e => console.error(e) || Promise.resolve());
});
