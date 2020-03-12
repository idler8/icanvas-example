app.cache = function(container, options = {}) {
	let sprite = new GAME.Sprite(options);
	sprite.texture = app.canvas();
	sprite.container = container;
	sprite.refresh = function(x, y) {
		if (!sprite.texture.context) sprite.texture.context = sprite.texture.getContext('2d');
		if (x) sprite.texture.width = x;
		if (y) sprite.texture.height = y;
		let renderArray = [];
		sprite.container.pushTo(renderArray);
		for (let i = 0, len = renderArray.length; i < len; i++) {
			Core.CanvasRender(renderArray[i], sprite.texture.context);
		}
	};
	return sprite;
};