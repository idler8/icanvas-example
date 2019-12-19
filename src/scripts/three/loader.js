// const THREE = import('../scripts/three.js');
import * as THREE from './three.js';
import FileLoaderFactory from './FileLoader.js';
const FileLoader = FileLoaderFactory(THREE);
import OBJLoaderFactory from './OBJLoader.js';
const OBJLoader = OBJLoaderFactory(THREE, FileLoader);
import MTLLoaderFactory from './MTLLoader.js';
const MTLLoader = MTLLoaderFactory(THREE, FileLoader);
import { UtilLoader } from '@icanvas/core';

export default class THREEModel extends UtilLoader {
	Set(url) {
		let LoaderMtl = new MTLLoader();
		LoaderMtl.setMaterialOptions({ side: THREE.DoubleSide });
		let Loader = new OBJLoader();
		return new Promise(function(reslove, reject) {
			LoaderMtl.load(url + '.mtl', function(materials) {
				materials.preload();
				Loader.setMaterials(materials);
				Loader.load(url, reslove);
			});
		});
	}
	Get(key) {
		return this.resources[key];
	}
}
