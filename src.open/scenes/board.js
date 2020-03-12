import UserAvatar from '../components/avatar.js';
class UserBar extends GAME.Container {
	SetAvatar(key) {
		new UserAvatar(key, 100)
			.setAnchorSize()
			.setPosition(165, 0)
			.setParent(this);
		return this;
	}
	SetSort(i) {
		if (i == 1 || i == 2 || i == 3) {
			new GAME.Sprite('sort/' + i)
				.setAnchorSize()
				.setPosition(60, 0)
				.setParent(this);
		} else {
			new GAME.Text({ size: 34, color: '#9F6226', weight: 'bold' })
				.setValue(i)
				.setPosition(60, 0)
				.setParent(this);
		}
		return this;
	}
	SetName(info) {
		new GAME.Text({ size: 30, color: '#664A32', align: 'left' })
			.setValue(info.nickName || '**' + info.openid.slice(-4))
			.setPosition(240, 0)
			.setParent(this);
		return this;
	}
	SetScore(score) {
		new GAME.Text({ size: 30, color: '#664A32', align: 'right' })
			.setValue(score)
			.setPosition(600, 0)
			.setParent(this);
		return this;
	}
}
class MySelf extends GAME.Container {
	SetAvatar(key) {
		if (key === undefined) return this;
		new UserAvatar(key, 100)
			.setAnchorSize()
			.setPosition(165, 0)
			.setParent(this);
		return this;
	}
	SetSort(i) {
		if (i === undefined) return this;
		if (i == 1 || i == 2 || i == 3) {
			new GAME.Sprite('sort/' + i)
				.setAnchorSize()
				.setPosition(50, 0)
				.setParent(this);
		} else {
			new GAME.Text({ size: 34, color: '#9F6226', weight: 'bold' })
				.setValue(i)
				.setPosition(50, 0)
				.setParent(this);
		}
		return this;
	}
	SetName(info) {
		new GAME.Text({ size: 30, color: '#664A32', align: 'left' })
			.setValue(info.nickName || '**' + info.openid.slice(-4))
			.setPosition(240, 0)
			.setParent(this);
		return this;
	}
	SetScore(score) {
		if (score === undefined) return this;
		new GAME.Text({ size: 30, color: '#664A32', align: 'right' })
			.setValue(score)
			.setPosition(640, 0)
			.setParent(this);
		return this;
	}
}
export default class extends GAME.Container {
	Scroll = new GAME.Container.Scroll({ width: 650, height: 710, realWidth: 650, realHeight: 710 }).setPosition(50, GAME.Pos.middle - 380);
	MySelf = new MySelf().setPosition(50, GAME.Pos.middle + 400);
	constructor() {
		super();
		this.addChild(this.Scroll, this.MySelf);
	}
	Options = { Sort: '', Keys: [], Start: 0, End: -1, Users: [] };
	TouchMove(touch) {
		if (!this.Scroll.touchMoveY(touch.endY - touch.moveY)) return;
		app.tick();
		if (this.Scroll.scrollAt.y >= this.Scroll.scrollHeight) app.shared.BoardAddUser(this.Options.Sort, this.Options.End + 1, this.Options.End + 10);
		if (this.Scroll.scrollAt.y <= 0) app.shared.BoardAddUser(this.Options.Sort, this.Options.Start - 10, this.Options.Start - 1);
	}
	TouchEnd(touch) {
		let MoveTime = touch.endTime - touch.startTime;
		if (MoveTime < 50) return;
		let MoveY = touch.endY - touch.startY;
		let Speed = MoveY / MoveTime;
		let ASpeed = Speed < 0 ? Math.max(-Speed / (1000 / 16), 0.05) : Math.min(-Speed / (1000 / 16), -0.05);
		this.InertiaMove(Speed, ASpeed, Date.now());
	}
	InertiaMove(Speed, ASpeed, Time) {
		setTimeout(() => {
			if (!this.parent) return;
			let Now = Date.now();
			if (!this.Scroll.touchMoveY(Speed * (Now - Time))) return console.log('到底了');
			app.tick();
			Speed += ASpeed;
			if (Speed * ASpeed > 0) return;
			this.InertiaMove(Speed, ASpeed, Now);
			if (this.Scroll.scrollAt.y >= this.Scroll.scrollHeight) app.shared.BoardAddUser(this.Options.Sort, this.Options.End + 1, this.Options.End + 10);
			if (this.Scroll.scrollAt.y <= 0) app.shared.BoardAddUser(this.Options.Sort, this.Options.Start - 10, this.Options.Start - 1);
		}, 16);
	}
	create() {
		GAME.Event.on('board', this.OnMessage, this);
		GAME.Touch.on('touchMove', this.TouchMove, this);
		GAME.Touch.on('touchEnd', this.TouchEnd, this);
	}
	destroy() {
		GAME.Event.off('board', this.OnMessage, this);
		GAME.Touch.off('touchMove', this.TouchMove, this);
		GAME.Touch.off('touchEnd', this.TouchEnd, this);
	}
	//监听入口
	OnMessage(info) {
		console.log('Board', info);
		if (info.sort) this.Options.Sort = info.sort;
		if (info.keys) this.Options.Keys = info.keys;
		if (info.myself) this.SetMySelf(info.myself);
		if (info.users) this.AddUsers(info.users, info.start, info.end);
	}
	SetMySelf(user) {
		this.MySelf.SetSort(user.sorts[this.Options.Sort])
			.SetScore(user.values[this.Options.Keys[0]])
			.SetName(user.info);
		app.shared.SetImage(user).then(() => {
			this.MySelf.SetAvatar(user.info.avatarUrl);
			app.tick();
		});
	}
	//添加用户
	AddUsers(users, start, end) {
		if (start >= end || !users.length) return console.log(this.Options);
		if (start == this.Options.End + 1) {
			this.Options.End = end;
			// for (let i = 0; i < 10; i++) users.push(users[0]);
			let Bars = users.map(user => {
				let bar = new UserBar();
				bar.SetScore(user.values[this.Options.Keys[0]]);
				bar.SetSort(user.sorts[this.Options.Sort]);
				return bar;
			});
			Array.prototype.push.apply(this.Options.Users, Bars);
			let SuperLength = this.Options.End - this.Options.Start - 20;
			if (SuperLength > 0) {
				let Change = this.Options.Users.splice(0, SuperLength).length;
				this.Scroll.touchMoveY(Change * 120);
				this.Options.Start += Change;
			}
			this.Promise(users, Bars);
		} else if (end == this.Options.Start - 1) {
			this.Options.Start = start;
			let Bars = users.map(user => {
				let bar = new UserBar();
				bar.SetScore(user.values[this.Options.Keys[0]]);
				bar.SetSort(user.sorts[this.Options.Sort]);
				return bar;
			});
			Array.prototype.unshift.apply(this.Options.Users, Bars);
			this.Scroll.touchMoveY(-Bars.length * 120);
			let SuperLength = this.Options.End - this.Options.Start - 20;
			if (SuperLength > 0) {
				this.Options.End -= this.Options.Users.splice(-SuperLength).length;
			}
			this.Promise(users, Bars);
		}
	}
	//开始异步绘制
	Promise(users, Bars) {
		return Promise.resolve()
			.then(() => this.UsersPosition())
			.then(() => this.ReDrawUsers())
			.then(() => app.shared.SetUserInfo(users))
			.then(() => users.forEach((user, i) => Bars[i].SetName(user.info)))
			.then(() => this.ReDrawUsers())
			.then(() => app.shared.SetImage(users))
			.then(() => users.forEach((user, i) => Bars[i].SetAvatar(user.info.avatarUrl)))
			.then(() => this.ReDrawUsers())
			.catch(e => console.log(e));
	}
	//定位
	UsersPosition() {
		this.Options.Users.forEach((bar, i) => bar.setPosition(0, 120 * i + 80));
	}
	//绘制
	ReDrawUsers() {
		if (!this.Options.Users.length) {
			this.Scroll.context.Clear();
		} else {
			this.Scroll.context.canvas.height = this.Options.Users.length * 120 + 40;
			GAME.Render.Update(this.Options.Users, this.Scroll.context);
		}
		app.tick();
	}
}
