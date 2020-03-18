//挂载组件生成器
import '../plugins/components/core/sprite.js';
import '../plugins/components/core/scroll.js';
import '../plugins/components/core/text.js';
// import '../plugins/components/core/cache.js';
app.run({ width: 750 }); //初始化渲染器
app.data = { openid: '', locked: 0, users: {}, values: {}, openids: [], sorts: {} };

//更新可用图片列表
function ReceiveResource(res) {
	let images = Loader.loadMap(res.resourceMap, res.assetsUrl + '/', '', ['png', 'jpg']);
	return app.image.loads(images, '');
}
//更新好友信息列表，lock时长内只能调用一次，可强制
function ReceiveFriends(lock) {
	let now = Date.now();
	if (now - app.data.locked < lock) return Promise.resolve();
	app.data.locked = now;
	return new Promise(function(resolve, reject) {
		wx.getFriendCloudStorage({
			keyList: ENV.findKeys,
			success: resolve,
			fail: reject,
		});
	})
		.then(function(res) {
			app.data.openids = res.data.map(function(UserGameData) {
				if (!app.data.users[UserGameData.openid]) app.data.users[UserGameData.openid] = { more: false };
				app.data.users[UserGameData.openid].avatar = UserGameData.avatarUrl; //TODO 标记变化
				app.data.users[UserGameData.openid].nickname = UserGameData.nickname;
				if (!app.data.values[UserGameData.openid]) app.data.values[UserGameData.openid] = {};
				UserGameData.KVDataList.forEach(function(KVData) {
					app.data.values[UserGameData.openid][KVData.key] = KVData.value;
				});
				return UserGameData.openid;
			});
		})
		.then(function() {
			ENV.sortKeys.forEach(function(key) {
				app.data.sorts[key] = [].concat(app.data.openids);
				app.data.sorts[key].sort(function(a, b) {
					return app.data.values[b][key] - app.data.values[a][key];
				});
			});
		})
		.then(function() {
			return new Promise(function(resolve, reject) {
				wx.getUserInfo({
					openIdList: app.data.openids.filter(openid => !app.data.users[openid].more),
					lang: 'zh_CN',
					success: resolve,
					fail: reject,
				});
			});
		})
		.then(function(res) {
			res.data.forEach(function(UserInfo) {
				if (!app.data.users[UserInfo.openId]) app.data.users[UserInfo.openId] = { more: true };
				app.data.users[UserInfo.openId].avatar = UserInfo.avatarUrl; //TODO 标记变化
				app.data.users[UserInfo.openId].gender = UserInfo.gender; //性别
				app.data.users[UserInfo.openId].nickname = UserInfo.nickName; //昵称更新
				app.data.users[UserInfo.openId].country = UserInfo.country; //国家
				app.data.users[UserInfo.openId].province = UserInfo.province; //省
				app.data.users[UserInfo.openId].city = UserInfo.city; //城市
			});
		});
}
function ReceiveValues(values) {
	if (!values) return;
	let KVDataList;
	if (app.data.openid) {
		if (!app.data.values[app.data.openid]) app.data.values[app.data.openid] = {};
		KVDataList = Object.keys(values).map(function(key) {
			app.data.values[app.data.openid][key] = values[key];
			return { key, value: values[key] };
		});
	} else {
		KVDataList = Object.keys(values).map(function(key) {
			return { key, value: values[key] };
		});
	}
	return new Promise(function(resolve, reject) {
		wx.setUserCloudStorage({
			KVDataList: KVDataList,
			success: resolve,
			fail: reject,
		});
	});
}
let Current = ReceiveFriends(0); //生成命令队列
wx.onMessage(data => {
	//进行队列处理
	Current = Current.then(() => {
		console.log('开放域收到信息', data);
		//TODO 更新好友头像资源缓存，按页更新
		//TODO 进行场景切换
		return Promise.resolve()
			.then(() => data.system && Object.assign(app.data, data.system)) //设置系统信息
			.then(() => data.resource && ReceiveResource(data.resource)) //设置资源内容
			.then(() => data.values && ReceiveValues(data.values)) //获取微信数据
			.then(() => data.friend && ReceiveFriends(data.friend)) //获取微信数据
			.then(() => data.scene && app.stage.go(data.scene))
			.then(() => data.emit && app.stage.children[0].emit(data.emit))
			.then(() => app.step()); //显示界面
	}).catch(e => console.error(e));
});
// shared.getGroupInfo = function() {}; //2.10.1 获取群信息
// shared.shareMessageToFriend = function() {}; //2.9.0 给指定好友分享游戏信息
// wx.onInteractiveStorageModified; //2.9.0 监听成功修改好友的互动型托管数据事件 在主域使用
// shared.getPotentialFriendList = function() {}; //2.9.0 获取可能对游戏感兴趣的5个新用户
// shared.routeJSServer = function() {}; //2.8.0 JSServer
// shared.modifyFriendInteractiveStorage = function() {}; //2.7.7 修改好友的互动型托管数据
// shared.getUserInteractiveStorage = function() {}; //2.7.7 获取当前用户的互动型托管数据
// shared.setUserCloudStorage = function() {}; //写入我的游戏数据 完全可用
// shared.removeUserCloudStorage = function() {}; //删除我的游戏数据 完全可用
// shared.getUserCloudStorage = function() {}; //获取我的游戏数据 只能开放域调用
// shared.getGroupCloudStorage = function() {}; //获取群成员游戏数据 只能开放域调用
// shared.getFriendCloudStorage = function() {}; //获取好友游戏数据 只能开放域调用
// shared.getUserInfo = function() {}; //获取我或好友的用户信息 只能开放域调用
