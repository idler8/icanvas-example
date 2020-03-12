app.sprite = function(texture, options = {}) {
	if (texture) options.texture = texture;
	if (typeof options.texture == 'string') options.texture = app.image.get(options.texture);
	return new GAME.Sprite(options);
};
