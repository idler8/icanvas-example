export default {
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
		this.Button.style.left = (l * GAME.System.width) / GAME.Pos.width;
		this.Button.style.top = (t * GAME.System.height) / GAME.Pos.height;
		this.Button.style.width = (w * GAME.System.width) / GAME.Pos.width;
		this.Button.style.height = (h * GAME.System.height) / GAME.Pos.height;
	},
	Hide() {
		if (!this.Button) return;
		this.Button.hide();
	},
}