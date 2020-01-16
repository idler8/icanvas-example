class Enemy extends GAME.Sprite {
	Animation = new GAME.TWEEN({ paused: true }).to(this, 3, { y: GAME.Director.height }).set(this, { visible: false });
	Reset() {
		this.x = GAME.Random(375, -375);
		this.y = -GAME.Director.height / 2;
		this.Animation.play(0);
		this.visible = true;
		return this;
	}
	destory() {
		this.Animation.kill();
	}
}
class Enemys extends GAME.Container {
	set Slow(s) {
		if (s) {
			this.children.forEach(e => e.Animation.timeScale(0.1));
		} else {
			this.children.forEach(e => e.Animation.timeScale(1));
		}
		this._Slow = s;
	}
	get Slow() {
		return this._Slow;
	}
	_Slow = true;
	Total = 1;
	Collision(position) {
		let enemyVisibleLength = 0;
		for (let i = 0; i < this.children.length; i++) {
			let enemy = this.children[i];
			if (!enemy.visible) continue;
			enemyVisibleLength++;
			if (enemy.position.y >= GAME.Director.height) enemy.Reset();
			if (!GAME.Collision.InComponent(enemy, position)) continue;
			return GAME.Director.Go('Home');
		}
		if (enemyVisibleLength < this.Total) this.Send();
	}
	Send() {
		let enemy = this.children.find(e => !e.visible);
		if (!enemy) this.add((enemy = new Enemy('play/enemy')));
		enemy.Animation.timeScale(this.Slow ? 0.1 : 1);
		enemy.Reset();
	}
}
class Bullet extends GAME.Sprite {
	preUpdate(renderer) {
		this.y -= this.parent.Slow ? 1 : 10;
		if (this.y < -GAME.Director.height / 2) this.visible = false;
		return super.preUpdate(renderer);
	}
	Collision(enemys, j) {
		if (!this.visible) return;
		let vector = this.getWorldVector();
		for (let i = 0; i < enemys.length; i++) {
			if (!enemys[i].visible) continue;
			if (!GAME.Collision.InComponent(enemys[i], vector)) continue;
			enemys[i].visible = false;
			this.visible = false;
			GAME.Audio.get('boom').play();
			return GAME.Director.CurrentScene.emit('Boom', vector.clone());
		}
	}
}
class Bullets extends GAME.Container {
	Slow = true;
	Send(position) {
		let bullet = this.children.find(b => !b.visible);
		if (!bullet) this.add((bullet = new Bullet('play/bullet', { scale: 0.3 })));
		bullet.x = position.x;
		bullet.y = position.y - 35;
		bullet.visible = true;
		GAME.Audio.get('bullet').play();
	}
	Collision(enemys) {
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].Collision(enemys, i);
		}
	}
}
class Background extends GAME.Container {
	Background1 = new GAME.Sprite('play/bg').setSize(GAME.Director.width, GAME.Director.height);
	Background2 = new GAME.Sprite('play/bg').setSize(GAME.Director.width, GAME.Director.height).setPosition(0, -GAME.Director.height);
	constructor() {
		super();
		this.add(this.Background1, this.Background2);
	}
	preUpdate(renderer) {
		this.y++;
		if (this.y >= GAME.Director.height) this.y = 0;
		super.preUpdate(renderer);
	}
}
class Boom extends GAME.Sprite {
	State = 20;
	Textures = Array.apply(null, { length: 19 }).map((_, i) => 'play/explosion' + (i + 1));
	constructor() {
		super(null, { scale: 5 });
	}
	preUpdate(renderer) {
		if (this.State >= this.Textures.length) return true;
		this.State++;
		this.setTexture(this.Textures[this.State]);
		return super.preUpdate(renderer);
	}
}
class Booms extends GAME.Container {
	Boom(vector) {
		let boom = this.children.find(b => b.State >= b.Textures.length);
		if (!boom) this.add((boom = new Boom()));
		boom.position.setApply(this.getLocalVector(vector));
		boom.State = 0;
	}
}
export default class Play extends GAME.Container {
	Background = new Background();
	Player = new GAME.Sprite('play/hero').setPosition(0, GAME.Director.height / 2 - 200);
	Enemys = new Enemys();
	Bullets = new Bullets();
	Booms = new Booms();
	Animation = new GAME.TWEEN({ repeat: -1 }).addCallback(() => this.Bullets.Send(this.Player.position), 0.2);
	Level = new GAME.TWEEN({ repeat: -1 }).addCallback(() => this.Enemys.Total++, 30);
	constructor() {
		super().add(this.Background, this.Player, this.Enemys, this.Bullets, this.Booms);
		new GAME.Container().setPosition(-this.Player.width / 3, -this.Player.height / 3).put(this.Player);
		new GAME.Container().setPosition(this.Player.width / 3, -this.Player.height / 3).put(this.Player);
		this.Animation.timeScale(0.1);
		this.Level.timeScale(0.1);
		this.Bullets.Slow = true;
		this.Enemys.Slow = true;
		this.listen('create', 'destroy');
		this.on('Boom', this.Booms.Boom, this.Booms);
		document.addEventListener('keydown', function(e) {
			if (e.keyCode == 32) GAME.Render.Clock.interval = 10000000 / 1;
		});
	}
	preUpdate(renderer) {
		this.Enemys.Collision(this.Player.getWorldVector(new GAME.Vector2(-60, -40)));
		this.Enemys.Collision(this.Player.getWorldVector(new GAME.Vector2(60, -40)));
		this.Bullets.Collision(this.Enemys.children);
		return super.preUpdate(renderer);
	}
	TouchStart(touch) {
		this.Animation.timeScale(1);
		this.Level.timeScale(1);
		this.Bullets.Slow = false;
		this.Enemys.Slow = false;
		if (GAME.Collision.InComponent(this.Player, GAME.Director.getWorldVector(touch, true))) {
			this.Player.Moving = true;
		}
	}
	TouchMove(touch) {
		if (!this.Player.Moving) return;
		this.Player.x = touch.x;
		this.Player.y = touch.y;
	}
	TouchEnd(touch) {
		this.Animation.timeScale(0.1);
		this.Level.timeScale(0.1);
		this.Bullets.Slow = true;
		this.Enemys.Slow = true;
		this.Player.Moving = false;
	}
	create() {
		GAME.Audio.get('bgm').play();
		GAME.Audio.get('bgm').loop();
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
