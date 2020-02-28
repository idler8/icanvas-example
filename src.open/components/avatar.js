export default class Avatar extends GAME.Sprite {
	Radius = 50;
	constructor(avatar, size) {
		super(avatar).setSize(size, size);
		this.Radius = size / 2;
	}
	update(Context) {
		Context.translate(this.Radius, this.Radius);
		Context.fillStyle = '#7C6751';
		Context.beginPath();
		Context.arc(-this.anchorX, -this.anchorY, this.Radius, 0, 2 * Math.PI);
		Context.fill();

		Context.fillStyle = '#DDC9AF';
		Context.beginPath();
		Context.arc(-this.anchorX, -this.anchorY, this.Radius - 2, 0, 2 * Math.PI);
		Context.fill();

		Context.fillStyle = '#7C6751';
		Context.beginPath();
		Context.arc(-this.anchorX, -this.anchorY, this.Radius - 4, 0, 2 * Math.PI);
		Context.fill();

		Context.save();
		Context.beginPath();
		Context.arc(-this.anchorX, -this.anchorY, this.Radius - 6, 0, 2 * Math.PI);
		Context.clip();
		Context.translate(-this.Radius, -this.Radius);
		super.update(Context);
		Context.restore();
	}
}
