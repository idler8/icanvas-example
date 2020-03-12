import * as Core from '../icanvas/index.js';
import * as Wxgame from '../icanvas-wxgame/index.js';

const GAME = {};
GAME.Shape = Core.Shape; //形状
GAME.Transform = Core.Transform; //变形
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
app.random = Core.Random; //随机函数
GAME.Clock = Core.Clock; //进程时钟类
GAME.Event = Core.Event; //事件类
GAME.Container = Core.Container; //容器组件
GAME.Sprite = Core.Sprite; //图片精灵组件
// import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
// TweenLite.defaultEase = Linear.easeNone;
// GAME.TWEEN = TimelineMax;
/**
 * 运行实例
 */
let app = new Core.Application({
	render: new Core.CanvasRender({ canvas: Wxgame.Canvas('main') }), //主渲染器
	sys: Wxgame.System(), //系统信息
	canvas: Wxgame.Canvas, //获取Canvas函数
	// req: Wxgame.Request(), //网络请求
	image: new Core.Image(new Wxgame.Image()), //图片控制
	// audio: new Core.Audio(new Wxgame.Audio()), //声音控制
	shape: new Core.Shape(),
	resize(x, y) {
		y = y || (x / app.sys.width) * app.sys.height;
		app.render.canvas.width = x;
		app.render.canvas.height = y;
		app.touch.size.set(x / app.sys.width, y / app.sys.height); //触摸控制
		app.touch.offset.set(app.sys.width / 2, app.sys.height / 2);
		app.look(x, y);
		app.stage.size.set(x, y);
	},
	sprite(texture, options = {}) {
		options.texture = typeof texture == 'string' ? app.image.get(texture) : texture;
		return new GAME.Sprite(options);
	},
	text(font = {}, options = {}) {
		//TODO 2D，文本，单行文字
		let texture = new Core.CanvasTexture(app.canvas().getContext('2d'));
		let sprite = new GAME.Sprite(options);
		sprite.text = new Core.RichText(texture.context, font);
		sprite.text.update = () => (sprite.texture = texture.refresh());
		sprite.text.value = font.value;
		return sprite;
	},
	scroll(container, options = {}) {
		let scroll = new GAME.Container(options);
		
		scroll.container = container;
		return scroll;
	},
});
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
