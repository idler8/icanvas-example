const Background = function() {
	if (Background.Instance) return Background.Instance;
	let Context = GAME.Api.Canvas().getContext('2d');
	Context.SetSize(36, 36);
	Context.fillStyle = '#FDC600';
	Context.fillRect(0, 0, 36, 36);

	Context.fillStyle = '#F3AF00';
	Context.beginPath();
	Context.moveTo(18, 0);
	Context.lineTo(36, 0);
	Context.lineTo(18, 36);
	Context.lineTo(0, 36);
	Context.closePath();
	Context.fill();

	return (Background.Instance = Context.createPattern(Context.canvas, 'repeat'));
};
class Bar extends GAME.Component.Texture {
	constructor() {
		super('load/bar').setAnchorSize();
	}
	Progress = 0;
	update(Context) {
		super.update(Context);
		let shadow = GAME.Image.get('load/shadow');

		let lineWidth = this.Progress * 5.54;

		Context.translate(-this.width / 2, -22);
		Context.ArcRect(2, 0, lineWidth + 36, 36, 18).Fill(Background());
		Context.fillStyle = Context.createPattern(GAME.Image.get('load/shadowpx'), 'repeat-x');
		Context.fillRect(20, 0, lineWidth, 40);
		Context.fillStyle = '#FFFFFF';
		Context.textAlign = 'center';
		Context.fillText(this.Progress + '%', lineWidth + 20, -40);

		Context.drawImage(shadow, 20 + lineWidth, 0);
		Context.scale(-1, 1);
		Context.drawImage(shadow, -20, 0);
	}
}
export default class Load extends GAME.Component {
	perLoadProgress(progress) {
		this.Bar.Progress = progress;
	}
	create() {
		GAME.Event.on('preLoadProgress', this.perLoadProgress, this);
		let Animation = new GAME.TWEEN({ repeat: -1 })
			.to(this.Desc, 3, { value: '使用高级皮肤更容易得高分哦！！！' })
			.to(this.Desc, 3, { value: '抽奖可以获得高级皮肤^_^' });
		GAME.Event.once('destroyLoad', () => Animation.kill());
		// GAME.Native.Banner.Show(GAME.Options.BannerOfDefault).then(e => {
		// 	GAME.Native.Banner.SetSize(0, GAME.Pos.height - 750 / e, 750, 750 / e);
		// 	this.Close.y = GAME.Pos.height - 750 / e - 5;
		// });
	}
	destroy() {
		GAME.Event.off('perLoadProgress', this.perLoadProgress, this);
		GAME.Event.emit('preLoaded');
		GAME.Event.emit('destroyLoad');
	}
	constructor() {
		super()
			.addChild(new GAME.Component.Texture('load/cloud').setSizeLimit(0, 0, GAME.Pos.width, 0).setPosition(0, 0))
			.addChild(this.Bar, this.Desc);
	}
	Bar = new Bar().setPosition(GAME.Pos.center, GAME.Pos.height - 300);
	Desc = new GAME.Component.Text({ color: '#A398C0' }).setPosition(GAME.Pos.center, GAME.Pos.height - 256);
	update(Context) {
		Context.fillStyle = 'rgba(101, 83, 150,1)';
		Context.fillRect(0, 0, GAME.Pos.width, GAME.Pos.height);
		let linearGradient2 =
			this.linearGradient2 || (this.linearGradient2 = Context.createLinearGradient(GAME.Pos.center, 0, GAME.Pos.center, GAME.Pos.middle));
		linearGradient2.addColorStop(0, 'rgba(128, 162, 218, 1)');
		linearGradient2.addColorStop(1, 'rgba(101, 83, 150, 1)');
		Context.fillStyle = linearGradient2;
		Context.fillRect(0, 0, GAME.Pos.width, GAME.Pos.middle);
	}
}
