export class Cutover extends GAME.Component.Texture {
	constructor(Textures, defaultState = 0) {
		super();
		this.Textures = Textures;
		this.State = defaultState;
	}
	Textures = [];
	_State = -1;
	set State(s) {
		if (this._State == s) return;
		if (!this.Textures[s]) return;
		this._State = s;
		this.setTexture(this.Textures[s]).setAnchorSize();
		if (this.Change) this.Change(s);
	}
	get State() {
		return this._State;
	}
}
export class Mask extends GAME.Component {
	touchStop = true;
	Color = 'rgba(0,0,0,0.7)';
	Radius = 0;
	size = new GAME.Math.Vector2(GAME.Pos.width, GAME.Pos.height);
	setSize(x, y) {
		this.size.setTo(x, y);
		return this;
	}
	constructor(color = 'rgba(0,0,0,0.7)', radius) {
		super();
		this.Color = color;
		if (radius) this.Radius = radius;
	}
	useTouch() {
		this.touchStop = false;
		return this;
	}
	update(Context) {
		if (Context.fillStyle != this.Color) Context.fillStyle = this.Color;
		if (this.Radius) {
			Context.ArcRect(-this.anchor.x, -this.anchor.y, this.size.x, this.size.y, this.Radius).fill();
		} else {
			Context.fillRect(-this.anchor.x, -this.anchor.y, this.size.x, this.size.y);
		}
	}
	get width() {
		return this.size.x;
	}
	set width(width) {
		this.size.x = width;
	}
	get height() {
		return this.size.y;
	}
	set height(height) {
		this.size.y = height;
	}
	setAnchorSize(x = 0.5, y = 0.5) {
		this.anchor.x = this.width * x;
		this.anchor.y = this.height * y;
		return this;
	}
}
import { Power1 } from 'gsap';
export class Turn extends GAME.Component {
	Plate = new GAME.Component.Texture();
	constructor(plate, middle) {
		super();
		this.addChild(this.Plate.setTexture(plate).setAnchorSize(), new GAME.Component.Texture(middle).setAnchorSize());
	}
	AddSomeThing(Angle = 0, text, img, scale = 1) {
		let Text = new GAME.Component.Texture(text).setAnchorSize().setAngle(Angle);
		let Img = new GAME.Component.Texture(img)
			.setAnchorSize()
			.setAngle(Angle)
			.setScale(scale, scale);
		Text.anchorY += 235;
		Img.anchorY += 135 / scale;
		this.Plate.addChild(Text, Img);
		return this;
	}
	Run(angle = 360) {
		return new Promise((resolve, reject) => {
			new GAME.TWEEN().to(this.Plate, 5, { angle: angle + 360 * 5, ease: Power1.easeOut }).call(() => resolve());
		});
	}
}
export class Button extends GAME.Component.Texture {
	touchStop = true;
	Text = new GAME.Component.Text().setSpecial({ v: GAME.Image.get('object/button/video'), r: GAME.Image.get('object/button/restart') });
	constructor(Images, Options) {
		super().Text.setStyle(Options);
		for (let i = 0; i < Images.length; i++) this.Images[i] = Images[i];
		this.Change(0);
		this.addChild(this.Text);
	}
	create() {
		GAME.Event.on('touchStart', this.touchStart, this);
		GAME.Event.on('touchEnd', this.touchEnd, this);
	}
	destroy() {
		GAME.Event.off('touchStart', this.touchStart, this);
		GAME.Event.off('touchEnd', this.touchEnd, this);
	}
	touchStart(touch) {
		if (this.visible && GAME.Touch.InComponent(this, touch)) this.Change(1);
	}
	touchEnd(touch) {
		this.Change(0);
	}
	Images = ['object/button/blue'];
	State = 1; //是否按下
	Change(State) {
		if (this.State === State) return this;
		this.State = State;
		return this.setTexture(this.Images[State] || this.Images[0]).setAnchorSize();
	}
	setSize(x, y) {
		return super.setSize(x, y).setAnchorSize();
	}
}
export class Close extends GAME.Component.Text {
	constructor(Value) {
		super({ size: 30 })
			.setValue(Value)
			.setAnchorSize(0.5, 1)
			.setPosition(GAME.Pos.center, GAME.Pos.height - 140);
	}
	update(Context) {
		super.update(Context);
		Context.beginPath();
		Context.moveTo(-this.anchorX, 0);
		Context.lineTo(this.width - this.anchorX, 0);
		Context.Stroke(this.options.color, 4);
	}
}
