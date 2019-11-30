export default {
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
