import * as Core from '@icanvas/core';
import Eventemitter3 from 'eventemitter3';

Core.ComponentBase.Texture = Core.ComponentTexture;
Core.ComponentBase.Text = Core.ComponentText;
Core.ComponentBase.Scroll = Core.ComponentScroll;

Core.ComponentText.Context = Core.ApiWxgameCanvas('test').getContext('2d');
Core.ComponentScroll.GetCanvas = Core.ApiWxgameCanvas;
class Director extends Core.ComponentBase {
	// Actors = {}; //演员
	Scenes = {}; //场景
	// Directors = {}; //子导演
	CurrentScene = null; //当前场景
	GoScene(Type) {
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
	Api = { System: Core.ApiWxgameSystem(), Canvas: Core.ApiWxgameCanvas, Storage: Core.ApiWxgameStorage };
	Component = Core.ComponentBase;
	Maths = { Vector2: Core.MathVector2 };
	Event = new Eventemitter3();
	Pos = new Core.MathPosition();
	Image = new Core.ResourceWxgameImage();
	Options = {};

	Context = Core.ApiWxgameCanvas('shared').getContext('2d');
	Clock = new Core.MathClock();
	Render = new Core.UtilRender();
	Touch = new Core.UtilTouch(new Core.MathVector2(), new Core.MathVector2());
	Collsion = new Core.UtilCollsion(new Core.MathMatrix3(), new Core.MathVector2());
	Director = new Director();

	constructor() {
		Object.assign(this.Context.prototype || this.Context.__proto__, Core.UtilCanvas);
		Core.UtilCanvas.Image.GetImage = Core.ComponentTexture.GetImage = image => {
			return typeof image == 'object' ? image : this.Image.get(image);
		};
		['setUserCloudStorage', 'getFriendCloudStorage', 'getUserInfo'].forEach(api => {
			this.Api[api] = (args, key) => new Promise((success, fail) => wx[api](Object.assign({ success, fail }, key ? { [key]: args } : args)));
		});
		wx.onTouchStart(e => this.Touch.onTouchStart(e));
		wx.onTouchMove(e => this.Touch.onTouchMove(e));
		wx.onTouchEnd(e => this.Touch.onTouchEnd(e));
		wx.onTouchCancel(e => this.Touch.onTouchEnd(e));
	}
	SetSize(x, y) {
		this.Pos.width = x;
		this.Pos.height = y;
		// this.Context.canvas.width = x;
		// this.Context.canvas.height = y;
		this.Touch.Size.setTo(x / this.Api.System.width, y / this.Api.System.height);
		return this;
	}
	Run(Stage) {
		this.Clock.reset(Interval);
		let HandleUpdate = t => {
			requestAnimationFrame(HandleUpdate);
			if (!this.Clock.step()) return;
			this.Render.Update(Stage, this.Context);
			if (Callback) Callback(t);
		};
		HandleUpdate();
		return this;
	}
}
export default new GAME();
