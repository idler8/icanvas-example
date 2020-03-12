let scenes = { board: null, before: null, range: null };
export default class {
	Receive(data) {
		return Promise.resolve()
			.then(() => {
				if (data.ServerInfo) Object.assign(this.ServerInfo, data.ServerInfo); //优先设置用户信息
				if (data.ThirdInfo) Object.assign(this.ThirdInfo, data.ThirdInfo); //优先设置用户信息
			})
			.then(() => data.resource && GAME.Image.preLoad(data.resource)) //加载资源
			.then(() => data.friend && this.Friend(data.friend.keys, data.friend.sorts)) //获取微信数据
			.then(() => data.upload && this.Upload(data.upload)) //上传数据
			.then(() => data.unlock && Object.keys(this.Lock).forEach(k => (this.Lock[k] = 0))) //解除所有缓存锁
			.then(() => data.merge && this.Merge(data.merge.data, data.merge.keys, data.merge.sorts)) //合并外部数据
			.then(() => data.scene && app.stage.go(new scenes[data.scene]())) //显示界面
			.then(() => data.board && this.Board(data.board.sort, data.board.keys)) //往界面上发送好友榜数据
			.then(() => data.before && this.Before(data.before.key, data.before.score, data.before.force)) //往界面上发送超越数据
			.then(() => data.range && this.Range()) //往界面上发送前中后范围数据
			.catch(e => console.log(e));
	}
	ServerInfo = {};
	ThirdInfo = {};
	Cache = {
		AllUserInfo: {},
		AllFriend: {},
		SortFriend: {},
	};
	Lock = {};
	get MySelf() {
		return this.Cache.AllFriend[this.ServerInfo.openid];
	}
	ReSortKeys(UserList, Sorts) {
		Sorts.forEach(key => {
			this.Cache.SortFriend[key] = UserList.filter(u => u.values[key]).sort((a, b) => (b.values[key] || 0) - (a.values[key] || 0));
			this.Cache.SortFriend[key].forEach((user, i) => (user.sorts[key] = i + 1));
		});
	}
	//获取好友列表并按
	Friend(Keys, Sorts) {
		let GetKeys = Object.keys(Keys).filter(key => !this.Lock[key] || this.Lock[key] <= Date.now());
		if (!GetKeys.length) return Promise.resolve();
		return GAME.Api.setUserCloudStorage([{ key: 'isLogined', value: '1' }], 'KVDataList')
			.then(() => GAME.Api.getFriendCloudStorage(GetKeys, 'keyList'))
			.then(users => {
				GetKeys.forEach(key => (this.Lock[key] = Date.now() + 60000));
				let FriendArray = users.data.map(user => {
					let handle = this.Cache.AllFriend[user.openid];
					if (!handle) this.Cache.AllFriend[user.openid] = handle = { openid: user.openid };
					if (!handle.sorts) handle.sorts = {};
					if (!handle.values) handle.values = {};
					if (!handle.info) handle.info = {};
					handle.info.avatarUrl = user.avatarUrl;
					handle.info.nickName = user.nickname;
					user.KVDataList.forEach(kv => Keys[kv.key] && (handle.values[Keys[kv.key]] = kv.value));
					return handle;
				});
				return this.ReSortKeys(FriendArray, Sorts);
			});
	}
	// 获取外部数据
	// [{ openid: xxxxxx, sort: 排名, nickname: 昵称, avatar: 头像, [ScoreKey]: 分数 }];
	Merge(MergeData, Keys, Sorts) {
		let FriendArray = Object.keys(MergeData).map(openid => {
			let handle = this.Cache.AllFriend[openid];
			if (handle) {
				if (!handle.sorts) handle.sorts = {};
				if (!handle.values) handle.values = {};
				if (!handle.info) handle.info = {};
			} else {
				this.Cache.AllFriend[openid] = handle = { openid, sorts: {}, values: {}, info: {} };
			}
			if (MergeData[openid].info.avatar && !handle.info.avatarUrl) handle.info.avatarUrl = MergeData[openid].info.avatar;
			//TODO http前缀有不是微信域名，则替换默认
			if (MergeData[openid].info.nickname && !handle.info.nickName) handle.info.nickName = MergeData[openid].info.nickname;
			Object.keys(Keys).forEach(k => (handle.values[Keys[k]] = MergeData[openid].values[k]));
			return handle;
		});
		return this.ReSortKeys(FriendArray, Sorts);
	}
	//设置用户得分
	Upload(Values) {
		let MyValues = this.MySelf.values;
		let KVDataList = [];
		Object.keys(Values).forEach(key => {
			let Value = Values[key];
			if (Value.mode == 2) KVDataList.push({ key, value: '' + Value.value });
			if (Value.mode == 1 && (MyValues[Value.rank] === undefined || MyValues[Value.rank] < Value.value)) {
				KVDataList.push({ key, value: '' + Value.value });
			}
			if (Value.mode == 0 && (MyValues[Value.rank] === undefined || MyValues[Value.rank] > Value.value)) {
				KVDataList.push({ key, value: '' + Value.value });
			}
		});
		return KVDataList.length ? GAME.Api.setUserCloudStorage(KVDataList, 'KVDataList') : Promise.resolve();
	}
	//搜索前一位用户
	Before(Key, Score, force) {
		for (let i = this.Cache.SortFriend[Key].length - 1; i >= 0; i--) {
			if (this.Cache.SortFriend[Key][i].openid == this.MySelf.openid) continue;
			if (this.Cache.SortFriend[Key][i].values[Key] > Score) return GAME.Event.emit('before', this.Cache.SortFriend[Key][i], Key, force ? Score : 0);
		}
		return GAME.Event.emit('before');
	}
	//搜索前中后用户
	Range(Key) {
		if (!Key) return GAME.Event.emit('rangeHandle');
		for (let i = 0; i <= this.Cache.SortFriend[Key].length; i++) {
			if (this.Cache.SortFriend[Key][i].openid == this.ServerInfo.openid) {
				let Range = [this.Cache.SortFriend[Key][i - 1], this.Cache.SortFriend[Key][i], this.Cache.SortFriend[Key][i + 1]];
				GAME.Event.emit('range', Range);
			}
		}
	}
	//排行榜初始化
	Board(SortKey, UseKeys) {
		if (!this.Cache.SortFriend[SortKey]) return;
		GAME.Event.emit('board', { sort: SortKey, keys: UseKeys, myself: this.MySelf });
		this.BoardAddUser(SortKey);
	}
	//排行榜加载用户
	BoardAddUser(Sort, Start = 0, End = 10) {
		console.log('请求页码', Start, End);
		if (!this.Cache.SortFriend[Sort]) return;
		if (End < 0 || Start >= this.Cache.SortFriend[Sort].length) return;
		let start = Math.max(Start, 0);
		let end = Math.min(End, this.Cache.SortFriend[Sort].length);
		let users = this.Cache.SortFriend[Sort].slice(start, end + 1);
		GAME.Event.emit('board', { users, start, end });
	}
	//获取用户信息
	SetUserInfo(Users) {
		if (!Users) return Promise.resolve();
		if (Object.prototype.toString.call(Users) != '[object Array]') Users = [Users];
		let WellLoad = Users.filter(user => !user.info.avatarUrl).map(user => user.openid); //TODO 自由判断需要更新键
		if (!WellLoad.length) return Promise.resolve();
		return GAME.Api.getUserInfo(WellLoad, 'openIdList').then(users => {
			users.data.forEach(u => {
				if (!this.Cache.AllFriend[u.openid]) return;
				Object.assign(this.Cache.AllFriend[u.openid].info, u);
			});
		});
	}
	//缓存用户头像
	SetImage(Users) {
		if (!Users) return Promise.resolve();
		if (Object.prototype.toString.call(Users) != '[object Array]') Users = [Users];

		let WellLoad = Users.filter(user => user.info.avatarUrl && !app.image.resources[user.info.avatarUrl]);
		if (!WellLoad.length) return Promise.resolve();
		let promises = WellLoad.map(user => {
			if (!user || !user.openid) return true;
			return app.image.load(user.info.avatarUrl, user.info.avatarUrl);
		});
		return Promise.all(promises);
	}
	//获取用户信息
	GetUserInfo(openid) {
		return this.Cache.AllUserInfo[openid];
	}
}
