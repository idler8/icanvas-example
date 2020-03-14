export default app.load = function(url) {
	let key = 'Font' + Date.now();
	let style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
			@font-face {
				font-family: '${key}';
				src: url('${url}');
			}
			body {
				font-family: '${key}';
			}
		`;
	document.body.appendChild(style);
	return key;
};
