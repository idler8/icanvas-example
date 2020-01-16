export default {
	Context: GAME.Api.Canvas('share').getContext('2d'),
	Send(data) {
		if (!this.Context.postMessage) return;
		this.Context.postMessage(data);
	},
	SetSize(width, height) {
		this.Context.canvas.width = width;
		this.Context.canvas.height = height;
		return this;
	},
	get Texture() {
		return new GAME.Component.Sprite(this.Context.canvas);
	},
};
