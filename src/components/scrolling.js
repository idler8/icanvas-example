import { Power4 } from 'gsap';
export default class Random extends GAME.Component.Scroll {
	// touchStop = true;
	HandleText = new GAME.Component.Text();
	Length = 0;
	constructor(special, list, lineHeight) {
		super();
		this.HandleText.config.lineHeight = lineHeight;
		this.HandleText.setSpecial(special);
		this.HandleText.value = list.join('\n');
		this.setSize(this.HandleText.width, lineHeight).setRealSize(this.HandleText.width, list.length * lineHeight);
		this.HandleText.setAnchorSize().setPosition(this.realWidth / 2, this.realHeight / 2);
		this.Length = list.length - 1;
		GAME.Render.Update(this.HandleText, this.context);
	}
	Tween = new GAME.TWEEN();
	RunToY = 0;
	Run(Time = 0, Target = -1) {
		if (Time) Target = this.Set(Time, Target);
		return new Promise((resolve, reject) =>
			this.Tween.call(() => {
				this.Tween.clear();
				resolve(Target);
			}).play(),
		);
	}
	Set(Time = 6, Target = -1) {
		if (Target < 0 || Target > this.Length) Target = GAME.Math.Random(this.Length);
		this.Tween.clear()
			.set(this, { RunToY: 0 })
			.to(this, Time, { RunToY: this.realHeight * 10 + this.HandleText.config.lineHeight * Target, ease: Power4.easeOut })
			.addLabel('end')
			.pause();
		return Target;
	}
	Stop() {
        this.Tween.seek('end', false);
	}
	preUpdate() {
		this.scrollAt.y = this.RunToY % (this.realHeight - this.height);
	}
};
