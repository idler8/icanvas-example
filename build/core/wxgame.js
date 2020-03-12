import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
//配置全局引用
const GAME = {};
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
GAME.Clock = Core.Clock; //进程时钟类
GAME.Event = Core.Event; //事件类
GAME.Container = Core.Container; //容器组件
GAME.Sprite = Core.Sprite; //图片精灵组件
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;
//配置运行实例
let app = {};
app.sys = Wxgame.System(); //系统基础信息
app.canvas = Wxgame.Canvas; //获取Canvas函数
app.context = app.canvas('main').getContext(ENV.input.webgl ? 'webgl' : '2d');
app.render = ENV.input.webgl ? Core.WebGLRender : Core.CanvasRender;
app.req = Wxgame.Request(); //网络请求
app.random = Core.Random; //随机函数
app.time = new Core.Time(); //Date格式化工具
app.image = new Core.Image(new Wxgame.Image()); //图片控制
app.audio = new Core.Audio(new Wxgame.Audio()); //声音控制
app.touch = new Core.Touch(); //界面触摸
app.collision = new Core.Collision(); //碰撞比对
app.clock = new Core.Clock(); //全局时钟
app.stage = new Core.Director(); //全局容器
app.dirty = new Core.Dirty(600); //脏检查器

app.run = function(options) {
	let { width, height, interval } = options;
	//设置场景大小和视角
	if (!height) height = (width / app.sys.width) * app.sys.height;
	app.stage.width = app.context.canvas.width = width;
	app.stage.height = app.context.canvas.height = height;
	app.touch.size.set(width / app.sys.width, height / app.sys.height); //触摸控制
	Wxgame.Touch()(app.touch);
	app.touch.on('touchEnd', touch => {
		if (touch.long > 200 || touch.distance > 12) return;
		let vector = touch.clone().multiplyMatrix4(app.stage.matrix);
		app.collision.Recursive(app.stage, vector);
	});
	//开始渲染流程
	if (ENV.input.webgl) {
		app.stage.matrix.setOrtho(0, width, height, 0, 0, 1);
		app.context.viewport(0, 0, width, height);
		let gl = app.context;
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		gl.shader = new Core.WebGLShader(gl);
		gl.useProgram(gl.shader.program);
	}
	app.clock.on('tick', () => {
		app.dirty.tick();
		let renderArray = [];
		app.stage.pushTo(renderArray);
		for (let i = 0, len = renderArray.length; i < len; i++) {
			app.render(renderArray[i], app.context, app.dirty);
		}
		app.dirty.dispose(app.context);
	});
	app.clock.run(interval || 1000 / 60); //开始按60帧刷新
	app.run = () => console.log('无法多次初始化'); //销毁app.run函数
};

//后续调试设置
if (ENV.input.mode == 'development') {
	GameGlobal.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	GameGlobal.GAME = GAME;
	GameGlobal.app = app;
}
export { GAME, app };
