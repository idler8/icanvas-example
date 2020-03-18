import * as Core from '@icanvas/core';
class RichAttrs {
	constructor(options = {}) {
		//TODO needUpdate计算
		this.fillStyle = options.fillStyle || '#FFFFFF';
		this.strokeStyle = options.strokeStyle || '#000000';
		this.lineWidth = options.lineWidth || 0;
		this.family = options.family || 'icanvas';
		this.size = options.size || 36;
		this.weight = options.weight || false;
		this.align = options.align || 'center';
		this.baseline = options.baseline || 'middle';
		this.wrapWidth = options.wrapWidth || -1;
		if (options.lineHeight > 0) {
			this.lineHeight = options.lineHeight;
			this.autoLineHeight = false;
		} else {
			this.lineHeight = this.size;
			this.autoLineHeight = true;
		}
		this.icons = options.icons;
		this.needUpdate = true;
	}
	//获取临时属性集
	getAttrs(handle = {}) {
		handle.fillStyle = this.fillStyle;
		handle.strokeStyle = this.strokeStyle;
		handle.lineWidth = this.lineWidth;
		handle.family = this.family;
		handle.size = this.size;
		handle.weight = this.weight;
		return handle;
	}
	//获取特殊标记
	getTags(values, icons) {
		let tags = {}; //文本内特殊标签
		values.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function(tag, action, arg, index) {
			if (action == 'i') {
				if (!icons[arg]) return tag;
				tags[index] = { action, arg: icons[arg], length: tag.length - 1 };
			} else {
				tags[index] = { action, arg: arg == '@' ? family[action] : arg, length: tag.length - 1 };
			}
			return tag;
		});
		return tags;
	}
	//从临时属性集获取字体样式
	getFamily(handle) {
		return handle.size + 'px ' + handle.family + (handle.weight ? ' bold' : '');
	}
	//获取基础结构集
	getStructure(values, context, tags, handle) {
		context.font = this.getFamily(handle);
		let structure = { width: this.wrapWidth, height: 0, contents: [{ width: 0, height: this.lineHeight, contents: [] }] };
		for (let i = 0, len = values.length; i < len; i++) {
			let v = values[i];
			if (tags[i]) {
				let tag = tags[i];
				i += tag.length;
				if (tag.action != 'i') {
					handle[tag.action] = tag.arg;
					context.font = this.getFamily(handle);
				} else {
					this.checkSize(structure, tag.arg.width, tag.arg.height);
				}
				structure.contents[0].contents.push(tag);
			} else if (v === '\n') {
				this.addLine(structure);
			} else {
				let width = context.measureText(v).width;
				this.checkSize(structure, width, handle.size);
				structure.contents[0].contents.push({ value: v, width, height: handle.size });
			}
		}
		structure.height += structure.contents[0].height;
		if (structure.contents[0].width > structure.width) structure.width = structure.contents[0].width;
		return structure;
	}
	//检查结构集的当前大小,进行换行
	checkSize(structure, width, height) {
		let lines = structure.contents;
		if (this.wrapWidth >= 0 && lines[0].width + width > this.wrapWidth) this.addLine(structure);
		if (this.autoLineHeight && height > lines[0].height) lines[0].height = height;
		lines[0].width += width;
	}
	//为结构集换行
	addLine(structure) {
		let lines = structure.contents;
		structure.height += lines[0].height;
		if (lines[0].width > structure.width) structure.width = lines[0].width;
		structure.contents.unshift({ width: 0, height: this.lineHeight, contents: [] });
	}
	//重绘内容
	compute(context, values) {
		if (!values) {
			context.width = context.height = 1;
			this.needUpdate = false;
			return;
		}
		let tags = this.getTags(values, this.icons);
		let handle = this.getAttrs();
		let structure = this.getStructure(values, context, tags, handle);
		this.getAttrs(handle);
		context.canvas.width = structure.width;
		context.canvas.height = structure.height;
		context.font = this.getFamily(handle);
		context.fillStyle = handle.fillStyle;
		context.strokeStyle = handle.strokeStyle;
		context.lineWidth = handle.lineWidth;
		context.textAlign = 'left';
		context.textBaseline = 'top';
		let totalWidth = structure.width;
		let offsetTop = 0;
		for (let i = structure.contents.length - 1; i >= 0; i--) {
			let { width, height, contents } = structure.contents[i];
			let offsetLeft = (totalWidth - width) * 0.5; //handle.align
			for (let j = 0; j < contents.length; j++) {
				let element = contents[j];
				if (element.value) {
					context.fillText(element.value, offsetLeft, offsetTop + (height - element.height) * 0.5); //handle.baseline
					offsetLeft += element.width;
				} else if (element.action == 'i') {
					let image = element.arg;
					let dy = offsetTop + (height - image.height) * 0.5;
					context.drawImage(image.source, offsetLeft, dy, image.width, image.height);
					offsetLeft += image.width;
				} else if (element.action == 'fillStyle') {
					handle[element.action] = element.arg;
					context[element.action] = element.arg;
				} else if (element.action == 'strokeStyle') {
					handle[element.action] = element.arg;
					context[element.action] = element.arg;
				} else if (element.action == 'lineWidth') {
					handle[element.action] = element.arg;
					context[element.action] = element.arg;
				} else {
					handle[element.action] = element.arg;
					context.font = this.getFamily(handle);
				}
			}
			offsetTop += height;
		}
		this.needUpdate = false;
	}
}
class RichText extends Core.Sprite {
	constructor(options = {}) {
		super(options);
		if (!this.texture || !this.texture.getContext) throw 'canvas纹理不存在';
		if (!options.text) throw '富文本计算器不存在';
		this.text = options.text;
		this.needUpdateValue = false;
	}
	get value() {
		return this._value;
	}
	set value(v) {
		let newValue = '' + v;
		if (newValue == this._value) return;
		this._value = newValue;
		this.needUpdateValue = true;
	}
	preUpdate() {
		if (!this.needUpdateValue && !this.text.needUpdate) return;
		this.text.compute(this.texture.getContext('2d'), this.value);
		this.text.needUpdate = false;
		this.needUpdateValue = false;
		this.texture.update();
		this.width = this.texture.width;
		this.height = this.texture.height;
	}
	refresh = this.preUpdate;
}
export default app.text = function(font, options = {}) {
	options.texture = new Core.ImageSource(document.createElement('canvas'));
	options.text = new RichAttrs(font);
	let text = new RichText(options);
	text.value = font.value || '';
	if (font.value) text.refresh();
	return text;
};
