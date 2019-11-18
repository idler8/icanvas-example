import fs from 'fs-extra';
import path from 'path';
import pinyin from 'node-pinyin';
export function getDynamic(project, input) {
	let dynamic = {};
	dynamic.buildAt = Date.now();
	dynamic.name = pinyin(project.name, { style: 'toneWithNumber' }).join('');
	dynamic.resourceMap = dirToJson('./resource');
	return dynamic;
}
export function getInput(args) {
	return Object.assign(
		{
			target: 'serve', //打包目标
			mode: 'development', //打包模式
		},
		args,
	);
}
export function dirToJson(DirPath) {
	let Res = {};
	fs.readdirSync(DirPath).forEach(FileName => {
		if (FileName.indexOf('.') == 0) return;
		let FilePath = path.join(DirPath, FileName);
		let Stats = fs.statSync(FilePath);
		if (Stats.isDirectory()) {
			if (!Res[FileName]) Res[FileName] = {};
			if (typeof Res[FileName] == 'string') Res[FileName] = { _: Res[FileName] };
			Object.assign(Res[FileName], dirToJson(FilePath));
		}
		if (Stats.isFile()) {
			let Ext = path.extname(FilePath);
			let Name = path.basename(FilePath, Ext);
			if (Ext && Name) {
				if (!Res[Name]) Res[Name] = Ext.substring(1);
				if (typeof Res[Name] == 'object') Res[Name]._ = Ext.substring(1);
			}
		}
	});
	return Res;
}
export function buildArguments(args, project) {
	let input = getInput(args);
	let dynamic = getDynamic(project, input);
	return [project, input, dynamic];
}
