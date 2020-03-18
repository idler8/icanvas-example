// import { wxgame as WxgameFolyfill, open as OpenFolyfill } from '../icanvas/core-wxgame/index.js';
import * as Core from '@icanvas/core';
// if (ENV.target == 'wxgame') WxgameFolyfill();
// if (ENV.target == 'wxgame/open') OpenFolyfill();
Core.Polyfill();
//配置全局引用
const GAME = {};
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
GAME.Event = Core.Event; //事件类
GAME.Animation = Core.Animation; //补间动画
GAME.Container = Core.Container; //容器组件
GAME.Sprite = Core.Sprite; //图片精灵组件
//配置运行实例
let app = {};
//界面部分
app.canvas = ENV.target == 'wxgame/open' ? wx.getSharedCanvas() : document.createElement('canvas');
app.context = app.canvas.getContext(ENV.webgl ? 'webgl' : '2d');
app.render = ENV.webgl ? Core.WebGLRender : Core.CanvasRender;
app.dirty = ENV.webgl ? new Core.Dirty(600) : null; //脏检查器
app.stage = new Core.Director(); //全局容器
if (ENV.target != 'wxgame/open') app.req = axios;
let renderArray = [];
app.step = function() {
	if (ENV.webgl) app.dirty.step();
	app.render(app.stage.pushTo(renderArray), app.context, app.dirty);
	if (ENV.webgl) app.dirty.dispose(app.context);
	renderArray.length = 0;
};
//功能部分
app.random = Core.Random; //随机函数
app.image = new Core.ImageLoader(); //图片控制
if (ENV.target != 'wxgame/open') app.audio = new Core.AudioLoader(); //声音控制
app.touch = new Core.Touch(); //界面触摸
app.collision = new Core.Collision(); //碰撞比对
//扩展部分
if (ENV.target == 'web' || ENV.target == 'serve') document.body.appendChild(app.canvas);
if (ENV.target != 'wxgame/open') app.clock = new Core.Clock(); //全局时钟
if (ENV.target == 'web' || ENV.target == 'serve') addEventListener('touchend', () => app.audio.check(), { once: true }); //音频交互限制检查
if (ENV.target == 'wxgame') {
	wx.onShow(() => console.log(1) || app.audio.check());
	wx.onAudioInterruptionEnd(() => console.log(2) || app.audio.check());
}
//开始运行核心
app.run = function(options) {
	if (app.run.finish) return;
	let { width, height, interval } = options;
	//设置场景大小和视角
	if (!height) height = (width / document.body.clientWidth) * document.body.clientHeight;
	app.stage.width = width;
	app.stage.height = height;
	if (ENV.target != 'wxgame/open') app.context.canvas.width = width;
	if (ENV.target != 'wxgame/open') app.context.canvas.height = height;
	app.touch.size.set(width / document.body.clientWidth, height / document.body.clientHeight); //触摸控制
	addEventListener('touchstart', e => app.touch.start(e), { passive: true });
	addEventListener('touchmove', e => app.touch.move(e), { passive: true });
	addEventListener('touchend', e => app.touch.end(e), { passive: true });
	addEventListener('touchcancel', e => app.touch.end(e), { passive: true });
	if ((ENV.target == 'web' || ENV.target == 'serve') && !('ontouchstart' in window)) {
		function GetTouchEvent(MouseEvent) {
			return { identifier: 0, changedTouches: [{ clientX: MouseEvent.clientX, clientY: MouseEvent.clientY }] };
		}
		let DownState = false;
		addEventListener('mousedown', e => ((DownState = true), app.touch.start(GetTouchEvent(e))), { passive: true });
		addEventListener('mousemove', e => DownState && app.touch.move(GetTouchEvent(e)), { passive: true });
		addEventListener('mouseup', e => DownState && ((DownState = false), app.touch.end(GetTouchEvent(e))), { passive: true });
		addEventListener('mouseout', e => DownState && ((DownState = false), app.touch.end(GetTouchEvent(e))), { passive: true });
	}
	app.touch.on('touchEnd', touch => {
		if (touch.long > 200 || touch.distance > 12) return;
		let vector = touch.clone().multiplyMatrix4(app.stage.matrix);
		app.collision.Recursive(app.stage, vector);
	});
	//开始渲染流程
	if (ENV.webgl) {
		app.stage.matrix.setOrtho(0, width, height, 0, 0, 1);
		app.context.viewport(0, 0, width, height);
		let gl = app.context;
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		gl.shader = new Core.WebGLShader(gl);
		gl.useProgram(gl.shader.program);
	}
	if (app.clock) {
		app.clock.on('tick', app.step);
		app.clock.run(interval || 1000 / 60); //开始按60帧刷新
	}
	app.run.finish = true; //标记完成
};
//后续调试设置
import Stat from 'stats-js';
if (ENV.mode == 'development') {
	if (ENV.target == 'wxgame' || ENV.target == 'wxgame/open') {
		GameGlobal.ENV = ENV;
		GameGlobal.GAME = GAME;
		GameGlobal.app = app;
	}
	if (ENV.target == 'web' || ENV.target == 'serve') {
		document.body.style.background = 'green';
		if (ENV.mode == 'development') {
			let stat = new Stat();
			document.body.appendChild(stat.dom);
			app.clock.off('tick');
			let run = app.run;
			app.run = function(options) {
				run(options);
				app.clock.off('tick', app.step);
				app.clock.on('tick', function(e) {
					stat.begin();
					app.step(e);
					stat.end();
				});
			};
			window.ENV = ENV;
			window.GAME = GAME;
			window.app = app;
		}
	}
}
export { GAME, app };
