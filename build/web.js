import fs from 'fs-extra';
import * as cli from './core.js';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import inject from 'rollup-plugin-inject';
import replace from 'rollup-plugin-replace-ast';

import copy from 'rollup-plugin-copy';
import qiniu from 'rollup-plugin-qiniu';
import { terser } from 'rollup-plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import path from 'path';

function create(project, input, dynamic) {
	return {
		input: './src/index.js',
		output: {
			file: '../web/index.js',
			format: 'iife',
		},
		context: 'null',
		moduleContext: 'null',
		plugins: [
			copy({ targets: [{ src: 'resource/local/', dest: '../web/resource/' }] }),
			dynamic.assetsUrl
				? input.upload &&
				  qiniu({
						token: buildToken => buildToken(project.qiniu.Key, project.qiniu.Secret, project.qiniu.Bucket),
						targets: [
							{ src: 'resource/remote/**', dest: 'wx_game/' + dynamic.name + '/' + input.qiniu + '/', zip: 'remote.zip' },
							// { src: 'resource/remote/**', dest: 'wx_game/' + dynamic.name + '/' + input.qiniu + '/', zip: false },
						],
				  })
				: copy({ targets: [{ src: 'resource/remote/', dest: '../web/resource/' }] }),
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
				exclude: ['node_modules/**', 'build/**', 'core/**'],
				GAME: [path.resolve('./core/web.js'), 'default'],
			}),
			replace({ project, input, dynamic }),
			htmlTemplate({
				template: 'build/web.ejs',
				target: '../web/index.html',
				replaceVars: { __TITLE__: project.name },
			}),
			input.mode == 'production' && terser({ sourcemap: false, compress: { drop_console: true, drop_debugger: true } }),
		],
	};
}
import project from './project.json';
export default args => {
	let input = args.input;
	delete args.input;
	input.mode = input.dev ? 'development' : 'production';
	fs.emptyDirSync('../web');
	return create.apply(null, cli.buildArguments(input, project));
};
