export default GameGlobal.addEventListener = function(type, callback) {
	if (type == 'touchstart') return wx.onTouchStart(callback);
	if (type == 'touchmove') return wx.onTouchMove(callback);
	if (type == 'touchend') return wx.onTouchEnd(callback);
	if (type == 'touchcancel') return wx.onTouchCancel(callback);
};
