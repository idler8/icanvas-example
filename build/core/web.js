import * as Core from '@icanvas/core';
import * as Web from '@icanvas/core-web';
const GAME = {};

GAME.Api = {};
GAME.Api.Canvas = Web.ApiCanvas;
GAME.Api.Context = key => GAME.Api.Canvas(key).getContext('2d');
GAME.Api.System = Web.ApiSystem();
import axios from 'axios';
GAME.Api.Req = axios;
GAME.Api.Font = Web.ApiFont;

GAME.Math = {};
GAME.Math.Array = Core.MathArray;
GAME.Math.Vector = Core.MathVector;
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

GAME.Audio = new (Web.ResourceAudio(Core.UtilLoader))();
GAME.Image = new (Web.ResourceImage(Core.UtilLoader))();
GAME.Pos = new Core.MathPosition();
import Eventemitter3 from 'eventemitter3';
GAME.Event = new Eventemitter3();

GAME.Context = GAME.Api.Context('main');
GAME.Clock = new Core.MathClock();
GAME.Render = new Core.UtilRender();
GAME.Touch = new Core.UtilTouch();
GAME.Collsion = new Core.UtilCollsion();
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;

GAME.SetSize = function(x, y) {
	let offsetWidth = GAME.Api.System.width;
	let offsetLeft = 0;
	let offsetHeight = GAME.Api.System.height;
	let offsetTop = 0;
	let ratio = GAME.Api.System.width / GAME.Api.System.height;
	if (ratio < 0.4) {
		y = (x / 750) * 1334;
		offsetHeight = (GAME.Api.System.width / 750) * 1334;
		offsetTop = (GAME.Api.System.height - offsetHeight) / 2;
	} else if (ratio > 0.8) {
		y = (x / 750) * 1334;
		offsetWidth = (GAME.Api.System.height / 1334) * 750;
		offsetLeft = (GAME.Api.System.width - offsetWidth) / 2;
	}
	GAME.Context.canvas.style.top = offsetTop + 'px';
	GAME.Context.canvas.style.left = offsetLeft + 'px';
	GAME.Context.canvas.style.width = offsetWidth + 'px';
	GAME.Context.canvas.style.height = offsetHeight + 'px';

	GAME.Pos.width = x;
	GAME.Pos.height = y;
	GAME.Context.SetSize(x, y);
	GAME.Touch.Size.setTo(x / offsetWidth, y / GAME.Api.System.height);
	return GAME;
};
GAME.Run = function(Stage, Interval = 1000 / 60) {
	GAME.Clock.reset(Interval);
	let HandleUpdate = t => {
		requestAnimationFrame(HandleUpdate);
		if (!GAME.Clock.step()) return;
		GAME.Render.Update(Stage, GAME.Context);
	};
	HandleUpdate();
	return GAME;
};
document.body.style.background = 'green';
GAME.Context.canvas.style.position = 'absolute';
Object.assign(GAME.Context.prototype || GAME.Context.__proto__, Core.UtilCanvas2D);
Web.ApiTouch(GAME.Context.canvas, GAME.Touch);

if (ENV.input.mode == 'development') {
	GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	window.GAME = GAME;
}

export default GAME;
