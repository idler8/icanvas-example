export default class Range extends GAME.Container {
	Range = null;
	update(Context) {
		if (!this.Range) return;
		this.Range.forEach((user, i) => {
			if (!user) return;
			Context.drawImage(GAME.Image.get(user.openid), GAME.Pos.center - 160 + i * 160, GAME.Pos.middle - 240, 130, 130);
			Context.FontSet('28px 微软雅黑,黑体', '#f4f4f4', 'center', 'middle');
			Context.fillText(user.values[this.SortKey], GAME.Pos.center - 160 + i * 160, GAME.Pos.middle - 150, 150);
		});
	}
	create() {
		this.Range = null;
		GAME.Event.on('range', this.SetRange, this);
		GAME.Event.on('rangeHandle', this.RangeHandle, this);
	}
	destroy() {
		this.Range = null;
		GAME.Event.off('range', this.SetRange, this);
		GAME.Event.off('rangeHandle', this.RangeHandle, this);
	}
	SetRange(range) {
		this.Range = range;
		app.tick();
		Promise.resolve()
			.then(() => app.shared.SetUserInfo(range))
			.then(() => {
				app.tick();
			})
			.then(() => app.shared.SetImage(range))
			.then(() => {
				app.tick();
			});
	}
	SortKey = GAME.Options.Keys[0];
	RangeHandle() {
		app.shared.Range(this.SortKey);
	}
}
