const Background = function() {
	if (Background.Instance) return Background.Instance;
	let Context = document.createElement('canvas').getContext('2d');
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
export default class Load extends GAME.Container {
	constructor(ResLoader) {
		super().add(app.sprite('load/cloud'), this.Bar, this.Desc);
		console.log('load');

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
	Bar = app.sprite('load/bar').setPosition(0, 500);
	// Desc = new GAME.Text({ color: '#A398C0' }).setPosition(0,600);
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
