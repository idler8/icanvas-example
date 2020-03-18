import * as Core from '@icanvas/core';
export default function shared() {
	if (shared.instance) return;
	let openDataContext = wx.getOpenDataContext();
	let sharedCanvas = openDataContext.canvas;
	sharedCanvas.width = app.width;
	sharedCanvas.height = app.height;
	let texture = new Core.ImageSource(sharedCanvas);
	shared.instance = function(options) {
		let sprite = new Core.Sprite(options);
		sprite.texture = texture;
		sprite.preUpdate = function() {
			texture.update();
		};
		return sprite;
	};
	shared.instance.send = function() {
		openDataContext.postMessage(options);
	};
	return shared.instance;
}
