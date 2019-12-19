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
			GAME.Audio.get('boom').play();
			GAME.Event.emit('Boom', this.position);
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
		GAME.Audio.get('bullet').play();
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
class Boom extends GAME.Component.Texture {
	State = 20;
	Textures = Array.apply(null, { length: 19 }).map((_, i) => 'play/explosion' + (i + 1));
	constructor() {
		super(null, { scale: 5 });
	}
	preUpdate() {
		if (this.State >= this.Textures.length) return;
		this.State++;
		this.setTexture(this.Textures[this.State]).setAnchorSize();
	}
}
class Booms extends GAME.Component {
	create() {
		GAME.Event.on('Boom', this.Boom, this);
	}
	destroy() {
		GAME.Event.off('Boom', this.Boom, this);
	}
	Boom(vector) {
		let boom = this.children.find(b => b.State >= b.Textures.length);
		if (!boom) this.addChild((boom = new Boom()));
		boom.position.setToArray(vector);
		boom.State = 0;
	}
}
export default class Play extends GAME.Component {
	Background = new Background();
	Player = new GAME.Component.Texture('play/hero').setAnchorSize().setPosition(GAME.Pos.center, GAME.Pos.height - 200);
	Enemys = new Enemys();
	Bullets = new Bullets();
	Booms = new Booms();
	Animation = new GAME.TWEEN({ repeat: -1, repeatDelay: 0.2 }).addCallback(() => this.Bullets.Send(this.Player.position));
	Level = new GAME.TWEEN({ repeat: -1, repeatDelay: 30 }).addCallback(() => this.Enemys.Total++);
	constructor() {
		super().addChild(this.Background, this.Player, this.Enemys, this.Bullets, this.Booms);
		new GAME.Component().setPosition(-this.Player.width / 3, -this.Player.height / 3).setParent(this.Player);
		new GAME.Component().setPosition(this.Player.width / 3, -this.Player.height / 3).setParent(this.Player);
	}
	preUpdate() {
		this.Enemys.Collsion({ x: this.Player.x - 60, y: this.Player.y - 40 });
		this.Enemys.Collsion({ x: this.Player.x + 60, y: this.Player.y - 40 });
		this.Bullets.Collsion(this.Enemys.children);
	}
	TouchStart(touch) {
		if (GAME.Collsion.InComponent(this.Player, { x: touch.startX, y: touch.startY })) this.Player.Moving = true;
	}
	TouchMove(touch) {
		if (!this.Player.Moving) return;
		this.Player.x = touch.moveX;
		this.Player.y = touch.moveY;
	}
	TouchEnd(touch) {
		this.Player.Moving = false;
	}
	create() {
		GAME.Audio.get('bgm').play();
		GAME.Touch.on('touchStart', this.TouchStart, this);
		GAME.Touch.on('touchMove', this.TouchMove, this);
		GAME.Touch.on('touchEnd', this.TouchEnd, this);
	}
	destroy() {
		GAME.Audio.get('bgm').stop();
		GAME.Touch.off('touchStart', this.TouchStart, this);
		GAME.Touch.off('touchMove', this.TouchMove, this);
		GAME.Touch.off('touchEnd', this.TouchEnd, this);
		this.Animation.kill();
		this.Level.kill();
	}
}
