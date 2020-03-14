import fs from 'fs-extra';
import path from 'path';
import 'colors';
import pinyin from 'node-pinyin';

import qiniu from 'rollup-plugin-qiniu';
import resolve from '@rollup/plugin-node-resolve';
import json from 'rollup-plugin-json5';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import replace from 'rollup-plugin-replace-ast';
import { terser } from 'rollup-plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import dev from 'rollup-plugin-dev';
import livereload from 'rollup-plugin-livereload';

import project from './icanvas.config.json';
function DirJsonPlugins(DirPath) {
	let Res = {};
	fs.readdirSync(DirPath).forEach(FileName => {
		if (FileName.indexOf('.') == 0) return;
		let FilePath = path.join(DirPath, FileName);
		let Stats = fs.statSync(FilePath);
		if (Stats.isDirectory()) {
			if (!Res[FileName]) Res[FileName] = {};
			if (typeof Res[FileName] == 'string') Res[FileName] = { _: Res[FileName] };
			Object.assign(Res[FileName], DirJsonPlugins(FilePath));
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
function OptionsPlugin(target, dynamic) {
	if (!target) return;
	target.forEach(function(filepath) {
		filepath = '../' + dynamic.target + filepath;
		let json = fs.readJsonSync(filepath);
		let jsonString = JSON.stringify(json);
		jsonString = jsonString.replace(/\"\{__(.*?)__\}\"/g, function(s, k, i) {
			let res = dynamic[k] === undefined ? 'null' : JSON.stringify(dynamic[k]);
			console.log(('修改独立配置：' + filepath + '{__' + k + '__}  ->  ' + res).magenta);
			return res;
		});
		fs.writeJsonSync(filepath, JSON.parse(jsonString));
	});
}
function ClearPlugin(target, dynamic) {
	if (!target) {
		console.log(('清空文件夹：../' + dynamic.target).yellow);
		return fs.emptyDirSync('../' + dynamic.target);
	}
	target.forEach(function(filepath) {
		console.log(('清空文件夹：../' + dynamic.target + filepath).yellow);
		fs.emptyDirSync('../' + dynamic.target + filepath);
	});
}
function CopyPlugin(target, dynamic, qiniuOptions, version, upload) {
	if (!target) return;
	return Object.keys(target)
		.map(function(from) {
			if (typeof target[from] == 'object') {
				if (!version) {
					let to = '../' + dynamic.target + target[from].local;
					console.log(('文件拷贝：' + from + '  ->  ' + to).green);
					fs.copySync(from, to);
				} else if (target[from].type == 'qiniu') {
					let destPath = 'wx_game/' + dynamic.id + '/' + version + '/';
					let destFile = destPath + from + 'remote.zip';
					dynamic.assetsUrls[from] = qiniuOptions.Url + '/' + destFile;
					if (!upload) return console.log(('增加远程记录值：' + from + '  ->  ' + dynamic.assetsUrls[from]).blue);
					let token = qiniuOptions.Token || (buildToken => buildToken(qiniuOptions.Key, qiniuOptions.Secret, qiniuOptions.Bucket));
					let fileJson = JSON.stringify(DirJsonPlugins(from));
					let globalZip = zip => zip.append(fileJson, { name: 'option.json' });
					console.log(('上传文件资源：' + from + '  ->  ' + dynamic.assetsUrls[from]).blue);
					return qiniu({ token, globalZip, targets: [{ root: from, src: '**', dest: destFile, zip: true }] });
					// { src: 'resource/remote/**', dest: destPath, zip: false },
				} else {
					return;
				}
			} else {
				let to = '../' + dynamic.target + target[from];
				console.log(('文件拷贝：' + from + '  ->  ' + to).green);
				fs.copySync(from, to);
			}
		})
		.filter(qiniu => qiniu);
}
function HtmlPlugin(target, dynamic, plugins) {
	if (!target) return;
	Object.keys(target).forEach(function(template) {
		console.log(('模版建立：' + template + '  ->  ' + '../' + dynamic.target + target[template]).green);
		let html = htmlTemplate({
			template,
			target: '../' + dynamic.target + target[template],
			replaceVars: { __TITLE__: dynamic.name },
		});
		plugins.push(html);
	});
}
function MergePlugin(target, dynamic) {
	if (!target) return;
	Object.keys(target).forEach(function(key) {
		let jsonString = JSON.stringify(target[key]);
		dynamic[key] = JSON.parse(jsonString);
		console.log(('补充配置项：' + key + '  ->  ' + jsonString).cyan);
	});
}
function DeleteInput(args, input) {
	if (!args.input) return JSON.parse(JSON.stringify(input));
	let result = JSON.parse(JSON.stringify(args.input));
	delete args.input;
	return result;
}
export default function rollupOptionBuilder(args, input) {
	input = DeleteInput(args, input);
	let dynamic = { assetsUrls: {} };
	if (!input.target || project.targets.indexOf(input.target) < 0) return console.log('未知的打包目标'.red);
	dynamic.target = input.target;
	dynamic.mode = input.dev ? 'development' : 'production';
	dynamic.webgl = input.webgl;
	dynamic.name = project.name;
	dynamic.id = pinyin(project.name, { style: 'toneWithNumber' }).join('');
	dynamic.resource = DirJsonPlugins('./resource');
	MergePlugin(project.dynamic[dynamic.target], dynamic);
	ClearPlugin(project.clearfile[dynamic.target], dynamic);
	let remotes = CopyPlugin(project.copyfile[dynamic.target], dynamic, project.qiniu, input.qiniu, input.upload);
	OptionsPlugin(project.options[dynamic.target], dynamic);
	let plugins = [
		resolve({ preferBuiltins: true, browser: true }),
		json(),
		babel({
			babelrc: false,
			presets: [['@babel/preset-env', { modules: false }]],
			plugins: ['@babel/proposal-class-properties', '@babel/transform-runtime'],
			exclude: 'node_modules/**',
			externalHelpers: false,
			runtimeHelpers: true,
		}),
		commonjs(),
		inject({
			exclude: ['node_modules/**', 'template/**'],
			GAME: [path.resolve('template/core.js'), 'GAME'],
			app: [path.resolve('template/core.js'), 'app'],
		}),
		replace(dynamic),
	];
	HtmlPlugin(project.html[dynamic.target], dynamic, plugins);
	if (remotes) Array.prototype.push.apply(plugins, remotes);
	if (dynamic.target == 'serve') {
		plugins.push(
			dev({
				dirs: ['resource'],
				basePath: '/resource',
				silent: true,
				extend: (app, modules) => app.use(modules.mount('/', modules.serve('../serve/'))),
			}),
			livereload({ watch: ['../serve', './resource'], delay: 200 }),
		);
	}
	if (dynamic.mode == 'production') plugins.push(terser({ sourcemap: false, compress: input.debug ? null : { drop_console: true, drop_debugger: true } }));
	if (input.debug) console.log(JSON.stringify(dynamic));
	let rollupOption = {
		input: project.input[dynamic.target] || 'src/index.js',
		output: { file: '../' + dynamic.target + (project.output[dynamic.target] || '/index.js'), format: 'iife' },
		context: 'null',
		moduleContext: 'null',
		external: ['window', 'document', 'wx', 'GameGlobal'],
		plugins,
	};
	if (!dynamic.open) return rollupOption;
	input.target = 'wxgame/open';
	return [rollupOption, rollupOptionBuilder(args, input)];
}
