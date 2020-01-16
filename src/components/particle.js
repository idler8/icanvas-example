export class Particle1 extends GAME.Component {
	constructor(color) {
		super();
		this.color = color;
	}
	color = '#000000';
	particles = [];
	addParticles(n, x, y) {
		for (let i = 0; i < n; i++) this.addParticle(x, y);
	}
	addParticle(x, y) {
		let particle = {};
		let angle = GAME.Math.Random(720, -360);
		let color = this.color;

		this.particles.push(particle);
		new GAME.TWEEN()
			.set(particle, { x, y, angle, alpha: 1, color, size: GAME.Math.Random(10, 3) })
			.to(particle, 0.5, { x: x + GAME.Math.Random.To(-100, 100), y: y + GAME.Math.Random.To(-60, 60), angle: 0, alpha: 0 })
			.call(() => {
				this.particles.splice(this.particles.indexOf(particle), 1);
			});
	}
	Matrix = new GAME.Math.Matrix3();
	updateParticles(Context, particle) {
		Context.globalAlpha = particle.alpha;
		Context.fillRect(particle.x, particle.y, particle.size, particle.size);
	}
	update(Context) {
		Context.fillStyle = this.color;
		for (let i = 0; i < this.particles.length; i++) {
			this.updateParticles(Context, this.particles[i]);
		}
	}
}
export class Particle2 extends GAME.Component {
	Style = '';
	SetStyle(style) {
		this.Style = style;
		return this;
	}
	addParticle(x, y) {
		let particle = new GAME.Component.Sprite(this.Style)
			.setSizeLimit(60, 60)
			.setAnchorSize()
			.setScale(1 + GAME.Math.Random(20) / 100, 1 + GAME.Math.Random(20) / 100)
			.setAngle(GAME.Math.Random(720, -360))
			.setPosition(x, y);
		this.addChild(particle);
		new GAME.TWEEN()
			.to(particle, 1, {
				x: particle.x + GAME.Math.Random.To(-200, 200),
				y: particle.y + GAME.Math.Random.To(-200, 200),
				angle: 0,
				alpha: 0,
				scaleX: 0.5,
				scaleY: 0.5,
			})
			.call(() => this.removeChild(particle));
	}
}
