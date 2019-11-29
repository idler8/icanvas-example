import * as Core from '@icanvas/core';
let DelStorage =
	ENV.input.target == 'wxgame'
		? Core.UtilWxgameVary('removeStorage')
		: function(key) {
				window.localStorage.removeItem(key);
				return Promise.resolve();
		  };
let GetStorage =
	ENV.input.target == 'wxgame'
		? Core.UtilWxgameVary('getStorage')
		: function(key) {
				return Promise.resolve({ data: window.localStorage.getItem(key) });
		  };
let SetStorage =
	ENV.input.target == 'wxgame'
		? Core.UtilWxgameVary('setStorage')
		: function({ key, data }) {
				window.localStorage.setItem(key, data);
				return Promise.resolve();
		  };
export class Table {
	Name = 'default_default';
	constructor(database = 'default', table = 'default') {
		this.Name = database + '_' + table;
	}
	Data = null;
	Get(key) {
		if (key === undefined) return this.Data;
		return this.Data ? this.Data[key] : undefined;
	}
	Set(Data, Key) {
		if (this.Data) this.Data[Key] = Data;
		return this;
	}
	Add(Key, Data = 1) {
		this.Data[Key] += Data;
		return 1;
	}
	GetString() {
		return JSON.stringify(this.Data);
	}
	SetString(Data) {
		try {
			this.Data = JSON.parse(Data);
		} catch (e) {
			this.Data = null;
		}
		return this;
	}
	Execute(Callback) {
		let Res = Callback(this.Data, this);
		if (Res) this.Data = Res;
		return this;
	}
	SetStorage() {
		return SetStorage({ key: this.Name, data: this.GetString() }).then(() => this.Data);
	}
	GetStorage(merge) {
		return GetStorage(this.Name, 'key')
			.catch(e => e)
			.then(res => this.SetString(res.data, merge));
	}
	DelStorage() {
		return DelStorage(this.Name, 'key').then(() => this.SetString());
	}
}
export class ArrTable extends Table {
	constructor(database, table = 'default', oldData) {
		super(database, table);
		if (oldData) {
			let Data = oldData instanceof Table ? oldData.Data : oldData;
			if (Data) this.Merge(Data);
		}
	}
	Data = [];
	Merge(Data) {
		this.Data = this.Data.concat(Data);
		return this;
	}
	MergeTo(Data) {
		return Data.concat(this.Data);
	}
	SetString(Data, merge = false) {
		let oldData = this.Data;
		super.SetString(Data);
		if (!this.Data instanceof Array) this.Data = [];
		if (merge) this.Data = oldData.concat(this.Data);
		return this;
	}
	get length() {
		return this.Data.length;
	}
	Insert(value, index = -1) {
		if (index == -1) {
			this.Data.push(value);
		} else if (index == 0) {
			this.Data.unshift(value);
		} else {
			this.Data.splice(index, 0, value);
		}
		return this;
	}
}
export class MapTable extends Table {
	constructor(database, table = 'default', oldData) {
		super(database, table);
		if (oldData) {
			let Data = oldData instanceof Table ? oldData.Data : oldData;
			if (Data) this.Merge(Data);
		}
	}
	Data = {};
	MergeTo(Data) {
		return Object.assign(Data, this.Data);
	}
	Merge(Data) {
		this.Data = Object.assign(this.Data || {}, Data || {});
		return this;
	}
	SetString(Data, merge = false) {
		let oldData = this.Data;
		super.SetString(Data);
		if (typeof this.Data != 'object') this.Data = {};
		if (merge) this.Data = Object.assign(oldData, this.Data);
		return this;
	}
}
export default class Database {
	Name = 'default';
	constructor(database = 'default') {
		this.Name = database;
	}
	Data = {};
	Map(key = 'default') {
		if (this.Data[key] instanceof MapTable) return this.Data[key];
		this.Data[key] = new MapTable(this.Name, key, this.Data[key]);
		return this.Data[key];
	}
	Arr(key = 'default') {
		if (this.Data[key] instanceof ArrTable) return this.Data[key];
		this.Data[key] = new ArrTable(this.Name, key, this.Data[key]);
		return this.Data[key];
	}
	Table(key = 'default') {
		if (!this.Data[key]) this.Data[key] = new Table(this.Name, key);
		return this.Data[key];
	}
	MergeMap(key, value) {
		return this.Map(key).Merge(value);
	}
	MergeArr(key, value) {
		return this.Arr(key).Merge(value);
	}
	GetString() {
		let Keys = arguments.length ? arguments : Object.keys(this.Data);
		let Data = {};
		for (let i = 0; i < Keys.length; i++) Data[Keys[i]] = this.Data[Keys[i]].GetString();
		return JSON.stringify(Data);
	}
	SetString(Data) {
		try {
			Data = JSON.parse(Data);
		} catch (e) {
			return this;
		}
		Object.keys(Data).forEach(key => {
			this.Data[key] = this.Table(key).SetString(Data[key]);
		});
		return this;
	}
}
