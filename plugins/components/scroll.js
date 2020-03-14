import * as Core from '@icanvas/core';
class ScrollContainer extends Core.Container {
	constructor(options = {}) {
		super(options);
		this.width = options.width || 300;
		this.height = options.height || 150;
		this.realWidth = options.realWidth || 300;
		this.realHeight = options.realHeight || 150;
		this.maxWidth = Math.min(this.width - this.realWidth, 0);
		this.maxHeight = Math.min(this.height - this.realHeight, 0);
	}
	touchMoveX(mx) {
		let X = this.x;
		this.x = Math.min(Math.max(this.x + mx, this.maxWidth), 0);
		return this.x != X;
	}
	touchMoveY(my) {
		let Y = this.y;
		this.y = Math.min(Math.max(this.y + my, this.maxHeight), 0);
		return this.y != Y;
	}
}
class ScrollElement extends Core.Container {
	constructor(container) {
		super();
		this.container = container;
		this.on('create', function() {
			app.touch.on('touchMove', this.touchMove, this);
		});
		this.on('destroy', function() {
			app.touch.off('touchMove', this.touchMove, this);
		});
		this.invertMatrix = new Core.Matrix4();
		this.invertMatrixId = 0;
	}

	updateTransformInvert() {
		if (this.invertMatrixId == this.transformId) return;
		// this.updateTransform(false);
		this.invertMatrix.invert(this.matrix);
		this.invertMatrixId = this.transformId;
	}
	checkPoint(vector) {
		this.updateTransformInvert();
		vector.multiplyMatrix4(this.invertMatrix);
		return vector.x >= 0 && vector.y >= 0 && vector.x <= this.container.width && vector.y <= this.container.height;
	}
	touchTap(touch) {
		let vector = touch.add(this.container.x, -this.container.y).multiplyMatrix4(this.container.matrix);
		app.collision.Recursive(this.container, vector);
	}
	touchMove(touch) {
		let vector = touch.clone();
		if (!this.checkPoint(vector.multiplyMatrix4(app.stage.matrix))) return;
		this.container.touchMoveX(touch.tick.x);
		this.container.touchMoveY(touch.tick.y);
	}
	render(gl, dirty) {
		let { x, y } = this.getWorldVector(new Core.Vector3());
		if (ENV.webgl) {
			let vx = ((x + 1) * app.stage.width) / 2;
			let vy = ((y + 1) * app.stage.height) / 2 - this.container.height;
			gl.enable(gl.SCISSOR_TEST);
			gl.scissor(vx, vy, this.container.width, this.container.height);
			// gl.clear(gl.COLOR_BUFFER_BIT);
		} else {
			gl.setTransform(1, 0, 0, 1, 0, 0);
			gl.save();
			gl.beginPath();
			gl.rect(x, y, this.container.width, this.container.height);
			gl.clip();
			// gl.fillRect(0, 0, app.stage.width, app.stage.height);
		}
		app.render(this.container.pushTo(), gl, dirty);
		ENV.webgl ? gl.disable(gl.SCISSOR_TEST) : gl.restore();
	}
}
export default app.scroll = function(container, scrollOptions) {
	let scrollContainer = new ScrollContainer(scrollOptions || { height: 300, realHeight: 600 });
	scrollContainer.add(container);
	scrollContainer.parent = new ScrollElement(scrollContainer);
	return scrollContainer.parent;
};
