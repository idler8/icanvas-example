const BaseAnimation = function(base, animations) {
	if (!animations.change || !animations.change.length) return;
	let Animation = new GAME.TWEEN(animations.option);
	animations.change.forEach(animation => {
		if (!animation.target) return Animation.to(base, animation.time, animation.values);
		if (typeof animation.target == 'string') return Animation.to(base[animation.target], animation.time, animation.values);
		let target = animation.target.reduce((b, k) => b[k], base);
		Animation.to(target, animation.time, animation.values);
	});
	base.destroy = () => Animation.kill();
};
const GetComponent = function(options) {
	if (options.texture) return new GAME.Component.Texture(options.texture);
	return new GAME.Component();
};
export default function GetSkin(options = {}) {
	let component = GetComponent(options);
	if (options.size && component.size) {
		component.setSize(options.size.pos ? GAME.Pos.getX(options.size.x) : options.size.x, options.size.pos ? GAME.Pos.getY(options.size.y) : options.size.y);
	}
	if (options.position) {
		component.setPosition(
			options.position.pos ? GAME.Pos.getX(options.position.x) : options.position.x,
			options.position.pos ? GAME.Pos.getY(options.position.y) : options.position.y,
		);
	}
	if (options.scale) component.setScale(options.scale.x, options.scale.y);
	if (options.anchor) component[options.anchor.pos ? 'setAnchorSize' : 'setAnchor'](options.anchor.x, options.anchor.y);
	if (options.children && options.children.length) component.addChild(options.children.map(o => GetSkin(o)));
	if (options.animation) BaseAnimation(component, options.animation);
	return component;
}
