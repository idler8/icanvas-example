class Enemy extends GAME.Sprite {
	constructor() {
		super({ texture: app.image.get('play/enemy') });
	}
	animation = {
		run: new GAME.Animation(this).to({ y: app.stage.height, visible: false }, 3000),
	};
	preUpdate() {
		this.animation.run.step();
	}
	Reset() {
		this.x = app.random(app.stage.width);
		this.y = 0;
		this.animation.run.play();
		this.visible = true;
		return this;
	}
}
class Enemys extends GAME.Container {
	set Slow(s) {
		if (s) {
			this.children.forEach(e => e.animation.run.scale(0.1));
		} else {
			this.children.forEach(e => e.animation.run.scale(1));
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
			if (enemy.y >= app.stage.height) enemy.Reset();
			enemy.updateTransform();
			if (!app.collision.InComponent(enemy, position)) continue;
			return app.stage.go('Home');
		}
		if (enemyVisibleLength < this.Total) this.Send();
	}
	Send() {
		let enemy = this.children.find(e => !e.visible);
		if (!enemy) this.add((enemy = new Enemy()));
		enemy.animation.run.scale(this.Slow ? 0.1 : 1);
		enemy.Reset();
	}
}
class Bullet extends GAME.Sprite {
	constructor() {
		super({ scaleX: 0.3, scaleY: 0.3, texture: app.image.get('play/bullet') });
	}
	preUpdate() {
		this.y -= this.parent.Slow ? 1 : 10;
		if (this.y < 0) this.visible = false;
	}
	Collision(enemys) {
		if (!this.visible) return;
		let vector = this.getWorldVector(new GAME.Vector2());
		for (let i = 0; i < enemys.length; i++) {
			if (!enemys[i].visible) continue;
			if (!app.collision.InComponent(enemys[i], vector)) continue;
			enemys[i].visible = false;
			this.visible = false;
			app.audio.get('boom').play();
			return app.stage.children[0].emit('Boom', this.x, this.y);
		}
	}
}
class Bullets extends GAME.Container {
	Slow = true;
	Send(x, y) {
		let bullet = this.children.find(b => !b.visible);
		if (!bullet) this.add((bullet = new Bullet()));
		bullet.x = x;
		bullet.y = y - 35;
		bullet.visible = true;
		bullet.updateTransform();
		app.audio.get('bullet').play();
	}
	Collision(enemys) {
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].Collision(enemys);
		}
	}
}
class Background extends GAME.Container {
	Background1 = app.sprite('play/bg', { width: app.stage.width, height: app.stage.height, x: app.stage.center });
	Background2 = app.sprite('play/bg', { width: app.stage.width, height: app.stage.height, x: app.stage.center, y: app.stage.height });
	constructor() {
		super();
		this.add(this.Background1, this.Background2);
	}
	preUpdate() {
		this.y++;
		if (this.y >= app.stage.middle) this.y = -app.stage.middle;
	}
}
class Boom extends GAME.Sprite {
	State = 20;
	Textures = Array.apply(null, { length: 19 }).map((_, i) => 'play/explosion' + (i + 1));
	constructor() {
		super({ scaleX: 5, scaleY: 5 });
	}
	preUpdate() {
		if (this.State >= this.Textures.length) return true;
		this.texture = app.image.get(this.Textures[this.State]);
		this.State++;
	}
}
class Booms extends GAME.Container {
	Boom(x, y) {
		let boom = this.children.find(b => b.State >= b.Textures.length);
		if (!boom) this.add((boom = new Boom()));
		boom.x = x;
		boom.y = y;
		boom.State = 0;
	}
}
export default class Play extends GAME.Container {
	SendBullets() {
		this.Bullets.Send(this.Player.x, this.Player.y);
	}
	MoveEnemy() {
		this.Enemys.Total++;
	}
	animation = {
		send: new GAME.Animation(this, { scale: 0.1, repeat: -1 }).set({ duration: 200, call: 'SendBullets' }),
		level: new GAME.Animation(this, { scale: 0.1, repeat: -1 }).wait(30000).call('MoveEnemy'),
	};
	Background = new Background();
	Player = app.sprite('play/hero', { x: app.stage.center, y: app.stage.height - 200 });
	Enemys = new Enemys();
	Bullets = new Bullets();
	Booms = new Booms();
	constructor() {
		super().add(this.Background, this.Player, this.Enemys, this.Bullets, this.Booms);
		this.on('create', function() {
			app.audio.get('bgm').play(true);
			app.touch.on('touchStart', this.TouchStart, this);
			app.touch.on('touchMove', this.TouchMove, this);
			app.touch.on('touchEnd', this.TouchEnd, this);
		});
		this.on('destroy', function() {
			app.audio.get('bgm').stop();
			app.audio.get('bullet').destroy();
			app.audio.get('boom').destroy();
			app.touch.off('touchStart', this.TouchStart, this);
			app.touch.off('touchMove', this.TouchMove, this);
			app.touch.off('touchEnd', this.TouchEnd, this);
		});
		this.on('Boom', this.Booms.Boom, this.Booms);
		this.TouchEnd();
		this.animation.send.play();
		this.animation.level.play();
	}
	preUpdate() {
		this.animation.send.step();
		this.animation.level.step();
		this.Enemys.Collision(this.Player.getWorldVector(new GAME.Vector2(-60, -40)));
		this.Enemys.Collision(this.Player.getWorldVector(new GAME.Vector2(60, -40)));
		this.Bullets.Collision(this.Enemys.children);
	}
	TouchStart(touch) {
		this.animation.send.scale(1);
		this.animation.level.scale(1);
		this.Bullets.Slow = false;
		this.Enemys.Slow = false;
		if (app.collision.InComponent(this.Player, app.stage.getWorldVector(touch, true))) {
			this.Player.Moving = true;
		}
	}
	TouchMove(touch) {
		if (!this.Player.Moving) return;
		this.Player.x = touch.x;
		this.Player.y = touch.y;
	}
	TouchEnd(touch) {
		this.animation.send.scale(0.1);
		this.animation.level.scale(0.1);
		this.Bullets.Slow = true;
		this.Enemys.Slow = true;
		this.Player.Moving = false;
	}
}
