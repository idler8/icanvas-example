import fs from 'fs-extra';
import * as cli from '../utils/core.js';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from 'rollup-plugin-json5';
import inject from 'rollup-plugin-inject';
import replace from 'rollup-plugin-replace-ast';

import htmlTemplate from 'rollup-plugin-generate-html-template';
import dev from 'rollup-plugin-dev';
import livereload from 'rollup-plugin-livereload';
import path from 'path';

function create(project, input, dynamic) {
	return {
		input: './src/index.js',
		output: {
			file: '../serve/index.js',
			format: 'iife',
		},
		context: 'null',
		moduleContext: 'null',
		plugins: [
			resolve({ jsnext: true, preferBuiltins: true, browser: true }),
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
				GAME: [path.resolve('./build/core/web.js'), 'default'],
			}),
			replace({ project, input, dynamic }),
			htmlTemplate({
				template: 'build/utils/web.ejs',
				target: '../serve/index.html',
				replaceVars: { __TITLE__: project.name },
			}),
			dev({
				dirs: ['resource'],
				basePath: '/resource',
				silent: true,
				extend: (app, modules) => app.use(modules.mount('/', modules.serve('../serve/'))),
			}),
			livereload({ watch: ['../serve', './resource'], delay: 200 }),
		],
	};
}
import project from '../project.json';
export default args => {
	let input = args.input;
	delete args.input;
	input.mode = input.dev ? 'development' : 'production';
	fs.emptyDirSync('../serve');
	return create.apply(null, cli.buildArguments(input, project));
};
