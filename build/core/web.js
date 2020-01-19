import * as Core from '@icanvas/core';
import * as Web from '@icanvas/core-web';
import axios from 'axios';
const GAME = {};
/**
 * 可继承类
 */
GAME.Canvas = Web.Canvas; //获取Canvas
GAME.System = Web.System(); //获取系统信息
GAME.Req = axios; //Request请求功能
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
GAME.Random = Core.Random; //随机函数
GAME.Time = Core.Time; //时间格式化
GAME.Clock = Core.Clock; //进程时钟类
GAME.Event = Core.Event; //事件类
//容器组件
GAME.Container = Core.Container;
//精灵组件
GAME.Sprite = class Sprite extends Core.Sprite {
	setTexture(texture) {
		return super.setTexture(typeof texture == 'string' ? GAME.Image.get(texture) : texture);
	}
};
//文本组件
GAME.Text = class Text extends Core.Text {
	static defaultFont = { family: '微软雅黑', size: 36, weight: '' };
	defaultFont(font) {
		return Object.assign({}, Text.defaultFont, font);
	}
	get allFontSplit() {
		return ENV.input.webgl ? true : false;
	}
	get precision() {
		return ENV.input.webgl ? 36 : 0;
	}
	getElement(needSplit, value, option, needSprite) {
		if (needSprite) return ENV.input.webgl || !value ? new GAME.Sprite(needSplit, option) : new Core.TextElement(value, option);
		//TODO 动态增加字体
		if (needSplit) GAME.Font.update(this.precision || option.size + 'px ' + option.family + (option.weight ? ' bold' : ''));
		return GAME.Font.get(value, option.size);
	}
};
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;
/**
 * 运行实例
 */
GAME.Image = new (Core.TextureControlFactory(Web.ImageControlFactory(Core.Loader), Core.BaseTexture))(); //图片(纹理)控制器
if (ENV.input.webgl) {
	GAME.Render = new Core.WebGLRender({ canvas: GAME.Canvas('main') }); //主渲染器
	GAME.Font = new (Core.FontControlFactory(() => GAME.Canvas(2048, 2048), Core.FontTexture))('36px 微软雅黑', '36px 微软雅黑 bold'); //字体（纹理）控制器
} else {
	GAME.Render = new Core.CanvasRender({ canvas: GAME.Canvas('main') }); //主渲染器
	GAME.Font = {
		test: GAME.Canvas().getContext('2d'),
		update(family) {
			this.test.font = family;
		},
		get(value, size) {
			let text = this.test.measureText(value);
			text.size = size;
			return text;
		},
	};
}
GAME.Audio = new (Web.AudioControlFactory(Core.Loader))(); //音频控制器

GAME.Collision = new Core.Collision(); //碰撞检测机制
GAME.Touch = new Core.Touch(); //触摸整合实例
Web.Touch(!('ontouchstart' in window))(GAME.Touch);
//触摸交互监听
GAME.Touch.on('touchEnd', touch => {
	if (touch.long > 200 || touch.distance > 12) return;
	GAME.Collision.Recursive(GAME.Director, GAME.Director.getWorldVector(touch, true));
});

GAME.SetSize = function(x, y) {
	let offset = Web.GetMainCanvasOffset(GAME.Render.canvas, GAME.System.width, GAME.System.height);
	y = y || x / offset.ratio;
	GAME.Render.canvas.width = x;
	GAME.Render.canvas.height = y;
	GAME.Director.size.set(x, y); //主场景缩放
	GAME.Touch.size.set(x / offset.width, y / offset.height); //触摸控制
	GAME.Touch.offset.set(offset.x + offset.width / 2, offset.y + offset.height / 2);
	if (ENV.input.webgl) {
		GAME.Director.look(new GAME.Matrix4().setOrtho(-x / 2, x / 2, y / 2, -y / 2, 0, 1));
		GAME.Render.gl.viewport(0, 0, x, y);
	} else {
		GAME.Director.look(new GAME.Matrix4().translate(x / 2, y / 2));
	}
};

//导演实例
GAME.Director = new Core.Director();
//开始循环渲染界面
GAME.Render.Clock = new GAME.Clock().on('tick', () => (GAME.Director.preUpdate(GAME.Render), GAME.Render.update()));
GAME.Render.Clock.run(1000 / 60);

//后续调试设置
document.body.style.background = 'green';
import Stat from 'stats-js';
if (ENV.input.mode == 'development') {
	let stat = new Stat();
	document.body.appendChild(stat.dom);
	GAME.Render.Clock.on('start', function() {
		stat.begin();
	});
	GAME.Render.Clock.on('end', function() {
		stat.end();
	});
}
if (ENV.input.mode == 'development') {
	GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	window.GAME = GAME;
}
export default GAME;
