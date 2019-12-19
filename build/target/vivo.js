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

function create(project, input, dynamic) {
	return {
		input: './src/index.js',
		output: {
			file: '../vivo/src/game.js',
			format: 'iife',
		},
		context: 'null',
		moduleContext: 'null',
		plugins: [
			copy({ targets: [{ src: 'build/utils/vivio/*', dest: '../vivo/' }] }),
			copy({ targets: [{ src: 'resource/local/', dest: '../vivo/src/resource/' }] }),
			dynamic.assetsUrl
				? input.upload &&
				  qiniu({
						token: buildToken => buildToken(project.qiniu.Key, project.qiniu.Secret, project.qiniu.Bucket),
						targets: [
							{ src: 'resource/remote/**', dest: 'wx_game/' + dynamic.name + '/' + input.qiniu + '/', zip: 'remote.zip' },
							// { src: 'resource/remote/**', dest: 'wx_game/' + dynamic.name + '/' + input.qiniu + '/', zip: false },
						],
				  })
				: copy({ targets: [{ src: 'resource/remote/', dest: '../vivo/src/resource/' }] }),
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
			commonjs({}),
			inject({
				exclude: ['node_modules/**', 'build/**'],
				GAME: [path.resolve('./build/core/wxgame.js'), 'default'],
			}),
			replace({ project, input, dynamic }),
			input.mode == 'production' && terser({ sourcemap: false, compress: { drop_console: true, drop_debugger: true } }),
		],
	};
}
import project from '../project.json';
export default args => {
	let input = args.input;
	delete args.input;
	input.mode = input.dev ? 'development' : 'production';
	fs.emptyDirSync('../vivo/dist');
	fs.emptyDirSync('../vivo/build');
	fs.emptyDirSync('../vivo/src');
	fs.writeJSONSync('../vivo/src/manifest.json', project.vivo['manifest']);
	return create.apply(null, cli.buildArguments(input, project));
};
