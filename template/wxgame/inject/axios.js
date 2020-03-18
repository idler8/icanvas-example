import qs from 'qs';
const qsConfig = { arrayFormat: 'indices', encodeValuesOnly: true };
function mergeDefaultConfig(config = {}, getMethods, postMethods) {
	let method = config.method || 'get';
	let baseURL = config.baseURL || '';
	let configHeaders = config.headers || {};
	let headers = { common: Object.assign({}, configHeaders.common) };
	getMethods.forEach(method => {
		headers[method] = Object.assign({}, configHeaders[method]);
	});
	postMethods.forEach(method => {
		headers[method] = Object.assign({}, configHeaders[method]);
	});
	let params = config.params ? JSON.parse(JSON.stringify(config.params)) : {};
	let data = config.data ? JSON.parse(JSON.stringify(config.data)) : {};
	return { method, baseURL, headers, params, data };
}

function request(defaultConfig, urlOrConfig = {}, getConfig = {}, interceptors) {
	let method = getConfig.method || urlOrConfig.method || defaultConfig.method;
	let header = Object.assign({}, defaultConfig.headers.common, defaultConfig.headers[method], urlOrConfig.header, getConfig.header);
	let url = (getConfig.baseURL || urlOrConfig.baseURL || defaultConfig.baseURL || '') + (getConfig.url || urlOrConfig.url || defaultConfig.url);
	let params = Object.assign({}, defaultConfig.params, urlOrConfig.params, getConfig.params);
	let data = Object.assign({}, defaultConfig.data, urlOrConfig.data, getConfig.data);
	let dataType = getConfig.dataType || urlOrConfig.dataType || defaultConfig.dataType || 'json';
	let responseType = getConfig.responseType || urlOrConfig.responseType || defaultConfig.responseType || 'text';
	if (method == 'get') {
		params = Object.assign(data, params);
		data = null;
	}
	let promiseConfig = Promise.resolve({ method, url: url + '?' + qs.stringify(params, qsConfig), data, header, dataType, responseType });
	let transformRequest = getConfig.transformRequest || urlOrConfig.transformRequest || interceptors.request.transform;
	if (transformRequest) {
		promiseConfig = transformRequest.reduce((promise, fn) => {
			if (!fn) return promise;
			if (typeof fn == 'function') return promise.then(res => fn(res) || res);
			if (fn.resolve) promise = promise.then(res => fn.resolve(res) || res);
			if (fn.reject) promise = promise.catch(res => fn.reject(res) || res);
			return promise;
		}, promiseConfig);
	}
	let promiseRequest = promiseConfig.then(Config => {
		return new Promise(function(resolve, reject) {
			Config.success = function(res) {
				Config.response = res;
				resolve(Config);
			};
			Config.fail = function(res) {
				Config.error = res;
				reject(Config);
			};
			wx.request(Config);
		});
	});
	let transformResponse = getConfig.transformResponse || urlOrConfig.transformResponse || interceptors.response.transform;
	if (transformResponse) {
		promiseRequest = transformResponse.reduce((promise, fn) => {
			if (!fn) return promise;
			if (typeof fn == 'function') return promise.then(res => fn(res) || res);
			if (fn.resolve) promise = promise.then(res => fn.resolve(res) || res);
			if (fn.reject) promise = promise.catch(res => fn.reject(res) || res);
			return promise;
		}, promiseRequest);
	}
	return promiseRequest;
}
function createInterceptors(resolve, reject) {
	this.transform.push(reject ? { resolve, reject } : resolve);
	return this;
}
function createInstance(defaultConfig, getMethods = ['get'], postMethods = ['post']) {
	let axios = function(urlOrConfig, getConfig) {
		if (typeof urlOrConfig == 'string') {
			urlOrConfig = { url: urlOrConfig, method: 'get' };
		}
		return request(axios.defaults, urlOrConfig, getConfig, axios.interceptors);
	};
	axios.defaults = mergeDefaultConfig(defaultConfig, getMethods, postMethods);
	axios.interceptors = {
		request: { transform: [], use: createInterceptors },
		response: { transform: [], use: createInterceptors },
	};
	axios.create = createInstance;
	axios.request = axios;
	getMethods.forEach(method => {
		axios[method] = function(url, params, config) {
			return axios({ url, method, params }, config);
		};
	});
	postMethods.forEach(method => {
		axios[method] = function(url, data, config) {
			return axios({ url, method, data }, config);
		};
	});
	return axios;
}
export default GameGlobal.axios = createInstance();
