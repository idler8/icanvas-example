app.text = function(font = {}, options = {}) {
	//TODO 2D，文本，单行文字
	let sprite = new GAME.Sprite(options);

	sprite.texture = app.canvas();
	sprite.text = new Core.RichText(font);
	sprite.text.value = font.value;

	sprite.refresh = function() {
		if (!sprite.texture.context) sprite.texture.context = sprite.texture.getContext('2d');
		if (sprite.text.needUpdate) {
			sprite.text.compute(sprite.texture.context);
			sprite.text.needUpdate = false;
			sprite.needUpdate = true;
		}
	};
	sprite.refresh();
	return sprite;
};