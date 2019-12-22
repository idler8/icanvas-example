import * as Core from '@icanvas/core';
import * as Wxgame from '@icanvas/core-wxgame';
const GAME = {};

GAME.Api = {};
GAME.Api.Canvas = Wxgame.ApiCanvas;
GAME.Api.System = Wxgame.ApiSystem();
GAME.Math = {};
GAME.Math.Vector2 = Core.MathVector2;

GAME.Component = Core.Container();
GAME.Component.Texture = class Sprite extends Core.Sprite(GAME.Component) {
	setTexture(texture) {
		if (!texture) return super.setTexture(null);
		if (typeof texture == 'string') texture = GAME.Image.get(texture);
		return super.setTexture(texture);
	}
};
GAME.Component.Rect = Core.Rect(GAME.Component);
GAME.Component.Text = Core.Text(GAME.Component, GAME.Api.Canvas().getContext('2d'));
// GAME.Component.Scroll = Core.ComponentElementScroll(ClipProperties);
import Director from '../utils/director.js';
GAME.Director = new (Director(GAME.Component))();

GAME.Image = new (Wxgame.ResourceImage(Core.UtilLoader))();
GAME.Pos = new Core.MathPosition();
import Eventemitter3 from 'eventemitter3';
GAME.Event = new Eventemitter3();

GAME.Context = GAME.Api.Canvas('shared').getContext('2d');
GAME.Render = new Core.UtilRender();
GAME.Touch = new Core.UtilTouch();
GAME.Collsion = new Core.UtilCollsion();
import { TweenLite, TimelineMax, Linear } from 'gsap/TweenMax';
TweenLite.defaultEase = Linear.easeNone;
GAME.TWEEN = TimelineMax;

GAME.SetSize = function(x, y) {
	GAME.Pos.width = x;
	GAME.Pos.height = y;
	GAME.Touch.Size.setTo(x / GAME.Api.System.width, y / GAME.Api.System.height);
	return this;
};

Object.assign(GAME.Context.prototype || GAME.Context.__proto__, Core.UtilCanvas2D);
Wxgame.ApiTouch(GAME.Touch);
if (ENV.input.mode == 'development') {
	GAME.ENV = { dynamic: ENV.dynamic, input: ENV.input, project: ENV.project };
	GameGlobal.GAME = GAME;
}
export default GAME;
