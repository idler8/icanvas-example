import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
const GAME = {};
/**
 * 可继承类
 */
GAME.Canvas = Wxgame.Canvas; //获取Canvas
GAME.System = Wxgame.System(); //获取系统信息
GAME.Req = Wxgame.Request(); //Request请求功能
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
	static test = GAME.Canvas().getContext('2d');
	defaultFont(font) {
		return Object.assign({}, Text.defaultFont, font);
	}
	pushTexture(line, sprite) {
		if (this.wrapWidth >= 0 && line.width + sprite.width > this.wrapWidth) return false;
		sprite.anchorX = -sprite.width / 2;
		sprite.anchorY = -sprite.height / 2;
		if (this.autoLineHeight && sprite.height > line.height) line.height = sprite.height;
		line.textures.push(sprite);
		line.updateFamily = true;
		line.width += sprite.width;
		return true;
	}
	getTexture(line, handle, value, isSpecial) {
		if (!line) return false;
		if (isSpecial) {
			let sprite = new GAME.Sprite(value).setPosition(line.width, 0);
			return this.pushTexture(line, sprite);
		} else {
			if (ENV.input.webgl) {
				let family = '36px ' + handle.family + (handle.weight ? ' bold' : '');
				let font = GAME.Font.get(family, value);
				let sprite = new GAME.Sprite(font).setPosition(line.width, 0);
				sprite.color = handle.fillStyle;
				let mult = handle.size / sprite.texture.baseTexture.size;
				sprite.size.mult(mult, mult);
				return this.pushTexture(line, sprite);
			} else {
				if (line.updateFamily) GAME.Text.test.font = handle.size + 'px ' + handle.family;
				let width = GAME.Text.test.measureText(value).width;
				if (this.wrapWidth >= 0 && line.width + width > this.wrapWidth) return false;
				if (this.autoLineHeight && handle.size > line.height) line.height = handle.size;
				if (line.updateFamily) {
					let sprite = new Core.TextGroup(handle.size + 'px ' + handle.family, handle.fillStyle)
						.setPosition(line.width, 0)
						.setSize(width, handle.size);
					sprite.values = value;
					line.textures.push(sprite);
					line.updateFamily = false;
				} else {
					let sprite = line.textures[line.textures.length - 1];
					sprite.values += value;
					sprite.width += width;
				}
				line.width += width;
				return true;
			}
		}
	}
};
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;
/**
 * 运行实例
 */
let ImageLoader = Wxgame.ImageControlFactory(Core.Loader);
let Texture = Core.TextureFactory(ENV.input.webgl ? true : false);
if (ENV.input.webgl) {
	GAME.Render = new Core.WebGLRender({ canvas: GAME.Canvas('main') }); //主渲染器
	let ImageTexture = Core.ImageTextureFactory(Texture, image => GAME.Render.createTexture(image));
	GAME.Image = new (Core.TextureControlFactory(ImageLoader, ImageTexture))(); //图片(纹理)控制器
	let CanvasTexture = Core.CanvasTextureFactory(ImageTexture);
	let FontTexture = Core.FontTextureFactory(CanvasTexture, Texture);
	GAME.Font = new (Core.FontControlFactory(GAME.Render.gl, () => GAME.Canvas(2048, 2048), FontTexture))('36px 微软雅黑', '36px 微软雅黑 bold'); //字体（纹理）控制器
} else {
	GAME.Render = new Core.CanvasRender({ canvas: GAME.Canvas('main') }); //主渲染器
	let ImageTexture = Core.ImageTextureFactory(Texture);
	GAME.Image = new (Core.TextureControlFactory(ImageLoader, ImageTexture))(); //图片(纹理)控制器
}
GAME.Audio = new (Wxgame.AudioControlFactory(Core.Loader))(); //音频控制器

GAME.Collision = new Core.Collision(); //碰撞检测机制
GAME.Touch = new Core.Touch(); //触摸整合实例
Wxgame.Touch()(GAME.Touch);
//触摸交互监听
GAME.Touch.on('touchEnd', touch => {
	if (touch.long > 200 || touch.distance > 12) return;
	GAME.Collision.Recursive(GAME.Director, GAME.Director.getWorldVector(touch, true));
});

GAME.SetSize = function(x, y) {
	let offsetWidth = GAME.System.width;
	let offsetHeight = GAME.System.height;
	GAME.Render.canvas.width = x;
	GAME.Render.canvas.height = y;
	GAME.Director.size.set(x, y); //主场景缩放
	GAME.Touch.size.set(x / offsetWidth, y / offsetHeight); //触摸控制
	GAME.Touch.offset.x = offsetWidth / 2;
	GAME.Touch.offset.y = offsetHeight / 2;
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

if (ENV.input.mode == 'development') {
	GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	if (window) {
		window.GAME = GAME;
	} else {
		GameGlobal.GAME = GAME;
	}
}
export default GAME;
