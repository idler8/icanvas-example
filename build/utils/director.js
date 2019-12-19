export default superClass => {
	return class Director extends superClass {
		// Actors = {}; //演员
		Scenes = {}; //场景
		// Directors = {}; //子导演
		CurrentScene = null; //当前场景
		GoScene(Type, ...args) {
			console.log('场景切换', Type);
			this.removeChild(this.CurrentScene);
			this.CurrentScene = this.Scenes[Type] ? new this.Scenes[Type](...args) : null;
			this.addChildAt(this.CurrentScene, 0);
			return this;
		}
		Go = this.GoScene;
		setScenes(scenes) {
			Object.assign(this.Scenes, scenes);
			return this;
		}
	};
};
