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
class Bar extends GAME.Sprite {
	constructor() {
		super('load/bar');
	}
	Progress = 0;
	// update(Context) {
	// super.update(Context);
	// let shadow = GAME.Image.get('load/shadow');
	// let lineWidth = this.Progress * 5.54;
	// Context.translate(-this.width / 2, -22);
	// Context.ArcRect(2, 0, lineWidth + 36, 36, 18).Fill(Background());
	// Context.fillStyle = Context.createPattern(GAME.Image.get('load/shadowpx'), 'repeat-x');
	// Context.fillRect(20, 0, lineWidth, 40);
	// Context.fillStyle = '#FFFFFF';
	// Context.textAlign = 'center';
	// Context.fillText(this.Progress + '%', lineWidth + 20, -40);
	// Context.drawImage(shadow, 20 + lineWidth, 0);
	// Context.scale(-1, 1);
	// Context.drawImage(shadow, -20, 0);
	// }
}
export default class Load extends GAME.Container {
	constructor(ResLoader) {
		super().add(new GAME.Sprite('load/cloud'), this.Bar, this.Desc);

		this.on('loading', progress => {
			console.log(progress.name, progress.progress);
			this.Bar.Progress = progress.progress;
		});
		ResLoader.extend(this);
		// let Animation = new GAME.TWEEN({ repeat: -1 })
		// 	.to(this.Desc, 3, { value: '使用高级皮肤更容易得高分哦！！！' })
		// 	.to(this.Desc, 3, { value: '抽奖可以获得高级皮肤^_^' });
		// this.once('destroy', () => Animation.kill());
	}
	Bar = new Bar().setPosition(GAME.Director.width / 2, GAME.Director.height - 300);
	Desc = new GAME.Text({ color: '#A398C0' }).setPosition(GAME.Director.width / 2, GAME.Director.height - 256);
	// update(Context) {
	// Context.fillStyle = 'rgba(101, 83, 150,1)';
	// Context.fillRect(0, 0, GAME.Pos.width, GAME.Pos.height);
	// let linearGradient2 =
	// 	this.linearGradient2 || (this.linearGradient2 = Context.createLinearGradient(GAME.Pos.center, 0, GAME.Pos.center, GAME.Pos.middle));
	// linearGradient2.addColorStop(0, 'rgba(128, 162, 218, 1)');
	// linearGradient2.addColorStop(1, 'rgba(101, 83, 150, 1)');
	// Context.fillStyle = linearGradient2;
	// Context.fillRect(0, 0, GAME.Pos.width, GAME.Pos.middle);
	// }
}
