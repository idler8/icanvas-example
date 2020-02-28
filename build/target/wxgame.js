import fs from 'fs-extra';
import * as cli from '../utils/core.js';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from 'rollup-plugin-json5';
import inject from 'rollup-plugin-inject';
import replace from 'rollup-plugin-replace-ast';

import copy from 'rollup-plugin-copy';
import qiniu from 'rollup-plugin-qiniu';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

function createOpen(project, input, dynamic) {
	return {
		input: './src.open/index.js',
		output: {
			file: '../wxgame/' + project.wxgame['game.json'].openDataContext + '/index.js',
			format: 'iife',
		},
		context: 'null',
		moduleContext: 'null',
		plugins: [
			resolve({}),
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
				exclude: ['node_modules/**', 'build/**'],
				GAME: [path.resolve('./build/core/open.js'), 'GAME'],
				app: [path.resolve('./build/core/open.js'), 'app'],
			}),
			replace({ project, input, dynamic, open: true }),
			input.mode == 'production' && terser({ sourcemap: false, compress: { drop_console: true, drop_debugger: true } }),
		],
	};
}
function create(project, input, dynamic) {
	return {
		input: './src/index.js',
		output: {
			file: '../wxgame/game.js',
			format: 'iife',
		},
		context: 'null',
		moduleContext: 'null',
		external: ['window', 'document', 'wx'],
		plugins: [
			copy({ targets: [{ src: 'resource/local/', dest: '../wxgame/resource/' }] }),
			dynamic.assetsUrl
				? input.upload &&
				  qiniu({
						token: buildToken => buildToken(project.qiniu.Key, project.qiniu.Secret, project.qiniu.Bucket),
						targets: [
							{
								root: 'resource/remote/',
								src: '**',
								dest: 'wx_game/' + dynamic.name + '/' + input.qiniu + '/remote.zip',
								zip(zip) {
									zip.append(JSON.stringify(dynamic.resource.remote), { name: 'option.json' });
								},
							},
							// { src: 'resource/remote/**', dest: 'wx_game/' + dynamic.name + '/' + input.qiniu + '/', zip: false },
						],
				  })
				: copy({ targets: [{ src: 'resource/remote/', dest: '../wxgame/resource/' }] }),
			resolve(),
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
				exclude: ['node_modules/**', 'build/**'],
				GAME: [path.resolve('./build/core/wxgame.js'), 'GAME'],
				app: [path.resolve('./build/core/wxgame.js'), 'app'],
			}),
			replace({ project, input, dynamic }),
			input.mode == 'production' && terser({ sourcemap: false, compress: { drop_console: true, drop_debugger: true } }),
		],
	};
}
function checkOpen(project, input, dynamic) {
	if (project.qiniu && input.qiniu) dynamic.assetsUrl = project.qiniu.Url + '/wx_game/' + dynamic.name + '/' + input.qiniu + '/remote.zip';
	fs.writeJSONSync('../wxgame/game.json', project.wxgame['game.json']);
	fs.writeJSONSync('../wxgame/project.config.json', Object.assign({ projectname: project.name }, project.wxgame['project.config.json']));
	if (project.wxgame['game.json'].openDataContext) return [create(project, input, dynamic), createOpen(project, input, dynamic)];
	return create(project, input, dynamic);
}
import project from '../project.json';
export default args => {
	let input = args.input;
	delete args.input;
	input.mode = input.dev ? 'development' : 'production';
	fs.emptyDirSync('../wxgame');
	return checkOpen.apply(null, cli.buildArguments(input, project));
};
