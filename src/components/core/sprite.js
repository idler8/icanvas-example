import * as Core from '@icanvas/core';
export default app.sprite = function(texture, options = {}) {
	if (texture) options.texture = texture;
	if (typeof options.texture == 'string') options.texture = app.image.get(options.texture);
	return new Core.Sprite(options);
};
