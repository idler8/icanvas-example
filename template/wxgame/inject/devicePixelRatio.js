if (!GameGlobal.system) GameGlobal.system = wx.getSystemInfoSync();
export default GameGlobal.devicePixelRatio = GameGlobal.system.pixelRatio;
