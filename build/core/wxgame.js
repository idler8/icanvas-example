import './vivo.js';
import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
const GAME = {};

GAME.Api = {};
GAME.Api.Canvas = Wxgame.ApiCanvas;
GAME.Api.System = Wxgame.ApiSystem();
GAME.Api.Req = Wxgame.ApiRequest();
GAME.Api.Font = Wxgame.UtilVary('loadFont', wx, 2);
GAME.Api.Login = Wxgame.ApiLogin();

GAME.Math = {};
GAME.Math.Vector2 = Core.MathVector2;
GAME.Math.Matrix3 = Core.MathMatrix3;
GAME.Math.Time = Core.MathTime;
GAME.Math.Random = Core.MathRandom;

import Build from '../utils/classBuild.js';
let BaseProperties = Build(
	Build(Core.ComponentBase, [Core.ComponentPropertyChildren, Core.ComponentPropertyVisible, Core.ComponentPropertyZIndex, Core.ComponentPropertyAlpha]),
	[Core.ComponentPropertyPosition, Core.ComponentPropertyAngle, Core.ComponentPropertyScale, Core.ComponentPropertyAnchor],
	Core.MathVector2,
);
GAME.Component = Core.ComponentElementBase(BaseProperties, Core.MathMatrix3);
let ClipProperties = Build(GAME.Component, [Core.ComponentPropertySize, Core.ComponentPropertyClip], Core.MathVector2);
GAME.Component.Texture = class Texture extends Core.ComponentElementTexture(ClipProperties) {
	setTexture(texture) {
		return super.setTexture(typeof texture == 'object' ? texture : GAME.Image.get(texture));
	}
};
GAME.Component.Scroll = Core.ComponentElementScroll(ClipProperties);
GAME.Component.Text = Core.ComponentElementText(
	Build(GAME.Component, [Core.ComponentPropertySize, Core.ComponentPropertyStyle], Core.MathVector2),
	GAME.Api.Canvas('text').getContext('2d'),
);
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
GAME.Touch = new Core.UtilTouch(new Core.MathVector2(), new Core.MathVector2());
GAME.Collsion = new Core.UtilCollsion(new Core.MathMatrix3(), new Core.MathVector2());
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
