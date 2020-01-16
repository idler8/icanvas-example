import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
const GAME = {};
/**
 * 可继承类
 */
GAME.Canvas = Wxgame.Canvas; //获取Canvas
GAME.System = Wxgame.System(); //获取系统信息
// GAME.Req = Wxgame.Request(); //Request请求功能
GAME.Vector = Core.Vector; //多维向量
GAME.Vector2 = Core.Vector2; //三维向量
GAME.Vector3 = Core.Vector3; //三维向量
GAME.Matrix4 = Core.Matrix4; //三维矩阵
// GAME.Random = Core.Random; //随机函数
// GAME.Time = Core.Time; //时间格式化
// GAME.Clock = Core.Clock; //进程时钟类
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
			if (line.updateFamily) GAME.Text.test.font = handle.size + 'px ' + handle.family;
			let width = GAME.Text.test.measureText(value).width;
			if (this.wrapWidth >= 0 && line.width + width > this.wrapWidth) return false;
			if (this.autoLineHeight && handle.size > line.height) line.height = handle.size;
			if (line.updateFamily) {
				let sprite = new Core.TextGroup(handle.size + 'px ' + handle.family, handle.fillStyle).setPosition(line.width, 0).setSize(width, handle.size);
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
};
// import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
// TweenLite.defaultEase = Linear.easeNone;
// GAME.TWEEN = TimelineMax;
/**
 * 运行实例
 */
let ImageLoader = Wxgame.ImageControlFactory(Core.Loader);
let Texture = Core.TextureFactory(false);
GAME.Render = new Core.CanvasRender({ canvas: GAME.Canvas('main') }); //主渲染器
let ImageTexture = Core.ImageTextureFactory(Texture);
GAME.Image = new (Core.TextureControlFactory(ImageLoader, ImageTexture))(); //图片(纹理)控制器

// GAME.Audio = new (Wxgame.AudioControlFactory(Core.Loader))(); //音频控制器

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
	GAME.Director.size.set(x, y); //主场景缩放
	GAME.Touch.size.set(x / offsetWidth, y / offsetHeight); //触摸控制
	GAME.Touch.offset.x = offsetWidth / 2;
	GAME.Touch.offset.y = offsetHeight / 2;
	GAME.Director.look(new GAME.Matrix4().translate(x / 2, y / 2));
};

//导演实例
GAME.Director = new Core.Director();
//开始循环渲染界面
GAME.Render.update = function() {
	GAME.Director.preUpdate(GAME.Render);
	GAME.Render.update();
};
if (ENV.input.mode == 'development') {
	GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	console.log(GAME);
}
export default GAME;
