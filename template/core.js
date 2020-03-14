import WxgameFolyfill from '@icanvas/core-wxgame';
import axios from 'axios';
if (ENV.target == 'wxgame') WxgameFolyfill();
if (ENV.target == 'web' || ENV.target == 'serve') document.mainCanvas = document.body.appendChild(document.createElement('canvas'));
function ListenTouch(touch) {
	if (ENV.target == 'wxgame') {
		addEventListener('touchstart', e => touch.start(e), { passive: true });
		addEventListener('touchmove', e => touch.move(e), { passive: true });
		addEventListener('touchend', e => touch.end(e), { passive: true });
		addEventListener('touchcancel', e => touch.end(e), { passive: true });
	}
	if (ENV.target == 'web' || ENV.target == 'serve') {
		if ('ontouchstart' in window) {
			addEventListener('touchstart', e => touch.start(e), { passive: true });
			addEventListener('touchmove', e => touch.move(e), { passive: true });
			addEventListener('touchend', e => touch.end(e), { passive: true });
			addEventListener('touchcancel', e => touch.end(e), { passive: true });
		} else {
			function GetTouchEvent(MouseEvent) {
				return { identifier: 0, changedTouches: [{ clientX: MouseEvent.clientX, clientY: MouseEvent.clientY }] };
			}
			let DownState = false;
			addEventListener('mousedown', e => ((DownState = true), touch.start(GetTouchEvent(e))), { passive: true });
			addEventListener('mousemove', e => DownState && touch.move(GetTouchEvent(e)), { passive: true });
			addEventListener('mouseup', e => DownState && ((DownState = false), touch.end(GetTouchEvent(e))), { passive: true });
			addEventListener('mouseout', e => DownState && ((DownState = false), touch.end(GetTouchEvent(e))), { passive: true });
		}
	}
}
import * as Core from '@icanvas/core';
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
app.sys = {}; //系统基础信息
if (ENV.target == 'wxgame') {
	let sysinfo = wx.getSystemInfoSync();
	app.sys.pixel = sysinfo.pixelRatio;
	app.sys.width = sysinfo.screenWidth;
	app.sys.height = sysinfo.screenHeight;
}
if (ENV.target == 'web' || ENV.target == 'serve') {
	app.sys.pixel = window.devicePixelRatio || 2;
	app.sys.width = document.body.clientWidth;
	app.sys.height = document.body.clientHeight;
}

app.canvas = type => (type == 'main' ? document.mainCanvas : document.createElement('canvas')); //获取Canvas函数
app.context = app.canvas('main').getContext(ENV.webgl ? 'webgl' : '2d');
app.render = ENV.webgl ? Core.WebGLRender : Core.CanvasRender;
if (ENV.target == 'wxgame') app.req = GameGlobal.axios; //网络请求
if (ENV.target == 'web' || ENV.target == 'serve') app.req = axios; //网络请求

app.random = Core.Random; //随机函数
app.time = new Core.Time(); //Date格式化工具
app.image = new Core.ImageLoader(); //图片控制
app.audio = new Core.AudioLoader(); //声音控制
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
	ListenTouch(app.touch);
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
	let renderArray = [];
	app.clock.on('tick', () => {
		app.dirty.tick();
		app.render(app.stage.pushTo(renderArray), app.context, app.dirty);
		app.dirty.dispose(app.context);
		renderArray.length = 0;
	});
	app.clock.run(interval || 1000 / 60); //开始按60帧刷新
	app.run = () => console.log('无法多次初始化'); //销毁app.run函数
};

//后续调试设置
import Stat from 'stats-js';
if (ENV.mode == 'development') {
	if (ENV.target == 'wxgame') {
		// GameGlobal.ENV = ENV;
		GameGlobal.GAME = GAME;
		GameGlobal.app = app;
	}
	if (ENV.target == 'web' || ENV.target == 'serve') {
		document.body.style.background = 'green';
		if (ENV.mode == 'development') {
			let stat = new Stat();
			document.body.appendChild(stat.dom);
			app.clock.on('start', () => stat.begin());
			app.clock.on('end', () => stat.end());
			// window.ENV = ENV;
			window.GAME = GAME;
			window.app = app;
		}
	}
}
export { GAME, app };
