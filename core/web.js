import * as Core from '@icanvas/core';
import Eventemitter3 from 'eventemitter3';
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
Core.ComponentBase.Texture = Core.ComponentTexture;
Core.ComponentBase.Text = Core.ComponentText;
Core.ComponentBase.Scroll = Core.ComponentScroll;

Core.ComponentText.Context = Core.ApiWebCanvas('test').getContext('2d');
Core.ComponentScroll.GetCanvas = Core.ApiWebCanvas;

class Director extends Core.ComponentBase {
	// Actors = {}; //演员
	Scenes = {}; //场景
	// Directors = {}; //子导演
	CurrentScene = null; //当前场景
	GoScene(Type) {
		console.log('场景切换', Type);
		this.removeChild(this.CurrentScene);
		this.CurrentScene = this.Scenes[Type] ? new this.Scenes[Type]() : null;
		if (this.CurrentScene) this.addChildAt(this.CurrentScene, 0);
		return this;
	}
	Go = this.GoScene;
	setScenes(scenes) {
		Object.assign(this.Scenes, scenes);
		return this;
	}
}

class GAME {
	Api = {
		Canvas: Core.ApiWebCanvas,
		System: Core.ApiWebSystem(),
		Req: new Core.ApiWebRequest(),
		Storage: Core.ApiWebStorage,
		Font: Core.ApiWebFont,
	};
	Component = Core.ComponentBase;
	Math = { Vector2: Core.MathVector2, Time: Core.MathTime, Random: Core.MathRandom, Matrix3: Core.MathMatrix3 };
	Audio = new Core.ResourceWebAudio();
	Image = new Core.ResourceWebImage();
	Event = new Eventemitter3();
	Pos = new Core.MathPosition();
	Utils = { LoadMap: Core.UtilLoaderMap, RMap: Core.UtilRecursiveMap };
	Options = {};

	Context = Core.ApiWebCanvas('main').getContext('2d');
	Clock = new Core.MathClock();
	Render = new Core.UtilRender();
	Touch = new Core.UtilTouch(new Core.MathVector2(), new Core.MathVector2());
	Collsion = new Core.UtilCollsion(new Core.MathMatrix3(), new Core.MathVector2());
	Director = new Director();
	TWEEN = TimelineMax;

	constructor() {
		Object.assign(this.Context.prototype || this.Context.__proto__, Core.UtilCanvas);
		Core.UtilCanvas.Image.GetImage = Core.ComponentTexture.GetImage = image => {
			return typeof image == 'object' ? image : this.Image.get(image);
		};
		Core['ontouchstart' in window ? 'UtilWebTouchListen' : 'UtilWebMouseListen'](this.Context.canvas, this.Touch);
	}
	SetSize(x, y) {
		this.Pos.width = x;
		this.Pos.height = y;
		this.Context.SetSize(x, y);
		this.Touch.Size.setTo(x / this.Api.System.width, y / this.Api.System.height);
		return this;
	}
	Run(Stage, Interval = 1000 / 60) {
		this.Clock.reset(Interval);
		let HandleUpdate = t => {
			requestAnimationFrame(HandleUpdate);
			if (!this.Clock.step()) return;
			this.Render.Update(Stage, this.Context);
		};
		HandleUpdate();
		return this;
	}
}
if (ENV.input.mode == 'development') GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
export default ENV.input.mode == 'development' ? (window.GAME = new GAME()) : new GAME();
