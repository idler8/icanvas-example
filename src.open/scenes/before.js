class Avatar extends GAME.Sprite {
	setTexture(image) {
		return super
			.setTexture(image)
			.setSize(100, 100)
			.setAnchorSize();
	}
	update(Context) {
		Context.beginPath();
		Context.arc(0, 0, 54, 0, 2 * Math.PI);
		Context.Fill('#FFFFFF');
		Context.save();
		Context.beginPath();
		Context.arc(0, 0, 50, 0, 2 * Math.PI);
		Context.clip();
		super.update(Context);
		Context.restore();
	}
}
class Box1 extends GAME.Container {
	UserAvatar = new Avatar().setPosition(70, 70);
	Super = new GAME.Text().setValue('即将超越').setPosition(70, 160);
	Score = new GAME.Text({ color: '#FFFC00' }).setPosition(70, 190);
	constructor() {
		super().addChild(this.UserAvatar, this.Super, this.Score);
	}
	update(Context) {
		Context.ArcRect(0, 0, 140, 210, 10).Fill('rgba(0,0,0,0.5)');
	}
}
class Box2 extends GAME.Container {
	UserAvatar = new GAME.Sprite().setPosition(GAME.Pos.center, 370);
	Score = new GAME.Text({ size: 30 }).setPosition(GAME.Pos.center, 480);
	constructor() {
		super().addChild(this.UserAvatar, this.Score);
	}
}
export default class Before extends GAME.Container {
	Box1 = new Box1();
	Box2 = new Box2();
	constructor() {
		super().addChild(this.Box1, this.Box2);
	}
	create() {
		GAME.Event.on('before', this.SetBefore, this);
	}
	destroy() {
		GAME.Event.off('before', this.SetBefore, this);
	}
	SetBefore(before, key, score) {
		this.visible = before ? true : false;
		if (!this.visible) return app.tick();
		if (!score && this.Before == before) return;
		this.Before = before;
		Promise.resolve()
			.then(() => {
				this.Box1.Score.setValue(before.values[key]);
				let score2 = before.values[key] - score;
				this.Box2.Score.setValue(score2 ? '还差' + score2 + '分超越好友' : '');
				app.tick();
			})
			.then(() => app.shared.SetUserInfo(before))
			// .then(() => {
			// 	this.NickName.setValue(before.info.nickName);
			// 	app.tick();
			// })
			.then(() => app.shared.SetImage(before))
			.then(() => {
				this.Box1.UserAvatar.setTexture(before.info.avatarUrl);
				this.Box2.UserAvatar.setTexture(before.info.avatarUrl)
					.setSize(130, 130)
					.setAnchorSize();
				app.tick();
			});
	}
}
