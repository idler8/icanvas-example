class Enemy extends GAME.Component.Texture {
	constructor() {
		super('play/enemy').setAnchorSize();
	}
	Animation = new GAME.TWEEN({ paused: true })
		.set(this, { y: 0 })
		.to(this, 3, { y: GAME.Pos.height + 200 })
		.set(this, { visible: false });
	Reset() {
		this.visible = true;
		this.x = GAME.Math.Random(750);
		this.Animation.play(0);
		return this;
	}
	destory() {
		this.Animation.kill();
	}
}
class Enemys extends GAME.Component {
	Total = 1;
	Collsion(position) {
		let enemyVisibleLength = 0;
		for (let i = 0; i < this.children.length; i++) {
			let enemy = this.children[i];
			if (!enemy.visible) continue;
			enemyVisibleLength++;
			if (enemy.position.y >= GAME.Pos.height + 200) enemy.Reset();
			if (!GAME.Collsion.InComponent(enemy, position)) continue;
			return GAME.Director.Go('Home');
		}
		if (enemyVisibleLength < this.Total) this.Send();
	}
	Send() {
		let enemy = this.children.find(e => !e.visible);
		if (!enemy) this.addChild((enemy = new Enemy()));
		enemy.Reset();
	}
}
class Bullet extends GAME.Component.Texture {
	constructor() {
		super('play/bullet')
			.setAnchorSize()
			.setScale(0.3, 0.3);
	}
	preUpdate() {
		this.y -= 10;
		if (this.y < 0) this.visible = false;
	}
	Collsion(enemys) {
		for (let i = 0; i < enemys.length; i++) {
			if (!this.visible) continue;
			if (!enemys[i].visible) continue;
			if (!GAME.Collsion.InComponent(enemys[i], this.position)) continue;
			enemys[i].visible = false;
			this.visible = false;
			GAME.Audio.pool('boom');
			//TODO 本位置爆炸
		}
	}
}
class Bullets extends GAME.Component {
	Send(position) {
		let bullet = this.children.find(b => !b.visible);
		if (!bullet) this.addChild((bullet = new Bullet()));
		bullet.x = position.x;
		bullet.y = position.y - 35;
		bullet.visible = true;
		GAME.Audio.pool('bullet');
	}
	Collsion(enemys) {
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].Collsion(enemys);
		}
	}
}
class Background extends GAME.Component {
	Background1 = new GAME.Component.Texture('play/bg').setSize(GAME.Pos.width, GAME.Pos.height);
	Background2 = new GAME.Component.Texture('play/bg').setSize(GAME.Pos.width, GAME.Pos.height).setPosition(0, -GAME.Pos.height);
	constructor() {
		super();
		this.addChild(this.Background1, this.Background2);
	}
	preUpdate() {
		this.y++;
		if (this.y >= GAME.Pos.height) this.y = 0;
	}
}
export default class Play extends GAME.Component {
	Background = new Background();
	Player = new GAME.Component.Texture('play/hero').setAnchorSize().setPosition(GAME.Pos.center, GAME.Pos.height - 200);
	Enemys = new Enemys();
	Bullets = new Bullets();
	Animation = new GAME.TWEEN({ repeat: -1, repeatDelay: 0.2 }).addCallback(() => this.Bullets.Send(this.Player.position));
	Level = new GAME.TWEEN({ repeat: -1, repeatDelay: 30 }).addCallback(() => this.Enemys.Total++);
	constructor() {
		super().addChild(this.Background, this.Player, this.Enemys, this.Bullets);
		new GAME.Component().setPosition(-this.Player.width / 3, -this.Player.height / 3).setParent(this.Player);
		new GAME.Component().setPosition(this.Player.width / 3, -this.Player.height / 3).setParent(this.Player);
	}
	preUpdate() {
		this.Enemys.Collsion({ x: this.Player.x - 60, y: this.Player.y - 40 });
		this.Enemys.Collsion({ x: this.Player.x + 60, y: this.Player.y - 40 });
		this.Bullets.Collsion(this.Enemys.children);
	}
	TouchMove(touch) {
		this.Player.x = touch.moveX;
		this.Player.y = touch.moveY;
	}
	create() {
		GAME.Audio.channel('background', 'bgm');
		GAME.Touch.on('touchMove', this.TouchMove, this);
	}
	destroy() {
		GAME.Audio.channel('background');
		GAME.Touch.off('touchMove', this.TouchMove, this);
		this.Animation.kill();
		this.Level.kill();
	}
}
