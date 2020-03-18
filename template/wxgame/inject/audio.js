export default GameGlobal.Audio = class Audio {
	constructor(src) {
		this._source = wx.createInnerAudioContext();
		this._state = 0; //开始、载入中、载入完毕、已卸载
		this._currentTime = 0;
		this._loop = false;
		this._volume = 1;
		this._muted = false;
		this._paused = true;
		this._source.onCanplay(() => {
			if (this._state !== 1) return;
			if (this.oncanplay) this.oncanplay();
			this._state = 2;
			this._source.loop = this._loop;
			this._source.volume = this._muted ? 0 : this._volume;
			if (this._currentTime) this._source.seek(this._currentTime);
			if (!this._paused) this._source.play();
		});
		this._source.onEnded(() => {
			if (this.onended) this.onended();
			this.paused = !this.loop;
		});
		if (src) this.src = src;
	}
	get duration() {
		if (this._state !== 2) return 0;
		return this._source.duration;
	}
	get currentTime() {
		if (this._state !== 2) return 0;
		return this._source.currentTime;
	}
	set currentTime(currentTime) {
		this._currentTime = currentTime;
		if (this._state == 2) this._source.seek(currentTime);
	}
	get loop() {
		return this._loop;
	}
	set loop(loop) {
		this._loop = loop;
		if (this._state == 2) this._source.loop = loop;
	}
	get volume() {
		return this._volume;
	}
	set volume(volume) {
		this._volume = volume;
		if (this._state == 2) this._source.volume = volume;
	}
	get muted() {
		return this._muted;
	}
	set muted(muted) {
		this._muted = muted;
		if (this._state == 2) this._source.volume = muted ? 0 : this._volume;
	}
	get paused() {
		return this._paused;
	}
	set paused(paused) {
		paused ? this.pause() : this.play();
	}
	get src() {
		return this._source.src;
	}
	set src(src) {
		if (this._state !== 0) return;
		this._state = 1;
		this._source.src = src;
	}
	play() {
		this._paused = false;
		if (this._state == 2) this._source.play();
		return Promise.resolve();
	}
	pause() {
		this._paused = true;
		if (this._state == 2) this._source.pause();
	}
	destroy() {
		if (this._state == 3) return;
		this._state = 3;
		this._source.stop();
		this._source.destroy();
	}
};
