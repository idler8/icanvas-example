import { Mask } from './global.js';
export default class Modal extends Mask {
	static Top = new GAME.Math.Vector2();
	AddTopTip() {
		if (!Modal.Top.y) {
			try {
				let style = wx.getMenuButtonBoundingClientRect();
				Modal.Top.x = (style.left / GAME.System.width) * GAME.Pos.width;
				Modal.Top.y = ((style.top + style.height / 2) / GAME.System.height) * GAME.Pos.height;
			} catch (e) {
				Modal.Top.zero();
			}
		}
		if (!Modal.Top.x) Modal.Top.x = GAME.Pos.center;
		if (!Modal.Top.y && GAME.System.wx.statusBarHeight) {
			Modal.Top.y = (GAME.System.wx.statusBarHeight / GAME.System.height) * GAME.Pos.height + 100;
		}
		if (!Modal.Top.y) Modal.Top.y = 200;
		let add = new GAME.Component.Sprite('modal/add').setAnchorSize(1, 0.67).setPosition(Modal.Top.x, Modal.Top.y);
		this.addChild(add);
		return this;
	}
	constructor(color) {
		super(color);
		if (ENV.input.target == 'wxgame') this.AddTopTip();
	}
}
export const Background = function() {
	if (Background.Instance) return Background.Instance;
	let Context = GAME.Api.Canvas().getContext('2d');
	Context.SetSize(72, 110);
	Context.fillStyle = '#CCCCCC';
	Context.fillRect(0, 0, 72, 110);

	Context.fillStyle = '#FFFFFF';
	Context.beginPath();
	Context.moveTo(36, 0);
	Context.lineTo(72, 0);
	Context.lineTo(0, 110);
	Context.lineTo(0, 55);
	Context.closePath();
	Context.fill();

	Context.beginPath();
	Context.moveTo(72, 55);
	Context.lineTo(72, 110);
	Context.lineTo(36, 110);
	Context.closePath();
	Context.fill();
	return (Background.Instance = Context.createPattern(Context.canvas, 'repeat'));
};
export class BoxModal extends GAME.Component {
	zIndex = 10; //比父级高10个高度
	x = GAME.Pos.center;
	y = GAME.Pos.middle;
	Modal = new Modal().setPosition(-GAME.Pos.center, -GAME.Pos.middle);
	size = new GAME.Math.Vector2(630, 360);
	radius = 30;
	setSize(width = 630, height = 360, r = 30) {
		this.size.setTo(width, height);
		this.setAnchor(width / 2, height / 2);
		this.radius = r;
	}
	update(Context) {
		Context.ArcRect(-this.anchor.x, -this.anchor.y, this.size.x, this.size.y, this.radius).Fill(Background());
		Context.ArcRect(20 - this.anchor.x, 20 - this.anchor.y, this.size.x - 40, this.size.y - 40, this.radius).Fill('#FFFFFF');
	}

	constructor(width, height, radius) {
		super().addChild(this.Modal);
		this.Modal.zIndex = -1; //比父级矮1个高度
		this.setSize(width, height, radius);
	}
	AddTitle(title, color = '#FFFFFF') {
		let background = new GAME.Component.Sprite('modal/title').setAnchorSize(0.5, 0.4);
		background.setPosition(0, -this.size.y / 2);
		let text = new GAME.Component.Text({ color, size: 36, weight: 'bold' }).setValue(title).setPosition(0, 6);
		background.addChild(text);
		this.addChild(background);
		return this;
	}
	AddClose() {
		let close = new GAME.Component.Sprite('modal/close').setAnchorSize();
		close.setPosition(this.size.x / 2 - 10, 10 - this.size.y / 2);
		close.touchTap = () => {
			this.setParent();
		};
		this.addChild(close);
		return this;
	}
}
