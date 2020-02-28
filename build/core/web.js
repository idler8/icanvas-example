import * as Core from '@icanvas/core';
import * as Web from '@icanvas/core-web';
import axios from 'axios';

const GAME = {};
GAME.Shape = Core.Shape; //形状
GAME.Transform = Core.Transform; //变形
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
GAME.Random = Core.Random; //随机函数
GAME.Clock = Core.Clock; //进程时钟类
GAME.Event = Core.Event; //事件类
GAME.Container = Core.Container; //容器组件
GAME.Sprite = Core.Sprite; //图片精灵组件
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;
/**
 * 运行实例
 */
let app = new Core.Application({
	render: ENV.input.webgl ? new Core.WebGLRender({ canvas: Web.Canvas('main') }) : new Core.CanvasRender({ canvas: Web.Canvas('main') }), //主渲染器
	sys: Web.System(), //系统信息
	canvas: Web.Canvas, //获取Canvas函数
	req: axios, //网络请求
	image: new Core.Image(new Web.Image()), //图片控制
	audio: new Core.Audio(new Web.Audio()), //声音控制
	shape: new Core.Shape(),
	resize(x, y) {
		let offset = Web.GetMainCanvasOffset(app.render.canvas, app.sys.width, app.sys.height);
		y = y || x / offset.ratio;
		app.render.canvas.width = x;
		app.render.canvas.height = y;
		app.touch.size.set(x / offset.width, y / offset.height); //触摸控制
		app.touch.offset.set(offset.x + offset.width / 2, offset.y + offset.height / 2);
		app.look(x, y);
		app.shape.size.set(x, y);
	},
	sprite(texture, options = {}) {
		options.texture = typeof texture == 'string' ? app.image.get(texture) : texture;
		return new GAME.Sprite(options);
	},
	text(font = {}, options = {}) {
		let texture = new Core.CanvasTexture(app.canvas().getContext('2d'));
		let sprite = new GAME.Sprite(options);
		sprite.text = new Core.RichText(texture.context, font);
		sprite.text.update = () => (sprite.texture = texture.refresh());
		sprite.text.value = font.value;
		return sprite;
	},
});
Web.Touch(!('ontouchstart' in window))(app.touch);
app.touch.on('touchEnd', touch => {
	if (touch.long > 200 || touch.distance > 12) return;
	let vector = touch.clone().multiplyMatrix4(app.stage.transform.matrix);
	app.collision.Recursive(app.stage, vector);
});

//后续调试设置
document.body.style.background = 'green';
import Stat from 'stats-js';
if (ENV.input.mode == 'development') {
	let stat = new Stat();
	document.body.appendChild(stat.dom);
	app.clock.on('start', () => stat.begin());
	app.clock.on('end', () => stat.end());
	window.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	window.GAME = GAME;
	window.app = app;
}
export { GAME, app };
