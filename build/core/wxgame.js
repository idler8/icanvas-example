import './vivo.js';
import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
const GAME = {};

GAME.Api = {};
GAME.Api.Canvas = Wxgame.ApiCanvas;
GAME.Api.Context = key => GAME.Api.Canvas(key).getContext('2d');
GAME.Api.System = Wxgame.ApiSystem();
GAME.Api.Req = Wxgame.ApiRequest();
GAME.Api.Font = Wxgame.UtilVary('loadFont', wx, 2);
GAME.Api.Login = Wxgame.ApiLogin();

GAME.Math = {};
GAME.Math.Vector2 = Core.MathVector2;
GAME.Math.Matrix3 = Core.MathMatrix3;
GAME.Math.Time = Core.MathTime;
GAME.Math.Random = Core.MathRandom;

GAME.Component = Core.Container();
GAME.Component.Texture = class Sprite extends Core.Sprite(GAME.Component) {
	setTexture(texture) {
		if (!texture) return super.setTexture(null);
		if (typeof texture == 'string') texture = GAME.Image.get(texture);
		return super.setTexture(texture);
	}
};
GAME.Component.Rect = Core.Rect(GAME.Component);
GAME.Component.Text = Core.Text(GAME.Component, GAME.Api.Context());
GAME.Component.Scroll = class Scroll extends Core.Scroll(GAME.Component.Texture, GAME.Api.Context) {
	create() {
		GAME.Touch.on('touchMove', this.touchMove, this);
	}
	destroy() {
		GAME.Touch.off('touchMove', this.touchMove, this);
	}
};
import Director from '../utils/director.js';
GAME.Director = new (Director(GAME.Component))();

GAME.Audio = new (Wxgame.ResourceAudio(Core.UtilLoader))();
GAME.Image = new (Wxgame.ResourceImage(Core.UtilLoader))();
GAME.Pos = new Core.MathPosition();
import Eventemitter3 from 'eventemitter3';
GAME.Event = new Eventemitter3();

GAME.Context = GAME.Api.Canvas('main').getContext('2d');
GAME.Clock = new Core.MathClock();
GAME.Render = new Core.UtilRender();
GAME.Touch = new Core.UtilTouch();
GAME.Collsion = new Core.UtilCollsion();
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;

GAME.SetSize = function(x, y) {
	GAME.Pos.width = x;
	GAME.Pos.height = y;
	GAME.Context.SetSize(x, y);
	GAME.Touch.Size.setTo(x / GAME.Api.System.width, y / GAME.Api.System.height);
	return this;
};
GAME.Run = function(Stage, Interval = 1000 / 60) {
	GAME.Clock.reset(Interval);
	let HandleUpdate = t => {
		requestAnimationFrame(HandleUpdate);
		if (!GAME.Clock.step()) return;
		GAME.Render.Update(Stage, GAME.Context);
	};
	HandleUpdate();
	return this;
};

Object.assign(GAME.Context.prototype || GAME.Context.__proto__, Core.UtilCanvas2D);
Wxgame.ApiTouch(GAME.Touch);
wx.onShow(res => (GAME.Audio.mute = GAME.Audio.mute));
if (ENV.input.mode == 'development') {
	GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	GameGlobal.GAME = GAME;
}
export default GAME;
