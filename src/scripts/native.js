/**
 * 微信游戏社区入口模块
 */
export let GameClub = {
	Button: null,
	Good: ENV.input.target == 'wxgame' ? typeof wx.createGameClubButton === 'function' : false,
	Show(l, t, w, h) {
		if (!this.Good) return console.warn('不支持Banner广告');
		this.Hide();
		this.Button = wx.createGameClubButton({ type: 'text', text: '', style: { left: 0, top: 0, width: 1, height: 1 } });
		if (!this.Button) return;
		this.SetSize(l, t, w, h);
		this.Button.show();
	},
	SetSize(l, t, w, h) {
		if (!this.Button) return;
		this.Button.style.left = (l * GAME.Api.System.width) / GAME.Pos.width;
		this.Button.style.top = (t * GAME.Api.System.height) / GAME.Pos.height;
		this.Button.style.width = (w * GAME.Api.System.width) / GAME.Pos.width;
		this.Button.style.height = (h * GAME.Api.System.height) / GAME.Pos.height;
	},
	Hide() {
		if (!this.Button) return;
		this.Button.hide();
	},
};
/**
 * 微信Banner广告模块
 */
export let Banner = {
	Ad: null,
	Good: ENV.input.target == 'wxgame' ? typeof wx.createBannerAd === 'function' : false,
	Show(adUnitId) {
		if (!this.Good) return Promise.reject('不支持Banner广告');
		this.Hide();
		return new Promise((resolve, reject) => {
			this.Ad = wx.createBannerAd({ adUnitId, style: { left: 0, top: 0, width: 1, height: 1 } });
			this.Ad.show();
			this.Ad.onResize(e => this.Ad && resolve(e.width / e.height));
			this.Ad.onError(e => this.Ad && reject(e));
		});
	},
	SetSize(l, t, w, h) {
		if (!this.Ad) return;
		this.Ad.style.left = (l * GAME.Api.System.width) / GAME.Pos.width;
		this.Ad.style.top = (t * GAME.Api.System.height) / GAME.Pos.height;
		this.Ad.style.width = (w * GAME.Api.System.width) / GAME.Pos.width;
		this.Ad.style.height = (h * GAME.Api.System.height) / GAME.Pos.height;
	},
	Hide() {
		if (!this.Ad) return;
		this.Ad.hide();
		this.Ad.destroy();
	},
};
/**
 * 开放域调用模块
 */
export let Shared = (function() {
	return {
		Context: GAME.Api.Canvas('share').getContext('2d'),
		Send(data) {
			let promise = Promise.resolve();
			if (!this.Context.postMessage) return promise;
			return promise.then(() => this.Context.postMessage(data));
		},
		SetSize(width, height) {
			this.Context.canvas.width = width;
			this.Context.canvas.height = height;
		},
		get Texture() {
			return new GAME.Component.Texture(this.Context.canvas);
		},
	};
})();
