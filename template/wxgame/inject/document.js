if (!GameGlobal.system) GameGlobal.system = wx.getSystemInfoSync();
if (!GameGlobal.document) {
	GameGlobal.document = {
		body: {
			clientWidth: GameGlobal.system.screenWidth,
			clientHeight: GameGlobal.system.screenHeight,
		},
	};
}
GameGlobal.document.createElement = function(type) {
	if (type == 'canvas') return wx.createCanvas();
	if (type == 'image') return wx.createImage();
	if (type == 'audio') return GameGlobal.Audio ? new GameGlobal.Audio() : wx.createInnerAudioContext();
};
export default GameGlobal.document;
