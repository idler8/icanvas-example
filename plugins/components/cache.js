import * as Core from '@icanvas/core';
export default app.cache = function(container, options = {}) {
	let sprite = new Core.Sprite(options);
	sprite.texture = new Core.ImageSource(app.canvas());
	sprite.container = container;
	let renderArray = [];
	sprite.refresh = function(x, y) {
		if (x) sprite.texture.width = x;
		if (y) sprite.texture.height = y;
		Core.CanvasRender(sprite.container.pushTo(renderArray), sprite.texture.getContext('2d'));
		renderArray.length = 0;
	};
	return sprite;
};
