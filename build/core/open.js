import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
const GAME = {};
GAME.Shape = Core.Shape; //形状点获取器
GAME.Circle = Core.Circle; //原型点获取器
GAME.Rectangle = Core.Rectangle; //矩形点获取器
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
GAME.Random = Core.Random; //随机函数
GAME.Clock = Core.Clock; //进程时钟类
GAME.Event = Core.Event; //事件类
GAME.Container = Core.Container; //容器组件
GAME.Sprite = Core.Sprite; //图片精灵组件
/**
 * 运行实例
 */
let app = new Core.Application({
	sys: Wxgame.System(), //系统信息
	canvas: Wxgame.Canvas, //获取Canvas函数
	image: new Core.Image(new Wxgame.Image()), //图片控制
	render: new Core.CanvasRender({ canvas: Wxgame.Canvas('shared') }), //主渲染器
	resize(x, y) {
		y = y || (x / app.sys.width) * app.sys.height;
		app.render.canvas.width = x;
		app.render.canvas.height = y;
		app.touch.size.set(x / app.sys.width, y / app.sys.height); //触摸控制
		app.touch.offset.set(app.sys.width / 2, app.sys.height / 2);
		app.look(x, y);
	},
	sprite(texture, options = {}) {
		options.texture = typeof texture == 'string' ? this.image.get(texture) : texture;
		return new GAME.Sprite(options);
	},
});
app.font = new Core.CanvasFontControl(Wxgame.Canvas('main')); //富文本控制器

Wxgame.Touch()(app.touch);
app.touch.on('touchEnd', touch => {
	if (touch.long > 200 || touch.distance > 12) return;
	let vector = touch.clone().multiplyMatrix4(app.stage.transform.matrix);
	app.collision.Recursive(app.stage, vector);
});

//后续调试设置
if (ENV.input.mode == 'development') {
	GameGlobal.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	GameGlobal.GAME = GAME;
	GameGlobal.app = app;
}
export { GAME, app };
