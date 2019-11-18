export class Table {
	Name = 'default_default';
	constructor(database, table = 'default') {
		this.Name = database + '_' + table;
	}
	Data = null;
	Get(key) {
		return this.Data[key];
	}
	Set(Data, Key) {
		if (Key) {
			this.Data[Key] = Data;
		} else {
			this.Data = Data;
		}
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
			this.Set(JSON.parse(Data));
		} catch (e) {
			this.Set({});
		}
		return this;
	}
	MergeTo(Data) {
		return Object.assign(Data, this.Data);
	}
	Merge(Data) {
		Object.assign(this.Data, Data || {});
		return this;
	}
	Execute(Callback) {
		let Res = Callback(this.Data, this);
		if (Res) this.Data = Res;
		return this;
	}
	SetStorage() {
		return GAME.Api.Storage.Set(this.Name, this.Data).then(() => this.Data);
	}
	GetStorage() {
		return GAME.Api.Storage.Get(this.Name).then(res => Object.assign(this.Data, res || {}));
	}
}
export default class Database {
	Name = 'default';
	constructor(database = 'default') {
		this.Name = database;
	}
	Data = {};
	Table(key = 'default') {
		if (!this.Data[key]) this.Data[key] = new Table(this.Name, key);
		return this.Data[key];
	}
	GetString() {
		let Keys = arguments.length ? arguments : Object.keys(this.Data);
		let Data = {};
		for (let i = 0; i < Keys.length; i++) Data[Keys[i]] = this.Data[Keys[i]].Data;
		return JSON.stringify(Data);
	}
	SetString(Data) {
		try {
			Data = JSON.parse(Data);
		} catch (e) {
			return this;
		}
		Object.keys(Data).forEach(key => this.Table(key).Set(Data[key]));
		return this;
	}
}
