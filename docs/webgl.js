(function () {
   'use strict';
 
   function _classCallCheck(instance, Constructor) {
     if (!(instance instanceof Constructor)) {
       throw new TypeError("Cannot call a class as a function");
     }
   }
 
   var classCallCheck = _classCallCheck;
 
   function _defineProperties(target, props) {
     for (var i = 0; i < props.length; i++) {
       var descriptor = props[i];
       descriptor.enumerable = descriptor.enumerable || false;
       descriptor.configurable = true;
       if ("value" in descriptor) descriptor.writable = true;
       Object.defineProperty(target, descriptor.key, descriptor);
     }
   }
 
   function _createClass(Constructor, protoProps, staticProps) {
     if (protoProps) _defineProperties(Constructor.prototype, protoProps);
     if (staticProps) _defineProperties(Constructor, staticProps);
     return Constructor;
   }
 
   var createClass = _createClass;
 
   var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
 
   function createCommonjsModule(fn, module) {
      return module = { exports: {} }, fn(module, module.exports), module.exports;
   }
 
   var _typeof_1 = createCommonjsModule(function (module) {
   function _typeof(obj) {
     "@babel/helpers - typeof";
 
     if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
       module.exports = _typeof = function _typeof(obj) {
         return typeof obj;
       };
     } else {
       module.exports = _typeof = function _typeof(obj) {
         return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
       };
     }
 
     return _typeof(obj);
   }
 
   module.exports = _typeof;
   });
 
   function _assertThisInitialized(self) {
     if (self === void 0) {
       throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
     }
 
     return self;
   }
 
   var assertThisInitialized = _assertThisInitialized;
 
   function _possibleConstructorReturn(self, call) {
     if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
       return call;
     }
 
     return assertThisInitialized(self);
   }
 
   var possibleConstructorReturn = _possibleConstructorReturn;
 
   var getPrototypeOf = createCommonjsModule(function (module) {
   function _getPrototypeOf(o) {
     module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
       return o.__proto__ || Object.getPrototypeOf(o);
     };
     return _getPrototypeOf(o);
   }
 
   module.exports = _getPrototypeOf;
   });
 
   var setPrototypeOf = createCommonjsModule(function (module) {
   function _setPrototypeOf(o, p) {
     module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
       o.__proto__ = p;
       return o;
     };
 
     return _setPrototypeOf(o, p);
   }
 
   module.exports = _setPrototypeOf;
   });
 
   function _inherits(subClass, superClass) {
     if (typeof superClass !== "function" && superClass !== null) {
       throw new TypeError("Super expression must either be null or a function");
     }
 
     subClass.prototype = Object.create(superClass && superClass.prototype, {
       constructor: {
         value: subClass,
         writable: true,
         configurable: true
       }
     });
     if (superClass) setPrototypeOf(subClass, superClass);
   }
 
   var inherits = _inherits;
 
   function _superPropBase(object, property) {
     while (!Object.prototype.hasOwnProperty.call(object, property)) {
       object = getPrototypeOf(object);
       if (object === null) break;
     }
 
     return object;
   }
 
   var superPropBase = _superPropBase;
 
   var get = createCommonjsModule(function (module) {
   function _get(target, property, receiver) {
     if (typeof Reflect !== "undefined" && Reflect.get) {
       module.exports = _get = Reflect.get;
     } else {
       module.exports = _get = function _get(target, property, receiver) {
         var base = superPropBase(target, property);
         if (!base) return;
         var desc = Object.getOwnPropertyDescriptor(base, property);
 
         if (desc.get) {
           return desc.get.call(receiver);
         }
 
         return desc.value;
       };
     }
 
     return _get(target, property, receiver || target);
   }
 
   module.exports = _get;
   });
 
   var construct = createCommonjsModule(function (module) {
   function isNativeReflectConstruct() {
     if (typeof Reflect === "undefined" || !Reflect.construct) return false;
     if (Reflect.construct.sham) return false;
     if (typeof Proxy === "function") return true;
 
     try {
       Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
       return true;
     } catch (e) {
       return false;
     }
   }
 
   function _construct(Parent, args, Class) {
     if (isNativeReflectConstruct()) {
       module.exports = _construct = Reflect.construct;
     } else {
       module.exports = _construct = function _construct(Parent, args, Class) {
         var a = [null];
         a.push.apply(a, args);
         var Constructor = Function.bind.apply(Parent, a);
         var instance = new Constructor();
         if (Class) setPrototypeOf(instance, Class.prototype);
         return instance;
       };
     }
 
     return _construct.apply(null, arguments);
   }
 
   module.exports = _construct;
   });
 
   function _arrayWithoutHoles(arr) {
     if (Array.isArray(arr)) {
       for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
         arr2[i] = arr[i];
       }
 
       return arr2;
     }
   }
 
   var arrayWithoutHoles = _arrayWithoutHoles;
 
   function _iterableToArray(iter) {
     if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
   }
 
   var iterableToArray = _iterableToArray;
 
   function _nonIterableSpread() {
     throw new TypeError("Invalid attempt to spread non-iterable instance");
   }
 
   var nonIterableSpread = _nonIterableSpread;
 
   function _toConsumableArray(arr) {
     return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
   }
 
   var toConsumableArray = _toConsumableArray;
 
   function _defineProperty(obj, key, value) {
     if (key in obj) {
       Object.defineProperty(obj, key, {
         value: value,
         enumerable: true,
         configurable: true,
         writable: true
       });
     } else {
       obj[key] = value;
     }
 
     return obj;
   }
 
   var defineProperty = _defineProperty;
 
   /**
    * @class 扩展数组类
    */
   var Vector =
   /*#__PURE__*/
   function () {
     createClass(Vector, [{
       key: "length",
       get: function get() {
         return this.elements ? this.elements.length : 0;
       }
     }]);
 
     function Vector() {
       classCallCheck(this, Vector);
 
       this.elements = [];
       if (arguments.length) for (var i = 0; i < arguments.length; i++) {
         this.elements[i] = arguments[i];
       }
     } //向量置零
 
 
     createClass(Vector, [{
       key: "same",
       value: function same(n) {
         for (var i = 0; i < this.length; i++) {
           this.elements[i] = n;
         }
 
         return this;
       } //类型变换
 
     }, {
       key: "typeTo",
       value: function typeTo(superClass) {
         this.elements = new superClass(this.elements);
         return this;
       } //向量归一化
 
     }, {
       key: "normalize",
       value: function normalize() {
         var total = 0;
 
         for (var i = 0, len = this.length; i < len; i++) {
           total += this.elements[i] * this.elements[i];
         }
 
         total = Math.sqrt(total);
         if (!total) return this.same(0);
         if (total == 1) return this;
 
         for (var _i = 0; _i < this.length; _i++) {
           this.elements[_i] /= total;
         }
 
         return this;
       }
       /**
        * 将数组所有内容设置为同一个值
        * @param {Any} n
        */
 
     }, {
       key: "set",
       value: function set() {
         if (!arguments.length) return this;
 
         for (var i = 0; i < arguments.length; i++) {
           this.elements[i] = arguments[i];
         }
 
         return this;
       }
       /**
        * 将数组参数分别设置为float数组的值
        * @param {Array} float
        */
 
     }, {
       key: "setApply",
       value: function setApply(vector) {
         if (vector === this) return this;
         return this.set.apply(this, vector.elements || vector);
       }
       /**
        * 拷贝本类
        */
 
     }, {
       key: "clone",
       value: function clone() {
         return new this.constructor().setApply(this);
       }
       /**
        * 判断数组长度和内部值全部相同
        * @param {Array} float 用来比较的数组
        * @param {Boolean} absolute 是否判断长度相同
        */
 
     }, {
       key: "equals",
       value: function equals(_float) {
         var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
         if (absolute && this.length != _float.length) return false;
         var length = absolute ? this.length : Math.min(this.length, _float.length);
 
         for (var i = 0; i < length; i++) {
           if (this[i] != _float[i]) return false;
         }
 
         return true;
       }
       /**
        * 判断数组各值和各实参相同
        */
 
     }, {
       key: "equalsApply",
       value: function equalsApply() {
         return this.equals(arguments);
       }
       /**
        * 向量加法
        */
 
     }, {
       key: "add",
       value: function add() {
         if (!arguments.length) return this;
 
         for (var i = 0; i < arguments.length; i++) {
           this.elements[i] += arguments[i];
         }
 
         return this;
       }
     }, {
       key: "addApply",
       value: function addApply(vector) {
         return this.add.apply(this, vector.elements || vector);
       }
       /**
        * 向量减法
        */
 
     }, {
       key: "sub",
       value: function sub() {
         if (!arguments.length) return this;
 
         for (var i = 0; i < arguments.length; i++) {
           this.elements[i] -= arguments[i];
         }
 
         return this;
       }
     }, {
       key: "subApply",
       value: function subApply(vector) {
         return this.sub.apply(this, vector.elements || vector);
       }
       /**
        * 向量乘法
        */
 
     }, {
       key: "mult",
       value: function mult() {
         if (!arguments.length) return this;
 
         for (var i = 0; i < arguments.length; i++) {
           this.elements[i] *= arguments[i];
         }
 
         return this;
       }
     }, {
       key: "multApply",
       value: function multApply(vector) {
         return this.mult.apply(this, vector.elements || vector);
       }
       /**
        * 向量除法
        */
 
     }, {
       key: "div",
       value: function div() {
         if (!arguments.length) return this;
 
         for (var i = 0; i < arguments.length; i++) {
           this.elements[i] /= arguments[i];
         }
 
         return this;
       }
     }, {
       key: "divApply",
       value: function divApply(vector) {
         return this.div.apply(this, vector.elements || vector);
       }
     }]);
 
     return Vector;
   }();
 
   var Vector2 =
   /*#__PURE__*/
   function (_Vector) {
     inherits(Vector2, _Vector);
 
     function Vector2() {
       var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
       var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
 
       classCallCheck(this, Vector2);
 
       return possibleConstructorReturn(this, getPrototypeOf(Vector2).call(this, x, y));
     }
 
     createClass(Vector2, [{
       key: "rotate",
       //旋转向量
       value: function rotate(rads) {
         var s = Math.sin(rads);
         var c = Math.cos(rads);
         var xrot = c * this.x - s * this.y;
         this.y = s * this.x + c * this.y;
         this.x = xrot;
         return this;
       } //距离计算
 
     }, {
       key: "dist",
       value: function dist() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
         var dx = this.x - x;
         var dy = this.y - y;
         return Math.sqrt(dx * dx + dy * dy);
       }
     }, {
       key: "distVector",
       value: function distVector(vector2) {
         return this.dist(vector2.x, vector2.y);
       } //计算夹角
 
     }, {
       key: "angle",
       value: function angle(vector2) {
         var mag = this.dist() * vector2.dist();
         var dot = this.x * vector2.x + this.y * vector2.y;
         return Math.acos(dot / mag);
       } //判断不规则碰撞
 
     }, {
       key: "inPolygon",
       value: function inPolygon(vs) {
         if (arguments.length > 1) vs = arguments;
         if (vs.length < 3) return false;
         var inside = false;
 
         for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
           var xi = vs[i].x,
               yi = vs[i].y,
               xj = vs[j].x,
               yj = vs[j].y,
               intersect = yi > this.y != yj > this.y && this.x < (xj - xi) * (this.y - yi) / (yj - yi) + xi;
           if (intersect) inside = !inside;
         }
 
         return inside;
       }
     }, {
       key: "multiplyMatrix4",
       value: function multiplyMatrix4(matrix4) {
         var e = matrix4.elements;
         var p = this.elements;
         var w = 1 / (e[3] * p[0] + e[7] * p[1] + e[15]);
         return this.set((e[0] * p[0] + e[4] * p[1] + e[12]) * w, (e[1] * p[0] + e[5] * p[1] + e[13]) * w);
       }
     }, {
       key: "x",
       get: function get() {
         return this.elements[0];
       },
       set: function set(x) {
         this.elements[0] = x;
       }
     }, {
       key: "y",
       get: function get() {
         return this.elements[1];
       },
       set: function set(y) {
         this.elements[1] = y;
       }
     }]);
 
     return Vector2;
   }(Vector);
 
   var Vector3 =
   /*#__PURE__*/
   function (_Vector) {
     inherits(Vector3, _Vector);
 
     function Vector3() {
       var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
       var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
       var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
 
       classCallCheck(this, Vector3);
 
       return possibleConstructorReturn(this, getPrototypeOf(Vector3).call(this, x, y, z));
     }
 
     createClass(Vector3, [{
       key: "dist",
       //距离计算
       value: function dist() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
         var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
         var dx = this.x - x;
         var dy = this.y - y;
         var dz = this.z - z;
         return Math.sqrt(dx * dx + dy * dy + dz * dz);
       }
     }, {
       key: "distVector",
       value: function distVector(vector3) {
         return this.dist(vector3.x, vector3.y, vector3.z);
       } //计算夹角
 
     }, {
       key: "angle",
       value: function angle(vector3) {
         var mag = this.dist() * vector3.dist();
         var dot = this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
         return Math.acos(dot / mag);
       }
     }, {
       key: "multiplyMatrix4",
       value: function multiplyMatrix4(matrix4) {
         var p = this.elements;
         var e = matrix4.elements;
         var w = 1 / (e[3] * p[0] + e[7] * p[1] + e[11] * p[2] + e[15]);
         return this.set((e[0] * p[0] + e[4] * p[1] + e[8] * p[2] + e[12]) * w, (e[1] * p[0] + e[5] * p[1] + e[9] * p[2] + e[13]) * w, (e[2] * p[0] + e[6] * p[1] + e[10] * p[2] + e[14]) * w);
       }
     }, {
       key: "x",
       get: function get() {
         return this.elements[0];
       },
       set: function set(x) {
         this.elements[0] = x;
       }
     }, {
       key: "y",
       get: function get() {
         return this.elements[1];
       },
       set: function set(y) {
         this.elements[1] = y;
       }
     }, {
       key: "z",
       get: function get() {
         return this.elements[2];
       },
       set: function set(z) {
         this.elements[2] = z;
       }
     }]);
 
     return Vector3;
   }(Vector);
 
   var Matrix4 =
   /*#__PURE__*/
   function (_Vector) {
     inherits(Matrix4, _Vector);
 
     function Matrix4(vector) {
       var _this;
 
       classCallCheck(this, Matrix4);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Matrix4).call(this, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1));
       if (vector) _this.setApply(vector);
       return _this;
     } //重置为单位矩阵
 
 
     createClass(Matrix4, [{
       key: "identity",
       value: function identity() {
         return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
       } //乘以Matrix4
 
     }, {
       key: "multiply",
       value: function multiply(matrix4) {
         var i, e, a, b, ai0, ai1, ai2, ai3; // Calculate e = a * b
 
         e = this.elements;
         a = this.elements;
         b = matrix4.elements; // If e equals b, copy b to temporary matrix.
 
         if (e === b) {
           b = new Float32Array(16);
 
           for (i = 0; i < 16; ++i) {
             b[i] = e[i];
           }
         }
 
         for (i = 0; i < 4; i++) {
           ai0 = a[i];
           ai1 = a[i + 4];
           ai2 = a[i + 8];
           ai3 = a[i + 12];
           e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
           e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
           e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
           e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
         }
 
         return this;
       }
       /**
        * 乘以一个点返回一个新点
        */
 
     }, {
       key: "multiplyVector3",
       value: function multiplyVector3(vector3) {
         var e = this.elements;
         var p = vector3.elements;
         var x = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[12];
         var y = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[13];
         var z = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[14];
         vector3.x = x;
         vector3.y = y;
         vector3.z = z;
         return vector3;
       } // multiplyVector4(vector4) {
       // 	var e = this.elements;
       // 	var p = vector4.elements;
       // 	return new Vector4(
       // 		p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12],
       // 		p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13],
       // 		p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14],
       // 		p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15],
       // 	);
       // }
 
       /**
        * 转置矩阵
        */
 
     }, {
       key: "transpose",
       value: function transpose() {
         var e = this.elements;
         return this.set(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]);
       }
       /**
        * 设置为逆矩阵
        */
 
     }, {
       key: "invert",
       value: function invert(matrix4) {
         var i, s, d, inv, det;
         s = matrix4 ? matrix4.elements || matrix4 : this.elements;
         d = this.elements;
         inv = Matrix4.invertHandle || (Matrix4.invertHandle = []);
         inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
         inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
         inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
         inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];
         inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
         inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
         inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
         inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];
         inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
         inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
         inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
         inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];
         inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
         inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
         inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
         inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];
         det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];
         if (det === 0) return this;
         det = 1 / det;
 
         for (i = 0; i < 16; i++) {
           d[i] = inv[i] * det;
         }
 
         return this;
       } // /**
       //  * 设置正交投影
       //  */
 
     }, {
       key: "setOrtho",
       value: function setOrtho(left, right, bottom, top, near, far) {
         var e, rw, rh, rd;
 
         if (left === right || bottom === top || near === far) {
           throw 'null frustum';
         }
 
         rw = 1 / (right - left);
         rh = 1 / (top - bottom);
         rd = 1 / (far - near);
         e = this.elements;
         e[0] = 2 * rw;
         e[1] = 0;
         e[2] = 0;
         e[3] = 0;
         e[4] = 0;
         e[5] = 2 * rh;
         e[6] = 0;
         e[7] = 0;
         e[8] = 0;
         e[9] = 0;
         e[10] = -2 * rd;
         e[11] = 0;
         e[12] = -(right + left) * rw;
         e[13] = -(top + bottom) * rh;
         e[14] = -(far + near) * rd;
         e[15] = 1;
         return this;
       } // ortho(left, right, bottom, top, near, far) {
       //     return this.multiply(new Matrix4().setOrtho(left, right, bottom, top, near, far));
       // }
       // /**
       //  * 设置透视投影
       //  */
       // setFrustum(left, right, bottom, top, near, far) {
       //     var e, rw, rh, rd;
       //     if (left === right || top === bottom || near === far) {
       //         throw 'null frustum';
       //     }
       //     if (near <= 0) {
       //         throw 'near <= 0';
       //     }
       //     if (far <= 0) {
       //         throw 'far <= 0';
       //     }
       //     rw = 1 / (right - left);
       //     rh = 1 / (top - bottom);
       //     rd = 1 / (far - near);
       //     e = this.elements;
       //     e[0] = 2 * near * rw;
       //     e[1] = 0;
       //     e[2] = 0;
       //     e[3] = 0;
       //     e[4] = 0;
       //     e[5] = 2 * near * rh;
       //     e[6] = 0;
       //     e[7] = 0;
       //     e[8] = (right + left) * rw;
       //     e[9] = (top + bottom) * rh;
       //     e[10] = -(far + near) * rd;
       //     e[11] = -1;
       //     e[12] = 0;
       //     e[13] = 0;
       //     e[14] = -2 * near * far * rd;
       //     e[15] = 0;
       //     return this;
       // }
       // frustum (left, right, bottom, top, near, far) {
       //     return this.multiply(new Matrix4().setFrustum(left, right, bottom, top, near, far));
       // }
       // /**
       //  * 通过视锥角度和长宽比设置透视投影
       //  */
       // setPerspective = function(fovy, aspect, near, far) {
       //     var e, rd, s, ct;
       //     if (near === far || aspect === 0) {
       //         throw 'null frustum';
       //     }
       //     if (near <= 0) {
       //         throw 'near <= 0';
       //     }
       //     if (far <= 0) {
       //         throw 'far <= 0';
       //     }
       //     fovy = (Math.PI * fovy) / 180 / 2;
       //     s = Math.sin(fovy);
       //     if (s === 0) {
       //         throw 'null frustum';
       //     }
       //     rd = 1 / (far - near);
       //     ct = Math.cos(fovy) / s;
       //     e = this.elements;
       //     e[0] = ct / aspect;
       //     e[1] = 0;
       //     e[2] = 0;
       //     e[3] = 0;
       //     e[4] = 0;
       //     e[5] = ct;
       //     e[6] = 0;
       //     e[7] = 0;
       //     e[8] = 0;
       //     e[9] = 0;
       //     e[10] = -(far + near) * rd;
       //     e[11] = -1;
       //     e[12] = 0;
       //     e[13] = 0;
       //     e[14] = -2 * near * far * rd;
       //     e[15] = 0;
       //     return this;
       // }
       // perspective (fovy, aspect, near, far) {
       //     return this.multiply(new Matrix4().setPerspective(fovy, aspect, near, far));
       // }
 
       /**
        * 矩阵缩放
        */
 
     }, {
       key: "setScale",
       value: function setScale() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
         var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
         return this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
       }
     }, {
       key: "scale",
       value: function scale() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
         var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
         return this.mult(x, x, x, x, y, y, y, y, z, z, z, z);
       }
       /**
        * 矩阵移动
        */
 
     }, {
       key: "setTranslate",
       value: function setTranslate() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
         var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
         return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
       }
     }, {
       key: "translate",
       value: function translate() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
         var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
         var e = this.elements;
         e[12] += e[0] * x + e[4] * y + e[8] * z;
         e[13] += e[1] * x + e[5] * y + e[9] * z;
         e[14] += e[2] * x + e[6] * y + e[10] * z;
         e[15] += e[3] * x + e[7] * y + e[11] * z;
         return this;
       }
       /**
        * 矩阵旋转(弧度)
        */
 
     }, {
       key: "setRotate",
       value: function setRotate(angle, x, y, z) {
         var s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs, e;
         e = this.elements;
         s = Math.sin(angle);
         c = Math.cos(angle);
 
         if (0 !== x && 0 === y && 0 === z) {
           if (x < 0) s = -s;
           return this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
         } else if (0 === x && 0 !== y && 0 === z) {
           if (y < 0) s = -s;
           return this.set(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
         } else if (0 === x && 0 === y && 0 !== z) {
           if (z < 0) s = -s;
           return this.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
         } else {
           len = Math.sqrt(x * x + y * y + z * z);
 
           if (len !== 1) {
             rlen = 1 / len;
             x *= rlen;
             y *= rlen;
             z *= rlen;
           }
 
           nc = 1 - c;
           xy = x * y;
           yz = y * z;
           zx = z * x;
           xs = x * s;
           ys = y * s;
           zs = z * s;
           return this.set(x * x * nc + c, xy * nc + zs, zx * nc - ys, 0, xy * nc - zs, y * y * nc + c, yz * nc + xs, 0, zx * nc + ys, yz * nc - xs, z * z * nc + c, 0, 0, 0, 0, 1);
         }
       }
     }, {
       key: "rotate",
       value: function rotate(angle, x, y, z) {
         return this.multiply(new Matrix4().setRotate(angle, x, y, z));
       } // /**
       //  * 设置矩阵视角
       //  */
       // setLookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
       // 	var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;
       // 	fx = centerX - eyeX;
       // 	fy = centerY - eyeY;
       // 	fz = centerZ - eyeZ;
       // 	// Normalize f.
       // 	rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
       // 	fx *= rlf;
       // 	fy *= rlf;
       // 	fz *= rlf;
       // 	// Calculate cross product of f and up.
       // 	sx = fy * upZ - fz * upY;
       // 	sy = fz * upX - fx * upZ;
       // 	sz = fx * upY - fy * upX;
       // 	// Normalize s.
       // 	rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
       // 	sx *= rls;
       // 	sy *= rls;
       // 	sz *= rls;
       // 	// Calculate cross product of s and f.
       // 	ux = sy * fz - sz * fy;
       // 	uy = sz * fx - sx * fz;
       // 	uz = sx * fy - sy * fx;
       // 	return this.set(sx, ux, -fx, 0, sy, uy, -fy, 0, sz, uz, -fz, 0, 0, 0, 0, 1).translate(-eyeX, -eyeY, -eyeZ);
       // };
       // lookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
       // 	return this.multiply(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
       // }
       // /**
       //  * Multiply the matrix for project vertex to plane from the right.
       //  * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
       //  * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
       //  * @return this
       //  */
       // dropShadow(plane, light) {
       // 	var mat = new Matrix4();
       // 	var e = mat.elements;
       // 	var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];
       // 	e[0] = dot - light[0] * plane[0];
       // 	e[1] = -light[1] * plane[0];
       // 	e[2] = -light[2] * plane[0];
       // 	e[3] = -light[3] * plane[0];
       // 	e[4] = -light[0] * plane[1];
       // 	e[5] = dot - light[1] * plane[1];
       // 	e[6] = -light[2] * plane[1];
       // 	e[7] = -light[3] * plane[1];
       // 	e[8] = -light[0] * plane[2];
       // 	e[9] = -light[1] * plane[2];
       // 	e[10] = dot - light[2] * plane[2];
       // 	e[11] = -light[3] * plane[2];
       // 	e[12] = -light[0] * plane[3];
       // 	e[13] = -light[1] * plane[3];
       // 	e[14] = -light[2] * plane[3];
       // 	e[15] = dot - light[3] * plane[3];
       // 	return this.concat(mat);
       // }
       // /**
       //  * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
       //  * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
       //  * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
       //  * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
       //  * @return this
       //  */
       // ropShadowDirectionally(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
       // 	var a = planeX * normX + planeY * normY + planeZ * normZ;
       // 	return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
       // }
 
     }]);
 
     return Matrix4;
   }(Vector);
 
   var Week = ['日', '一', '二', '三', '四', '五', '六'];
 
   var Time =
   /*#__PURE__*/
   function () {
     function Time() {
       classCallCheck(this, Time);
 
       this.Date = null;
     }
     /**
      * 设置时间
      * @param {Any} value 设置时间值
      * @param {String} fmt 源格式
      * jstimestamp 13位时间戳 到毫秒
      * timestamp 10位时间戳 到秒
      */
 
 
     createClass(Time, [{
       key: "Set",
       value: function Set(value) {
         var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jstimestamp';
 
         if (!value) {
           this.Date = null;
         } else if (value instanceof Date) {
           this.Data = value;
         } else if (_typeof_1(value) == 'object') {
           this.Data = null;
         } else if (typeof value == 'function') {
           this.Set(value(), fmt);
         } else if (value > 0) {
           this.Date = fmt == 'jstimestamp' ? new Date(value * 1) : new Date(value * 1000);
         } else if (typeof value == 'string') {
           this.Date = new Date(value); //todo 格式化年月日时分秒
         } else {
           this.Date = null;
         }
 
         if (!this.Date) this.Date = new Date();
         return this;
       }
       /**
        * 获取时间
        * @param {String} fmt 获取格式
        * jstimestamp 13位时间戳 到毫秒
        * timestamp 10位时间戳 到秒
        * Date 日期类格式
        * YmdHisSwWqQ 根据不同格式取得得值合成字符串
        */
 
     }, {
       key: "Get",
       value: function Get() {
         var _this = this;
 
         var fmt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jstimestamp';
         if (!this.Date) this.Date = new Date();
 
         switch (fmt) {
           case 'Date':
             return this.Date;
 
           case 'timestamp':
             return parseInt(this.Date.getTime() / 1000);
 
           case 'jstimestamp':
             return this.Date.getTime();
         }
 
         return fmt.replace(/[YmdHisSwWqQ]/g, function (k) {
           return _this[k];
         });
       }
       /**
        * 判断两个时间是否是同一天
        * @param {*} a 时间1
        * @param {*} b 时间2
        * @param {*} c 时间1格式
        * @param {*} d 时间2格式
        */
 
     }, {
       key: "OneDay",
       value: function OneDay(a, b, c, d) {
         return this.Set(a, c).Get('Ymd') == this.Set(b, d).Get('Ymd');
       }
       /**
        * 判断两个时间是否是同一周
        * @param {*} a 时间1
        * @param {*} b 时间2
        * @param {*} c 时间1格式
        * @param {*} d 时间2格式
        */
 
     }, {
       key: "OneWeek",
       value: function OneWeek(a, b, c, d) {
         return this.Set(a, c).ToWeek().Get('Ymd') == this.Set(b, d).ToWeek().Get('Ymd');
       }
       /**
        * 将时间前往本周的某一天
        * @param {*} WeekN
        */
 
     }, {
       key: "ToWeek",
       value: function ToWeek() {
         var WeekN = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
         this.Date.setDate(this.Date.getDate() - (this.w || 7) + WeekN);
         return this;
       }
       /**
        * 获取本周某一天的当前时间
        * @param {*} WeekN
        * @param {*} fmt
        */
 
     }, {
       key: "GetWeek",
       value: function GetWeek(WeeN, fmt) {
         return this.ToWeek(WeeN).Get(fmt);
       }
     }, {
       key: "Y",
       get: function get() {
         return this.Date.getFullYear();
       }
     }, {
       key: "m",
       get: function get() {
         return ('00' + (this.Date.getMonth() + 1)).slice(-2);
       }
     }, {
       key: "d",
       get: function get() {
         return ('00' + this.Date.getDate()).slice(-2);
       }
     }, {
       key: "H",
       get: function get() {
         return ('00' + this.Date.getHours()).slice(-2);
       }
     }, {
       key: "i",
       get: function get() {
         return ('00' + this.Date.getMinutes()).slice(-2);
       }
     }, {
       key: "s",
       get: function get() {
         return ('00' + this.Date.getSeconds()).slice(-2);
       }
     }, {
       key: "S",
       get: function get() {
         return ('000' + this.Date.getMilliseconds()).slice(-3);
       }
     }, {
       key: "w",
       get: function get() {
         return this.Date.getDay();
       }
     }, {
       key: "W",
       get: function get() {
         return Week[this.w];
       }
     }, {
       key: "q",
       get: function get() {
         return (this.Date.getMonth() + 3) / 3 | 0;
       }
     }, {
       key: "Q",
       get: function get() {
         return Week[this.q];
       }
     }]);
 
     return Time;
   }();
 
   /**
    * 获取随机值
    * @param {Number} a 随机范围从0到a(不包含a)
    * @param {Number} b 随机结果增加值
    * @return {Number} 一个随机值
    */
   var Random = function Random() {
     var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
     var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
     return (Math.random() * a | 0) + b;
   };
   /**
    * 获取随机值
    * @param {Number} min 最小值
    * @param {Number} max 最大值
    * @return {Number} 一个随机值
    */
 
 
   Random.To = function (min, max) {
     return Random(max - min, min);
   };
   /**
    * 从数组获取随机项
    * @param {Array} a 源数组
    * @return {*} a中的随机值
    */
 
 
   Random.Array = function (a) {
     return a[Random(a.length)];
   };
   /**
    * 从键值对获取任意随机项键的数组
    * @param {Array|Object} a 数据源
    * @param {Number} b 获取数量
    * @return {Array[*]} b个不重复的a中的键组成的数组
    */
 
 
   Random.Array.Keys = Random.Keys = function (a) {
     var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
     if (!a || !b) return [];
     var out = [];
     var keys = Object.keys(a);
 
     while (keys.length > 0 && out.length < b) {
       out.push(keys.splice(Random(keys.length), 1)[0]);
     }
 
     return out;
   };
   /**
    * 从键值对获取任意随机项值的数组
    * @param {Array|Object} a 数据源
    * @param {Number} b 获取数量
    * @return {Array[*]} b个不重复的a中的键组成的数组
    */
 
 
   Random.Array.Values = Random.Values = function (a) {
     var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
     if (!a || !b) return [];
     var out = [];
     var keys = Object.keys(a);
 
     while (keys.length > 0 && out.length < b) {
       var key = keys.splice(Random(keys.length), 1)[0];
       out.push(a[key]);
     }
 
     return out;
   };
 
   var Collision =
   /*#__PURE__*/
   function () {
     function Collision() {
       classCallCheck(this, Collision);
 
       this.TouchHandle = new Vector3();
     }
 
     createClass(Collision, [{
       key: "InComponent",
       value: function InComponent(Component, touch) {
         if (!Component.visible) return false;
         if (!Component.checkPoint) return true;
         this.TouchHandle.setApply(touch);
         if (Component.checkPoint(this.TouchHandle)) return true;
       }
     }, {
       key: "Recursive",
       value: function Recursive(Component, touch) {
         var Action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'touchTap';
         if (!Component) return false;
 
         if (Component instanceof Array) {
           for (var i = Component.length - 1; i >= 0; i--) {
             var Res = this.Recursive(Component[i], touch, Action);
             if (Res) return Res;
           }
         } else {
           if (!Component.visible) return false;
 
           if (Component.touchChildren && Component.children.length) {
             var _Res = this.Recursive(Component.children, touch, Action);
 
             if (_Res) return _Res;
           }
 
           if (!this.InComponent(Component, touch)) return false;
           if (!Component[Action]) return Component.touchStop;
           var Result = Component[Action](this.TouchHandle);
           return Result === undefined ? true : Result;
         }
       }
     }]);
 
     return Collision;
   }();
 
   var Event =
   /*#__PURE__*/
   function () {
     function Event() {
       classCallCheck(this, Event);
 
       this._events = {};
     }
 
     createClass(Event, [{
       key: "listen",
       value: function listen() {
         for (var i = 0; i < arguments.length; i++) {
           this.on(arguments[i]);
         }
 
         return this;
       }
     }, {
       key: "on",
       value: function on(evt, fn, context) {
         var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
         if (!context) context = this;
         if (!fn) fn = context[evt];
         if (!fn) return this;
         if (!this._events[evt]) this._events[evt] = [];
 
         this._events[evt].push({
           fn: fn,
           context: context,
           once: once
         });
 
         return this;
       }
     }, {
       key: "once",
       value: function once(evt, fn, context) {
         return this.on(evt, fn, context, true);
       }
     }, {
       key: "off",
       value: function off(evt, fn, context) {
         if (!this._events[evt]) return this;
         if (!context) context = this;
 
         var events = this._events[evt].filter(function (e) {
           return e.context !== context && e.fn !== fn;
         });
 
         if (events.length) {
           this._events[evt] = events;
         } else {
           delete this._events[evt];
         }
 
         return this;
       }
     }, {
       key: "emit",
       value: function emit(evt) {
         if (!this._events[evt]) return this;
         var listeners = this._events[evt];
         var args = Array.prototype.splice.call(arguments, 1);
 
         for (var i = 0; i < listeners.length; i++) {
           var _listeners$i = listeners[i],
               fn = _listeners$i.fn,
               context = _listeners$i.context,
               once = _listeners$i.once;
           fn.apply(context, args);
           if (once) listeners.splice(i--, 1);
         }
 
         if (!listeners.length) delete this._events[evt];
         return this;
       }
     }]);
 
     return Event;
   }();
 
   var TouchEvent =
   /*#__PURE__*/
   function (_Vector) {
     inherits(TouchEvent, _Vector);
 
     function TouchEvent(id, time, x, y) {
       var _this;
 
       classCallCheck(this, TouchEvent);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(TouchEvent).call(this, x, y)); //当前位置
 
       _this.start = new Vector2(x, y); //起始位置
 
       _this.tick = new Vector2(0, 0); //本帧移动
 
       _this.begin = _this.over = time; //触摸时长
 
       _this.id = id;
       return _this;
     }
 
     createClass(TouchEvent, [{
       key: "set",
       value: function set(x, y) {
         this.tick.set(x - this.x, y - this.y);
         return get(getPrototypeOf(TouchEvent.prototype), "set", this).call(this, x, y);
       }
     }, {
       key: "long",
       get: function get() {
         return this.over - this.begin;
       }
     }, {
       key: "startX",
       get: function get() {
         return this.start.x;
       }
     }, {
       key: "startY",
       get: function get() {
         return this.start.y;
       }
     }, {
       key: "endX",
       get: function get() {
         return this.x;
       }
     }, {
       key: "endY",
       get: function get() {
         return this.y;
       }
     }, {
       key: "moveX",
       get: function get() {
         return this.x - this.start.x;
       }
     }, {
       key: "moveY",
       get: function get() {
         return this.y - this.start.y;
       }
     }, {
       key: "distance",
       get: function get() {
         return this.distVector(this.start);
       }
     }]);
 
     return TouchEvent;
   }(Vector2);
 
   var Touch =
   /*#__PURE__*/
   function (_Event) {
     inherits(Touch, _Event);
 
     function Touch() {
       var _this2;
 
       classCallCheck(this, Touch);
 
       _this2 = possibleConstructorReturn(this, getPrototypeOf(Touch).call(this));
       _this2.size = new Vector2();
       _this2.offset = new Vector2();
       _this2.touches = {};
       return _this2;
     }
 
     createClass(Touch, [{
       key: "getX",
       value: function getX(x) {
         return (x - this.offset.x) * this.size.x;
       }
     }, {
       key: "getY",
       value: function getY(y) {
         return (y - this.offset.y) * this.size.y;
       }
     }, {
       key: "start",
       value: function start(e) {
         var now = Date.now();
 
         for (var i = 0, l = e.changedTouches.length; i < l; i++) {
           var touch = e.changedTouches[i];
           var id = touch.identifier;
           this.touches[id] = new TouchEvent(id, now, this.getX(touch.clientX), this.getY(touch.clientY));
           this.emit('touchStart', this.touches[id]);
         }
 
         return this;
       }
     }, {
       key: "move",
       value: function move(e) {
         for (var i = 0, l = e.changedTouches.length; i < l; i++) {
           var touch = e.changedTouches[i];
           var id = touch.identifier;
           if (!this.touches[id]) continue;
           this.touches[id].set(this.getX(touch.clientX), this.getY(touch.clientY));
           this.emit('touchMove', this.touches[id]);
         }
 
         return this;
       }
     }, {
       key: "end",
       value: function end(e) {
         var now = Date.now();
 
         for (var i = 0, l = e.changedTouches.length; i < l; i++) {
           var touch = e.changedTouches[i];
           var id = touch.identifier;
           if (!this.touches[id]) continue;
           this.touches[id].over = now;
           this.touches[id].set(this.getX(touch.clientX), this.getY(touch.clientY), now);
           this.emit('touchEnd', this.touches[id]);
           delete this.touches[id];
         }
 
         return this;
       }
     }]);
 
     return Touch;
   }(Event);
 
   var Clock =
   /*#__PURE__*/
   function (_Event) {
     inherits(Clock, _Event);
 
     function Clock() {
       var _this;
 
       classCallCheck(this, Clock);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Clock).call(this));
       _this.time = _this.then = _this.history = Date.now();
       _this.interval = 1000 / 60;
       _this.tick = _this.move = 0;
       return _this;
     }
 
     createClass(Clock, [{
       key: "step",
       value: function step() {
         this.time = Date.now(); //当前时间
 
         var change = this.time - this.then; //当前时间和上一帧的差
 
         if (change < this.interval) return false; //小于一帧
 
         this.tick = change / this.interval | 0; //本次步进帧数
 
         var delta = change % this.interval; //最多步进整数帧时长
 
         this.then = this.time - delta; //记录本帧执行到的时间点
 
         this.move = this.time - this.history; //真实变化时长
 
         this.history = this.time; //记录上一次变化时间
 
         return true; //真实变化时长
       }
     }, {
       key: "run",
       value: function run() {
         var Interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000 / 60;
         this.interval = Interval;
         var render = this;
 
         var HandleUpdate = function HandleUpdate() {
           requestAnimationFrame(HandleUpdate);
           if (!render.step()) return;
           render.emit('start');
           render.emit('tick');
           render.emit('end');
         };
 
         requestAnimationFrame(HandleUpdate);
         return this;
       }
     }]);
 
     return Clock;
   }(Event);
 
   var Dirty =
   /*#__PURE__*/
   function () {
     function Dirty() {
       var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 600;
 
       classCallCheck(this, Dirty);
 
       this.collect = [];
       this.used = [];
       this.running = false;
       this.interval = interval;
       this.tickid = 0;
     }
 
     createClass(Dirty, [{
       key: "add",
       value: function add(cache) {
         if (cache.destroy) this.collect.push(cache);
       }
     }, {
       key: "use",
       value: function use(cache) {
         if (this.running) this.used.push(cache);
       }
     }, {
       key: "dispose",
       value: function dispose() {
         var _this = this,
             _arguments = arguments;
 
         if (!this.running) return;
         this.collect.forEach(function (cache) {
           if (_this.used.indexOf(cache) === -1) {
             cache.destroy.apply(cache, _arguments);
           }
         });
         this.collect = [].concat(this.used);
         this.used.length = 0;
         this.running = false;
       }
     }, {
       key: "tick",
       value: function tick() {
         var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
         this.tickid += n;
         if (this.tickid <= this.interval) return;
         this.tickid = 0;
         this.running = true;
       }
     }]);
 
     return Dirty;
   }();
 
   var Container =
   /*#__PURE__*/
   function (_Event) {
     inherits(Container, _Event);
 
     function Container() {
       var _this;
 
       var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 
       classCallCheck(this, Container);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Container).call(this));
       _this.id = Container.id ? ++Container.id : Container.id = 1;
       _this.parent = null;
       _this.children = [];
       _this.touchChildren = true;
       _this.visible = !(options.visible === false);
       _this.zIndex = options.zIndex || 0;
       _this.transformParentId = 0;
       _this.transformId = 1;
       _this.needUpdateTransform = true;
       _this.matrix = new Matrix4();
       _this.position = new Vector2(options.x || 0, options.y || 0);
       _this.scale = new Vector2(options.scaleX || 1, options.scaleY || 1);
       _this.angle = options.angle || 0;
       if (options.radian) _this.radian = options.radian;
 
       _this.on('destroy', function () {
         for (var i = 0; i < this.children.length; i++) {
           this.children[i].emit('destroy');
         }
       });
 
       return _this;
     }
 
     createClass(Container, [{
       key: "updateTransform",
       value: function updateTransform() {
         var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
 
         if (this.parent) {
           if (trace) this.parent.updateTransform(trace);
           if (!this.needUpdateTransform && this.transformParentId == this.parent.transformId) return;
           this.matrix.setApply(this.parent.matrix);
         } else {
           if (!this.needUpdateTransform) return;
           this.matrix.identity();
         }
 
         this.matrix.translate(this.x, this.y, 0);
         this.matrix.rotate(this.radian, 0, 0, 1);
         this.matrix.scale(this.scaleX, this.scaleY, 1);
         this.needUpdateTransform = false;
         this.transformId++;
         this.transformParentId = this.parent ? this.parent.transformId : 0;
       }
     }, {
       key: "setPosition",
       value: function setPosition(x, y) {
         this.x = x;
         this.y = y;
         return this;
       }
     }, {
       key: "setScale",
       value: function setScale(x, y) {
         this.scaleX = x;
         this.scaleY = y;
         return this;
       }
     }, {
       key: "setRadian",
       value: function setRadian(a) {
         this.radian = a;
         return this;
       }
     }, {
       key: "setAngle",
       value: function setAngle(a) {
         this.angle = a;
         return this;
       }
     }, {
       key: "getWorldVector",
       value: function getWorldVector(vector) {
         var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
         vector = clone ? vector.clone() : vector;
         return vector.multiplyMatrix4(this.matrix);
       }
     }, {
       key: "put",
       value: function put(object3d) {
         if (this.parent) this.parent.remove(this);
         if (!object3d) return this;
         this.emit('create');
         object3d.children.push(this);
         this.parent = object3d;
         this.transformParentId = 0;
         this.emit('created');
         return this;
       }
     }, {
       key: "add",
       value: function add(object3d) {
         if (arguments.length > 1) {
           for (var i = 0; i < arguments.length; i++) {
             this.add(arguments[i]);
           }
         } else if (object3d instanceof Array) {
           for (var _i = 0; _i < object3d.length; _i++) {
             this.add(object3d[_i]);
           }
         } else if (object3d) {
           object3d.put(this);
         }
 
         return this;
       }
     }, {
       key: "remove",
       value: function remove(object3d) {
         if (arguments.length > 1) {
           for (var i = 0; i < arguments.length; i++) {
             this.remove(arguments[i]);
           }
         } else if (object3d instanceof Array) {
           for (var _i2 = 0; _i2 < object3d.length; _i2++) {
             this.remove(object3d[_i2]);
           }
         } else if (object3d) {
           object3d.emit('destroy', this);
           var index = this.children.indexOf(object3d);
           this.children.splice(index, 1);
           object3d.parent = null;
           object3d.emit('destroyed', this);
         }
 
         return this;
       }
     }, {
       key: "clear",
       value: function clear() {
         for (var i = 0; i < this.children.length; i++) {
           this.children[i].emit('destroy', this);
           this.children[i].parent = null;
           this.children[i].emit('destroyed', this);
         }
 
         this.children.length = 0;
         return this;
       }
     }, {
       key: "pushTo",
       value: function pushTo() {
         var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
         if (!this.visible) return;
         this.updateTransform(false);
         this.emit('check', array);
 
         for (var i = 0, len = this.children.length; i < len; i++) {
           this.children[i].pushTo(array);
         }
       }
     }, {
       key: "x",
       get: function get() {
         return this.position.x;
       },
       set: function set(x) {
         if (this.position.x == x) return;
         this.position.x = x;
         this.needUpdateTransform = true;
       }
     }, {
       key: "y",
       get: function get() {
         return this.position.y;
       },
       set: function set(y) {
         if (this.position.y == y) return;
         this.position.y = y;
         this.needUpdateTransform = true;
       }
     }, {
       key: "scaleX",
       get: function get() {
         return this.scale.x;
       },
       set: function set(x) {
         if (this.scale.x == x) return;
         this.scale.x = x;
         this.needUpdateTransform = true;
       }
     }, {
       key: "scaleY",
       get: function get() {
         return this.scale.y;
       },
       set: function set(y) {
         if (this.scale.y == y) return;
         this.scale.y = y;
         this.needUpdateTransform = true;
       }
     }, {
       key: "radian",
       get: function get() {
         return this._radian;
       },
       set: function set(r) {
         if (r == this._radian) return;
         this._radian = r;
         this.needUpdateTransform = true;
       }
     }, {
       key: "angle",
       get: function get() {
         return this.radian * 180 / Math.PI;
       },
       set: function set(v) {
         var a = v * Math.PI / 180;
         if (a == this._radian) return;
         this._radian = a;
         this.needUpdateTransform = true;
       }
     }]);
 
     return Container;
   }(Event);
 
   var Director =
   /*#__PURE__*/
   function (_Container) {
     inherits(Director, _Container);
 
     function Director(options) {
       var _this;
 
       classCallCheck(this, Director);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Director).call(this, options));
       _this.scenes = {};
       _this.needUpdateTransform = false;
       _this.widthCache = {};
       _this.heightCache = {};
       return _this;
     }
 
     createClass(Director, [{
       key: "getX",
       value: function getX() {
         var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
         return this.widthCache[n] || (this.widthCache[n] = this._width * n);
       }
     }, {
       key: "getY",
       value: function getY() {
         var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
         return this.heightCache[n] || (this.heightCache[n] = this._height * n);
       }
     }, {
       key: "set",
       value: function set(scene) {
         if (arguments.length > 1) {
           for (var i = 0; i < arguments.length; i++) {
             this.set(arguments[i]);
           }
         } else if (scene instanceof Array) {
           for (var _i = 0; _i < scene.length; _i++) {
             this.set(scene[_i]);
           }
         } else {
           if (Object.prototype.toString.call(scene) == '[object Function]') {
             if (scene.constructor && scene.name) this.scenes[scene.name] = scene;
           }
         }
 
         return this;
       }
     }, {
       key: "go",
       value: function go(scene) {
         var type = Object.prototype.toString.call(scene);
 
         if (type == '[object String]') {
           if (this.scenes[scene]) this.clear().add(construct(this.scenes[scene], toConsumableArray(Array.prototype.splice(1))));
         } else if (type == '[object Function]') {
           if (scene.constructor) {
             this.clear().add(construct(scene, toConsumableArray(Array.prototype.splice(1))));
           } else {
             var res = scene.apply(void 0, toConsumableArray(Array.prototype.splice(1)));
             if (res instanceof Container) this.clear().add(res);
           }
         } else if (type == '[object Object]') {
           if (scene instanceof Container) this.clear().add(scene);
         }
 
         return this;
       }
     }, {
       key: "width",
       get: function get() {
         return this._width;
       },
       set: function set(w) {
         this._width = w;
         this.widthCache = {};
       }
     }, {
       key: "height",
       get: function get() {
         return this._height;
       },
       set: function set(h) {
         this._height = h;
         this.heightCache = {};
       }
     }, {
       key: "center",
       get: function get() {
         return this.getX(0.5);
       }
     }, {
       key: "middle",
       get: function get() {
         return this.getY(0.5);
       }
     }]);
 
     return Director;
   }(Container);
 
   var Sprite =
   /*#__PURE__*/
   function (_Container) {
     inherits(Sprite, _Container);
 
     function Sprite() {
       var _this;
 
       var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 
       classCallCheck(this, Sprite);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Sprite).call(this, options));
       _this.morph = options.morph || 'Rectangle';
       _this.anchor = new Vector2(options.anchorX || 0, options.anchorY || 0);
       _this.size = new Vector2(options.width || 0, options.height || 0);
       _this.staticWidth = options.width ? true : false;
       _this.staticHeight = options.height ? true : false;
       _this.clip = null;
       _this.texture = options.texture;
       _this.invertMatrixId = 0;
       _this.invertMatrix = new Matrix4();
 
       _this.on('check', function (array) {
         if (!this.visible) return;
         if (this.texture) array.push(this);
       });
 
       return _this;
     }
 
     createClass(Sprite, [{
       key: "updateTransformInvert",
       value: function updateTransformInvert() {
         if (this.invertMatrixId == this.transformId) return; // this.updateTransform(false);
 
         this.invertMatrix.invert(this.matrix);
         this.invertMatrixId = this.transformId;
       }
     }, {
       key: "setClip",
       value: function setClip(sprite) {
         this.clip = [sprite.x, sprite.y, sprite.width, sprite.height];
         if (!this.staticWidth) this.size.x = sprite.width;
         if (!this.staticHeight) this.size.y = sprite.height;
         this.needUpdate = true;
         return this;
       }
     }, {
       key: "setSize",
       value: function setSize(x, y) {
         this.width = x;
         this.height = y;
         return this;
       }
     }, {
       key: "setAnchor",
       value: function setAnchor(x, y) {
         this.anchorX = x;
         this.anchorY = y;
         return this;
       }
     }, {
       key: "setAnchorSize",
       value: function setAnchorSize() {
         var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
         var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
         this.anchorX = this.width * x;
         this.anchorY = this.height * y;
         return this;
       }
     }, {
       key: "checkPoint",
       value: function checkPoint(vector) {
         this.updateTransformInvert();
         vector.multiplyMatrix4(this.invertMatrix);
         return vector.x >= -this.width / 2 && vector.y >= -this.height / 2 && vector.x <= this.width / 2 && vector.y <= this.height / 2;
       }
     }, {
       key: "texture",
       get: function get() {
         return this._texture;
       },
       set: function set(texture) {
         this._texture = texture;
         if (!texture) return this.needUpdate = false;
         if (!this.staticWidth) this.size.x = texture.width;
         if (!this.staticHeight) this.size.y = texture.height;
         this.needUpdate = true;
       }
     }, {
       key: "morph",
       set: function set(a) {
         this._morph = a;
         this.needUpdate = true;
       },
       get: function get() {
         return this._morph;
       }
     }, {
       key: "width",
       set: function set(a) {
         this.size.x = a;
         this.staticWidth = true;
         this.needUpdate = true;
       },
       get: function get() {
         return this.size.x;
       }
     }, {
       key: "height",
       set: function set(a) {
         this.size.y = a;
         this.staticHeight = true;
         this.needUpdate = true;
       },
       get: function get() {
         return this.size.y;
       }
     }, {
       key: "anchorX",
       set: function set(x) {
         this.anchor.x = x;
         this.needUpdate = true;
       },
       get: function get() {
         return this.anchor.x;
       }
     }, {
       key: "anchorY",
       set: function set(y) {
         this.anchor.y = y;
         this.needUpdate = true;
       },
       get: function get() {
         return this.anchor.y;
       }
     }, {
       key: "left",
       get: function get() {
         return -this.size.x / 2 - this.anchor.x;
       }
     }, {
       key: "right",
       get: function get() {
         return this.size.x / 2 - this.anchor.x;
       }
     }, {
       key: "top",
       get: function get() {
         return -this.size.y / 2 - this.anchor.y;
       }
     }, {
       key: "bottom",
       get: function get() {
         return this.size.y / 2 - this.anchor.y;
       }
     }]);
 
     return Sprite;
   }(Container);
 
   var Loader =
   /*#__PURE__*/
   function () {
     function Loader(loader) {
       classCallCheck(this, Loader);
 
       this.resources = {};
       this.loader = loader;
     }
 
     createClass(Loader, [{
       key: "loads",
       value: function loads() {
         var _this = this;
 
         var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
         var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
         var loaded = arguments.length > 2 ? arguments[2] : undefined;
         var Keys = Object.keys(map);
         return Promise.all(Keys.map(function (key) {
           var load = _this.load(prefix + key, map[key]);
 
           return loaded ? load.then(loaded) : load;
         }));
       }
     }, {
       key: "get",
       value: function get(key) {
         return this.resources[key];
       }
     }]);
 
     return Loader;
   }();
   var Image =
   /*#__PURE__*/
   function (_Loader) {
     inherits(Image, _Loader);
 
     function Image() {
       classCallCheck(this, Image);
 
       return possibleConstructorReturn(this, getPrototypeOf(Image).apply(this, arguments));
     }
 
     createClass(Image, [{
       key: "load",
       //读取并生成贴图对象
       value: function load(key, url) {
         var _this2 = this;
 
         return this.loader.load(url).then(function (image) {
           _this2.resources[key] = image;
         });
       }
     }]);
 
     return Image;
   }(Loader);
   var Audio$1 =
   /*#__PURE__*/
   function (_Loader2) {
     inherits(Audio, _Loader2);
 
     function Audio() {
       var _getPrototypeOf2;
 
       var _this3;
 
       classCallCheck(this, Audio);
 
       for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
       }
 
       _this3 = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));
 
       defineProperty(assertThisInitialized(_this3), "_mute", false);
 
       return _this3;
     }
 
     createClass(Audio, [{
       key: "load",
       value: function load(key, url) {
         var _this4 = this;
 
         return this.loader.load(url).then(function (audio) {
           return _this4.resources[key] = audio;
         });
       } //静音
 
     }, {
       key: "mute",
       get: function get() {
         return this._mute;
       },
       set: function set(mute) {
         this._mute = mute;
         this.loader.mute(mute);
       } //设置音量
 
     }, {
       key: "volume",
       set: function set() {
         var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
         this.loader.volume(v);
       },
       get: function get() {
         return this.loader.volume();
       }
     }]);
 
     return Audio;
   }(Loader);
 
   var Rectangle$1 =
   /*#__PURE__*/
   function () {
     function Rectangle(sprite, gl) {
       classCallCheck(this, Rectangle);
 
       var left = sprite.left,
           top = sprite.top,
           right = sprite.right,
           bottom = sprite.bottom;
       var cLeft = 0;
       var cTop = 0;
       var cRight = 1;
       var cBottom = 1;
 
       if (sprite.clip) {
         cLeft = sprite.clip[0] / sprite.texture.width;
         cTop = sprite.clip[1] / sprite.texture.height;
         cRight = (sprite.clip[0] + sprite.clip[2]) / sprite.texture.width;
         cBottom = (sprite.clip[1] + sprite.clip[3]) / sprite.texture.height;
       }
 
       this.vectices = new Float32Array([left, top, cLeft, cTop, right, top, cRight, cTop, left, bottom, cLeft, cBottom, right, bottom, cRight, cBottom]);
       this.bufferLength = this.vectices.length / 4;
       this.drawType = gl.TRIANGLE_STRIP;
       sprite.needUpdate = false;
     }
 
     createClass(Rectangle, [{
       key: "createTexture",
       value: function createTexture(gl, image) {
         if (this.texture) this.deleteTexture(gl);
         if (image.texture) this.texture = image.texture;
         this.texture = image.texture = gl.createTexture();
         gl.activeTexture(gl.TEXTURE0);
         gl.bindTexture(gl.TEXTURE_2D, this.texture);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
         gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
         this.texture.forever = image.src || image.forever;
         image.needUpdate = false;
       }
     }, {
       key: "createBuffer",
       value: function createBuffer(gl) {
         if (!this.buffer) this.buffer = gl.createBuffer();
         gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
         gl.bufferData(gl.ARRAY_BUFFER, this.vectices, gl.STATIC_DRAW);
       }
     }, {
       key: "updateTexture",
       value: function updateTexture(gl, image) {
         if (this.texture !== image.texture) return;
 
         if (image.texture && image.needUpdate) {
           gl.bindTexture(gl.TEXTURE_2D, image.texture);
           gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
           image.needUpdate = false;
         }
       }
     }, {
       key: "draw",
       value: function draw(gl) {
         gl.shader.texture(this.texture);
         gl.shader.buffer(this.buffer, 2, 2, 0, 4);
         gl.drawArrays(this.drawType, 0, this.bufferLength);
       }
     }, {
       key: "destroy",
       value: function destroy(gl) {
         if (this.buffer) gl.deleteBuffer(this.buffer);
         this.buffer = null;
         if (this.texture && !this.texture.forever) gl.deleteTexture(this.texture);
         this.texture = null;
         this.destroyed = true;
       }
     }]);
 
     return Rectangle;
   }();
   var Circle$1 =
   /*#__PURE__*/
   function () {
     function Circle(sprite, gl) {
       classCallCheck(this, Circle);
 
       var length = (sprite.width + sprite.height) / 20 | 0;
       var radian = 2 * Math.PI / length;
       var cx = -sprite.anchorX;
       var cy = -sprite.anchor.y;
       var rx = sprite.width * 0.5;
       var ry = sprite.height * 0.5;
       var rx1 = 0.5;
       var ry1 = 0.5;
       var cx1 = 0.5;
       var cy1 = 0.5;
 
       if (sprite.clip) {
         rx1 = sprite.clip[2] * 0.5;
         ry1 = sprite.clip[3] * 0.5;
         cx1 = sprite.clip[0] + rx1;
         cy1 = sprite.clip[1] + ry1;
       }
 
       var points = [cx, cy, cx1, cy1];
 
       for (var i = 0; i <= length; i++) {
         var r = i * radian;
         var cos = Math.cos(r);
         var sin = Math.sin(r);
         points.push(rx * cos + cx, ry * sin + cy, rx1 * cos + cx1, ry1 * sin + cy1);
       }
 
       this.vectices = new Float32Array(points);
       this.bufferLength = this.vectices.length / 4;
       this.drawType = gl.TRIANGLE_STRIP;
       sprite.needUpdate = false;
     }
 
     createClass(Circle, [{
       key: "createTexture",
       value: function createTexture(gl, image) {
         if (this.texture) this.deleteTexture(gl);
         if (image.texture) this.texture = image.texture;
         this.texture = image.texture = gl.createTexture();
         gl.activeTexture(gl.TEXTURE0);
         gl.bindTexture(gl.TEXTURE_2D, this.texture);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
         gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
         gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
         this.texture.forever = image.src || image.forever;
         image.needUpdate = false;
       }
     }, {
       key: "createBuffer",
       value: function createBuffer(gl) {
         if (!this.buffer) this.buffer = gl.createBuffer();
         gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
         gl.bufferData(gl.ARRAY_BUFFER, this.vectices, gl.STATIC_DRAW);
       }
     }, {
       key: "updateTexture",
       value: function updateTexture(gl, image) {
         if (this.texture !== image.texture) return;
 
         if (image.texture && image.needUpdate) {
           gl.bindTexture(gl.TEXTURE_2D, image.texture);
           gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
           image.needUpdate = false;
         }
       }
     }, {
       key: "draw",
       value: function draw(gl) {
         gl.shader.texture(this.texture);
         gl.shader.buffer(this.buffer, 2, 2, 0, 4);
         gl.drawArrays(this.drawType, 0, this.bufferLength);
       }
     }, {
       key: "destroy",
       value: function destroy(gl) {
         if (this.buffer) gl.deleteBuffer(this.buffer);
         this.buffer = null;
         if (this.texture && !this.texture.forever) gl.deleteTexture(this.texture);
         this.texture = null;
         this.destroyed = true;
       }
     }]);
 
     return Circle;
   }();
   var Polygon$1 = function Polygon() {
     classCallCheck(this, Polygon);
   };
 
   var Builder$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      Rectangle: Rectangle$1,
      Circle: Circle$1,
      Polygon: Polygon$1
   });
 
   function WebglRender(sprite, gl, dirty) {
     sprite.emit('draw', gl, dirty);
 
     if (sprite.morph && Builder$1[sprite.morph]) {
       if (!sprite.builder || sprite.needUpdate || sprite.builder.destroyed) {
         sprite.builder = new Builder$1[sprite.morph](sprite, gl);
         sprite.builder.createBuffer(gl);
         sprite.builder.createTexture(gl, sprite.texture);
         dirty.add(sprite.builder);
       }
 
       sprite.builder.updateTexture(gl, sprite.texture);
       gl.shader.blend();
       gl.shader.transform(sprite.matrix);
       sprite.builder.draw(gl);
       dirty.use(sprite.builder);
     }
   }
 
   // export function getExtension(gl) {
   // 	//用WEBGL1就够了
   // 	// let drawBuffers = gl.getExtension('WEBGL_draw_buffers');
   // 	// let depthTexture = gl.getExtension('WEBKIT_WEBGL_depth_texture');
   // 	// let loseContext = gl.getExtension('WEBGL_lose_context');
   // 	let vertexArrayObject =
   // 		gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
   // 	// let anisotropicFiltering = gl.getExtension('EXT_texture_filter_anisotropic');
   // 	// let uint32ElementIndex = gl.getExtension('OES_element_index_uint');
   // 	// // Floats and half-floats
   // 	// let floatTexture = gl.getExtension('OES_texture_float');
   // 	// let floatTextureLinear = gl.getExtension('OES_texture_float_linear');
   // 	// let textureHalfFloat = gl.getExtension('OES_texture_half_float');
   // 	// let textureHalfFloatLinear = gl.getExtension('OES_texture_half_float_linear');
   // 	let vertexAttribDivisor = gl.getExtension('ANGLE_instanced_arrays');
   // 	gl.createVertexArray = () => vertexArrayObject.createVertexArrayOES();
   // 	gl.bindVertexArray = vao => vertexArrayObject.bindVertexArrayOES(vao);
   // 	gl.deleteVertexArray = vao => vertexArrayObject.deleteVertexArrayOES(vao);
   // 	gl.vertexAttribDivisor = (a, b) => vertexAttribDivisor.vertexAttribDivisorANGLE(a, b);
   // 	gl.drawElementsInstanced = (a, b, c, d, e) => vertexAttribDivisor.drawElementsInstancedANGLE(a, b, c, d, e);
   // 	gl.drawArraysInstanced = (a, b, c, d) => vertexAttribDivisor.drawArraysInstancedANGLE(a, b, c, d);
   // 	return gl;
   // }
   var Shader =
   /*#__PURE__*/
   function () {
     function Shader(gl) {
       classCallCheck(this, Shader);
 
       this.gl = gl;
       this.attributes = {};
       this.uniforms = {};
       this.createProgram();
       this.getActiveAttrib();
       this.getActiveUniform();
     }
 
     createClass(Shader, [{
       key: "createShader",
       value: function createShader(type, text) {
         var gl = this.gl;
         var shader = gl.createShader(gl[type]);
         gl.shaderSource(shader, text);
         gl.compileShader(shader);
 
         if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
           console.log(gl.getShaderInfoLog(shader));
           gl.deleteShader(shader);
           return null;
         }
 
         return shader;
       }
     }, {
       key: "getActiveAttrib",
       value: function getActiveAttrib() {
         var gl = this.gl,
             program = this.program,
             attributes = this.attributes;
 
         for (var i = 0, len = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES); i < len; i++) {
           var attr = gl.getActiveAttrib(program, i); //size,type,name
 
           var id = attributes[attr.name] = gl.getAttribLocation(program, attr.name);
           gl.enableVertexAttribArray(id);
         }
       }
     }, {
       key: "getActiveUniform",
       value: function getActiveUniform() {
         var gl = this.gl,
             program = this.program,
             uniforms = this.uniforms;
 
         for (var i = 0, len = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i < len; i++) {
           var attr = gl.getActiveUniform(program, i); //size,type,name
 
           uniforms[attr.name] = gl.getUniformLocation(program, attr.name);
         }
       }
     }, {
       key: "createProgram",
       value: function createProgram() {
         var gl = this.gl;
         var program = gl.createProgram();
         gl.attachShader(program, this.createShader('VERTEX_SHADER', this.vert));
         gl.attachShader(program, this.createShader('FRAGMENT_SHADER', this.frag));
         gl.linkProgram(program);
 
         if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
           gl.deleteProgram(program);
           gl.deleteShader(program);
           gl.deleteShader(program);
           throw '链接程序失败';
         }
 
         this.program = program;
       }
     }, {
       key: "vert",
       get: function get() {
         return '';
       }
     }, {
       key: "frag",
       get: function get() {
         return '';
       }
     }]);
 
     return Shader;
   }();
 
   var WebGLShader =
   /*#__PURE__*/
   function (_Shader) {
     inherits(WebGLShader, _Shader);
 
     function WebGLShader() {
       classCallCheck(this, WebGLShader);
 
       return possibleConstructorReturn(this, getPrototypeOf(WebGLShader).apply(this, arguments));
     }
 
     createClass(WebGLShader, [{
       key: "buffer",
       value: function buffer(_buffer) {
         var vetices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
         var uvs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
         var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
         var bpe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
         var gl = this.gl,
             attributes = this.attributes;
         if (gl.BufferRecord === _buffer) return;
         gl.BufferRecord = _buffer;
         gl.bindBuffer(gl.ARRAY_BUFFER, _buffer);
         gl.vertexAttribPointer(attributes.aPosition, vetices, gl.FLOAT, false, (vetices + uvs) * bpe, offset * bpe);
         gl.enableVertexAttribArray(attributes.aPosition);
         gl.vertexAttribPointer(attributes.aTextureCoord, uvs, gl.FLOAT, false, (vetices + uvs) * bpe, (offset + vetices) * bpe);
         gl.enableVertexAttribArray(attributes.aTextureCoord);
       }
     }, {
       key: "texture",
       value: function texture(_texture) {
         var gl = this.gl,
             uniforms = this.uniforms;
         if (gl.TextureRecord === _texture) return;
         gl.TextureRecord = _texture;
         gl.bindTexture(gl.TEXTURE_2D, _texture);
         gl.uniform1i(uniforms.uSampler, 0);
       }
     }, {
       key: "transform",
       value: function transform(matrix) {
         var gl = this.gl,
             uniforms = this.uniforms;
         gl.uniformMatrix4fv(uniforms.uModelMatrix, false, matrix.elements);
       }
     }, {
       key: "blend",
       value: function blend(color) {
         var gl = this.gl,
             uniforms = this.uniforms;
 
         if (color) {
           gl.uniform4f(uniforms.uColor, color.elements[0], color.elements[1], color.elements[2], color.elements[3]);
         } else {
           gl.uniform4f(uniforms.uColor, 1, 1, 1, 1);
         }
       }
     }, {
       key: "vert",
       get: function get() {
         return ['attribute vec4 aPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat4 uModelMatrix;', 'varying vec2 vTextureCoord;', 'void main()', '{', 'gl_Position = uModelMatrix * aPosition;', // 'gl_PointSize = 100.0;',
         'vTextureCoord = aTextureCoord;', '}'].join('\n');
       }
     }, {
       key: "frag",
       get: function get() {
         return ['precision highp float;', 'uniform sampler2D uSampler;', 'varying vec2 vTextureCoord;', 'uniform vec4 uColor;', 'void main()', '{', 'vec4 color;', 'color = texture2D(uSampler,vTextureCoord);', // gl_FragCoord
         // gl_PointCoord
         'gl_FragColor = uColor * color;', // gl_FragData
         '}'].join('\n');
       }
     }]);
 
     return WebGLShader;
   }(Shader);
 
   var howler = createCommonjsModule(function (module, exports) {
   /*!
    *  howler.js v2.1.3
    *  howlerjs.com
    *
    *  (c) 2013-2019, James Simpson of GoldFire Studios
    *  goldfirestudios.com
    *
    *  MIT License
    */
 
   (function() {
 
     /** Global Methods **/
     /***************************************************************************/
 
     /**
      * Create the global controller. All contained methods and properties apply
      * to all sounds that are currently playing or will be in the future.
      */
     var HowlerGlobal = function() {
       this.init();
     };
     HowlerGlobal.prototype = {
       /**
        * Initialize the global Howler object.
        * @return {Howler}
        */
       init: function() {
         var self = this || Howler;
 
         // Create a global ID counter.
         self._counter = 1000;
 
         // Pool of unlocked HTML5 Audio objects.
         self._html5AudioPool = [];
         self.html5PoolSize = 10;
 
         // Internal properties.
         self._codecs = {};
         self._howls = [];
         self._muted = false;
         self._volume = 1;
         self._canPlayEvent = 'canplaythrough';
         self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;
 
         // Public properties.
         self.masterGain = null;
         self.noAudio = false;
         self.usingWebAudio = true;
         self.autoSuspend = true;
         self.ctx = null;
 
         // Set to false to disable the auto audio unlocker.
         self.autoUnlock = true;
 
         // Setup the various state values for global tracking.
         self._setup();
 
         return self;
       },
 
       /**
        * Get/set the global volume for all sounds.
        * @param  {Float} vol Volume from 0.0 to 1.0.
        * @return {Howler/Float}     Returns self or current volume.
        */
       volume: function(vol) {
         var self = this || Howler;
         vol = parseFloat(vol);
 
         // If we don't have an AudioContext created yet, run the setup.
         if (!self.ctx) {
           setupAudioContext();
         }
 
         if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
           self._volume = vol;
 
           // Don't update any of the nodes if we are muted.
           if (self._muted) {
             return self;
           }
 
           // When using Web Audio, we just need to adjust the master gain.
           if (self.usingWebAudio) {
             self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
           }
 
           // Loop through and change volume for all HTML5 audio nodes.
           for (var i=0; i<self._howls.length; i++) {
             if (!self._howls[i]._webAudio) {
               // Get all of the sounds in this Howl group.
               var ids = self._howls[i]._getSoundIds();
 
               // Loop through all sounds and change the volumes.
               for (var j=0; j<ids.length; j++) {
                 var sound = self._howls[i]._soundById(ids[j]);
 
                 if (sound && sound._node) {
                   sound._node.volume = sound._volume * vol;
                 }
               }
             }
           }
 
           return self;
         }
 
         return self._volume;
       },
 
       /**
        * Handle muting and unmuting globally.
        * @param  {Boolean} muted Is muted or not.
        */
       mute: function(muted) {
         var self = this || Howler;
 
         // If we don't have an AudioContext created yet, run the setup.
         if (!self.ctx) {
           setupAudioContext();
         }
 
         self._muted = muted;
 
         // With Web Audio, we just need to mute the master gain.
         if (self.usingWebAudio) {
           self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
         }
 
         // Loop through and mute all HTML5 Audio nodes.
         for (var i=0; i<self._howls.length; i++) {
           if (!self._howls[i]._webAudio) {
             // Get all of the sounds in this Howl group.
             var ids = self._howls[i]._getSoundIds();
 
             // Loop through all sounds and mark the audio node as muted.
             for (var j=0; j<ids.length; j++) {
               var sound = self._howls[i]._soundById(ids[j]);
 
               if (sound && sound._node) {
                 sound._node.muted = (muted) ? true : sound._muted;
               }
             }
           }
         }
 
         return self;
       },
 
       /**
        * Unload and destroy all currently loaded Howl objects.
        * @return {Howler}
        */
       unload: function() {
         var self = this || Howler;
 
         for (var i=self._howls.length-1; i>=0; i--) {
           self._howls[i].unload();
         }
 
         // Create a new AudioContext to make sure it is fully reset.
         if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
           self.ctx.close();
           self.ctx = null;
           setupAudioContext();
         }
 
         return self;
       },
 
       /**
        * Check for codec support of specific extension.
        * @param  {String} ext Audio file extention.
        * @return {Boolean}
        */
       codecs: function(ext) {
         return (this || Howler)._codecs[ext.replace(/^x-/, '')];
       },
 
       /**
        * Setup various state values for global tracking.
        * @return {Howler}
        */
       _setup: function() {
         var self = this || Howler;
 
         // Keeps track of the suspend/resume state of the AudioContext.
         self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';
 
         // Automatically begin the 30-second suspend process
         self._autoSuspend();
 
         // Check if audio is available.
         if (!self.usingWebAudio) {
           // No audio is available on this system if noAudio is set to true.
           if (typeof Audio !== 'undefined') {
             try {
               var test = new Audio();
 
               // Check if the canplaythrough event is available.
               if (typeof test.oncanplaythrough === 'undefined') {
                 self._canPlayEvent = 'canplay';
               }
             } catch(e) {
               self.noAudio = true;
             }
           } else {
             self.noAudio = true;
           }
         }
 
         // Test to make sure audio isn't disabled in Internet Explorer.
         try {
           var test = new Audio();
           if (test.muted) {
             self.noAudio = true;
           }
         } catch (e) {}
 
         // Check for supported codecs.
         if (!self.noAudio) {
           self._setupCodecs();
         }
 
         return self;
       },
 
       /**
        * Check for browser support for various codecs and cache the results.
        * @return {Howler}
        */
       _setupCodecs: function() {
         var self = this || Howler;
         var audioTest = null;
 
         // Must wrap in a try/catch because IE11 in server mode throws an error.
         try {
           audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
         } catch (err) {
           return self;
         }
 
         if (!audioTest || typeof audioTest.canPlayType !== 'function') {
           return self;
         }
 
         var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');
 
         // Opera version <33 has mixed MP3 support, so we need to check for and block it.
         var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
         var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
 
         self._codecs = {
           mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
           mpeg: !!mpegTest,
           opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
           ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
           oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
           wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
           aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
           caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
           m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
           mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
           weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
           webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
           dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
           flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
         };
 
         return self;
       },
 
       /**
        * Some browsers/devices will only allow audio to be played after a user interaction.
        * Attempt to automatically unlock audio on the first user interaction.
        * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
        * @return {Howler}
        */
       _unlockAudio: function() {
         var self = this || Howler;
 
         // Only run this if Web Audio is supported and it hasn't already been unlocked.
         if (self._audioUnlocked || !self.ctx) {
           return;
         }
 
         self._audioUnlocked = false;
         self.autoUnlock = false;
 
         // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
         // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
         // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
         if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
           self._mobileUnloaded = true;
           self.unload();
         }
 
         // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
         // http://stackoverflow.com/questions/24119684
         self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
 
         // Call this method on touch start to create and play a buffer,
         // then check if the audio actually played to determine if
         // audio has now been unlocked on iOS, Android, etc.
         var unlock = function(e) {
           // Create a pool of unlocked HTML5 Audio objects that can
           // be used for playing sounds without user interaction. HTML5
           // Audio objects must be individually unlocked, as opposed
           // to the WebAudio API which only needs a single activation.
           // This must occur before WebAudio setup or the source.onended
           // event will not fire.
           for (var i=0; i<self.html5PoolSize; i++) {
             try {
               var audioNode = new Audio();
 
               // Mark this Audio object as unlocked to ensure it can get returned
               // to the unlocked pool when released.
               audioNode._unlocked = true;
 
               // Add the audio node to the pool.
               self._releaseHtml5Audio(audioNode);
             } catch (e) {
               self.noAudio = true;
             }
           }
 
           // Loop through any assigned audio nodes and unlock them.
           for (var i=0; i<self._howls.length; i++) {
             if (!self._howls[i]._webAudio) {
               // Get all of the sounds in this Howl group.
               var ids = self._howls[i]._getSoundIds();
 
               // Loop through all sounds and unlock the audio nodes.
               for (var j=0; j<ids.length; j++) {
                 var sound = self._howls[i]._soundById(ids[j]);
 
                 if (sound && sound._node && !sound._node._unlocked) {
                   sound._node._unlocked = true;
                   sound._node.load();
                 }
               }
             }
           }
 
           // Fix Android can not play in suspend state.
           self._autoResume();
 
           // Create an empty buffer.
           var source = self.ctx.createBufferSource();
           source.buffer = self._scratchBuffer;
           source.connect(self.ctx.destination);
 
           // Play the empty buffer.
           if (typeof source.start === 'undefined') {
             source.noteOn(0);
           } else {
             source.start(0);
           }
 
           // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
           if (typeof self.ctx.resume === 'function') {
             self.ctx.resume();
           }
 
           // Setup a timeout to check that we are unlocked on the next event loop.
           source.onended = function() {
             source.disconnect(0);
 
             // Update the unlocked state and prevent this check from happening again.
             self._audioUnlocked = true;
 
             // Remove the touch start listener.
             document.removeEventListener('touchstart', unlock, true);
             document.removeEventListener('touchend', unlock, true);
             document.removeEventListener('click', unlock, true);
 
             // Let all sounds know that audio has been unlocked.
             for (var i=0; i<self._howls.length; i++) {
               self._howls[i]._emit('unlock');
             }
           };
         };
 
         // Setup a touch start listener to attempt an unlock in.
         document.addEventListener('touchstart', unlock, true);
         document.addEventListener('touchend', unlock, true);
         document.addEventListener('click', unlock, true);
 
         return self;
       },
 
       /**
        * Get an unlocked HTML5 Audio object from the pool. If none are left,
        * return a new Audio object and throw a warning.
        * @return {Audio} HTML5 Audio object.
        */
       _obtainHtml5Audio: function() {
         var self = this || Howler;
 
         // Return the next object from the pool if one exists.
         if (self._html5AudioPool.length) {
           return self._html5AudioPool.pop();
         }
 
         //.Check if the audio is locked and throw a warning.
         var testPlay = new Audio().play();
         if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
           testPlay.catch(function() {
             console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
           });
         }
 
         return new Audio();
       },
 
       /**
        * Return an activated HTML5 Audio object to the pool.
        * @return {Howler}
        */
       _releaseHtml5Audio: function(audio) {
         var self = this || Howler;
 
         // Don't add audio to the pool if we don't know if it has been unlocked.
         if (audio._unlocked) {
           self._html5AudioPool.push(audio);
         }
 
         return self;
       },
 
       /**
        * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
        * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
        * @return {Howler}
        */
       _autoSuspend: function() {
         var self = this;
 
         if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
           return;
         }
 
         // Check if any sounds are playing.
         for (var i=0; i<self._howls.length; i++) {
           if (self._howls[i]._webAudio) {
             for (var j=0; j<self._howls[i]._sounds.length; j++) {
               if (!self._howls[i]._sounds[j]._paused) {
                 return self;
               }
             }
           }
         }
 
         if (self._suspendTimer) {
           clearTimeout(self._suspendTimer);
         }
 
         // If no sound has played after 30 seconds, suspend the context.
         self._suspendTimer = setTimeout(function() {
           if (!self.autoSuspend) {
             return;
           }
 
           self._suspendTimer = null;
           self.state = 'suspending';
           self.ctx.suspend().then(function() {
             self.state = 'suspended';
 
             if (self._resumeAfterSuspend) {
               delete self._resumeAfterSuspend;
               self._autoResume();
             }
           });
         }, 30000);
 
         return self;
       },
 
       /**
        * Automatically resume the Web Audio AudioContext when a new sound is played.
        * @return {Howler}
        */
       _autoResume: function() {
         var self = this;
 
         if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
           return;
         }
 
         if (self.state === 'running' && self._suspendTimer) {
           clearTimeout(self._suspendTimer);
           self._suspendTimer = null;
         } else if (self.state === 'suspended') {
           self.ctx.resume().then(function() {
             self.state = 'running';
 
             // Emit to all Howls that the audio has resumed.
             for (var i=0; i<self._howls.length; i++) {
               self._howls[i]._emit('resume');
             }
           });
 
           if (self._suspendTimer) {
             clearTimeout(self._suspendTimer);
             self._suspendTimer = null;
           }
         } else if (self.state === 'suspending') {
           self._resumeAfterSuspend = true;
         }
 
         return self;
       }
     };
 
     // Setup the global audio controller.
     var Howler = new HowlerGlobal();
 
     /** Group Methods **/
     /***************************************************************************/
 
     /**
      * Create an audio group controller.
      * @param {Object} o Passed in properties for this group.
      */
     var Howl = function(o) {
       var self = this;
 
       // Throw an error if no source is provided.
       if (!o.src || o.src.length === 0) {
         console.error('An array of source files must be passed with any new Howl.');
         return;
       }
 
       self.init(o);
     };
     Howl.prototype = {
       /**
        * Initialize a new Howl group object.
        * @param  {Object} o Passed in properties for this group.
        * @return {Howl}
        */
       init: function(o) {
         var self = this;
 
         // If we don't have an AudioContext created yet, run the setup.
         if (!Howler.ctx) {
           setupAudioContext();
         }
 
         // Setup user-defined default properties.
         self._autoplay = o.autoplay || false;
         self._format = (typeof o.format !== 'string') ? o.format : [o.format];
         self._html5 = o.html5 || false;
         self._muted = o.mute || false;
         self._loop = o.loop || false;
         self._pool = o.pool || 5;
         self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
         self._rate = o.rate || 1;
         self._sprite = o.sprite || {};
         self._src = (typeof o.src !== 'string') ? o.src : [o.src];
         self._volume = o.volume !== undefined ? o.volume : 1;
         self._xhrWithCredentials = o.xhrWithCredentials || false;
 
         // Setup all other default properties.
         self._duration = 0;
         self._state = 'unloaded';
         self._sounds = [];
         self._endTimers = {};
         self._queue = [];
         self._playLock = false;
 
         // Setup event listeners.
         self._onend = o.onend ? [{fn: o.onend}] : [];
         self._onfade = o.onfade ? [{fn: o.onfade}] : [];
         self._onload = o.onload ? [{fn: o.onload}] : [];
         self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
         self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
         self._onpause = o.onpause ? [{fn: o.onpause}] : [];
         self._onplay = o.onplay ? [{fn: o.onplay}] : [];
         self._onstop = o.onstop ? [{fn: o.onstop}] : [];
         self._onmute = o.onmute ? [{fn: o.onmute}] : [];
         self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
         self._onrate = o.onrate ? [{fn: o.onrate}] : [];
         self._onseek = o.onseek ? [{fn: o.onseek}] : [];
         self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
         self._onresume = [];
 
         // Web Audio or HTML5 Audio?
         self._webAudio = Howler.usingWebAudio && !self._html5;
 
         // Automatically try to enable audio.
         if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
           Howler._unlockAudio();
         }
 
         // Keep track of this Howl group in the global controller.
         Howler._howls.push(self);
 
         // If they selected autoplay, add a play event to the load queue.
         if (self._autoplay) {
           self._queue.push({
             event: 'play',
             action: function() {
               self.play();
             }
           });
         }
 
         // Load the source file unless otherwise specified.
         if (self._preload) {
           self.load();
         }
 
         return self;
       },
 
       /**
        * Load the audio file.
        * @return {Howler}
        */
       load: function() {
         var self = this;
         var url = null;
 
         // If no audio is available, quit immediately.
         if (Howler.noAudio) {
           self._emit('loaderror', null, 'No audio support.');
           return;
         }
 
         // Make sure our source is in an array.
         if (typeof self._src === 'string') {
           self._src = [self._src];
         }
 
         // Loop through the sources and pick the first one that is compatible.
         for (var i=0; i<self._src.length; i++) {
           var ext, str;
 
           if (self._format && self._format[i]) {
             // If an extension was specified, use that instead.
             ext = self._format[i];
           } else {
             // Make sure the source is a string.
             str = self._src[i];
             if (typeof str !== 'string') {
               self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
               continue;
             }
 
             // Extract the file extension from the URL or base64 data URI.
             ext = /^data:audio\/([^;,]+);/i.exec(str);
             if (!ext) {
               ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
             }
 
             if (ext) {
               ext = ext[1].toLowerCase();
             }
           }
 
           // Log a warning if no extension was found.
           if (!ext) {
             console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
           }
 
           // Check if this extension is available.
           if (ext && Howler.codecs(ext)) {
             url = self._src[i];
             break;
           }
         }
 
         if (!url) {
           self._emit('loaderror', null, 'No codec support for selected audio sources.');
           return;
         }
 
         self._src = url;
         self._state = 'loading';
 
         // If the hosting page is HTTPS and the source isn't,
         // drop down to HTML5 Audio to avoid Mixed Content errors.
         if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
           self._html5 = true;
           self._webAudio = false;
         }
 
         // Create a new sound object and add it to the pool.
         new Sound(self);
 
         // Load and decode the audio data for playback.
         if (self._webAudio) {
           loadBuffer(self);
         }
 
         return self;
       },
 
       /**
        * Play a sound or resume previous playback.
        * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
        * @param  {Boolean} internal Internal Use: true prevents event firing.
        * @return {Number}          Sound ID.
        */
       play: function(sprite, internal) {
         var self = this;
         var id = null;
 
         // Determine if a sprite, sound id or nothing was passed
         if (typeof sprite === 'number') {
           id = sprite;
           sprite = null;
         } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
           // If the passed sprite doesn't exist, do nothing.
           return null;
         } else if (typeof sprite === 'undefined') {
           // Use the default sound sprite (plays the full audio length).
           sprite = '__default';
 
           // Check if there is a single paused sound that isn't ended. 
           // If there is, play that sound. If not, continue as usual.  
           if (!self._playLock) {
             var num = 0;
             for (var i=0; i<self._sounds.length; i++) {
               if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                 num++;
                 id = self._sounds[i]._id;
               }
             }
 
             if (num === 1) {
               sprite = null;
             } else {
               id = null;
             }
           }
         }
 
         // Get the selected node, or get one from the pool.
         var sound = id ? self._soundById(id) : self._inactiveSound();
 
         // If the sound doesn't exist, do nothing.
         if (!sound) {
           return null;
         }
 
         // Select the sprite definition.
         if (id && !sprite) {
           sprite = sound._sprite || '__default';
         }
 
         // If the sound hasn't loaded, we must wait to get the audio's duration.
         // We also need to wait to make sure we don't run into race conditions with
         // the order of function calls.
         if (self._state !== 'loaded') {
           // Set the sprite value on this sound.
           sound._sprite = sprite;
 
           // Mark this sound as not ended in case another sound is played before this one loads.
           sound._ended = false;
 
           // Add the sound to the queue to be played on load.
           var soundId = sound._id;
           self._queue.push({
             event: 'play',
             action: function() {
               self.play(soundId);
             }
           });
 
           return soundId;
         }
 
         // Don't play the sound if an id was passed and it is already playing.
         if (id && !sound._paused) {
           // Trigger the play event, in order to keep iterating through queue.
           if (!internal) {
             self._loadQueue('play');
           }
 
           return sound._id;
         }
 
         // Make sure the AudioContext isn't suspended, and resume it if it is.
         if (self._webAudio) {
           Howler._autoResume();
         }
 
         // Determine how long to play for and where to start playing.
         var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
         var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
         var timeout = (duration * 1000) / Math.abs(sound._rate);
         var start = self._sprite[sprite][0] / 1000;
         var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
         sound._sprite = sprite;
 
         // Mark the sound as ended instantly so that this async playback
         // doesn't get grabbed by another call to play while this one waits to start.
         sound._ended = false;
 
         // Update the parameters of the sound.
         var setParams = function() {
           sound._paused = false;
           sound._seek = seek;
           sound._start = start;
           sound._stop = stop;
           sound._loop = !!(sound._loop || self._sprite[sprite][2]);
         };
 
         // End the sound instantly if seek is at the end.
         if (seek >= stop) {
           self._ended(sound);
           return;
         }
 
         // Begin the actual playback.
         var node = sound._node;
         if (self._webAudio) {
           // Fire this when the sound is ready to play to begin Web Audio playback.
           var playWebAudio = function() {
             self._playLock = false;
             setParams();
             self._refreshBuffer(sound);
 
             // Setup the playback params.
             var vol = (sound._muted || self._muted) ? 0 : sound._volume;
             node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
             sound._playStart = Howler.ctx.currentTime;
 
             // Play the sound using the supported method.
             if (typeof node.bufferSource.start === 'undefined') {
               sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
             } else {
               sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
             }
 
             // Start a new timer if none is present.
             if (timeout !== Infinity) {
               self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
             }
 
             if (!internal) {
               setTimeout(function() {
                 self._emit('play', sound._id);
                 self._loadQueue();
               }, 0);
             }
           };
 
           if (Howler.state === 'running') {
             playWebAudio();
           } else {
             self._playLock = true;
 
             // Wait for the audio context to resume before playing.
             self.once('resume', playWebAudio);
 
             // Cancel the end timer.
             self._clearTimer(sound._id);
           }
         } else {
           // Fire this when the sound is ready to play to begin HTML5 Audio playback.
           var playHtml5 = function() {
             node.currentTime = seek;
             node.muted = sound._muted || self._muted || Howler._muted || node.muted;
             node.volume = sound._volume * Howler.volume();
             node.playbackRate = sound._rate;
 
             // Some browsers will throw an error if this is called without user interaction.
             try {
               var play = node.play();
 
               // Support older browsers that don't support promises, and thus don't have this issue.
               if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                 // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                 self._playLock = true;
 
                 // Set param values immediately.
                 setParams();
 
                 // Releases the lock and executes queued actions.
                 play
                   .then(function() {
                     self._playLock = false;
                     node._unlocked = true;
                     if (!internal) {
                       self._emit('play', sound._id);
                       self._loadQueue();
                     }
                   })
                   .catch(function() {
                     self._playLock = false;
                     self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                       'on mobile devices and Chrome where playback was not within a user interaction.');
 
                     // Reset the ended and paused values.
                     sound._ended = true;
                     sound._paused = true;
                   });
               } else if (!internal) {
                 self._playLock = false;
                 setParams();
                 self._emit('play', sound._id);
                 self._loadQueue();
               }
 
               // Setting rate before playing won't work in IE, so we set it again here.
               node.playbackRate = sound._rate;
 
               // If the node is still paused, then we can assume there was a playback issue.
               if (node.paused) {
                 self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                   'on mobile devices and Chrome where playback was not within a user interaction.');
                 return;
               }
 
               // Setup the end timer on sprites or listen for the ended event.
               if (sprite !== '__default' || sound._loop) {
                 self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
               } else {
                 self._endTimers[sound._id] = function() {
                   // Fire ended on this audio node.
                   self._ended(sound);
 
                   // Clear this listener.
                   node.removeEventListener('ended', self._endTimers[sound._id], false);
                 };
                 node.addEventListener('ended', self._endTimers[sound._id], false);
               }
             } catch (err) {
               self._emit('playerror', sound._id, err);
             }
           };
 
           // If this is streaming audio, make sure the src is set and load again.
           if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
             node.src = self._src;
             node.load();
           }
 
           // Play immediately if ready, or wait for the 'canplaythrough'e vent.
           var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
           if (node.readyState >= 3 || loadedNoReadyState) {
             playHtml5();
           } else {
             self._playLock = true;
 
             var listener = function() {
               // Begin playback.
               playHtml5();
 
               // Clear this listener.
               node.removeEventListener(Howler._canPlayEvent, listener, false);
             };
             node.addEventListener(Howler._canPlayEvent, listener, false);
 
             // Cancel the end timer.
             self._clearTimer(sound._id);
           }
         }
 
         return sound._id;
       },
 
       /**
        * Pause playback and save current position.
        * @param  {Number} id The sound ID (empty to pause all in group).
        * @return {Howl}
        */
       pause: function(id) {
         var self = this;
 
         // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
         if (self._state !== 'loaded' || self._playLock) {
           self._queue.push({
             event: 'pause',
             action: function() {
               self.pause(id);
             }
           });
 
           return self;
         }
 
         // If no id is passed, get all ID's to be paused.
         var ids = self._getSoundIds(id);
 
         for (var i=0; i<ids.length; i++) {
           // Clear the end timer.
           self._clearTimer(ids[i]);
 
           // Get the sound.
           var sound = self._soundById(ids[i]);
 
           if (sound && !sound._paused) {
             // Reset the seek position.
             sound._seek = self.seek(ids[i]);
             sound._rateSeek = 0;
             sound._paused = true;
 
             // Stop currently running fades.
             self._stopFade(ids[i]);
 
             if (sound._node) {
               if (self._webAudio) {
                 // Make sure the sound has been created.
                 if (!sound._node.bufferSource) {
                   continue;
                 }
 
                 if (typeof sound._node.bufferSource.stop === 'undefined') {
                   sound._node.bufferSource.noteOff(0);
                 } else {
                   sound._node.bufferSource.stop(0);
                 }
 
                 // Clean up the buffer source.
                 self._cleanBuffer(sound._node);
               } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                 sound._node.pause();
               }
             }
           }
 
           // Fire the pause event, unless `true` is passed as the 2nd argument.
           if (!arguments[1]) {
             self._emit('pause', sound ? sound._id : null);
           }
         }
 
         return self;
       },
 
       /**
        * Stop playback and reset to start.
        * @param  {Number} id The sound ID (empty to stop all in group).
        * @param  {Boolean} internal Internal Use: true prevents event firing.
        * @return {Howl}
        */
       stop: function(id, internal) {
         var self = this;
 
         // If the sound hasn't loaded, add it to the load queue to stop when capable.
         if (self._state !== 'loaded' || self._playLock) {
           self._queue.push({
             event: 'stop',
             action: function() {
               self.stop(id);
             }
           });
 
           return self;
         }
 
         // If no id is passed, get all ID's to be stopped.
         var ids = self._getSoundIds(id);
 
         for (var i=0; i<ids.length; i++) {
           // Clear the end timer.
           self._clearTimer(ids[i]);
 
           // Get the sound.
           var sound = self._soundById(ids[i]);
 
           if (sound) {
             // Reset the seek position.
             sound._seek = sound._start || 0;
             sound._rateSeek = 0;
             sound._paused = true;
             sound._ended = true;
 
             // Stop currently running fades.
             self._stopFade(ids[i]);
 
             if (sound._node) {
               if (self._webAudio) {
                 // Make sure the sound's AudioBufferSourceNode has been created.
                 if (sound._node.bufferSource) {
                   if (typeof sound._node.bufferSource.stop === 'undefined') {
                     sound._node.bufferSource.noteOff(0);
                   } else {
                     sound._node.bufferSource.stop(0);
                   }
 
                   // Clean up the buffer source.
                   self._cleanBuffer(sound._node);
                 }
               } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                 sound._node.currentTime = sound._start || 0;
                 sound._node.pause();
 
                 // If this is a live stream, stop download once the audio is stopped.
                 if (sound._node.duration === Infinity) {
                   self._clearSound(sound._node);
                 }
               }
             }
 
             if (!internal) {
               self._emit('stop', sound._id);
             }
           }
         }
 
         return self;
       },
 
       /**
        * Mute/unmute a single sound or all sounds in this Howl group.
        * @param  {Boolean} muted Set to true to mute and false to unmute.
        * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
        * @return {Howl}
        */
       mute: function(muted, id) {
         var self = this;
 
         // If the sound hasn't loaded, add it to the load queue to mute when capable.
         if (self._state !== 'loaded'|| self._playLock) {
           self._queue.push({
             event: 'mute',
             action: function() {
               self.mute(muted, id);
             }
           });
 
           return self;
         }
 
         // If applying mute/unmute to all sounds, update the group's value.
         if (typeof id === 'undefined') {
           if (typeof muted === 'boolean') {
             self._muted = muted;
           } else {
             return self._muted;
           }
         }
 
         // If no id is passed, get all ID's to be muted.
         var ids = self._getSoundIds(id);
 
         for (var i=0; i<ids.length; i++) {
           // Get the sound.
           var sound = self._soundById(ids[i]);
 
           if (sound) {
             sound._muted = muted;
 
             // Cancel active fade and set the volume to the end value.
             if (sound._interval) {
               self._stopFade(sound._id);
             }
 
             if (self._webAudio && sound._node) {
               sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
             } else if (sound._node) {
               sound._node.muted = Howler._muted ? true : muted;
             }
 
             self._emit('mute', sound._id);
           }
         }
 
         return self;
       },
 
       /**
        * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
        *   volume() -> Returns the group's volume value.
        *   volume(id) -> Returns the sound id's current volume.
        *   volume(vol) -> Sets the volume of all sounds in this Howl group.
        *   volume(vol, id) -> Sets the volume of passed sound id.
        * @return {Howl/Number} Returns self or current volume.
        */
       volume: function() {
         var self = this;
         var args = arguments;
         var vol, id;
 
         // Determine the values based on arguments.
         if (args.length === 0) {
           // Return the value of the groups' volume.
           return self._volume;
         } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
           // First check if this is an ID, and if not, assume it is a new volume.
           var ids = self._getSoundIds();
           var index = ids.indexOf(args[0]);
           if (index >= 0) {
             id = parseInt(args[0], 10);
           } else {
             vol = parseFloat(args[0]);
           }
         } else if (args.length >= 2) {
           vol = parseFloat(args[0]);
           id = parseInt(args[1], 10);
         }
 
         // Update the volume or return the current volume.
         var sound;
         if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
           // If the sound hasn't loaded, add it to the load queue to change volume when capable.
           if (self._state !== 'loaded'|| self._playLock) {
             self._queue.push({
               event: 'volume',
               action: function() {
                 self.volume.apply(self, args);
               }
             });
 
             return self;
           }
 
           // Set the group volume.
           if (typeof id === 'undefined') {
             self._volume = vol;
           }
 
           // Update one or all volumes.
           id = self._getSoundIds(id);
           for (var i=0; i<id.length; i++) {
             // Get the sound.
             sound = self._soundById(id[i]);
 
             if (sound) {
               sound._volume = vol;
 
               // Stop currently running fades.
               if (!args[2]) {
                 self._stopFade(id[i]);
               }
 
               if (self._webAudio && sound._node && !sound._muted) {
                 sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
               } else if (sound._node && !sound._muted) {
                 sound._node.volume = vol * Howler.volume();
               }
 
               self._emit('volume', sound._id);
             }
           }
         } else {
           sound = id ? self._soundById(id) : self._sounds[0];
           return sound ? sound._volume : 0;
         }
 
         return self;
       },
 
       /**
        * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
        * @param  {Number} from The value to fade from (0.0 to 1.0).
        * @param  {Number} to   The volume to fade to (0.0 to 1.0).
        * @param  {Number} len  Time in milliseconds to fade.
        * @param  {Number} id   The sound id (omit to fade all sounds).
        * @return {Howl}
        */
       fade: function(from, to, len, id) {
         var self = this;
 
         // If the sound hasn't loaded, add it to the load queue to fade when capable.
         if (self._state !== 'loaded' || self._playLock) {
           self._queue.push({
             event: 'fade',
             action: function() {
               self.fade(from, to, len, id);
             }
           });
 
           return self;
         }
 
         // Make sure the to/from/len values are numbers.
         from = parseFloat(from);
         to = parseFloat(to);
         len = parseFloat(len);
 
         // Set the volume to the start position.
         self.volume(from, id);
 
         // Fade the volume of one or all sounds.
         var ids = self._getSoundIds(id);
         for (var i=0; i<ids.length; i++) {
           // Get the sound.
           var sound = self._soundById(ids[i]);
 
           // Create a linear fade or fall back to timeouts with HTML5 Audio.
           if (sound) {
             // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
             if (!id) {
               self._stopFade(ids[i]);
             }
 
             // If we are using Web Audio, let the native methods do the actual fade.
             if (self._webAudio && !sound._muted) {
               var currentTime = Howler.ctx.currentTime;
               var end = currentTime + (len / 1000);
               sound._volume = from;
               sound._node.gain.setValueAtTime(from, currentTime);
               sound._node.gain.linearRampToValueAtTime(to, end);
             }
 
             self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
           }
         }
 
         return self;
       },
 
       /**
        * Starts the internal interval to fade a sound.
        * @param  {Object} sound Reference to sound to fade.
        * @param  {Number} from The value to fade from (0.0 to 1.0).
        * @param  {Number} to   The volume to fade to (0.0 to 1.0).
        * @param  {Number} len  Time in milliseconds to fade.
        * @param  {Number} id   The sound id to fade.
        * @param  {Boolean} isGroup   If true, set the volume on the group.
        */
       _startFadeInterval: function(sound, from, to, len, id, isGroup) {
         var self = this;
         var vol = from;
         var diff = to - from;
         var steps = Math.abs(diff / 0.01);
         var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
         var lastTick = Date.now();
 
         // Store the value being faded to.
         sound._fadeTo = to;
 
         // Update the volume value on each interval tick.
         sound._interval = setInterval(function() {
           // Update the volume based on the time since the last tick.
           var tick = (Date.now() - lastTick) / len;
           lastTick = Date.now();
           vol += diff * tick;
 
           // Make sure the volume is in the right bounds.
           vol = Math.max(0, vol);
           vol = Math.min(1, vol);
 
           // Round to within 2 decimal points.
           vol = Math.round(vol * 100) / 100;
 
           // Change the volume.
           if (self._webAudio) {
             sound._volume = vol;
           } else {
             self.volume(vol, sound._id, true);
           }
 
           // Set the group's volume.
           if (isGroup) {
             self._volume = vol;
           }
 
           // When the fade is complete, stop it and fire event.
           if ((to < from && vol <= to) || (to > from && vol >= to)) {
             clearInterval(sound._interval);
             sound._interval = null;
             sound._fadeTo = null;
             self.volume(to, sound._id);
             self._emit('fade', sound._id);
           }
         }, stepLen);
       },
 
       /**
        * Internal method that stops the currently playing fade when
        * a new fade starts, volume is changed or the sound is stopped.
        * @param  {Number} id The sound id.
        * @return {Howl}
        */
       _stopFade: function(id) {
         var self = this;
         var sound = self._soundById(id);
 
         if (sound && sound._interval) {
           if (self._webAudio) {
             sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
           }
 
           clearInterval(sound._interval);
           sound._interval = null;
           self.volume(sound._fadeTo, id);
           sound._fadeTo = null;
           self._emit('fade', id);
         }
 
         return self;
       },
 
       /**
        * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
        *   loop() -> Returns the group's loop value.
        *   loop(id) -> Returns the sound id's loop value.
        *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
        *   loop(loop, id) -> Sets the loop value of passed sound id.
        * @return {Howl/Boolean} Returns self or current loop value.
        */
       loop: function() {
         var self = this;
         var args = arguments;
         var loop, id, sound;
 
         // Determine the values for loop and id.
         if (args.length === 0) {
           // Return the grou's loop value.
           return self._loop;
         } else if (args.length === 1) {
           if (typeof args[0] === 'boolean') {
             loop = args[0];
             self._loop = loop;
           } else {
             // Return this sound's loop value.
             sound = self._soundById(parseInt(args[0], 10));
             return sound ? sound._loop : false;
           }
         } else if (args.length === 2) {
           loop = args[0];
           id = parseInt(args[1], 10);
         }
 
         // If no id is passed, get all ID's to be looped.
         var ids = self._getSoundIds(id);
         for (var i=0; i<ids.length; i++) {
           sound = self._soundById(ids[i]);
 
           if (sound) {
             sound._loop = loop;
             if (self._webAudio && sound._node && sound._node.bufferSource) {
               sound._node.bufferSource.loop = loop;
               if (loop) {
                 sound._node.bufferSource.loopStart = sound._start || 0;
                 sound._node.bufferSource.loopEnd = sound._stop;
               }
             }
           }
         }
 
         return self;
       },
 
       /**
        * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
        *   rate() -> Returns the first sound node's current playback rate.
        *   rate(id) -> Returns the sound id's current playback rate.
        *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
        *   rate(rate, id) -> Sets the playback rate of passed sound id.
        * @return {Howl/Number} Returns self or the current playback rate.
        */
       rate: function() {
         var self = this;
         var args = arguments;
         var rate, id;
 
         // Determine the values based on arguments.
         if (args.length === 0) {
           // We will simply return the current rate of the first node.
           id = self._sounds[0]._id;
         } else if (args.length === 1) {
           // First check if this is an ID, and if not, assume it is a new rate value.
           var ids = self._getSoundIds();
           var index = ids.indexOf(args[0]);
           if (index >= 0) {
             id = parseInt(args[0], 10);
           } else {
             rate = parseFloat(args[0]);
           }
         } else if (args.length === 2) {
           rate = parseFloat(args[0]);
           id = parseInt(args[1], 10);
         }
 
         // Update the playback rate or return the current value.
         var sound;
         if (typeof rate === 'number') {
           // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
           if (self._state !== 'loaded' || self._playLock) {
             self._queue.push({
               event: 'rate',
               action: function() {
                 self.rate.apply(self, args);
               }
             });
 
             return self;
           }
 
           // Set the group rate.
           if (typeof id === 'undefined') {
             self._rate = rate;
           }
 
           // Update one or all volumes.
           id = self._getSoundIds(id);
           for (var i=0; i<id.length; i++) {
             // Get the sound.
             sound = self._soundById(id[i]);
 
             if (sound) {
               // Keep track of our position when the rate changed and update the playback
               // start position so we can properly adjust the seek position for time elapsed.
               if (self.playing(id[i])) {
                 sound._rateSeek = self.seek(id[i]);
                 sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
               }
               sound._rate = rate;
 
               // Change the playback rate.
               if (self._webAudio && sound._node && sound._node.bufferSource) {
                 sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
               } else if (sound._node) {
                 sound._node.playbackRate = rate;
               }
 
               // Reset the timers.
               var seek = self.seek(id[i]);
               var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
               var timeout = (duration * 1000) / Math.abs(sound._rate);
 
               // Start a new end timer if sound is already playing.
               if (self._endTimers[id[i]] || !sound._paused) {
                 self._clearTimer(id[i]);
                 self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
               }
 
               self._emit('rate', sound._id);
             }
           }
         } else {
           sound = self._soundById(id);
           return sound ? sound._rate : self._rate;
         }
 
         return self;
       },
 
       /**
        * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
        *   seek() -> Returns the first sound node's current seek position.
        *   seek(id) -> Returns the sound id's current seek position.
        *   seek(seek) -> Sets the seek position of the first sound node.
        *   seek(seek, id) -> Sets the seek position of passed sound id.
        * @return {Howl/Number} Returns self or the current seek position.
        */
       seek: function() {
         var self = this;
         var args = arguments;
         var seek, id;
 
         // Determine the values based on arguments.
         if (args.length === 0) {
           // We will simply return the current position of the first node.
           id = self._sounds[0]._id;
         } else if (args.length === 1) {
           // First check if this is an ID, and if not, assume it is a new seek position.
           var ids = self._getSoundIds();
           var index = ids.indexOf(args[0]);
           if (index >= 0) {
             id = parseInt(args[0], 10);
           } else if (self._sounds.length) {
             id = self._sounds[0]._id;
             seek = parseFloat(args[0]);
           }
         } else if (args.length === 2) {
           seek = parseFloat(args[0]);
           id = parseInt(args[1], 10);
         }
 
         // If there is no ID, bail out.
         if (typeof id === 'undefined') {
           return self;
         }
 
         // If the sound hasn't loaded, add it to the load queue to seek when capable.
         if (self._state !== 'loaded' || self._playLock) {
           self._queue.push({
             event: 'seek',
             action: function() {
               self.seek.apply(self, args);
             }
           });
 
           return self;
         }
 
         // Get the sound.
         var sound = self._soundById(id);
 
         if (sound) {
           if (typeof seek === 'number' && seek >= 0) {
             // Pause the sound and update position for restarting playback.
             var playing = self.playing(id);
             if (playing) {
               self.pause(id, true);
             }
 
             // Move the position of the track and cancel timer.
             sound._seek = seek;
             sound._ended = false;
             self._clearTimer(id);
 
             // Update the seek position for HTML5 Audio.
             if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
               sound._node.currentTime = seek;
             }
 
             // Seek and emit when ready.
             var seekAndEmit = function() {
               self._emit('seek', id);
 
               // Restart the playback if the sound was playing.
               if (playing) {
                 self.play(id, true);
               }
             };
 
             // Wait for the play lock to be unset before emitting (HTML5 Audio).
             if (playing && !self._webAudio) {
               var emitSeek = function() {
                 if (!self._playLock) {
                   seekAndEmit();
                 } else {
                   setTimeout(emitSeek, 0);
                 }
               };
               setTimeout(emitSeek, 0);
             } else {
               seekAndEmit();
             }
           } else {
             if (self._webAudio) {
               var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
               var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
               return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
             } else {
               return sound._node.currentTime;
             }
           }
         }
 
         return self;
       },
 
       /**
        * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
        * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
        * @return {Boolean} True if playing and false if not.
        */
       playing: function(id) {
         var self = this;
 
         // Check the passed sound ID (if any).
         if (typeof id === 'number') {
           var sound = self._soundById(id);
           return sound ? !sound._paused : false;
         }
 
         // Otherwise, loop through all sounds and check if any are playing.
         for (var i=0; i<self._sounds.length; i++) {
           if (!self._sounds[i]._paused) {
             return true;
           }
         }
 
         return false;
       },
 
       /**
        * Get the duration of this sound. Passing a sound id will return the sprite duration.
        * @param  {Number} id The sound id to check. If none is passed, return full source duration.
        * @return {Number} Audio duration in seconds.
        */
       duration: function(id) {
         var self = this;
         var duration = self._duration;
 
         // If we pass an ID, get the sound and return the sprite length.
         var sound = self._soundById(id);
         if (sound) {
           duration = self._sprite[sound._sprite][1] / 1000;
         }
 
         return duration;
       },
 
       /**
        * Returns the current loaded state of this Howl.
        * @return {String} 'unloaded', 'loading', 'loaded'
        */
       state: function() {
         return this._state;
       },
 
       /**
        * Unload and destroy the current Howl object.
        * This will immediately stop all sound instances attached to this group.
        */
       unload: function() {
         var self = this;
 
         // Stop playing any active sounds.
         var sounds = self._sounds;
         for (var i=0; i<sounds.length; i++) {
           // Stop the sound if it is currently playing.
           if (!sounds[i]._paused) {
             self.stop(sounds[i]._id);
           }
 
           // Remove the source or disconnect.
           if (!self._webAudio) {
             // Set the source to 0-second silence to stop any downloading (except in IE).
             self._clearSound(sounds[i]._node);
 
             // Remove any event listeners.
             sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
             sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
 
             // Release the Audio object back to the pool.
             Howler._releaseHtml5Audio(sounds[i]._node);
           }
 
           // Empty out all of the nodes.
           delete sounds[i]._node;
 
           // Make sure all timers are cleared out.
           self._clearTimer(sounds[i]._id);
         }
 
         // Remove the references in the global Howler object.
         var index = Howler._howls.indexOf(self);
         if (index >= 0) {
           Howler._howls.splice(index, 1);
         }
 
         // Delete this sound from the cache (if no other Howl is using it).
         var remCache = true;
         for (i=0; i<Howler._howls.length; i++) {
           if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
             remCache = false;
             break;
           }
         }
 
         if (cache && remCache) {
           delete cache[self._src];
         }
 
         // Clear global errors.
         Howler.noAudio = false;
 
         // Clear out `self`.
         self._state = 'unloaded';
         self._sounds = [];
         self = null;
 
         return null;
       },
 
       /**
        * Listen to a custom event.
        * @param  {String}   event Event name.
        * @param  {Function} fn    Listener to call.
        * @param  {Number}   id    (optional) Only listen to events for this sound.
        * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
        * @return {Howl}
        */
       on: function(event, fn, id, once) {
         var self = this;
         var events = self['_on' + event];
 
         if (typeof fn === 'function') {
           events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
         }
 
         return self;
       },
 
       /**
        * Remove a custom event. Call without parameters to remove all events.
        * @param  {String}   event Event name.
        * @param  {Function} fn    Listener to remove. Leave empty to remove all.
        * @param  {Number}   id    (optional) Only remove events for this sound.
        * @return {Howl}
        */
       off: function(event, fn, id) {
         var self = this;
         var events = self['_on' + event];
         var i = 0;
 
         // Allow passing just an event and ID.
         if (typeof fn === 'number') {
           id = fn;
           fn = null;
         }
 
         if (fn || id) {
           // Loop through event store and remove the passed function.
           for (i=0; i<events.length; i++) {
             var isId = (id === events[i].id);
             if (fn === events[i].fn && isId || !fn && isId) {
               events.splice(i, 1);
               break;
             }
           }
         } else if (event) {
           // Clear out all events of this type.
           self['_on' + event] = [];
         } else {
           // Clear out all events of every type.
           var keys = Object.keys(self);
           for (i=0; i<keys.length; i++) {
             if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
               self[keys[i]] = [];
             }
           }
         }
 
         return self;
       },
 
       /**
        * Listen to a custom event and remove it once fired.
        * @param  {String}   event Event name.
        * @param  {Function} fn    Listener to call.
        * @param  {Number}   id    (optional) Only listen to events for this sound.
        * @return {Howl}
        */
       once: function(event, fn, id) {
         var self = this;
 
         // Setup the event listener.
         self.on(event, fn, id, 1);
 
         return self;
       },
 
       /**
        * Emit all events of a specific type and pass the sound id.
        * @param  {String} event Event name.
        * @param  {Number} id    Sound ID.
        * @param  {Number} msg   Message to go with event.
        * @return {Howl}
        */
       _emit: function(event, id, msg) {
         var self = this;
         var events = self['_on' + event];
 
         // Loop through event store and fire all functions.
         for (var i=events.length-1; i>=0; i--) {
           // Only fire the listener if the correct ID is used.
           if (!events[i].id || events[i].id === id || event === 'load') {
             setTimeout(function(fn) {
               fn.call(this, id, msg);
             }.bind(self, events[i].fn), 0);
 
             // If this event was setup with `once`, remove it.
             if (events[i].once) {
               self.off(event, events[i].fn, events[i].id);
             }
           }
         }
 
         // Pass the event type into load queue so that it can continue stepping.
         self._loadQueue(event);
 
         return self;
       },
 
       /**
        * Queue of actions initiated before the sound has loaded.
        * These will be called in sequence, with the next only firing
        * after the previous has finished executing (even if async like play).
        * @return {Howl}
        */
       _loadQueue: function(event) {
         var self = this;
 
         if (self._queue.length > 0) {
           var task = self._queue[0];
 
           // Remove this task if a matching event was passed.
           if (task.event === event) {
             self._queue.shift();
             self._loadQueue();
           }
 
           // Run the task if no event type is passed.
           if (!event) {
             task.action();
           }
         }
 
         return self;
       },
 
       /**
        * Fired when playback ends at the end of the duration.
        * @param  {Sound} sound The sound object to work with.
        * @return {Howl}
        */
       _ended: function(sound) {
         var self = this;
         var sprite = sound._sprite;
 
         // If we are using IE and there was network latency we may be clipping
         // audio before it completes playing. Lets check the node to make sure it
         // believes it has completed, before ending the playback.
         if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
           setTimeout(self._ended.bind(self, sound), 100);
           return self;
         }
 
         // Should this sound loop?
         var loop = !!(sound._loop || self._sprite[sprite][2]);
 
         // Fire the ended event.
         self._emit('end', sound._id);
 
         // Restart the playback for HTML5 Audio loop.
         if (!self._webAudio && loop) {
           self.stop(sound._id, true).play(sound._id);
         }
 
         // Restart this timer if on a Web Audio loop.
         if (self._webAudio && loop) {
           self._emit('play', sound._id);
           sound._seek = sound._start || 0;
           sound._rateSeek = 0;
           sound._playStart = Howler.ctx.currentTime;
 
           var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
           self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
         }
 
         // Mark the node as paused.
         if (self._webAudio && !loop) {
           sound._paused = true;
           sound._ended = true;
           sound._seek = sound._start || 0;
           sound._rateSeek = 0;
           self._clearTimer(sound._id);
 
           // Clean up the buffer source.
           self._cleanBuffer(sound._node);
 
           // Attempt to auto-suspend AudioContext if no sounds are still playing.
           Howler._autoSuspend();
         }
 
         // When using a sprite, end the track.
         if (!self._webAudio && !loop) {
           self.stop(sound._id, true);
         }
 
         return self;
       },
 
       /**
        * Clear the end timer for a sound playback.
        * @param  {Number} id The sound ID.
        * @return {Howl}
        */
       _clearTimer: function(id) {
         var self = this;
 
         if (self._endTimers[id]) {
           // Clear the timeout or remove the ended listener.
           if (typeof self._endTimers[id] !== 'function') {
             clearTimeout(self._endTimers[id]);
           } else {
             var sound = self._soundById(id);
             if (sound && sound._node) {
               sound._node.removeEventListener('ended', self._endTimers[id], false);
             }
           }
 
           delete self._endTimers[id];
         }
 
         return self;
       },
 
       /**
        * Return the sound identified by this ID, or return null.
        * @param  {Number} id Sound ID
        * @return {Object}    Sound object or null.
        */
       _soundById: function(id) {
         var self = this;
 
         // Loop through all sounds and find the one with this ID.
         for (var i=0; i<self._sounds.length; i++) {
           if (id === self._sounds[i]._id) {
             return self._sounds[i];
           }
         }
 
         return null;
       },
 
       /**
        * Return an inactive sound from the pool or create a new one.
        * @return {Sound} Sound playback object.
        */
       _inactiveSound: function() {
         var self = this;
 
         self._drain();
 
         // Find the first inactive node to recycle.
         for (var i=0; i<self._sounds.length; i++) {
           if (self._sounds[i]._ended) {
             return self._sounds[i].reset();
           }
         }
 
         // If no inactive node was found, create a new one.
         return new Sound(self);
       },
 
       /**
        * Drain excess inactive sounds from the pool.
        */
       _drain: function() {
         var self = this;
         var limit = self._pool;
         var cnt = 0;
         var i = 0;
 
         // If there are less sounds than the max pool size, we are done.
         if (self._sounds.length < limit) {
           return;
         }
 
         // Count the number of inactive sounds.
         for (i=0; i<self._sounds.length; i++) {
           if (self._sounds[i]._ended) {
             cnt++;
           }
         }
 
         // Remove excess inactive sounds, going in reverse order.
         for (i=self._sounds.length - 1; i>=0; i--) {
           if (cnt <= limit) {
             return;
           }
 
           if (self._sounds[i]._ended) {
             // Disconnect the audio source when using Web Audio.
             if (self._webAudio && self._sounds[i]._node) {
               self._sounds[i]._node.disconnect(0);
             }
 
             // Remove sounds until we have the pool size.
             self._sounds.splice(i, 1);
             cnt--;
           }
         }
       },
 
       /**
        * Get all ID's from the sounds pool.
        * @param  {Number} id Only return one ID if one is passed.
        * @return {Array}    Array of IDs.
        */
       _getSoundIds: function(id) {
         var self = this;
 
         if (typeof id === 'undefined') {
           var ids = [];
           for (var i=0; i<self._sounds.length; i++) {
             ids.push(self._sounds[i]._id);
           }
 
           return ids;
         } else {
           return [id];
         }
       },
 
       /**
        * Load the sound back into the buffer source.
        * @param  {Sound} sound The sound object to work with.
        * @return {Howl}
        */
       _refreshBuffer: function(sound) {
         var self = this;
 
         // Setup the buffer source for playback.
         sound._node.bufferSource = Howler.ctx.createBufferSource();
         sound._node.bufferSource.buffer = cache[self._src];
 
         // Connect to the correct node.
         if (sound._panner) {
           sound._node.bufferSource.connect(sound._panner);
         } else {
           sound._node.bufferSource.connect(sound._node);
         }
 
         // Setup looping and playback rate.
         sound._node.bufferSource.loop = sound._loop;
         if (sound._loop) {
           sound._node.bufferSource.loopStart = sound._start || 0;
           sound._node.bufferSource.loopEnd = sound._stop || 0;
         }
         sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);
 
         return self;
       },
 
       /**
        * Prevent memory leaks by cleaning up the buffer source after playback.
        * @param  {Object} node Sound's audio node containing the buffer source.
        * @return {Howl}
        */
       _cleanBuffer: function(node) {
         var self = this;
         var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;
 
         if (Howler._scratchBuffer && node.bufferSource) {
           node.bufferSource.onended = null;
           node.bufferSource.disconnect(0);
           if (isIOS) {
             try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
           }
         }
         node.bufferSource = null;
 
         return self;
       },
 
       /**
        * Set the source to a 0-second silence to stop any downloading (except in IE).
        * @param  {Object} node Audio node to clear.
        */
       _clearSound: function(node) {
         var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
         if (!checkIE) {
           node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
         }
       }
     };
 
     /** Single Sound Methods **/
     /***************************************************************************/
 
     /**
      * Setup the sound object, which each node attached to a Howl group is contained in.
      * @param {Object} howl The Howl parent group.
      */
     var Sound = function(howl) {
       this._parent = howl;
       this.init();
     };
     Sound.prototype = {
       /**
        * Initialize a new Sound object.
        * @return {Sound}
        */
       init: function() {
         var self = this;
         var parent = self._parent;
 
         // Setup the default parameters.
         self._muted = parent._muted;
         self._loop = parent._loop;
         self._volume = parent._volume;
         self._rate = parent._rate;
         self._seek = 0;
         self._paused = true;
         self._ended = true;
         self._sprite = '__default';
 
         // Generate a unique ID for this sound.
         self._id = ++Howler._counter;
 
         // Add itself to the parent's pool.
         parent._sounds.push(self);
 
         // Create the new node.
         self.create();
 
         return self;
       },
 
       /**
        * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
        * @return {Sound}
        */
       create: function() {
         var self = this;
         var parent = self._parent;
         var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;
 
         if (parent._webAudio) {
           // Create the gain node for controlling volume (the source will connect to this).
           self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
           self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
           self._node.paused = true;
           self._node.connect(Howler.masterGain);
         } else if (!Howler.noAudio) {
           // Get an unlocked Audio object from the pool.
           self._node = Howler._obtainHtml5Audio();
 
           // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
           self._errorFn = self._errorListener.bind(self);
           self._node.addEventListener('error', self._errorFn, false);
 
           // Listen for 'canplaythrough' event to let us know the sound is ready.
           self._loadFn = self._loadListener.bind(self);
           self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
 
           // Setup the new audio node.
           self._node.src = parent._src;
           self._node.preload = 'auto';
           self._node.volume = volume * Howler.volume();
 
           // Begin loading the source.
           self._node.load();
         }
 
         return self;
       },
 
       /**
        * Reset the parameters of this sound to the original state (for recycle).
        * @return {Sound}
        */
       reset: function() {
         var self = this;
         var parent = self._parent;
 
         // Reset all of the parameters of this sound.
         self._muted = parent._muted;
         self._loop = parent._loop;
         self._volume = parent._volume;
         self._rate = parent._rate;
         self._seek = 0;
         self._rateSeek = 0;
         self._paused = true;
         self._ended = true;
         self._sprite = '__default';
 
         // Generate a new ID so that it isn't confused with the previous sound.
         self._id = ++Howler._counter;
 
         return self;
       },
 
       /**
        * HTML5 Audio error listener callback.
        */
       _errorListener: function() {
         var self = this;
 
         // Fire an error event and pass back the code.
         self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);
 
         // Clear the event listener.
         self._node.removeEventListener('error', self._errorFn, false);
       },
 
       /**
        * HTML5 Audio canplaythrough listener callback.
        */
       _loadListener: function() {
         var self = this;
         var parent = self._parent;
 
         // Round up the duration to account for the lower precision in HTML5 Audio.
         parent._duration = Math.ceil(self._node.duration * 10) / 10;
 
         // Setup a sprite if none is defined.
         if (Object.keys(parent._sprite).length === 0) {
           parent._sprite = {__default: [0, parent._duration * 1000]};
         }
 
         if (parent._state !== 'loaded') {
           parent._state = 'loaded';
           parent._emit('load');
           parent._loadQueue();
         }
 
         // Clear the event listener.
         self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
       }
     };
 
     /** Helper Methods **/
     /***************************************************************************/
 
     var cache = {};
 
     /**
      * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
      * @param  {Howl} self
      */
     var loadBuffer = function(self) {
       var url = self._src;
 
       // Check if the buffer has already been cached and use it instead.
       if (cache[url]) {
         // Set the duration from the cache.
         self._duration = cache[url].duration;
 
         // Load the sound into this Howl.
         loadSound(self);
 
         return;
       }
 
       if (/^data:[^;]+;base64,/.test(url)) {
         // Decode the base64 data URI without XHR, since some browsers don't support it.
         var data = atob(url.split(',')[1]);
         var dataView = new Uint8Array(data.length);
         for (var i=0; i<data.length; ++i) {
           dataView[i] = data.charCodeAt(i);
         }
 
         decodeAudioData(dataView.buffer, self);
       } else {
         // Load the buffer from the URL.
         var xhr = new XMLHttpRequest();
         xhr.open('GET', url, true);
         xhr.withCredentials = self._xhrWithCredentials;
         xhr.responseType = 'arraybuffer';
         xhr.onload = function() {
           // Make sure we get a successful response back.
           var code = (xhr.status + '')[0];
           if (code !== '0' && code !== '2' && code !== '3') {
             self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
             return;
           }
 
           decodeAudioData(xhr.response, self);
         };
         xhr.onerror = function() {
           // If there is an error, switch to HTML5 Audio.
           if (self._webAudio) {
             self._html5 = true;
             self._webAudio = false;
             self._sounds = [];
             delete cache[url];
             self.load();
           }
         };
         safeXhrSend(xhr);
       }
     };
 
     /**
      * Send the XHR request wrapped in a try/catch.
      * @param  {Object} xhr XHR to send.
      */
     var safeXhrSend = function(xhr) {
       try {
         xhr.send();
       } catch (e) {
         xhr.onerror();
       }
     };
 
     /**
      * Decode audio data from an array buffer.
      * @param  {ArrayBuffer} arraybuffer The audio data.
      * @param  {Howl}        self
      */
     var decodeAudioData = function(arraybuffer, self) {
       // Fire a load error if something broke.
       var error = function() {
         self._emit('loaderror', null, 'Decoding audio data failed.');
       };
 
       // Load the sound on success.
       var success = function(buffer) {
         if (buffer && self._sounds.length > 0) {
           cache[self._src] = buffer;
           loadSound(self, buffer);
         } else {
           error();
         }
       };
 
       // Decode the buffer into an audio source.
       if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
         Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
       } else {
         Howler.ctx.decodeAudioData(arraybuffer, success, error);
       }
     };
 
     /**
      * Sound is now loaded, so finish setting everything up and fire the loaded event.
      * @param  {Howl} self
      * @param  {Object} buffer The decoded buffer sound source.
      */
     var loadSound = function(self, buffer) {
       // Set the duration.
       if (buffer && !self._duration) {
         self._duration = buffer.duration;
       }
 
       // Setup a sprite if none is defined.
       if (Object.keys(self._sprite).length === 0) {
         self._sprite = {__default: [0, self._duration * 1000]};
       }
 
       // Fire the loaded event.
       if (self._state !== 'loaded') {
         self._state = 'loaded';
         self._emit('load');
         self._loadQueue();
       }
     };
 
     /**
      * Setup the audio context when available, or switch to HTML5 Audio mode.
      */
     var setupAudioContext = function() {
       // If we have already detected that Web Audio isn't supported, don't run this step again.
       if (!Howler.usingWebAudio) {
         return;
       }
 
       // Check if we are using Web Audio and setup the AudioContext if we are.
       try {
         if (typeof AudioContext !== 'undefined') {
           Howler.ctx = new AudioContext();
         } else if (typeof webkitAudioContext !== 'undefined') {
           Howler.ctx = new webkitAudioContext();
         } else {
           Howler.usingWebAudio = false;
         }
       } catch(e) {
         Howler.usingWebAudio = false;
       }
 
       // If the audio context creation still failed, set using web audio to false.
       if (!Howler.ctx) {
         Howler.usingWebAudio = false;
       }
 
       // Check if a webview is being used on iOS8 or earlier (rather than the browser).
       // If it is, disable Web Audio as it causes crashing.
       var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
       var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
       var version = appVersion ? parseInt(appVersion[1], 10) : null;
       if (iOS && version && version < 9) {
         var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
         if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
           Howler.usingWebAudio = false;
         }
       }
 
       // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
       if (Howler.usingWebAudio) {
         Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
         Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
         Howler.masterGain.connect(Howler.ctx.destination);
       }
 
       // Re-run the setup on Howler.
       Howler._setup();
     };
 
     // Add support for CommonJS libraries such as browserify.
     {
       exports.Howler = Howler;
       exports.Howl = Howl;
     }
 
     // Define globally in case AMD is not available or unused.
     if (typeof window !== 'undefined') {
       window.HowlerGlobal = HowlerGlobal;
       window.Howler = Howler;
       window.Howl = Howl;
       window.Sound = Sound;
     } else if (typeof commonjsGlobal !== 'undefined') { // Add to global in Node.js (for testing, etc).
       commonjsGlobal.HowlerGlobal = HowlerGlobal;
       commonjsGlobal.Howler = Howler;
       commonjsGlobal.Howl = Howl;
       commonjsGlobal.Sound = Sound;
     }
   })();
 
 
   /*!
    *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
    *  
    *  howler.js v2.1.3
    *  howlerjs.com
    *
    *  (c) 2013-2019, James Simpson of GoldFire Studios
    *  goldfirestudios.com
    *
    *  MIT License
    */
 
   (function() {
 
     // Setup default properties.
     HowlerGlobal.prototype._pos = [0, 0, 0];
     HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
 
     /** Global Methods **/
     /***************************************************************************/
 
     /**
      * Helper method to update the stereo panning position of all current Howls.
      * Future Howls will not use this value unless explicitly set.
      * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
      * @return {Howler/Number}     Self or current stereo panning value.
      */
     HowlerGlobal.prototype.stereo = function(pan) {
       var self = this;
 
       // Stop right here if not using Web Audio.
       if (!self.ctx || !self.ctx.listener) {
         return self;
       }
 
       // Loop through all Howls and update their stereo panning.
       for (var i=self._howls.length-1; i>=0; i--) {
         self._howls[i].stereo(pan);
       }
 
       return self;
     };
 
     /**
      * Get/set the position of the listener in 3D cartesian space. Sounds using
      * 3D position will be relative to the listener's position.
      * @param  {Number} x The x-position of the listener.
      * @param  {Number} y The y-position of the listener.
      * @param  {Number} z The z-position of the listener.
      * @return {Howler/Array}   Self or current listener position.
      */
     HowlerGlobal.prototype.pos = function(x, y, z) {
       var self = this;
 
       // Stop right here if not using Web Audio.
       if (!self.ctx || !self.ctx.listener) {
         return self;
       }
 
       // Set the defaults for optional 'y' & 'z'.
       y = (typeof y !== 'number') ? self._pos[1] : y;
       z = (typeof z !== 'number') ? self._pos[2] : z;
 
       if (typeof x === 'number') {
         self._pos = [x, y, z];
 
         if (typeof self.ctx.listener.positionX !== 'undefined') {
           self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
           self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
           self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
         } else {
           self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
         }
       } else {
         return self._pos;
       }
 
       return self;
     };
 
     /**
      * Get/set the direction the listener is pointing in the 3D cartesian space.
      * A front and up vector must be provided. The front is the direction the
      * face of the listener is pointing, and up is the direction the top of the
      * listener is pointing. Thus, these values are expected to be at right angles
      * from each other.
      * @param  {Number} x   The x-orientation of the listener.
      * @param  {Number} y   The y-orientation of the listener.
      * @param  {Number} z   The z-orientation of the listener.
      * @param  {Number} xUp The x-orientation of the top of the listener.
      * @param  {Number} yUp The y-orientation of the top of the listener.
      * @param  {Number} zUp The z-orientation of the top of the listener.
      * @return {Howler/Array}     Returns self or the current orientation vectors.
      */
     HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
       var self = this;
 
       // Stop right here if not using Web Audio.
       if (!self.ctx || !self.ctx.listener) {
         return self;
       }
 
       // Set the defaults for optional 'y' & 'z'.
       var or = self._orientation;
       y = (typeof y !== 'number') ? or[1] : y;
       z = (typeof z !== 'number') ? or[2] : z;
       xUp = (typeof xUp !== 'number') ? or[3] : xUp;
       yUp = (typeof yUp !== 'number') ? or[4] : yUp;
       zUp = (typeof zUp !== 'number') ? or[5] : zUp;
 
       if (typeof x === 'number') {
         self._orientation = [x, y, z, xUp, yUp, zUp];
 
         if (typeof self.ctx.listener.forwardX !== 'undefined') {
           self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
           self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
           self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
           self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
           self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
           self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
         } else {
           self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
         }
       } else {
         return or;
       }
 
       return self;
     };
 
     /** Group Methods **/
     /***************************************************************************/
 
     /**
      * Add new properties to the core init.
      * @param  {Function} _super Core init method.
      * @return {Howl}
      */
     Howl.prototype.init = (function(_super) {
       return function(o) {
         var self = this;
 
         // Setup user-defined default properties.
         self._orientation = o.orientation || [1, 0, 0];
         self._stereo = o.stereo || null;
         self._pos = o.pos || null;
         self._pannerAttr = {
           coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
           coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
           coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
           distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
           maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
           panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
           refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
           rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
         };
 
         // Setup event listeners.
         self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
         self._onpos = o.onpos ? [{fn: o.onpos}] : [];
         self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];
 
         // Complete initilization with howler.js core's init function.
         return _super.call(this, o);
       };
     })(Howl.prototype.init);
 
     /**
      * Get/set the stereo panning of the audio source for this sound or all in the group.
      * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
      * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
      * @return {Howl/Number}    Returns self or the current stereo panning value.
      */
     Howl.prototype.stereo = function(pan, id) {
       var self = this;
 
       // Stop right here if not using Web Audio.
       if (!self._webAudio) {
         return self;
       }
 
       // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
       if (self._state !== 'loaded') {
         self._queue.push({
           event: 'stereo',
           action: function() {
             self.stereo(pan, id);
           }
         });
 
         return self;
       }
 
       // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
       var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';
 
       // Setup the group's stereo panning if no ID is passed.
       if (typeof id === 'undefined') {
         // Return the group's stereo panning if no parameters are passed.
         if (typeof pan === 'number') {
           self._stereo = pan;
           self._pos = [pan, 0, 0];
         } else {
           return self._stereo;
         }
       }
 
       // Change the streo panning of one or all sounds in group.
       var ids = self._getSoundIds(id);
       for (var i=0; i<ids.length; i++) {
         // Get the sound.
         var sound = self._soundById(ids[i]);
 
         if (sound) {
           if (typeof pan === 'number') {
             sound._stereo = pan;
             sound._pos = [pan, 0, 0];
 
             if (sound._node) {
               // If we are falling back, make sure the panningModel is equalpower.
               sound._pannerAttr.panningModel = 'equalpower';
 
               // Check if there is a panner setup and create a new one if not.
               if (!sound._panner || !sound._panner.pan) {
                 setupPanner(sound, pannerType);
               }
 
               if (pannerType === 'spatial') {
                 if (typeof sound._panner.positionX !== 'undefined') {
                   sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                   sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                   sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                 } else {
                   sound._panner.setPosition(pan, 0, 0);
                 }
               } else {
                 sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
               }
             }
 
             self._emit('stereo', sound._id);
           } else {
             return sound._stereo;
           }
         }
       }
 
       return self;
     };
 
     /**
      * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
      * @param  {Number} x  The x-position of the audio source.
      * @param  {Number} y  The y-position of the audio source.
      * @param  {Number} z  The z-position of the audio source.
      * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
      * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
      */
     Howl.prototype.pos = function(x, y, z, id) {
       var self = this;
 
       // Stop right here if not using Web Audio.
       if (!self._webAudio) {
         return self;
       }
 
       // If the sound hasn't loaded, add it to the load queue to change position when capable.
       if (self._state !== 'loaded') {
         self._queue.push({
           event: 'pos',
           action: function() {
             self.pos(x, y, z, id);
           }
         });
 
         return self;
       }
 
       // Set the defaults for optional 'y' & 'z'.
       y = (typeof y !== 'number') ? 0 : y;
       z = (typeof z !== 'number') ? -0.5 : z;
 
       // Setup the group's spatial position if no ID is passed.
       if (typeof id === 'undefined') {
         // Return the group's spatial position if no parameters are passed.
         if (typeof x === 'number') {
           self._pos = [x, y, z];
         } else {
           return self._pos;
         }
       }
 
       // Change the spatial position of one or all sounds in group.
       var ids = self._getSoundIds(id);
       for (var i=0; i<ids.length; i++) {
         // Get the sound.
         var sound = self._soundById(ids[i]);
 
         if (sound) {
           if (typeof x === 'number') {
             sound._pos = [x, y, z];
 
             if (sound._node) {
               // Check if there is a panner setup and create a new one if not.
               if (!sound._panner || sound._panner.pan) {
                 setupPanner(sound, 'spatial');
               }
 
               if (typeof sound._panner.positionX !== 'undefined') {
                 sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                 sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                 sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
               } else {
                 sound._panner.setPosition(x, y, z);
               }
             }
 
             self._emit('pos', sound._id);
           } else {
             return sound._pos;
           }
         }
       }
 
       return self;
     };
 
     /**
      * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
      * space. Depending on how direction the sound is, based on the `cone` attributes,
      * a sound pointing away from the listener can be quiet or silent.
      * @param  {Number} x  The x-orientation of the source.
      * @param  {Number} y  The y-orientation of the source.
      * @param  {Number} z  The z-orientation of the source.
      * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
      * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
      */
     Howl.prototype.orientation = function(x, y, z, id) {
       var self = this;
 
       // Stop right here if not using Web Audio.
       if (!self._webAudio) {
         return self;
       }
 
       // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
       if (self._state !== 'loaded') {
         self._queue.push({
           event: 'orientation',
           action: function() {
             self.orientation(x, y, z, id);
           }
         });
 
         return self;
       }
 
       // Set the defaults for optional 'y' & 'z'.
       y = (typeof y !== 'number') ? self._orientation[1] : y;
       z = (typeof z !== 'number') ? self._orientation[2] : z;
 
       // Setup the group's spatial orientation if no ID is passed.
       if (typeof id === 'undefined') {
         // Return the group's spatial orientation if no parameters are passed.
         if (typeof x === 'number') {
           self._orientation = [x, y, z];
         } else {
           return self._orientation;
         }
       }
 
       // Change the spatial orientation of one or all sounds in group.
       var ids = self._getSoundIds(id);
       for (var i=0; i<ids.length; i++) {
         // Get the sound.
         var sound = self._soundById(ids[i]);
 
         if (sound) {
           if (typeof x === 'number') {
             sound._orientation = [x, y, z];
 
             if (sound._node) {
               // Check if there is a panner setup and create a new one if not.
               if (!sound._panner) {
                 // Make sure we have a position to setup the node with.
                 if (!sound._pos) {
                   sound._pos = self._pos || [0, 0, -0.5];
                 }
 
                 setupPanner(sound, 'spatial');
               }
 
               if (typeof sound._panner.orientationX !== 'undefined') {
                 sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                 sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                 sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
               } else {
                 sound._panner.setOrientation(x, y, z);
               }
             }
 
             self._emit('orientation', sound._id);
           } else {
             return sound._orientation;
           }
         }
       }
 
       return self;
     };
 
     /**
      * Get/set the panner node's attributes for a sound or group of sounds.
      * This method can optionall take 0, 1 or 2 arguments.
      *   pannerAttr() -> Returns the group's values.
      *   pannerAttr(id) -> Returns the sound id's values.
      *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
      *   pannerAttr(o, id) -> Set's the values of passed sound id.
      *
      *   Attributes:
      *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
      *                      inside of which there will be no volume reduction.
      *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
      *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
      *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
      *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
      *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
      *                     listener. Can be `linear`, `inverse` or `exponential.
      *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
      *                   will not be reduced any further.
      *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
      *                   This is simply a variable of the distance model and has a different effect depending on which model
      *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
      *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
      *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
      *                     with `inverse` and `exponential`.
      *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
      *                     Can be `HRTF` or `equalpower`.
      *
      * @return {Howl/Object} Returns self or current panner attributes.
      */
     Howl.prototype.pannerAttr = function() {
       var self = this;
       var args = arguments;
       var o, id, sound;
 
       // Stop right here if not using Web Audio.
       if (!self._webAudio) {
         return self;
       }
 
       // Determine the values based on arguments.
       if (args.length === 0) {
         // Return the group's panner attribute values.
         return self._pannerAttr;
       } else if (args.length === 1) {
         if (typeof args[0] === 'object') {
           o = args[0];
 
           // Set the grou's panner attribute values.
           if (typeof id === 'undefined') {
             if (!o.pannerAttr) {
               o.pannerAttr = {
                 coneInnerAngle: o.coneInnerAngle,
                 coneOuterAngle: o.coneOuterAngle,
                 coneOuterGain: o.coneOuterGain,
                 distanceModel: o.distanceModel,
                 maxDistance: o.maxDistance,
                 refDistance: o.refDistance,
                 rolloffFactor: o.rolloffFactor,
                 panningModel: o.panningModel
               };
             }
 
             self._pannerAttr = {
               coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
               coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
               coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
               distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
               maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
               refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
               rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
               panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
             };
           }
         } else {
           // Return this sound's panner attribute values.
           sound = self._soundById(parseInt(args[0], 10));
           return sound ? sound._pannerAttr : self._pannerAttr;
         }
       } else if (args.length === 2) {
         o = args[0];
         id = parseInt(args[1], 10);
       }
 
       // Update the values of the specified sounds.
       var ids = self._getSoundIds(id);
       for (var i=0; i<ids.length; i++) {
         sound = self._soundById(ids[i]);
 
         if (sound) {
           // Merge the new values into the sound.
           var pa = sound._pannerAttr;
           pa = {
             coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
             coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
             coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
             distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
             maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
             refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
             rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
             panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
           };
 
           // Update the panner values or create a new panner if none exists.
           var panner = sound._panner;
           if (panner) {
             panner.coneInnerAngle = pa.coneInnerAngle;
             panner.coneOuterAngle = pa.coneOuterAngle;
             panner.coneOuterGain = pa.coneOuterGain;
             panner.distanceModel = pa.distanceModel;
             panner.maxDistance = pa.maxDistance;
             panner.refDistance = pa.refDistance;
             panner.rolloffFactor = pa.rolloffFactor;
             panner.panningModel = pa.panningModel;
           } else {
             // Make sure we have a position to setup the node with.
             if (!sound._pos) {
               sound._pos = self._pos || [0, 0, -0.5];
             }
 
             // Create a new panner node.
             setupPanner(sound, 'spatial');
           }
         }
       }
 
       return self;
     };
 
     /** Single Sound Methods **/
     /***************************************************************************/
 
     /**
      * Add new properties to the core Sound init.
      * @param  {Function} _super Core Sound init method.
      * @return {Sound}
      */
     Sound.prototype.init = (function(_super) {
       return function() {
         var self = this;
         var parent = self._parent;
 
         // Setup user-defined default properties.
         self._orientation = parent._orientation;
         self._stereo = parent._stereo;
         self._pos = parent._pos;
         self._pannerAttr = parent._pannerAttr;
 
         // Complete initilization with howler.js core Sound's init function.
         _super.call(this);
 
         // If a stereo or position was specified, set it up.
         if (self._stereo) {
           parent.stereo(self._stereo);
         } else if (self._pos) {
           parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
         }
       };
     })(Sound.prototype.init);
 
     /**
      * Override the Sound.reset method to clean up properties from the spatial plugin.
      * @param  {Function} _super Sound reset method.
      * @return {Sound}
      */
     Sound.prototype.reset = (function(_super) {
       return function() {
         var self = this;
         var parent = self._parent;
 
         // Reset all spatial plugin properties on this sound.
         self._orientation = parent._orientation;
         self._stereo = parent._stereo;
         self._pos = parent._pos;
         self._pannerAttr = parent._pannerAttr;
 
         // If a stereo or position was specified, set it up.
         if (self._stereo) {
           parent.stereo(self._stereo);
         } else if (self._pos) {
           parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
         } else if (self._panner) {
           // Disconnect the panner.
           self._panner.disconnect(0);
           self._panner = undefined;
           parent._refreshBuffer(self);
         }
 
         // Complete resetting of the sound.
         return _super.call(this);
       };
     })(Sound.prototype.reset);
 
     /** Helper Methods **/
     /***************************************************************************/
 
     /**
      * Create a new panner node and save it on the sound.
      * @param  {Sound} sound Specific sound to setup panning on.
      * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
      */
     var setupPanner = function(sound, type) {
       type = type || 'spatial';
 
       // Create the new panner node.
       if (type === 'spatial') {
         sound._panner = Howler.ctx.createPanner();
         sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
         sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
         sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
         sound._panner.distanceModel = sound._pannerAttr.distanceModel;
         sound._panner.maxDistance = sound._pannerAttr.maxDistance;
         sound._panner.refDistance = sound._pannerAttr.refDistance;
         sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
         sound._panner.panningModel = sound._pannerAttr.panningModel;
 
         if (typeof sound._panner.positionX !== 'undefined') {
           sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
           sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
           sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
         } else {
           sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
         }
 
         if (typeof sound._panner.orientationX !== 'undefined') {
           sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
           sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
           sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
         } else {
           sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
         }
       } else {
         sound._panner = Howler.ctx.createStereoPanner();
         sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
       }
 
       sound._panner.connect(sound._node);
 
       // Update the connections.
       if (!sound._paused) {
         sound._parent.pause(sound._id, true).play(sound._id, true);
       }
     };
   })();
   });
   var howler_1 = howler.Howler;
   var howler_2 = howler.Howl;
 
   /**
    * 获得一个canvas对象
    *
    * @param {String} key 特殊模版标识
    *
    * 打包模式为web时
    * key取main则该canvas将上屏
    */
   function Canvas(width, height) {
     if (!Canvas.main) document.body.appendChild(Canvas.main = document.createElement('canvas'));
     if (width == 'main') return Canvas.main;
     var canvas = document.createElement('canvas');
     if (width > 0) canvas.width = width;
     if (height > 0) canvas.height = height;
     return canvas;
   }
 
   /**
    * 获取系统参数
    * pixel 屏幕与设备像素比
    * width 屏幕宽度
    * height 屏幕高度
    * ratio 宽高比
    */
   function System() {
     System.pixel = window.devicePixelRatio || 2;
     System.width = document.body.clientWidth;
     System.height = document.body.clientHeight;
     System.ratio = System.width / System.height;
     return System;
   }
 
   function GetTouchEvent(MouseEvent) {
     return {
       identifier: 0,
       changedTouches: [{
         clientX: MouseEvent.clientX,
         clientY: MouseEvent.clientY
       }]
     };
   }
 
   function MouseListen() {
     return function (event) {
       var DownState = false;
       window.document.body.addEventListener('mousedown', function (e) {
         return DownState = true, event.start(GetTouchEvent(e));
       }, {
         passive: true
       });
       window.document.body.addEventListener('mousemove', function (e) {
         return DownState && event.move(GetTouchEvent(e));
       }, {
         passive: true
       });
       window.document.body.addEventListener('mouseup', function (e) {
         return DownState && (DownState = false, event.end(GetTouchEvent(e)));
       }, {
         passive: true
       });
       window.document.body.addEventListener('mouseout', function (e) {
         return DownState && (DownState = false, event.end(GetTouchEvent(e)));
       }, {
         passive: true
       });
     };
   }
   /**
    * 将dom元素触摸事件和Touch类进行关联
    * @param {HTMLElement} dom
    * @param {ICanvas.UtilTouch} Touch
    */
 
 
   function TouchListen(useMouse) {
     if (useMouse) return MouseListen();
     return function (event) {
       window.document.body.addEventListener('touchstart', function (e) {
         return event.start(e);
       }, {
         passive: true
       });
       window.document.body.addEventListener('touchmove', function (e) {
         return event.move(e);
       }, {
         passive: true
       });
       window.document.body.addEventListener('touchend', function (e) {
         return event.end(e);
       }, {
         passive: true
       });
       window.document.body.addEventListener('touchcancel', function (e) {
         return event.end(e);
       }, {
         passive: true
       });
     };
   }
 
   var Image$1 =
   /*#__PURE__*/
   function () {
     function Image() {
       classCallCheck(this, Image);
     }
 
     createClass(Image, [{
       key: "load",
       value: function load(url) {
         return new Promise(function (resolve, reject) {
           var image = new window.Image();
 
           image.onload = function () {
             resolve(image);
           };
 
           image.onerror = function (e) {
             reject(e);
           };
 
           image.key = image.src = url;
         });
       }
     }]);
 
     return Image;
   }();
 
   var Audio$2 =
   /*#__PURE__*/
   function () {
     function Audio() {
       classCallCheck(this, Audio);
     }
 
     createClass(Audio, [{
       key: "load",
       value: function load(url) {
         return new Promise(function (resolve, reject) {
           var audio = new howler_2({
             src: url,
             loop: false,
             autoplay: false
           });
           audio.once('load', function () {
             audio.key = url;
             resolve(audio);
           });
         });
       }
     }, {
       key: "mute",
       value: function mute(_mute) {
         return howler_1.mute(_mute);
       }
     }, {
       key: "volume",
       value: function volume(v) {
         return howler_1.volume(v);
       }
     }]);
 
     return Audio;
   }();
 
   function GetMainCanvasOffset(canvas, realWidth, realHeight) {
     var offsetWidth = realWidth;
     var offsetLeft = 0;
     var offsetHeight = realHeight;
     var offsetTop = 0;
     var ratio = realWidth / realHeight;
 
     if (ratio < 0.4) {
       offsetHeight = realWidth / 750 * 1334;
       offsetTop = (realHeight - offsetHeight) / 2;
       ratio = 750 / 1334;
     } else if (ratio > 0.8) {
       offsetWidth = realHeight / 1334 * 750;
       offsetLeft = (realWidth - offsetWidth) / 2;
       ratio = 750 / 1334;
     }
 
     canvas.style.position = 'absolute';
     canvas.style.top = offsetTop + 'px';
     canvas.style.left = offsetLeft + 'px';
     canvas.style.width = offsetWidth + 'px';
     canvas.style.height = offsetHeight + 'px';
     return {
       x: offsetLeft,
       y: offsetTop,
       width: offsetWidth,
       height: offsetHeight,
       ratio: ratio
     };
   }
 
   var bind = function bind(fn, thisArg) {
     return function wrap() {
       var args = new Array(arguments.length);
       for (var i = 0; i < args.length; i++) {
         args[i] = arguments[i];
       }
       return fn.apply(thisArg, args);
     };
   };
 
   /*global toString:true*/
 
   // utils is a library of generic helper functions non-specific to axios
 
   var toString = Object.prototype.toString;
 
   /**
    * Determine if a value is an Array
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an Array, otherwise false
    */
   function isArray(val) {
     return toString.call(val) === '[object Array]';
   }
 
   /**
    * Determine if a value is undefined
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if the value is undefined, otherwise false
    */
   function isUndefined(val) {
     return typeof val === 'undefined';
   }
 
   /**
    * Determine if a value is a Buffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Buffer, otherwise false
    */
   function isBuffer(val) {
     return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
       && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
   }
 
   /**
    * Determine if a value is an ArrayBuffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an ArrayBuffer, otherwise false
    */
   function isArrayBuffer(val) {
     return toString.call(val) === '[object ArrayBuffer]';
   }
 
   /**
    * Determine if a value is a FormData
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an FormData, otherwise false
    */
   function isFormData(val) {
     return (typeof FormData !== 'undefined') && (val instanceof FormData);
   }
 
   /**
    * Determine if a value is a view on an ArrayBuffer
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
    */
   function isArrayBufferView(val) {
     var result;
     if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
       result = ArrayBuffer.isView(val);
     } else {
       result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
     }
     return result;
   }
 
   /**
    * Determine if a value is a String
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a String, otherwise false
    */
   function isString(val) {
     return typeof val === 'string';
   }
 
   /**
    * Determine if a value is a Number
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Number, otherwise false
    */
   function isNumber(val) {
     return typeof val === 'number';
   }
 
   /**
    * Determine if a value is an Object
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is an Object, otherwise false
    */
   function isObject(val) {
     return val !== null && typeof val === 'object';
   }
 
   /**
    * Determine if a value is a Date
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Date, otherwise false
    */
   function isDate(val) {
     return toString.call(val) === '[object Date]';
   }
 
   /**
    * Determine if a value is a File
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a File, otherwise false
    */
   function isFile(val) {
     return toString.call(val) === '[object File]';
   }
 
   /**
    * Determine if a value is a Blob
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Blob, otherwise false
    */
   function isBlob(val) {
     return toString.call(val) === '[object Blob]';
   }
 
   /**
    * Determine if a value is a Function
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Function, otherwise false
    */
   function isFunction(val) {
     return toString.call(val) === '[object Function]';
   }
 
   /**
    * Determine if a value is a Stream
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a Stream, otherwise false
    */
   function isStream(val) {
     return isObject(val) && isFunction(val.pipe);
   }
 
   /**
    * Determine if a value is a URLSearchParams object
    *
    * @param {Object} val The value to test
    * @returns {boolean} True if value is a URLSearchParams object, otherwise false
    */
   function isURLSearchParams(val) {
     return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
   }
 
   /**
    * Trim excess whitespace off the beginning and end of a string
    *
    * @param {String} str The String to trim
    * @returns {String} The String freed of excess whitespace
    */
   function trim(str) {
     return str.replace(/^\s*/, '').replace(/\s*$/, '');
   }
 
   /**
    * Determine if we're running in a standard browser environment
    *
    * This allows axios to run in a web worker, and react-native.
    * Both environments support XMLHttpRequest, but not fully standard globals.
    *
    * web workers:
    *  typeof window -> undefined
    *  typeof document -> undefined
    *
    * react-native:
    *  navigator.product -> 'ReactNative'
    * nativescript
    *  navigator.product -> 'NativeScript' or 'NS'
    */
   function isStandardBrowserEnv() {
     if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                              navigator.product === 'NativeScript' ||
                                              navigator.product === 'NS')) {
       return false;
     }
     return (
       typeof window !== 'undefined' &&
       typeof document !== 'undefined'
     );
   }
 
   /**
    * Iterate over an Array or an Object invoking a function for each item.
    *
    * If `obj` is an Array callback will be called passing
    * the value, index, and complete array for each item.
    *
    * If 'obj' is an Object callback will be called passing
    * the value, key, and complete object for each property.
    *
    * @param {Object|Array} obj The object to iterate
    * @param {Function} fn The callback to invoke for each item
    */
   function forEach(obj, fn) {
     // Don't bother if no value provided
     if (obj === null || typeof obj === 'undefined') {
       return;
     }
 
     // Force an array if not already something iterable
     if (typeof obj !== 'object') {
       /*eslint no-param-reassign:0*/
       obj = [obj];
     }
 
     if (isArray(obj)) {
       // Iterate over array values
       for (var i = 0, l = obj.length; i < l; i++) {
         fn.call(null, obj[i], i, obj);
       }
     } else {
       // Iterate over object keys
       for (var key in obj) {
         if (Object.prototype.hasOwnProperty.call(obj, key)) {
           fn.call(null, obj[key], key, obj);
         }
       }
     }
   }
 
   /**
    * Accepts varargs expecting each argument to be an object, then
    * immutably merges the properties of each object and returns result.
    *
    * When multiple objects contain the same key the later object in
    * the arguments list will take precedence.
    *
    * Example:
    *
    * ```js
    * var result = merge({foo: 123}, {foo: 456});
    * console.log(result.foo); // outputs 456
    * ```
    *
    * @param {Object} obj1 Object to merge
    * @returns {Object} Result of all merge properties
    */
   function merge(/* obj1, obj2, obj3, ... */) {
     var result = {};
     function assignValue(val, key) {
       if (typeof result[key] === 'object' && typeof val === 'object') {
         result[key] = merge(result[key], val);
       } else {
         result[key] = val;
       }
     }
 
     for (var i = 0, l = arguments.length; i < l; i++) {
       forEach(arguments[i], assignValue);
     }
     return result;
   }
 
   /**
    * Function equal to merge with the difference being that no reference
    * to original objects is kept.
    *
    * @see merge
    * @param {Object} obj1 Object to merge
    * @returns {Object} Result of all merge properties
    */
   function deepMerge(/* obj1, obj2, obj3, ... */) {
     var result = {};
     function assignValue(val, key) {
       if (typeof result[key] === 'object' && typeof val === 'object') {
         result[key] = deepMerge(result[key], val);
       } else if (typeof val === 'object') {
         result[key] = deepMerge({}, val);
       } else {
         result[key] = val;
       }
     }
 
     for (var i = 0, l = arguments.length; i < l; i++) {
       forEach(arguments[i], assignValue);
     }
     return result;
   }
 
   /**
    * Extends object a by mutably adding to it the properties of object b.
    *
    * @param {Object} a The object to be extended
    * @param {Object} b The object to copy properties from
    * @param {Object} thisArg The object to bind function to
    * @return {Object} The resulting value of object a
    */
   function extend(a, b, thisArg) {
     forEach(b, function assignValue(val, key) {
       if (thisArg && typeof val === 'function') {
         a[key] = bind(val, thisArg);
       } else {
         a[key] = val;
       }
     });
     return a;
   }
 
   var utils = {
     isArray: isArray,
     isArrayBuffer: isArrayBuffer,
     isBuffer: isBuffer,
     isFormData: isFormData,
     isArrayBufferView: isArrayBufferView,
     isString: isString,
     isNumber: isNumber,
     isObject: isObject,
     isUndefined: isUndefined,
     isDate: isDate,
     isFile: isFile,
     isBlob: isBlob,
     isFunction: isFunction,
     isStream: isStream,
     isURLSearchParams: isURLSearchParams,
     isStandardBrowserEnv: isStandardBrowserEnv,
     forEach: forEach,
     merge: merge,
     deepMerge: deepMerge,
     extend: extend,
     trim: trim
   };
 
   function encode(val) {
     return encodeURIComponent(val).
       replace(/%40/gi, '@').
       replace(/%3A/gi, ':').
       replace(/%24/g, '$').
       replace(/%2C/gi, ',').
       replace(/%20/g, '+').
       replace(/%5B/gi, '[').
       replace(/%5D/gi, ']');
   }
 
   /**
    * Build a URL by appending params to the end
    *
    * @param {string} url The base of the url (e.g., http://www.google.com)
    * @param {object} [params] The params to be appended
    * @returns {string} The formatted url
    */
   var buildURL = function buildURL(url, params, paramsSerializer) {
     /*eslint no-param-reassign:0*/
     if (!params) {
       return url;
     }
 
     var serializedParams;
     if (paramsSerializer) {
       serializedParams = paramsSerializer(params);
     } else if (utils.isURLSearchParams(params)) {
       serializedParams = params.toString();
     } else {
       var parts = [];
 
       utils.forEach(params, function serialize(val, key) {
         if (val === null || typeof val === 'undefined') {
           return;
         }
 
         if (utils.isArray(val)) {
           key = key + '[]';
         } else {
           val = [val];
         }
 
         utils.forEach(val, function parseValue(v) {
           if (utils.isDate(v)) {
             v = v.toISOString();
           } else if (utils.isObject(v)) {
             v = JSON.stringify(v);
           }
           parts.push(encode(key) + '=' + encode(v));
         });
       });
 
       serializedParams = parts.join('&');
     }
 
     if (serializedParams) {
       var hashmarkIndex = url.indexOf('#');
       if (hashmarkIndex !== -1) {
         url = url.slice(0, hashmarkIndex);
       }
 
       url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
     }
 
     return url;
   };
 
   function InterceptorManager() {
     this.handlers = [];
   }
 
   /**
    * Add a new interceptor to the stack
    *
    * @param {Function} fulfilled The function to handle `then` for a `Promise`
    * @param {Function} rejected The function to handle `reject` for a `Promise`
    *
    * @return {Number} An ID used to remove interceptor later
    */
   InterceptorManager.prototype.use = function use(fulfilled, rejected) {
     this.handlers.push({
       fulfilled: fulfilled,
       rejected: rejected
     });
     return this.handlers.length - 1;
   };
 
   /**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
   InterceptorManager.prototype.eject = function eject(id) {
     if (this.handlers[id]) {
       this.handlers[id] = null;
     }
   };
 
   /**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
   InterceptorManager.prototype.forEach = function forEach(fn) {
     utils.forEach(this.handlers, function forEachHandler(h) {
       if (h !== null) {
         fn(h);
       }
     });
   };
 
   var InterceptorManager_1 = InterceptorManager;
 
   /**
    * Transform the data for a request or a response
    *
    * @param {Object|String} data The data to be transformed
    * @param {Array} headers The headers for the request or response
    * @param {Array|Function} fns A single function or Array of functions
    * @returns {*} The resulting transformed data
    */
   var transformData = function transformData(data, headers, fns) {
     /*eslint no-param-reassign:0*/
     utils.forEach(fns, function transform(fn) {
       data = fn(data, headers);
     });
 
     return data;
   };
 
   var isCancel = function isCancel(value) {
     return !!(value && value.__CANCEL__);
   };
 
   var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
     utils.forEach(headers, function processHeader(value, name) {
       if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
         headers[normalizedName] = value;
         delete headers[name];
       }
     });
   };
 
   /**
    * Update an Error with the specified config, error code, and response.
    *
    * @param {Error} error The error to update.
    * @param {Object} config The config.
    * @param {string} [code] The error code (for example, 'ECONNABORTED').
    * @param {Object} [request] The request.
    * @param {Object} [response] The response.
    * @returns {Error} The error.
    */
   var enhanceError = function enhanceError(error, config, code, request, response) {
     error.config = config;
     if (code) {
       error.code = code;
     }
 
     error.request = request;
     error.response = response;
     error.isAxiosError = true;
 
     error.toJSON = function() {
       return {
         // Standard
         message: this.message,
         name: this.name,
         // Microsoft
         description: this.description,
         number: this.number,
         // Mozilla
         fileName: this.fileName,
         lineNumber: this.lineNumber,
         columnNumber: this.columnNumber,
         stack: this.stack,
         // Axios
         config: this.config,
         code: this.code
       };
     };
     return error;
   };
 
   /**
    * Create an Error with the specified message, config, error code, request and response.
    *
    * @param {string} message The error message.
    * @param {Object} config The config.
    * @param {string} [code] The error code (for example, 'ECONNABORTED').
    * @param {Object} [request] The request.
    * @param {Object} [response] The response.
    * @returns {Error} The created error.
    */
   var createError = function createError(message, config, code, request, response) {
     var error = new Error(message);
     return enhanceError(error, config, code, request, response);
   };
 
   /**
    * Resolve or reject a Promise based on response status.
    *
    * @param {Function} resolve A function that resolves the promise.
    * @param {Function} reject A function that rejects the promise.
    * @param {object} response The response.
    */
   var settle = function settle(resolve, reject, response) {
     var validateStatus = response.config.validateStatus;
     if (!validateStatus || validateStatus(response.status)) {
       resolve(response);
     } else {
       reject(createError(
         'Request failed with status code ' + response.status,
         response.config,
         null,
         response.request,
         response
       ));
     }
   };
 
   /**
    * Determines whether the specified URL is absolute
    *
    * @param {string} url The URL to test
    * @returns {boolean} True if the specified URL is absolute, otherwise false
    */
   var isAbsoluteURL = function isAbsoluteURL(url) {
     // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
     // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
     // by any combination of letters, digits, plus, period, or hyphen.
     return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
   };
 
   /**
    * Creates a new URL by combining the specified URLs
    *
    * @param {string} baseURL The base URL
    * @param {string} relativeURL The relative URL
    * @returns {string} The combined URL
    */
   var combineURLs = function combineURLs(baseURL, relativeURL) {
     return relativeURL
       ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
       : baseURL;
   };
 
   /**
    * Creates a new URL by combining the baseURL with the requestedURL,
    * only when the requestedURL is not already an absolute URL.
    * If the requestURL is absolute, this function returns the requestedURL untouched.
    *
    * @param {string} baseURL The base URL
    * @param {string} requestedURL Absolute or relative URL to combine
    * @returns {string} The combined full path
    */
   var buildFullPath = function buildFullPath(baseURL, requestedURL) {
     if (baseURL && !isAbsoluteURL(requestedURL)) {
       return combineURLs(baseURL, requestedURL);
     }
     return requestedURL;
   };
 
   // Headers whose duplicates are ignored by node
   // c.f. https://nodejs.org/api/http.html#http_message_headers
   var ignoreDuplicateOf = [
     'age', 'authorization', 'content-length', 'content-type', 'etag',
     'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
     'last-modified', 'location', 'max-forwards', 'proxy-authorization',
     'referer', 'retry-after', 'user-agent'
   ];
 
   /**
    * Parse headers into an object
    *
    * ```
    * Date: Wed, 27 Aug 2014 08:58:49 GMT
    * Content-Type: application/json
    * Connection: keep-alive
    * Transfer-Encoding: chunked
    * ```
    *
    * @param {String} headers Headers needing to be parsed
    * @returns {Object} Headers parsed into an object
    */
   var parseHeaders = function parseHeaders(headers) {
     var parsed = {};
     var key;
     var val;
     var i;
 
     if (!headers) { return parsed; }
 
     utils.forEach(headers.split('\n'), function parser(line) {
       i = line.indexOf(':');
       key = utils.trim(line.substr(0, i)).toLowerCase();
       val = utils.trim(line.substr(i + 1));
 
       if (key) {
         if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
           return;
         }
         if (key === 'set-cookie') {
           parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
         } else {
           parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
         }
       }
     });
 
     return parsed;
   };
 
   var isURLSameOrigin = (
     utils.isStandardBrowserEnv() ?
 
     // Standard browser envs have full support of the APIs needed to test
     // whether the request URL is of the same origin as current location.
       (function standardBrowserEnv() {
         var msie = /(msie|trident)/i.test(navigator.userAgent);
         var urlParsingNode = document.createElement('a');
         var originURL;
 
         /**
       * Parse a URL to discover it's components
       *
       * @param {String} url The URL to be parsed
       * @returns {Object}
       */
         function resolveURL(url) {
           var href = url;
 
           if (msie) {
           // IE needs attribute set twice to normalize properties
             urlParsingNode.setAttribute('href', href);
             href = urlParsingNode.href;
           }
 
           urlParsingNode.setAttribute('href', href);
 
           // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
           return {
             href: urlParsingNode.href,
             protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
             host: urlParsingNode.host,
             search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
             hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
             hostname: urlParsingNode.hostname,
             port: urlParsingNode.port,
             pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
               urlParsingNode.pathname :
               '/' + urlParsingNode.pathname
           };
         }
 
         originURL = resolveURL(window.location.href);
 
         /**
       * Determine if a URL shares the same origin as the current location
       *
       * @param {String} requestURL The URL to test
       * @returns {boolean} True if URL shares the same origin, otherwise false
       */
         return function isURLSameOrigin(requestURL) {
           var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
           return (parsed.protocol === originURL.protocol &&
               parsed.host === originURL.host);
         };
       })() :
 
     // Non standard browser envs (web workers, react-native) lack needed support.
       (function nonStandardBrowserEnv() {
         return function isURLSameOrigin() {
           return true;
         };
       })()
   );
 
   var cookies = (
     utils.isStandardBrowserEnv() ?
 
     // Standard browser envs support document.cookie
       (function standardBrowserEnv() {
         return {
           write: function write(name, value, expires, path, domain, secure) {
             var cookie = [];
             cookie.push(name + '=' + encodeURIComponent(value));
 
             if (utils.isNumber(expires)) {
               cookie.push('expires=' + new Date(expires).toGMTString());
             }
 
             if (utils.isString(path)) {
               cookie.push('path=' + path);
             }
 
             if (utils.isString(domain)) {
               cookie.push('domain=' + domain);
             }
 
             if (secure === true) {
               cookie.push('secure');
             }
 
             document.cookie = cookie.join('; ');
           },
 
           read: function read(name) {
             var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
             return (match ? decodeURIComponent(match[3]) : null);
           },
 
           remove: function remove(name) {
             this.write(name, '', Date.now() - 86400000);
           }
         };
       })() :
 
     // Non standard browser env (web workers, react-native) lack needed support.
       (function nonStandardBrowserEnv() {
         return {
           write: function write() {},
           read: function read() { return null; },
           remove: function remove() {}
         };
       })()
   );
 
   var xhr = function xhrAdapter(config) {
     return new Promise(function dispatchXhrRequest(resolve, reject) {
       var requestData = config.data;
       var requestHeaders = config.headers;
 
       if (utils.isFormData(requestData)) {
         delete requestHeaders['Content-Type']; // Let the browser set it
       }
 
       var request = new XMLHttpRequest();
 
       // HTTP basic authentication
       if (config.auth) {
         var username = config.auth.username || '';
         var password = config.auth.password || '';
         requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
       }
 
       var fullPath = buildFullPath(config.baseURL, config.url);
       request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
 
       // Set the request timeout in MS
       request.timeout = config.timeout;
 
       // Listen for ready state
       request.onreadystatechange = function handleLoad() {
         if (!request || request.readyState !== 4) {
           return;
         }
 
         // The request errored out and we didn't get a response, this will be
         // handled by onerror instead
         // With one exception: request that using file: protocol, most browsers
         // will return status as 0 even though it's a successful request
         if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
           return;
         }
 
         // Prepare the response
         var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
         var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
         var response = {
           data: responseData,
           status: request.status,
           statusText: request.statusText,
           headers: responseHeaders,
           config: config,
           request: request
         };
 
         settle(resolve, reject, response);
 
         // Clean up request
         request = null;
       };
 
       // Handle browser request cancellation (as opposed to a manual cancellation)
       request.onabort = function handleAbort() {
         if (!request) {
           return;
         }
 
         reject(createError('Request aborted', config, 'ECONNABORTED', request));
 
         // Clean up request
         request = null;
       };
 
       // Handle low level network errors
       request.onerror = function handleError() {
         // Real errors are hidden from us by the browser
         // onerror should only fire if it's a network error
         reject(createError('Network Error', config, null, request));
 
         // Clean up request
         request = null;
       };
 
       // Handle timeout
       request.ontimeout = function handleTimeout() {
         var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
         if (config.timeoutErrorMessage) {
           timeoutErrorMessage = config.timeoutErrorMessage;
         }
         reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
           request));
 
         // Clean up request
         request = null;
       };
 
       // Add xsrf header
       // This is only done if running in a standard browser environment.
       // Specifically not if we're in a web worker, or react-native.
       if (utils.isStandardBrowserEnv()) {
         var cookies$1 = cookies;
 
         // Add xsrf header
         var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
           cookies$1.read(config.xsrfCookieName) :
           undefined;
 
         if (xsrfValue) {
           requestHeaders[config.xsrfHeaderName] = xsrfValue;
         }
       }
 
       // Add headers to the request
       if ('setRequestHeader' in request) {
         utils.forEach(requestHeaders, function setRequestHeader(val, key) {
           if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
             // Remove Content-Type if data is undefined
             delete requestHeaders[key];
           } else {
             // Otherwise add header to the request
             request.setRequestHeader(key, val);
           }
         });
       }
 
       // Add withCredentials to request if needed
       if (!utils.isUndefined(config.withCredentials)) {
         request.withCredentials = !!config.withCredentials;
       }
 
       // Add responseType to request if needed
       if (config.responseType) {
         try {
           request.responseType = config.responseType;
         } catch (e) {
           // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
           // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
           if (config.responseType !== 'json') {
             throw e;
           }
         }
       }
 
       // Handle progress if needed
       if (typeof config.onDownloadProgress === 'function') {
         request.addEventListener('progress', config.onDownloadProgress);
       }
 
       // Not all browsers support upload events
       if (typeof config.onUploadProgress === 'function' && request.upload) {
         request.upload.addEventListener('progress', config.onUploadProgress);
       }
 
       if (config.cancelToken) {
         // Handle cancellation
         config.cancelToken.promise.then(function onCanceled(cancel) {
           if (!request) {
             return;
           }
 
           request.abort();
           reject(cancel);
           // Clean up request
           request = null;
         });
       }
 
       if (requestData === undefined) {
         requestData = null;
       }
 
       // Send the request
       request.send(requestData);
     });
   };
 
   var DEFAULT_CONTENT_TYPE = {
     'Content-Type': 'application/x-www-form-urlencoded'
   };
 
   function setContentTypeIfUnset(headers, value) {
     if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
       headers['Content-Type'] = value;
     }
   }
 
   function getDefaultAdapter() {
     var adapter;
     if (typeof XMLHttpRequest !== 'undefined') {
       // For browsers use XHR adapter
       adapter = xhr;
     } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
       // For node use HTTP adapter
       adapter = xhr;
     }
     return adapter;
   }
 
   var defaults = {
     adapter: getDefaultAdapter(),
 
     transformRequest: [function transformRequest(data, headers) {
       normalizeHeaderName(headers, 'Accept');
       normalizeHeaderName(headers, 'Content-Type');
       if (utils.isFormData(data) ||
         utils.isArrayBuffer(data) ||
         utils.isBuffer(data) ||
         utils.isStream(data) ||
         utils.isFile(data) ||
         utils.isBlob(data)
       ) {
         return data;
       }
       if (utils.isArrayBufferView(data)) {
         return data.buffer;
       }
       if (utils.isURLSearchParams(data)) {
         setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
         return data.toString();
       }
       if (utils.isObject(data)) {
         setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
         return JSON.stringify(data);
       }
       return data;
     }],
 
     transformResponse: [function transformResponse(data) {
       /*eslint no-param-reassign:0*/
       if (typeof data === 'string') {
         try {
           data = JSON.parse(data);
         } catch (e) { /* Ignore */ }
       }
       return data;
     }],
 
     /**
      * A timeout in milliseconds to abort a request. If set to 0 (default) a
      * timeout is not created.
      */
     timeout: 0,
 
     xsrfCookieName: 'XSRF-TOKEN',
     xsrfHeaderName: 'X-XSRF-TOKEN',
 
     maxContentLength: -1,
 
     validateStatus: function validateStatus(status) {
       return status >= 200 && status < 300;
     }
   };
 
   defaults.headers = {
     common: {
       'Accept': 'application/json, text/plain, */*'
     }
   };
 
   utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
     defaults.headers[method] = {};
   });
 
   utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
     defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
   });
 
   var defaults_1 = defaults;
 
   /**
    * Throws a `Cancel` if cancellation has been requested.
    */
   function throwIfCancellationRequested(config) {
     if (config.cancelToken) {
       config.cancelToken.throwIfRequested();
     }
   }
 
   /**
    * Dispatch a request to the server using the configured adapter.
    *
    * @param {object} config The config that is to be used for the request
    * @returns {Promise} The Promise to be fulfilled
    */
   var dispatchRequest = function dispatchRequest(config) {
     throwIfCancellationRequested(config);
 
     // Ensure headers exist
     config.headers = config.headers || {};
 
     // Transform request data
     config.data = transformData(
       config.data,
       config.headers,
       config.transformRequest
     );
 
     // Flatten headers
     config.headers = utils.merge(
       config.headers.common || {},
       config.headers[config.method] || {},
       config.headers
     );
 
     utils.forEach(
       ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
       function cleanHeaderConfig(method) {
         delete config.headers[method];
       }
     );
 
     var adapter = config.adapter || defaults_1.adapter;
 
     return adapter(config).then(function onAdapterResolution(response) {
       throwIfCancellationRequested(config);
 
       // Transform response data
       response.data = transformData(
         response.data,
         response.headers,
         config.transformResponse
       );
 
       return response;
     }, function onAdapterRejection(reason) {
       if (!isCancel(reason)) {
         throwIfCancellationRequested(config);
 
         // Transform response data
         if (reason && reason.response) {
           reason.response.data = transformData(
             reason.response.data,
             reason.response.headers,
             config.transformResponse
           );
         }
       }
 
       return Promise.reject(reason);
     });
   };
 
   /**
    * Config-specific merge-function which creates a new config-object
    * by merging two configuration objects together.
    *
    * @param {Object} config1
    * @param {Object} config2
    * @returns {Object} New object resulting from merging config2 to config1
    */
   var mergeConfig = function mergeConfig(config1, config2) {
     // eslint-disable-next-line no-param-reassign
     config2 = config2 || {};
     var config = {};
 
     var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
     var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
     var defaultToConfig2Keys = [
       'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
       'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
       'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
       'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
       'httpsAgent', 'cancelToken', 'socketPath'
     ];
 
     utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
       if (typeof config2[prop] !== 'undefined') {
         config[prop] = config2[prop];
       }
     });
 
     utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
       if (utils.isObject(config2[prop])) {
         config[prop] = utils.deepMerge(config1[prop], config2[prop]);
       } else if (typeof config2[prop] !== 'undefined') {
         config[prop] = config2[prop];
       } else if (utils.isObject(config1[prop])) {
         config[prop] = utils.deepMerge(config1[prop]);
       } else if (typeof config1[prop] !== 'undefined') {
         config[prop] = config1[prop];
       }
     });
 
     utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
       if (typeof config2[prop] !== 'undefined') {
         config[prop] = config2[prop];
       } else if (typeof config1[prop] !== 'undefined') {
         config[prop] = config1[prop];
       }
     });
 
     var axiosKeys = valueFromConfig2Keys
       .concat(mergeDeepPropertiesKeys)
       .concat(defaultToConfig2Keys);
 
     var otherKeys = Object
       .keys(config2)
       .filter(function filterAxiosKeys(key) {
         return axiosKeys.indexOf(key) === -1;
       });
 
     utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
       if (typeof config2[prop] !== 'undefined') {
         config[prop] = config2[prop];
       } else if (typeof config1[prop] !== 'undefined') {
         config[prop] = config1[prop];
       }
     });
 
     return config;
   };
 
   /**
    * Create a new instance of Axios
    *
    * @param {Object} instanceConfig The default config for the instance
    */
   function Axios(instanceConfig) {
     this.defaults = instanceConfig;
     this.interceptors = {
       request: new InterceptorManager_1(),
       response: new InterceptorManager_1()
     };
   }
 
   /**
    * Dispatch a request
    *
    * @param {Object} config The config specific for this request (merged with this.defaults)
    */
   Axios.prototype.request = function request(config) {
     /*eslint no-param-reassign:0*/
     // Allow for axios('example/url'[, config]) a la fetch API
     if (typeof config === 'string') {
       config = arguments[1] || {};
       config.url = arguments[0];
     } else {
       config = config || {};
     }
 
     config = mergeConfig(this.defaults, config);
 
     // Set config.method
     if (config.method) {
       config.method = config.method.toLowerCase();
     } else if (this.defaults.method) {
       config.method = this.defaults.method.toLowerCase();
     } else {
       config.method = 'get';
     }
 
     // Hook up interceptors middleware
     var chain = [dispatchRequest, undefined];
     var promise = Promise.resolve(config);
 
     this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
       chain.unshift(interceptor.fulfilled, interceptor.rejected);
     });
 
     this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
       chain.push(interceptor.fulfilled, interceptor.rejected);
     });
 
     while (chain.length) {
       promise = promise.then(chain.shift(), chain.shift());
     }
 
     return promise;
   };
 
   Axios.prototype.getUri = function getUri(config) {
     config = mergeConfig(this.defaults, config);
     return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
   };
 
   // Provide aliases for supported request methods
   utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
     /*eslint func-names:0*/
     Axios.prototype[method] = function(url, config) {
       return this.request(utils.merge(config || {}, {
         method: method,
         url: url
       }));
     };
   });
 
   utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
     /*eslint func-names:0*/
     Axios.prototype[method] = function(url, data, config) {
       return this.request(utils.merge(config || {}, {
         method: method,
         url: url,
         data: data
       }));
     };
   });
 
   var Axios_1 = Axios;
 
   /**
    * A `Cancel` is an object that is thrown when an operation is canceled.
    *
    * @class
    * @param {string=} message The message.
    */
   function Cancel(message) {
     this.message = message;
   }
 
   Cancel.prototype.toString = function toString() {
     return 'Cancel' + (this.message ? ': ' + this.message : '');
   };
 
   Cancel.prototype.__CANCEL__ = true;
 
   var Cancel_1 = Cancel;
 
   /**
    * A `CancelToken` is an object that can be used to request cancellation of an operation.
    *
    * @class
    * @param {Function} executor The executor function.
    */
   function CancelToken(executor) {
     if (typeof executor !== 'function') {
       throw new TypeError('executor must be a function.');
     }
 
     var resolvePromise;
     this.promise = new Promise(function promiseExecutor(resolve) {
       resolvePromise = resolve;
     });
 
     var token = this;
     executor(function cancel(message) {
       if (token.reason) {
         // Cancellation has already been requested
         return;
       }
 
       token.reason = new Cancel_1(message);
       resolvePromise(token.reason);
     });
   }
 
   /**
    * Throws a `Cancel` if cancellation has been requested.
    */
   CancelToken.prototype.throwIfRequested = function throwIfRequested() {
     if (this.reason) {
       throw this.reason;
     }
   };
 
   /**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
   CancelToken.source = function source() {
     var cancel;
     var token = new CancelToken(function executor(c) {
       cancel = c;
     });
     return {
       token: token,
       cancel: cancel
     };
   };
 
   var CancelToken_1 = CancelToken;
 
   /**
    * Syntactic sugar for invoking a function and expanding an array for arguments.
    *
    * Common use case would be to use `Function.prototype.apply`.
    *
    *  ```js
    *  function f(x, y, z) {}
    *  var args = [1, 2, 3];
    *  f.apply(null, args);
    *  ```
    *
    * With `spread` this example can be re-written.
    *
    *  ```js
    *  spread(function(x, y, z) {})([1, 2, 3]);
    *  ```
    *
    * @param {Function} callback
    * @returns {Function}
    */
   var spread = function spread(callback) {
     return function wrap(arr) {
       return callback.apply(null, arr);
     };
   };
 
   /**
    * Create an instance of Axios
    *
    * @param {Object} defaultConfig The default config for the instance
    * @return {Axios} A new instance of Axios
    */
   function createInstance(defaultConfig) {
     var context = new Axios_1(defaultConfig);
     var instance = bind(Axios_1.prototype.request, context);
 
     // Copy axios.prototype to instance
     utils.extend(instance, Axios_1.prototype, context);
 
     // Copy context to instance
     utils.extend(instance, context);
 
     return instance;
   }
 
   // Create the default instance to be exported
   var axios = createInstance(defaults_1);
 
   // Expose Axios class to allow class inheritance
   axios.Axios = Axios_1;
 
   // Factory for creating new instances
   axios.create = function create(instanceConfig) {
     return createInstance(mergeConfig(axios.defaults, instanceConfig));
   };
 
   // Expose Cancel & CancelToken
   axios.Cancel = Cancel_1;
   axios.CancelToken = CancelToken_1;
   axios.isCancel = isCancel;
 
   // Expose all/spread
   axios.all = function all(promises) {
     return Promise.all(promises);
   };
   axios.spread = spread;
 
   var axios_1 = axios;
 
   // Allow use of default import syntax in TypeScript
   var default_1 = axios;
   axios_1.default = default_1;
 
   var axios$1 = axios_1;
 
   /*!
    * VERSION: 2.1.3
    * DATE: 2019-05-17
    * UPDATES AND DOCS AT: http://greensock.com
    *
    * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
    * This work is subject to the terms at http://greensock.com/standard-license or for
    * Club GreenSock members, the software agreement that was issued with your membership.
    *
    * @author: Jack Doyle, jack@greensock.com
    */
   /* eslint-disable */
 
   /* ES6 changes:
      - declare and export _gsScope at top.
      - set var TweenLite = the result of the main function
      - export default TweenLite at the bottom
      - return TweenLite at the bottom of the main function
      - pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
      - remove the "export to multiple environments" in Definition().
    */
   var _gsScope = (typeof(window) !== "undefined") ? window : (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : null || {};
 
   var TweenLite = (function(window) {
         var _exports = {},
            _doc = window.document,
            _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
         if (_globals.TweenLite) {
            return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
         }
         var _namespace = function(ns) {
               var a = ns.split("."),
                  p = _globals, i;
               for (i = 0; i < a.length; i++) {
                  p[a[i]] = p = p[a[i]] || {};
               }
               return p;
            },
            gs = _namespace("com.greensock"),
            _tinyNum = 0.00000001,
            _slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
               var b = [],
                  l = a.length,
                  i;
               for (i = 0; i !== l; b.push(a[i++])) {}
               return b;
            },
            _emptyFunc = function() {},
            _isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
               var toString = Object.prototype.toString,
                  array = toString.call([]);
               return function(obj) {
                  return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
               };
            }()),
            a, i, p, _ticker, _tickerActive,
            _defLookup = {},
 
            /**
             * @constructor
             * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
             * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
             * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
             * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
             *
             * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
             * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
             * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
             * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
             * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
             * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
             * sandbox the banner one like:
             *
             * <script>
             *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
             * </script>
             * <script src="js/greensock/v1.7/TweenMax.js"></script>
             * <script>
             *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
             * </script>
             * <script src="js/greensock/v1.6/TweenMax.js"></script>
             * <script>
             *     gs.TweenLite.to(...); //would use v1.7
             *     TweenLite.to(...); //would use v1.6
             * </script>
             *
             * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
             * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
             * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
             * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
             */
            Definition = function(ns, dependencies, func, global) {
               this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
               _defLookup[ns] = this;
               this.gsClass = null;
               this.func = func;
               var _classes = [];
               this.check = function(init) {
                  var i = dependencies.length,
                     missing = i,
                     cur, a, n, cl;
                  while (--i > -1) {
                     if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                        _classes[i] = cur.gsClass;
                        missing--;
                     } else if (init) {
                        cur.sc.push(this);
                     }
                  }
                  if (missing === 0 && func) {
                     a = ("com.greensock." + ns).split(".");
                     n = a.pop();
                     cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);
 
                     //exports to multiple environments
                     if (global) {
                        _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
                        /*
                        if (typeof(module) !== "undefined" && module.exports) { //node
                           if (ns === moduleName) {
                              module.exports = _exports[moduleName] = cl;
                              for (i in _exports) {
                                 cl[i] = _exports[i];
                              }
                           } else if (_exports[moduleName]) {
                              _exports[moduleName][n] = cl;
                           }
                        } else if (typeof(define) === "function" && define.amd){ //AMD
                           define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
                        }
                        */
                     }
                     for (i = 0; i < this.sc.length; i++) {
                        this.sc[i].check();
                     }
                  }
               };
               this.check(true);
            },
 
            //used to create Definition instances (which basically registers a class that has dependencies).
            _gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
               return new Definition(ns, dependencies, func, global);
            },
 
            //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
            _class = gs._class = function(ns, func, global) {
               func = func || function() {};
               _gsDefine(ns, [], function(){ return func; }, global);
               return func;
            };
 
         _gsDefine.globals = _globals;
 
 
 
   /*
    * ----------------------------------------------------------------
    * Ease
    * ----------------------------------------------------------------
    */
         var _baseParams = [0, 0, 1, 1],
            Ease = _class("easing.Ease", function(func, extraParams, type, power) {
               this._func = func;
               this._type = type || 0;
               this._power = power || 0;
               this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
            }, true),
            _easeMap = Ease.map = {},
            _easeReg = Ease.register = function(ease, names, types, create) {
               var na = names.split(","),
                  i = na.length,
                  ta = (types || "easeIn,easeOut,easeInOut").split(","),
                  e, name, j, type;
               while (--i > -1) {
                  name = na[i];
                  e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
                  j = ta.length;
                  while (--j > -1) {
                     type = ta[j];
                     _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
                  }
               }
            };
 
         p = Ease.prototype;
         p._calcEnd = false;
         p.getRatio = function(p) {
            if (this._func) {
               this._params[0] = p;
               return this._func.apply(null, this._params);
            }
            var t = this._type,
               pw = this._power,
               r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
            if (pw === 1) {
               r *= r;
            } else if (pw === 2) {
               r *= r * r;
            } else if (pw === 3) {
               r *= r * r * r;
            } else if (pw === 4) {
               r *= r * r * r * r;
            }
            return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
         };
 
         //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
         a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
         i = a.length;
         while (--i > -1) {
            p = a[i]+",Power"+i;
            _easeReg(new Ease(null,null,1,i), p, "easeOut", true);
            _easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
            _easeReg(new Ease(null,null,3,i), p, "easeInOut");
         }
         _easeMap.linear = gs.easing.Linear.easeIn;
         _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks
 
 
   /*
    * ----------------------------------------------------------------
    * EventDispatcher
    * ----------------------------------------------------------------
    */
         var EventDispatcher = _class("events.EventDispatcher", function(target) {
            this._listeners = {};
            this._eventTarget = target || this;
         });
         p = EventDispatcher.prototype;
 
         p.addEventListener = function(type, callback, scope, useParam, priority) {
            priority = priority || 0;
            var list = this._listeners[type],
               index = 0,
               listener, i;
            if (this === _ticker && !_tickerActive) {
               _ticker.wake();
            }
            if (list == null) {
               this._listeners[type] = list = [];
            }
            i = list.length;
            while (--i > -1) {
               listener = list[i];
               if (listener.c === callback && listener.s === scope) {
                  list.splice(i, 1);
               } else if (index === 0 && listener.pr < priority) {
                  index = i + 1;
               }
            }
            list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
         };
 
         p.removeEventListener = function(type, callback) {
            var list = this._listeners[type], i;
            if (list) {
               i = list.length;
               while (--i > -1) {
                  if (list[i].c === callback) {
                     list.splice(i, 1);
                     return;
                  }
               }
            }
         };
 
         p.dispatchEvent = function(type) {
            var list = this._listeners[type],
               i, t, listener;
            if (list) {
               i = list.length;
               if (i > 1) {
                  list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
               }
               t = this._eventTarget;
               while (--i > -1) {
                  listener = list[i];
                  if (listener) {
                     if (listener.up) {
                        listener.c.call(listener.s || t, {type:type, target:t});
                     } else {
                        listener.c.call(listener.s || t);
                     }
                  }
               }
            }
         };
 
 
   /*
    * ----------------------------------------------------------------
    * Ticker
    * ----------------------------------------------------------------
    */
          var _reqAnimFrame = window.requestAnimationFrame,
            _cancelAnimFrame = window.cancelAnimationFrame,
            _getTime = Date.now || function() {return new Date().getTime();},
            _lastUpdate = _getTime();
 
         //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
         a = ["ms","moz","webkit","o"];
         i = a.length;
         while (--i > -1 && !_reqAnimFrame) {
            _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
            _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
         }
 
         _class("Ticker", function(fps, useRAF) {
            var _self = this,
               _startTime = _getTime(),
               _useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
               _lagThreshold = 500,
               _adjustedLag = 33,
               _tickWord = "tick", //helps reduce gc burden
               _fps, _req, _id, _gap, _nextTime,
               _tick = function(manual) {
                  var elapsed = _getTime() - _lastUpdate,
                     overlap, dispatch;
                  if (elapsed > _lagThreshold) {
                     _startTime += elapsed - _adjustedLag;
                  }
                  _lastUpdate += elapsed;
                  _self.time = (_lastUpdate - _startTime) / 1000;
                  overlap = _self.time - _nextTime;
                  if (!_fps || overlap > 0 || manual === true) {
                     _self.frame++;
                     _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                     dispatch = true;
                  }
                  if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
                     _id = _req(_tick);
                  }
                  if (dispatch) {
                     _self.dispatchEvent(_tickWord);
                  }
               };
 
            EventDispatcher.call(_self);
            _self.time = _self.frame = 0;
            _self.tick = function() {
               _tick(true);
            };
 
            _self.lagSmoothing = function(threshold, adjustedLag) {
               if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
                  return (_lagThreshold < 1 / _tinyNum);
               }
               _lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
               _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            };
 
            _self.sleep = function() {
               if (_id == null) {
                  return;
               }
               if (!_useRAF || !_cancelAnimFrame) {
                  clearTimeout(_id);
               } else {
                  _cancelAnimFrame(_id);
               }
               _req = _emptyFunc;
               _id = null;
               if (_self === _ticker) {
                  _tickerActive = false;
               }
            };
 
            _self.wake = function(seamless) {
               if (_id !== null) {
                  _self.sleep();
               } else if (seamless) {
                  _startTime += -_lastUpdate + (_lastUpdate = _getTime());
               } else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
                  _lastUpdate = _getTime() - _lagThreshold + 5;
               }
               _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
               if (_self === _ticker) {
                  _tickerActive = true;
               }
               _tick(2);
            };
 
            _self.fps = function(value) {
               if (!arguments.length) {
                  return _fps;
               }
               _fps = value;
               _gap = 1 / (_fps || 60);
               _nextTime = this.time + _gap;
               _self.wake();
            };
 
            _self.useRAF = function(value) {
               if (!arguments.length) {
                  return _useRAF;
               }
               _self.sleep();
               _useRAF = value;
               _self.fps(_fps);
            };
            _self.fps(fps);
 
            //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
            setTimeout(function() {
               if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
                  _self.useRAF(false);
               }
            }, 1500);
         });
 
         p = gs.Ticker.prototype = new gs.events.EventDispatcher();
         p.constructor = gs.Ticker;
 
 
   /*
    * ----------------------------------------------------------------
    * Animation
    * ----------------------------------------------------------------
    */
         var Animation = _class("core.Animation", function(duration, vars) {
               this.vars = vars = vars || {};
               this._duration = this._totalDuration = duration || 0;
               this._delay = Number(vars.delay) || 0;
               this._timeScale = 1;
               this._active = !!vars.immediateRender;
               this.data = vars.data;
               this._reversed = !!vars.reversed;
 
               if (!_rootTimeline) {
                  return;
               }
               if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
                  _ticker.wake();
               }
 
               var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
               tl.add(this, tl._time);
 
               if (this.vars.paused) {
                  this.paused(true);
               }
            });
 
         _ticker = Animation.ticker = new gs.Ticker();
         p = Animation.prototype;
         p._dirty = p._gc = p._initted = p._paused = false;
         p._totalTime = p._time = 0;
         p._rawPrevTime = -1;
         p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
         p._paused = false;
 
 
         //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
         var _checkTimeout = function() {
               if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
                  _ticker.wake();
               }
               var t = setTimeout(_checkTimeout, 2000);
               if (t.unref) {
                  // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
                  t.unref();
               }
            };
         _checkTimeout();
 
 
         p.play = function(from, suppressEvents) {
            if (from != null) {
               this.seek(from, suppressEvents);
            }
            return this.reversed(false).paused(false);
         };
 
         p.pause = function(atTime, suppressEvents) {
            if (atTime != null) {
               this.seek(atTime, suppressEvents);
            }
            return this.paused(true);
         };
 
         p.resume = function(from, suppressEvents) {
            if (from != null) {
               this.seek(from, suppressEvents);
            }
            return this.paused(false);
         };
 
         p.seek = function(time, suppressEvents) {
            return this.totalTime(Number(time), suppressEvents !== false);
         };
 
         p.restart = function(includeDelay, suppressEvents) {
            return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
         };
 
         p.reverse = function(from, suppressEvents) {
            if (from != null) {
               this.seek((from || this.totalDuration()), suppressEvents);
            }
            return this.reversed(true).paused(false);
         };
 
         p.render = function(time, suppressEvents, force) {
            //stub - we override this method in subclasses.
         };
 
         p.invalidate = function() {
            this._time = this._totalTime = 0;
            this._initted = this._gc = false;
            this._rawPrevTime = -1;
            if (this._gc || !this.timeline) {
               this._enabled(true);
            }
            return this;
         };
 
         p.isActive = function() {
            var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
               startTime = this._startTime,
               rawTime;
            return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum));
         };
 
         p._enabled = function (enabled, ignoreTimeline) {
            if (!_tickerActive) {
               _ticker.wake();
            }
            this._gc = !enabled;
            this._active = this.isActive();
            if (ignoreTimeline !== true) {
               if (enabled && !this.timeline) {
                  this._timeline.add(this, this._startTime - this._delay);
               } else if (!enabled && this.timeline) {
                  this._timeline._remove(this, true);
               }
            }
            return false;
         };
 
 
         p._kill = function(vars, target) {
            return this._enabled(false, false);
         };
 
         p.kill = function(vars, target) {
            this._kill(vars, target);
            return this;
         };
 
         p._uncache = function(includeSelf) {
            var tween = includeSelf ? this : this.timeline;
            while (tween) {
               tween._dirty = true;
               tween = tween.timeline;
            }
            return this;
         };
 
         p._swapSelfInParams = function(params) {
            var i = params.length,
               copy = params.concat();
            while (--i > -1) {
               if (params[i] === "{self}") {
                  copy[i] = this;
               }
            }
            return copy;
         };
 
         p._callback = function(type) {
            var v = this.vars,
               callback = v[type],
               params = v[type + "Params"],
               scope = v[type + "Scope"] || v.callbackScope || this,
               l = params ? params.length : 0;
            switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
               case 0: callback.call(scope); break;
               case 1: callback.call(scope, params[0]); break;
               case 2: callback.call(scope, params[0], params[1]); break;
               default: callback.apply(scope, params);
            }
         };
 
   //----Animation getters/setters --------------------------------------------------------
 
         p.eventCallback = function(type, callback, params, scope) {
            if ((type || "").substr(0,2) === "on") {
               var v = this.vars;
               if (arguments.length === 1) {
                  return v[type];
               }
               if (callback == null) {
                  delete v[type];
               } else {
                  v[type] = callback;
                  v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
                  v[type + "Scope"] = scope;
               }
               if (type === "onUpdate") {
                  this._onUpdate = callback;
               }
            }
            return this;
         };
 
         p.delay = function(value) {
            if (!arguments.length) {
               return this._delay;
            }
            if (this._timeline.smoothChildTiming) {
               this.startTime( this._startTime + value - this._delay );
            }
            this._delay = value;
            return this;
         };
 
         p.duration = function(value) {
            if (!arguments.length) {
               this._dirty = false;
               return this._duration;
            }
            this._duration = this._totalDuration = value;
            this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
            if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
               this.totalTime(this._totalTime * (value / this._duration), true);
            }
            return this;
         };
 
         p.totalDuration = function(value) {
            this._dirty = false;
            return (!arguments.length) ? this._totalDuration : this.duration(value);
         };
 
         p.time = function(value, suppressEvents) {
            if (!arguments.length) {
               return this._time;
            }
            if (this._dirty) {
               this.totalDuration();
            }
            return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
         };
 
         p.totalTime = function(time, suppressEvents, uncapped) {
            if (!_tickerActive) {
               _ticker.wake();
            }
            if (!arguments.length) {
               return this._totalTime;
            }
            if (this._timeline) {
               if (time < 0 && !uncapped) {
                  time += this.totalDuration();
               }
               if (this._timeline.smoothChildTiming) {
                  if (this._dirty) {
                     this.totalDuration();
                  }
                  var totalDuration = this._totalDuration,
                     tl = this._timeline;
                  if (time > totalDuration && !uncapped) {
                     time = totalDuration;
                  }
                  this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
                  if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
                     this._uncache(false);
                  }
                  //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
                  if (tl._timeline) {
                     while (tl._timeline) {
                        if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                           tl.totalTime(tl._totalTime, true);
                        }
                        tl = tl._timeline;
                     }
                  }
               }
               if (this._gc) {
                  this._enabled(true, false);
               }
               if (this._totalTime !== time || this._duration === 0) {
                  if (_lazyTweens.length) {
                     _lazyRender();
                  }
                  this.render(time, suppressEvents, false);
                  if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
                     _lazyRender();
                  }
               }
            }
            return this;
         };
 
         p.progress = p.totalProgress = function(value, suppressEvents) {
            var duration = this.duration();
            return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
         };
 
         p.startTime = function(value) {
            if (!arguments.length) {
               return this._startTime;
            }
            if (value !== this._startTime) {
               this._startTime = value;
               if (this.timeline) if (this.timeline._sortChildren) {
                  this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
               }
            }
            return this;
         };
 
         p.endTime = function(includeRepeats) {
            return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
         };
 
         p.timeScale = function(value) {
            if (!arguments.length) {
               return this._timeScale;
            }
            var pauseTime, t;
            value = value || _tinyNum; //can't allow zero because it'll throw the math off
            if (this._timeline && this._timeline.smoothChildTiming) {
               pauseTime = this._pauseTime;
               t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
               this._startTime = t - ((t - this._startTime) * this._timeScale / value);
            }
            this._timeScale = value;
            t = this.timeline;
            while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
               t._dirty = true;
               t.totalDuration();
               t = t.timeline;
            }
            return this;
         };
 
         p.reversed = function(value) {
            if (!arguments.length) {
               return this._reversed;
            }
            if (value != this._reversed) {
               this._reversed = value;
               this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
            }
            return this;
         };
 
         p.paused = function(value) {
            if (!arguments.length) {
               return this._paused;
            }
            var tl = this._timeline,
               raw, elapsed;
            if (value != this._paused) if (tl) {
               if (!_tickerActive && !value) {
                  _ticker.wake();
               }
               raw = tl.rawTime();
               elapsed = raw - this._pauseTime;
               if (!value && tl.smoothChildTiming) {
                  this._startTime += elapsed;
                  this._uncache(false);
               }
               this._pauseTime = value ? raw : null;
               this._paused = value;
               this._active = this.isActive();
               if (!value && elapsed !== 0 && this._initted && this.duration()) {
                  raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
                  this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
               }
            }
            if (this._gc && !value) {
               this._enabled(true, false);
            }
            return this;
         };
 
 
   /*
    * ----------------------------------------------------------------
    * SimpleTimeline
    * ----------------------------------------------------------------
    */
         var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
            Animation.call(this, 0, vars);
            this.autoRemoveChildren = this.smoothChildTiming = true;
         });
 
         p = SimpleTimeline.prototype = new Animation();
         p.constructor = SimpleTimeline;
         p.kill()._gc = false;
         p._first = p._last = p._recent = null;
         p._sortChildren = false;
 
         p.add = p.insert = function(child, position, align, stagger) {
            var prevTween, st;
            child._startTime = Number(position || 0) + child._delay;
            if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
               child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
            }
            if (child.timeline) {
               child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
            }
            child.timeline = child._timeline = this;
            if (child._gc) {
               child._enabled(true, true);
            }
            prevTween = this._last;
            if (this._sortChildren) {
               st = child._startTime;
               while (prevTween && prevTween._startTime > st) {
                  prevTween = prevTween._prev;
               }
            }
            if (prevTween) {
               child._next = prevTween._next;
               prevTween._next = child;
            } else {
               child._next = this._first;
               this._first = child;
            }
            if (child._next) {
               child._next._prev = child;
            } else {
               this._last = child;
            }
            child._prev = prevTween;
            this._recent = child;
            if (this._timeline) {
               this._uncache(true);
            }
            return this;
         };
 
         p._remove = function(tween, skipDisable) {
            if (tween.timeline === this) {
               if (!skipDisable) {
                  tween._enabled(false, true);
               }
 
               if (tween._prev) {
                  tween._prev._next = tween._next;
               } else if (this._first === tween) {
                  this._first = tween._next;
               }
               if (tween._next) {
                  tween._next._prev = tween._prev;
               } else if (this._last === tween) {
                  this._last = tween._prev;
               }
               tween._next = tween._prev = tween.timeline = null;
               if (tween === this._recent) {
                  this._recent = this._last;
               }
 
               if (this._timeline) {
                  this._uncache(true);
               }
            }
            return this;
         };
 
         p.render = function(time, suppressEvents, force) {
            var tween = this._first,
               next;
            this._totalTime = this._time = this._rawPrevTime = time;
            while (tween) {
               next = tween._next; //record it here because the value could change after rendering...
               if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
                  if (!tween._reversed) {
                     tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                  } else {
                     tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                  }
               }
               tween = next;
            }
         };
 
         p.rawTime = function() {
            if (!_tickerActive) {
               _ticker.wake();
            }
            return this._totalTime;
         };
 
   /*
    * ----------------------------------------------------------------
    * TweenLite
    * ----------------------------------------------------------------
    */
         var TweenLite = _class("TweenLite", function(target, duration, vars) {
               Animation.call(this, duration, vars);
               this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
 
               if (target == null) {
                  throw "Cannot tween a null target.";
               }
 
               this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
 
               var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
                  overwrite = this.vars.overwrite,
                  i, targ, targets;
 
               this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];
 
               if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
                  this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                  this._propLookup = [];
                  this._siblings = [];
                  for (i = 0; i < targets.length; i++) {
                     targ = targets[i];
                     if (!targ) {
                        targets.splice(i--, 1);
                        continue;
                     } else if (typeof(targ) === "string") {
                        targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
                        if (typeof(targ) === "string") {
                           targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
                        }
                        continue;
                     } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
                        targets.splice(i--, 1);
                        this._targets = targets = targets.concat(_slice(targ));
                        continue;
                     }
                     this._siblings[i] = _register(targ, this, false);
                     if (overwrite === 1) if (this._siblings[i].length > 1) {
                        _applyOverwrite(targ, this, null, 1, this._siblings[i]);
                     }
                  }
 
               } else {
                  this._propLookup = {};
                  this._siblings = _register(target, this, false);
                  if (overwrite === 1) if (this._siblings.length > 1) {
                     _applyOverwrite(target, this, null, 1, this._siblings);
                  }
               }
               if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
                  this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                  this.render(Math.min(0, -this._delay)); //in case delay is negative
               }
            }, true),
            _isSelector = function(v) {
               return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
            },
            _autoCSS = function(vars, target) {
               var css = {},
                  p;
               for (p in vars) {
                  if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
                     css[p] = vars[p];
                     delete vars[p];
                  }
               }
               vars.css = css;
            };
 
         p = TweenLite.prototype = new Animation();
         p.constructor = TweenLite;
         p.kill()._gc = false;
 
   //----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------
 
         p.ratio = 0;
         p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
         p._notifyPluginsOfEnabled = p._lazy = false;
 
         TweenLite.version = "2.1.3";
         TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
         TweenLite.defaultOverwrite = "auto";
         TweenLite.ticker = _ticker;
         TweenLite.autoSleep = 120;
         TweenLite.lagSmoothing = function(threshold, adjustedLag) {
            _ticker.lagSmoothing(threshold, adjustedLag);
         };
 
         TweenLite.selector = window.$ || window.jQuery || function(e) {
            var selector = window.$ || window.jQuery;
            if (selector) {
               TweenLite.selector = selector;
               return selector(e);
            }
            if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
               _doc = window.document;
            }
            return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
         };
 
         var _lazyTweens = [],
            _lazyLookup = {},
            _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
            _relExp = /[\+-]=-?[\.\d]/,
            //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
            _setRatio = function(v) {
               var pt = this._firstPT,
                  min = 0.000001,
                  val;
               while (pt) {
                  val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
                  if (pt.m) {
                     val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
                  } else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
                     val = 0;
                  }
                  if (!pt.f) {
                     pt.t[pt.p] = val;
                  } else if (pt.fp) {
                     pt.t[pt.p](pt.fp, val);
                  } else {
                     pt.t[pt.p](val);
                  }
                  pt = pt._next;
               }
            },
            _blobRound = function(v) {
               return (((v * 1000) | 0) / 1000) + "";
            },
            //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
            _blobDif = function(start, end, filter, pt) {
               var a = [],
                  charIndex = 0,
                  s = "",
                  color = 0,
                  startNums, endNums, num, i, l, nonNumbers, currentNum;
               a.start = start;
               a.end = end;
               start = a[0] = start + ""; //ensure values are strings
               end = a[1] = end + "";
               if (filter) {
                  filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
                  start = a[0];
                  end = a[1];
               }
               a.length = 0;
               startNums = start.match(_numbersExp) || [];
               endNums = end.match(_numbersExp) || [];
               if (pt) {
                  pt._next = null;
                  pt.blob = 1;
                  a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
               }
               l = endNums.length;
               for (i = 0; i < l; i++) {
                  currentNum = endNums[i];
                  nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
                  s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                  charIndex += nonNumbers.length;
                  if (color) { //sense rgba() values and round them.
                     color = (color + 1) % 5;
                  } else if (nonNumbers.substr(-5) === "rgba(") {
                     color = 1;
                  }
                  if (currentNum === startNums[i] || startNums.length <= i) {
                     s += currentNum;
                  } else {
                     if (s) {
                        a.push(s);
                        s = "";
                     }
                     num = parseFloat(startNums[i]);
                     a.push(num);
                     a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : _blobRound}; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
                     //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
                  }
                  charIndex += currentNum.length;
               }
               s += end.substr(charIndex);
               if (s) {
                  a.push(s);
               }
               a.setRatio = _setRatio;
               if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
                  a.end = null;
               }
               return a;
            },
            //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
            _addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
               if (typeof(end) === "function") {
                  end = end(index || 0, target);
               }
               var type = typeof(target[prop]),
                  getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
                  s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
                  isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
                  pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
                  blob;
 
               if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
                  if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
                     //a blob (string that has multiple numbers in it)
                     pt.fp = funcParam;
                     blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
                     pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
                  } else {
                     pt.s = parseFloat(s);
                     if (!isRelative) {
                        pt.c = (parseFloat(end) - pt.s) || 0;
                     }
                  }
               }
               if (pt.c) { //only add it to the linked list if there's a change.
                  if ((pt._next = this._firstPT)) {
                     pt._next._prev = pt;
                  }
                  this._firstPT = pt;
                  return pt;
               }
            },
            _internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
            _plugins = TweenLite._plugins = {},
            _tweenLookup = _internals.tweenLookup = {},
            _tweenLookupNum = 0,
            _reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1, stagger:1},
            _overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
            _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
            _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
            _nextGCFrame = 30,
            _lazyRender = _internals.lazyRender = function() {
               var l = _lazyTweens.length,
                  i, tween;
               _lazyLookup = {};
               for (i = 0; i < l; i++) {
                  tween = _lazyTweens[i];
                  if (tween && tween._lazy !== false) {
                     tween.render(tween._lazy[0], tween._lazy[1], true);
                     tween._lazy = false;
                  }
               }
               _lazyTweens.length = 0;
            };
 
         _rootTimeline._startTime = _ticker.time;
         _rootFramesTimeline._startTime = _ticker.frame;
         _rootTimeline._active = _rootFramesTimeline._active = true;
         setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".
 
         Animation._updateRoot = TweenLite.render = function() {
               var i, a, p;
               if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
                  _lazyRender();
               }
               _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
               _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
               if (_lazyTweens.length) {
                  _lazyRender();
               }
               if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
                  _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
                  for (p in _tweenLookup) {
                     a = _tweenLookup[p].tweens;
                     i = a.length;
                     while (--i > -1) {
                        if (a[i]._gc) {
                           a.splice(i, 1);
                        }
                     }
                     if (a.length === 0) {
                        delete _tweenLookup[p];
                     }
                  }
                  //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
                  p = _rootTimeline._first;
                  if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
                     while (p && p._paused) {
                        p = p._next;
                     }
                     if (!p) {
                        _ticker.sleep();
                     }
                  }
               }
            };
 
         _ticker.addEventListener("tick", Animation._updateRoot);
 
         var _register = function(target, tween, scrub) {
               var id = target._gsTweenID, a, i;
               if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
                  _tweenLookup[id] = {target:target, tweens:[]};
               }
               if (tween) {
                  a = _tweenLookup[id].tweens;
                  a[(i = a.length)] = tween;
                  if (scrub) {
                     while (--i > -1) {
                        if (a[i] === tween) {
                           a.splice(i, 1);
                        }
                     }
                  }
               }
               return _tweenLookup[id].tweens;
            },
            _onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
               var func = overwrittenTween.vars.onOverwrite, r1, r2;
               if (func) {
                  r1 = func(overwrittenTween, overwritingTween, target, killedProps);
               }
               func = TweenLite.onOverwrite;
               if (func) {
                  r2 = func(overwrittenTween, overwritingTween, target, killedProps);
               }
               return (r1 !== false && r2 !== false);
            },
            _applyOverwrite = function(target, tween, props, mode, siblings) {
               var i, changed, curTween, l;
               if (mode === 1 || mode >= 4) {
                  l = siblings.length;
                  for (i = 0; i < l; i++) {
                     if ((curTween = siblings[i]) !== tween) {
                        if (!curTween._gc) {
                           if (curTween._kill(null, target, tween)) {
                              changed = true;
                           }
                        }
                     } else if (mode === 5) {
                        break;
                     }
                  }
                  return changed;
               }
               //NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
               var startTime = tween._startTime + _tinyNum,
                  overlaps = [],
                  oCount = 0,
                  zeroDur = (tween._duration === 0),
                  globalStart;
               i = siblings.length;
               while (--i > -1) {
                  if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) ; else if (curTween._timeline !== tween._timeline) {
                     globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                     if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                        overlaps[oCount++] = curTween;
                     }
                  } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
                     overlaps[oCount++] = curTween;
                  }
               }
 
               i = oCount;
               while (--i > -1) {
                  curTween = overlaps[i];
                  l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
                  if (mode === 2) if (curTween._kill(props, target, tween)) {
                     changed = true;
                  }
                  if (mode !== 2 || (!curTween._firstPT && curTween._initted && l)) {
                     if (mode !== 2 && !_onOverwrite(curTween, tween)) {
                        continue;
                     }
                     if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
                        changed = true;
                     }
                  }
               }
               return changed;
            },
            _checkOverlap = function(tween, reference, zeroDur) {
               var tl = tween._timeline,
                  ts = tl._timeScale,
                  t = tween._startTime;
               while (tl._timeline) {
                  t += tl._startTime;
                  ts *= tl._timeScale;
                  if (tl._paused) {
                     return -100;
                  }
                  tl = tl._timeline;
               }
               t /= ts;
               return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
            };
 
 
   //---- TweenLite instance methods -----------------------------------------------------------------------------
 
         p._init = function() {
            var v = this.vars,
               op = this._overwrittenProps,
               dur = this._duration,
               immediate = !!v.immediateRender,
               ease = v.ease,
               startAt = this._startAt,
               i, initPlugins, pt, p, startVars, l;
            if (v.startAt) {
               if (startAt) {
                  startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
                  startAt.kill();
               }
               startVars = {};
               for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
                  startVars[p] = v.startAt[p];
               }
               startVars.data = "isStart";
               startVars.overwrite = false;
               startVars.immediateRender = true;
               startVars.lazy = (immediate && v.lazy !== false);
               startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
               startVars.onUpdate = v.onUpdate;
               startVars.onUpdateParams = v.onUpdateParams;
               startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
               this._startAt = TweenLite.to(this.target || {}, 0, startVars);
               if (immediate) {
                  if (this._time > 0) {
                     this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
                  } else if (dur !== 0) {
                     return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                  }
               }
            } else if (v.runBackwards && dur !== 0) {
               //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
               if (startAt) {
                  startAt.render(-1, true);
                  startAt.kill();
                  this._startAt = null;
               } else {
                  if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                     immediate = false;
                  }
                  pt = {};
                  for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
                     if (!_reservedProps[p] || p === "autoCSS") {
                        pt[p] = v[p];
                     }
                  }
                  pt.overwrite = 0;
                  pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                  pt.lazy = (immediate && v.lazy !== false);
                  pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                  this._startAt = TweenLite.to(this.target, 0, pt);
                  if (!immediate) {
                     this._startAt._init(); //ensures that the initial values are recorded
                     this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
                     if (this.vars.immediateRender) {
                        this._startAt = null;
                     }
                  } else if (this._time === 0) {
                     return;
                  }
               }
            }
            this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
            if (v.easeParams instanceof Array && ease.config) {
               this._ease = ease.config.apply(ease, v.easeParams);
            }
            this._easeType = this._ease._type;
            this._easePower = this._ease._power;
            this._firstPT = null;
 
            if (this._targets) {
               l = this._targets.length;
               for (i = 0; i < l; i++) {
                  if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
                     initPlugins = true;
                  }
               }
            } else {
               initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
            }
 
            if (initPlugins) {
               TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
            }
            if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
               this._enabled(false, false);
            }
            if (v.runBackwards) {
               pt = this._firstPT;
               while (pt) {
                  pt.s += pt.c;
                  pt.c = -pt.c;
                  pt = pt._next;
               }
            }
            this._onUpdate = v.onUpdate;
            this._initted = true;
         };
 
         p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
            var p, i, initPlugins, plugin, pt, v;
            if (target == null) {
               return false;
            }
            if (_lazyLookup[target._gsTweenID]) {
               _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            }
 
            if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
               _autoCSS(this.vars, target);
            }
            for (p in this.vars) {
               v = this.vars[p];
               if (_reservedProps[p]) {
                  if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
                     this.vars[p] = v = this._swapSelfInParams(v, this);
                  }
 
               } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {
 
                  //t - target 		[object]
                  //p - property 		[string]
                  //s - start			[number]
                  //c - change		[number]
                  //f - isFunction	[boolean]
                  //n - name			[string]
                  //pg - isPlugin 	[boolean]
                  //pr - priority		[number]
                  //m - mod           [function | 0]
                  this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
                  i = plugin._overwriteProps.length;
                  while (--i > -1) {
                     propLookup[plugin._overwriteProps[i]] = this._firstPT;
                  }
                  if (plugin._priority || plugin._onInitAllProps) {
                     initPlugins = true;
                  }
                  if (plugin._onDisable || plugin._onEnable) {
                     this._notifyPluginsOfEnabled = true;
                  }
                  if (pt._next) {
                     pt._next._prev = pt;
                  }
 
               } else {
                  propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
               }
            }
 
            if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
               return this._initProps(target, propLookup, siblings, overwrittenProps, index);
            }
            if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
               this._kill(propLookup, target);
               return this._initProps(target, propLookup, siblings, overwrittenProps, index);
            }
            if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
               _lazyLookup[target._gsTweenID] = true;
            }
            return initPlugins;
         };
 
         p.render = function(time, suppressEvents, force) {
            var self = this,
               prevTime = self._time,
               duration = self._duration,
               prevRawPrevTime = self._rawPrevTime,
               isComplete, callback, pt, rawPrevTime;
            if (time >= duration - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
               self._totalTime = self._time = duration;
               self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
               if (!self._reversed ) {
                  isComplete = true;
                  callback = "onComplete";
                  force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
               }
               if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                  if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                     time = 0;
                  }
                  if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
                     force = true;
                     if (prevRawPrevTime > _tinyNum) {
                        callback = "onReverseComplete";
                     }
                  }
                  self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
               }
 
            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
               self._totalTime = self._time = 0;
               self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
               if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
                  callback = "onReverseComplete";
                  isComplete = self._reversed;
               }
               if (time > -_tinyNum) {
                  time = 0;
               } else if (time < 0) {
                  self._active = false;
                  if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                     if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
                        force = true;
                     }
                     self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                  }
               }
               if (!self._initted || (self._startAt && self._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
                  force = true;
               }
            } else {
               self._totalTime = self._time = time;
 
               if (self._easeType) {
                  var r = time / duration, type = self._easeType, pow = self._easePower;
                  if (type === 1 || (type === 3 && r >= 0.5)) {
                     r = 1 - r;
                  }
                  if (type === 3) {
                     r *= 2;
                  }
                  if (pow === 1) {
                     r *= r;
                  } else if (pow === 2) {
                     r *= r * r;
                  } else if (pow === 3) {
                     r *= r * r * r;
                  } else if (pow === 4) {
                     r *= r * r * r * r;
                  }
                  self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (time / duration < 0.5) ? r / 2 : 1 - (r / 2);
               } else {
                  self.ratio = self._ease.getRatio(time / duration);
               }
            }
 
            if (self._time === prevTime && !force) {
               return;
            } else if (!self._initted) {
               self._init();
               if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                  return;
               } else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) {
                  self._time = self._totalTime = prevTime;
                  self._rawPrevTime = prevRawPrevTime;
                  _lazyTweens.push(self);
                  self._lazy = [time, suppressEvents];
                  return;
               }
               //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
               if (self._time && !isComplete) {
                  self.ratio = self._ease.getRatio(self._time / duration);
               } else if (isComplete && self._ease._calcEnd) {
                  self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
               }
            }
            if (self._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
               self._lazy = false;
            }
            if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
               self._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
            }
            if (prevTime === 0) {
               if (self._startAt) {
                  if (time >= 0) {
                     self._startAt.render(time, true, force);
                  } else if (!callback) {
                     callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
                  }
               }
               if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
                  self._callback("onStart");
               }
            }
            pt = self._firstPT;
            while (pt) {
               if (pt.f) {
                  pt.t[pt.p](pt.c * self.ratio + pt.s);
               } else {
                  pt.t[pt.p] = pt.c * self.ratio + pt.s;
               }
               pt = pt._next;
            }
 
            if (self._onUpdate) {
               if (time < 0) if (self._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                  self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
               }
               if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
                  self._callback("onUpdate");
               }
            }
            if (callback) if (!self._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
               if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
                  self._startAt.render(time, true, force);
               }
               if (isComplete) {
                  if (self._timeline.autoRemoveChildren) {
                     self._enabled(false, false);
                  }
                  self._active = false;
               }
               if (!suppressEvents && self.vars[callback]) {
                  self._callback(callback);
               }
               if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                  self._rawPrevTime = 0;
               }
            }
         };
 
         p._kill = function(vars, target, overwritingTween) {
            if (vars === "all") {
               vars = null;
            }
            if (vars == null) if (target == null || target === this.target) {
               this._lazy = false;
               return this._enabled(false, false);
            }
            target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
            var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
               firstPT = this._firstPT,
               i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
            if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
               i = target.length;
               while (--i > -1) {
                  if (this._kill(vars, target[i], overwritingTween)) {
                     changed = true;
                  }
               }
            } else {
               if (this._targets) {
                  i = this._targets.length;
                  while (--i > -1) {
                     if (target === this._targets[i]) {
                        propLookup = this._propLookup[i] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                        break;
                     }
                  }
               } else if (target !== this.target) {
                  return false;
               } else {
                  propLookup = this._propLookup;
                  overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
               }
 
               if (propLookup) {
                  killProps = vars || propLookup;
                  record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
                  if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
                     for (p in killProps) {
                        if (propLookup[p]) {
                           if (!killed) {
                              killed = [];
                           }
                           killed.push(p);
                        }
                     }
                     if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
                        return false;
                     }
                  }
 
                  for (p in killProps) {
                     if ((pt = propLookup[p])) {
                        if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
                           if (pt.f) {
                              pt.t[pt.p](pt.s);
                           } else {
                              pt.t[pt.p] = pt.s;
                           }
                           changed = true;
                        }
                        if (pt.pg && pt.t._kill(killProps)) {
                           changed = true; //some plugins need to be notified so they can perform cleanup tasks first
                        }
                        if (!pt.pg || pt.t._overwriteProps.length === 0) {
                           if (pt._prev) {
                              pt._prev._next = pt._next;
                           } else if (pt === this._firstPT) {
                              this._firstPT = pt._next;
                           }
                           if (pt._next) {
                              pt._next._prev = pt._prev;
                           }
                           pt._next = pt._prev = null;
                        }
                        delete propLookup[p];
                     }
                     if (record) {
                        overwrittenProps[p] = 1;
                     }
                  }
                  if (!this._firstPT && this._initted && firstPT) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
                     this._enabled(false, false);
                  }
               }
            }
            return changed;
         };
 
         p.invalidate = function() {
            if (this._notifyPluginsOfEnabled) {
               TweenLite._onPluginEvent("_onDisable", this);
            }
            var t = this._time;
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
            this._notifyPluginsOfEnabled = this._active = this._lazy = false;
            this._propLookup = (this._targets) ? {} : [];
            Animation.prototype.invalidate.call(this);
            if (this.vars.immediateRender) {
               this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
               this.render(t, false, this.vars.lazy !== false);
            }
            return this;
         };
 
         p._enabled = function(enabled, ignoreTimeline) {
            if (!_tickerActive) {
               _ticker.wake();
            }
            if (enabled && this._gc) {
               var targets = this._targets,
                  i;
               if (targets) {
                  i = targets.length;
                  while (--i > -1) {
                     this._siblings[i] = _register(targets[i], this, true);
                  }
               } else {
                  this._siblings = _register(this.target, this, true);
               }
            }
            Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
            if (this._notifyPluginsOfEnabled) if (this._firstPT) {
               return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
            }
            return false;
         };
 
 
   //----TweenLite static methods -----------------------------------------------------
 
         TweenLite.to = function(target, duration, vars) {
            return new TweenLite(target, duration, vars);
         };
 
         TweenLite.from = function(target, duration, vars) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return new TweenLite(target, duration, vars);
         };
 
         TweenLite.fromTo = function(target, duration, fromVars, toVars) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return new TweenLite(target, duration, toVars);
         };
 
         TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
            return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
         };
 
         TweenLite.set = function(target, vars) {
            return new TweenLite(target, 0, vars);
         };
 
         TweenLite.getTweensOf = function(target, onlyActive) {
            if (target == null) { return []; }
            target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
            var i, a, j, t;
            if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
               i = target.length;
               a = [];
               while (--i > -1) {
                  a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
               }
               i = a.length;
               //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
               while (--i > -1) {
                  t = a[i];
                  j = i;
                  while (--j > -1) {
                     if (t === a[j]) {
                        a.splice(i, 1);
                     }
                  }
               }
            } else if (target._gsTweenID) {
               a = _register(target).concat();
               i = a.length;
               while (--i > -1) {
                  if (a[i]._gc || (onlyActive && !a[i].isActive())) {
                     a.splice(i, 1);
                  }
               }
            }
            return a || [];
         };
 
         TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
            if (typeof(onlyActive) === "object") {
               vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
               onlyActive = false;
            }
            var a = TweenLite.getTweensOf(target, onlyActive),
               i = a.length;
            while (--i > -1) {
               a[i]._kill(vars, target);
            }
         };
 
 
 
   /*
    * ----------------------------------------------------------------
    * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
    * ----------------------------------------------------------------
    */
         var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
                  this._overwriteProps = (props || "").split(",");
                  this._propName = this._overwriteProps[0];
                  this._priority = priority || 0;
                  this._super = TweenPlugin.prototype;
               }, true);
 
         p = TweenPlugin.prototype;
         TweenPlugin.version = "1.19.0";
         TweenPlugin.API = 2;
         p._firstPT = null;
         p._addTween = _addPropTween;
         p.setRatio = _setRatio;
 
         p._kill = function(lookup) {
            var a = this._overwriteProps,
               pt = this._firstPT,
               i;
            if (lookup[this._propName] != null) {
               this._overwriteProps = [];
            } else {
               i = a.length;
               while (--i > -1) {
                  if (lookup[a[i]] != null) {
                     a.splice(i, 1);
                  }
               }
            }
            while (pt) {
               if (lookup[pt.n] != null) {
                  if (pt._next) {
                     pt._next._prev = pt._prev;
                  }
                  if (pt._prev) {
                     pt._prev._next = pt._next;
                     pt._prev = null;
                  } else if (this._firstPT === pt) {
                     this._firstPT = pt._next;
                  }
               }
               pt = pt._next;
            }
            return false;
         };
 
         p._mod = p._roundProps = function(lookup) {
            var pt = this._firstPT,
               val;
            while (pt) {
               val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
               if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
                  if (pt.f === 2) {
                     pt.t._applyPT.m = val;
                  } else {
                     pt.m = val;
                  }
               }
               pt = pt._next;
            }
         };
 
         TweenLite._onPluginEvent = function(type, tween) {
            var pt = tween._firstPT,
               changed, pt2, first, last, next;
            if (type === "_onInitAllProps") {
               //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
               while (pt) {
                  next = pt._next;
                  pt2 = first;
                  while (pt2 && pt2.pr > pt.pr) {
                     pt2 = pt2._next;
                  }
                  if ((pt._prev = pt2 ? pt2._prev : last)) {
                     pt._prev._next = pt;
                  } else {
                     first = pt;
                  }
                  if ((pt._next = pt2)) {
                     pt2._prev = pt;
                  } else {
                     last = pt;
                  }
                  pt = next;
               }
               pt = tween._firstPT = first;
            }
            while (pt) {
               if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
                  changed = true;
               }
               pt = pt._next;
            }
            return changed;
         };
 
         TweenPlugin.activate = function(plugins) {
            var i = plugins.length;
            while (--i > -1) {
               if (plugins[i].API === TweenPlugin.API) {
                  _plugins[(new plugins[i]())._propName] = plugins[i];
               }
            }
            return true;
         };
 
         //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
         _gsDefine.plugin = function(config) {
            if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
            var propName = config.propName,
               priority = config.priority || 0,
               overwriteProps = config.overwriteProps,
               map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
               Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
                  function() {
                     TweenPlugin.call(this, propName, priority);
                     this._overwriteProps = overwriteProps || [];
                  }, (config.global === true)),
               p = Plugin.prototype = new TweenPlugin(propName),
               prop;
            p.constructor = Plugin;
            Plugin.API = config.API;
            for (prop in map) {
               if (typeof(config[prop]) === "function") {
                  p[map[prop]] = config[prop];
               }
            }
            Plugin.version = config.version;
            TweenPlugin.activate([Plugin]);
            return Plugin;
         };
 
 
         //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
         a = window._gsQueue;
         if (a) {
            for (i = 0; i < a.length; i++) {
               a[i]();
            }
            for (p in _defLookup) {
               if (!_defLookup[p].func) {
                  window.console.log("GSAP encountered missing dependency: " + p);
               }
            }
         }
 
         _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
 
         return TweenLite;
 
   })(_gsScope);
 
   var globals = _gsScope.GreenSockGlobals;
   var nonGlobals = globals.com.greensock;
   var SimpleTimeline = nonGlobals.core.SimpleTimeline;
   var Animation = nonGlobals.core.Animation;
   var Ease = globals.Ease;
   var Linear = globals.Linear;
   var Power1 = globals.Power1;
   var Power2 = globals.Power2;
   var Power3 = globals.Power3;
   var Power4 = globals.Power4;
   var TweenPlugin = globals.TweenPlugin;
   var EventDispatcher = nonGlobals.events.EventDispatcher;
 
   /*!
    * VERSION: 2.1.3
    * DATE: 2019-05-17
    * UPDATES AND DOCS AT: http://greensock.com
    *
    * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
    * This work is subject to the terms at http://greensock.com/standard-license or for
    * Club GreenSock members, the software agreement that was issued with your membership.
    * 
    * @author: Jack Doyle, jack@greensock.com
    */
 
   _gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {
 
         var TimelineLite = function(vars) {
               SimpleTimeline.call(this, vars);
               var self = this,
                  v = self.vars,
                  val, p;
               self._labels = {};
               self.autoRemoveChildren = !!v.autoRemoveChildren;
               self.smoothChildTiming = !!v.smoothChildTiming;
               self._sortChildren = true;
               self._onUpdate = v.onUpdate;
               for (p in v) {
                  val = v[p];
                  if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
                     v[p] = self._swapSelfInParams(val);
                  }
               }
               if (_isArray(v.tweens)) {
                  self.add(v.tweens, 0, v.align, v.stagger);
               }
            },
            _tinyNum = 0.00000001,
            TweenLiteInternals = TweenLite._internals,
            _internals = TimelineLite._internals = {},
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _globals = _gsScope._gsDefine.globals,
            _copy = function(vars) {
               var copy = {}, p;
               for (p in vars) {
                  copy[p] = vars[p];
               }
               return copy;
            },
            _applyCycle = function(vars, targets, i) {
               var alt = vars.cycle,
                  p, val;
               for (p in alt) {
                  val = alt[p];
                  vars[p] = (typeof(val) === "function") ? val(i, targets[i], targets) : val[i % val.length];
               }
               delete vars.cycle;
            },
            _pauseCallback = _internals.pauseCallback = function() {},
            _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
               var b = [],
                  l = a.length,
                  i;
               for (i = 0; i !== l; b.push(a[i++]));
               return b;
            },
            _defaultImmediateRender = function(tl, toVars, fromVars, defaultFalse) { //default to immediateRender:true unless otherwise set in toVars, fromVars or if defaultFalse is passed in as true
               var ir = "immediateRender";
               if (!(ir in toVars)) {
                  toVars[ir] = !((fromVars && fromVars[ir] === false) || defaultFalse);
               }
               return toVars;
            },
            //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
            _distribute = function(v) {
               if (typeof(v) === "function") {
                  return v;
               }
               var vars = (typeof(v) === "object") ? v : {each:v}, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
                  ease = vars.ease,
                  from = vars.from || 0,
                  base = vars.base || 0,
                  cache = {},
                  isFromKeyword = isNaN(from),
                  axis = vars.axis,
                  ratio = {center:0.5, end:1}[from] || 0;
               return function(i, target, a) {
                  var l = (a || vars).length,
                     distances = cache[l],
                     originX, originY, x, y, d, j, max, min, wrap;
                  if (!distances) {
                     wrap = (vars.grid === "auto") ? 0 : (vars.grid || [Infinity])[0];
                     if (!wrap) {
                        max = -Infinity;
                        while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) { }
                        wrap--;
                     }
                     distances = cache[l] = [];
                     originX = isFromKeyword ? (Math.min(wrap, l) * ratio) - 0.5 : from % wrap;
                     originY = isFromKeyword ? l * ratio / wrap - 0.5 : (from / wrap) | 0;
                     max = 0;
                     min = Infinity;
                     for (j = 0; j < l; j++) {
                        x = (j % wrap) - originX;
                        y = originY - ((j / wrap) | 0);
                        distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
                        if (d > max) {
                           max = d;
                        }
                        if (d < min) {
                           min = d;
                        }
                     }
                     distances.max = max - min;
                     distances.min = min;
                     distances.v = l = vars.amount || (vars.each * (wrap > l ? l - 1 : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap)) || 0;
                     distances.b = (l < 0) ? base - l : base;
                  }
                  l = (distances[i] - distances.min) / distances.max;
                  return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
               };
            },
            p = TimelineLite.prototype = new SimpleTimeline();
 
         TimelineLite.version = "2.1.3";
         TimelineLite.distribute = _distribute;
         p.constructor = TimelineLite;
         p.kill()._gc = p._forcingPlayhead = p._hasPause = false;
 
         /* might use later...
         //translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
         function localToGlobal(time, animation) {
            while (animation) {
               time = (time / animation._timeScale) + animation._startTime;
               animation = animation.timeline;
            }
            return time;
         }
 
         //translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
         function globalToLocal(time, animation) {
            var scale = 1;
            time -= localToGlobal(0, animation);
            while (animation) {
               scale *= animation._timeScale;
               animation = animation.timeline;
            }
            return time * scale;
         }
         */
 
         p.to = function(target, duration, vars, position) {
            var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
            return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
         };
 
         p.from = function(target, duration, vars, position) {
            return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, _defaultImmediateRender(this, vars)), position);
         };
 
         p.fromTo = function(target, duration, fromVars, toVars, position) {
            var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
            toVars = _defaultImmediateRender(this, toVars, fromVars);
            return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
         };
 
         p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
               staggerFunc = _distribute(vars.stagger || stagger),
               startAt = vars.startAt,
               cycle = vars.cycle,
               copy, i;
            if (typeof(targets) === "string") {
               targets = TweenLite.selector(targets) || targets;
            }
            targets = targets || [];
            if (_isSelector(targets)) { //if the targets object is a selector, translate it into an array.
               targets = _slice(targets);
            }
            for (i = 0; i < targets.length; i++) {
               copy = _copy(vars);
               if (startAt) {
                  copy.startAt = _copy(startAt);
                  if (startAt.cycle) {
                     _applyCycle(copy.startAt, targets, i);
                  }
               }
               if (cycle) {
                  _applyCycle(copy, targets, i);
                  if (copy.duration != null) {
                     duration = copy.duration;
                     delete copy.duration;
                  }
               }
               tl.to(targets[i], duration, copy, staggerFunc(i, targets[i], targets));
            }
            return this.add(tl, position);
         };
 
         p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.runBackwards = true;
            return this.staggerTo(targets, duration, _defaultImmediateRender(this, vars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
         };
 
         p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            return this.staggerTo(targets, duration, _defaultImmediateRender(this, toVars, fromVars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
         };
 
         p.call = function(callback, params, scope, position) {
            return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
         };
 
         p.set = function(target, vars, position) {
            return this.add( new TweenLite(target, 0, _defaultImmediateRender(this, vars, null, true)), position);
         };
 
         TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
            vars = vars || {};
            if (vars.smoothChildTiming == null) {
               vars.smoothChildTiming = true;
            }
            var tl = new TimelineLite(vars),
               root = tl._timeline,
               hasNegativeStart, time,	tween, next;
            if (ignoreDelayedCalls == null) {
               ignoreDelayedCalls = true;
            }
            root._remove(tl, true);
            tl._startTime = 0;
            tl._rawPrevTime = tl._time = tl._totalTime = root._time;
            tween = root._first;
            while (tween) {
               next = tween._next;
               if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
                  time = tween._startTime - tween._delay;
                  if (time < 0) {
                     hasNegativeStart = 1;
                  }
                  tl.add(tween, time);
               }
               tween = next;
            }
            root.add(tl, 0);
            if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
               tl.totalDuration();
            }
            return tl;
         };
 
         p.add = function(value, position, align, stagger) {
            var self = this,
               curTime, l, i, child, tl, beforeRawTime;
            if (typeof(position) !== "number") {
               position = self._parseTimeOrLabel(position, 0, true, value);
            }
            if (!(value instanceof Animation)) {
               if ((value instanceof Array) || (value && value.push && _isArray(value))) {
                  align = align || "normal";
                  stagger = stagger || 0;
                  curTime = position;
                  l = value.length;
                  for (i = 0; i < l; i++) {
                     if (_isArray(child = value[i])) {
                        child = new TimelineLite({tweens:child});
                     }
                     self.add(child, curTime);
                     if (typeof(child) !== "string" && typeof(child) !== "function") {
                        if (align === "sequence") {
                           curTime = child._startTime + (child.totalDuration() / child._timeScale);
                        } else if (align === "start") {
                           child._startTime -= child.delay();
                        }
                     }
                     curTime += stagger;
                  }
                  return self._uncache(true);
               } else if (typeof(value) === "string") {
                  return self.addLabel(value, position);
               } else if (typeof(value) === "function") {
                  value = TweenLite.delayedCall(0, value);
               } else {
                  throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
               }
            }
 
            SimpleTimeline.prototype.add.call(self, value, position);
 
            if (value._time || (!value._duration && value._initted)) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
               curTime = (self.rawTime() - value._startTime) * value._timeScale;
               if (!value._duration || Math.abs(Math.max(0, Math.min(value.totalDuration(), curTime))) - value._totalTime > 0.00001) {
                  value.render(curTime, false, false);
               }
            }
 
            //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
            if (self._gc || self._time === self._duration) if (!self._paused) if (self._duration < self.duration()) {
               //in case any of the ancestors had completed but should now be enabled...
               tl = self;
               beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
               while (tl._timeline) {
                  if (beforeRawTime && tl._timeline.smoothChildTiming) {
                     tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
                  } else if (tl._gc) {
                     tl._enabled(true, false);
                  }
                  tl = tl._timeline;
               }
            }
 
            return self;
         };
 
         p.remove = function(value) {
            if (value instanceof Animation) {
               this._remove(value, false);
               var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
               value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
               return this;
            } else if (value instanceof Array || (value && value.push && _isArray(value))) {
               var i = value.length;
               while (--i > -1) {
                  this.remove(value[i]);
               }
               return this;
            } else if (typeof(value) === "string") {
               return this.removeLabel(value);
            }
            return this.kill(null, value);
         };
 
         p._remove = function(tween, skipDisable) {
            SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
            var last = this._last;
            if (!last) {
               this._time = this._totalTime = this._duration = this._totalDuration = 0;
            } else if (this._time > this.duration()) {
               this._time = this._duration;
               this._totalTime = this._totalDuration;
            }
            return this;
         };
 
         p.append = function(value, offsetOrLabel) {
            return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
         };
 
         p.insert = p.insertMultiple = function(value, position, align, stagger) {
            return this.add(value, position || 0, align, stagger);
         };
 
         p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
            return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
         };
 
         p.addLabel = function(label, position) {
            this._labels[label] = this._parseTimeOrLabel(position);
            return this;
         };
 
         p.addPause = function(position, callback, params, scope) {
            var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
            t.vars.onComplete = t.vars.onReverseComplete = callback;
            t.data = "isPause";
            this._hasPause = true;
            return this.add(t, position);
         };
 
         p.removeLabel = function(label) {
            delete this._labels[label];
            return this;
         };
 
         p.getLabelTime = function(label) {
            return (this._labels[label] != null) ? this._labels[label] : -1;
         };
 
         p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
            var clippedDuration, i;
            //if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
            if (ignore instanceof Animation && ignore.timeline === this) {
               this.remove(ignore);
            } else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
               i = ignore.length;
               while (--i > -1) {
                  if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
                     this.remove(ignore[i]);
                  }
               }
            }
            clippedDuration = (typeof(timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
            if (typeof(offsetOrLabel) === "string") {
               return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
            }
            offsetOrLabel = offsetOrLabel || 0;
            if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
               i = timeOrLabel.indexOf("=");
               if (i === -1) {
                  if (this._labels[timeOrLabel] == null) {
                     return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
                  }
                  return this._labels[timeOrLabel] + offsetOrLabel;
               }
               offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
               timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : clippedDuration;
            } else if (timeOrLabel == null) {
               timeOrLabel = clippedDuration;
            }
            return Number(timeOrLabel) + offsetOrLabel;
         };
 
         p.seek = function(position, suppressEvents) {
            return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
         };
 
         p.stop = function() {
            return this.paused(true);
         };
 
         p.gotoAndPlay = function(position, suppressEvents) {
            return this.play(position, suppressEvents);
         };
 
         p.gotoAndStop = function(position, suppressEvents) {
            return this.pause(position, suppressEvents);
         };
 
         p.render = function(time, suppressEvents, force) {
            if (this._gc) {
               this._enabled(true, false);
            }
            var self = this,
               prevTime = self._time,
               totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
               prevStart = self._startTime,
               prevTimeScale = self._timeScale,
               prevPaused = self._paused,
               tween, isComplete, next, callback, internalForce, pauseTween, curTime, pauseTime;
            if (prevTime !== self._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
               time += self._time - prevTime;
            }
            if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
               if (time > prevTime) {
                  tween = self._first;
                  while (tween && tween._startTime <= time && !pauseTween) {
                     if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
                        pauseTween = tween;
                     }
                     tween = tween._next;
                  }
               } else {
                  tween = self._last;
                  while (tween && tween._startTime >= time && !pauseTween) {
                     if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                        pauseTween = tween;
                     }
                     tween = tween._prev;
                  }
               }
               if (pauseTween) {
                  self._time = self._totalTime = time = pauseTween._startTime;
                  pauseTime = self._startTime + (self._reversed ? self._duration - time : time) / self._timeScale;
               }
            }
            if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
               self._totalTime = self._time = totalDur;
               if (!self._reversed) if (!self._hasPausedChild()) {
                  isComplete = true;
                  callback = "onComplete";
                  internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
                  if (self._duration === 0) if ((time <= 0 && time >= -_tinyNum) || self._rawPrevTime < 0 || self._rawPrevTime === _tinyNum) if (self._rawPrevTime !== time && self._first) {
                     internalForce = true;
                     if (self._rawPrevTime > _tinyNum) {
                        callback = "onReverseComplete";
                     }
                  }
               }
               self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
               time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
 
            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
               self._totalTime = self._time = 0;
               if (time > -_tinyNum) {
                  time = 0;
               }
               if (prevTime !== 0 || (self._duration === 0 && self._rawPrevTime !== _tinyNum && (self._rawPrevTime > 0 || (time < 0 && self._rawPrevTime >= 0)))) {
                  callback = "onReverseComplete";
                  isComplete = self._reversed;
               }
               if (time < 0) {
                  self._active = false;
                  if (self._timeline.autoRemoveChildren && self._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
                     internalForce = isComplete = true;
                     callback = "onReverseComplete";
                  } else if (self._rawPrevTime >= 0 && self._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
                     internalForce = true;
                  }
                  self._rawPrevTime = time;
               } else {
                  self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                  if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
                     tween = self._first;
                     while (tween && tween._startTime === 0) {
                        if (!tween._duration) {
                           isComplete = false;
                        }
                        tween = tween._next;
                     }
                  }
                  time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
                  if (!self._initted) {
                     internalForce = true;
                  }
               }
 
            } else {
               self._totalTime = self._time = self._rawPrevTime = time;
            }
            if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
               return;
            } else if (!self._initted) {
               self._initted = true;
            }
 
            if (!self._active) if (!self._paused && self._time !== prevTime && time > 0) {
               self._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
            }
 
            if (prevTime === 0) if (self.vars.onStart) if (self._time !== 0 || !self._duration) if (!suppressEvents) {
               self._callback("onStart");
            }
 
            curTime = self._time;
            if (curTime >= prevTime) {
               tween = self._first;
               while (tween) {
                  next = tween._next; //record it here because the value could change after rendering...
                  if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                     break;
                  } else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
                     if (pauseTween === tween) {
                        self.pause();
                        self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                     }
                     if (!tween._reversed) {
                        tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                     } else {
                        tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                     }
                  }
                  tween = next;
               }
            } else {
               tween = self._last;
               while (tween) {
                  next = tween._prev; //record it here because the value could change after rendering...
                  if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                     break;
                  } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                     if (pauseTween === tween) {
                        pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
                        while (pauseTween && pauseTween.endTime() > self._time) {
                           pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
                           pauseTween = pauseTween._prev;
                        }
                        pauseTween = null;
                        self.pause();
                        self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                     }
                     if (!tween._reversed) {
                        tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                     } else {
                        tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                     }
                  }
                  tween = next;
               }
            }
 
            if (self._onUpdate) if (!suppressEvents) {
               if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                  _lazyRender();
               }
               self._callback("onUpdate");
            }
 
            if (callback) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
               if (isComplete) {
                  if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
                     _lazyRender();
                  }
                  if (self._timeline.autoRemoveChildren) {
                     self._enabled(false, false);
                  }
                  self._active = false;
               }
               if (!suppressEvents && self.vars[callback]) {
                  self._callback(callback);
               }
            }
         };
 
         p._hasPausedChild = function() {
            var tween = this._first;
            while (tween) {
               if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
                  return true;
               }
               tween = tween._next;
            }
            return false;
         };
 
         p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || -9999999999;
            var a = [],
               tween = this._first,
               cnt = 0;
            while (tween) {
               if (tween._startTime < ignoreBeforeTime) ; else if (tween instanceof TweenLite) {
                  if (tweens !== false) {
                     a[cnt++] = tween;
                  }
               } else {
                  if (timelines !== false) {
                     a[cnt++] = tween;
                  }
                  if (nested !== false) {
                     a = a.concat(tween.getChildren(true, tweens, timelines));
                     cnt = a.length;
                  }
               }
               tween = tween._next;
            }
            return a;
         };
 
         p.getTweensOf = function(target, nested) {
            var disabled = this._gc,
               a = [],
               cnt = 0,
               tweens, i;
            if (disabled) {
               this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
            }
            tweens = TweenLite.getTweensOf(target);
            i = tweens.length;
            while (--i > -1) {
               if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
                  a[cnt++] = tweens[i];
               }
            }
            if (disabled) {
               this._enabled(false, true);
            }
            return a;
         };
 
         p.recent = function() {
            return this._recent;
         };
 
         p._contains = function(tween) {
            var tl = tween.timeline;
            while (tl) {
               if (tl === this) {
                  return true;
               }
               tl = tl.timeline;
            }
            return false;
         };
 
         p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || 0;
            var tween = this._first,
               labels = this._labels,
               p;
            while (tween) {
               if (tween._startTime >= ignoreBeforeTime) {
                  tween._startTime += amount;
               }
               tween = tween._next;
            }
            if (adjustLabels) {
               for (p in labels) {
                  if (labels[p] >= ignoreBeforeTime) {
                     labels[p] += amount;
                  }
               }
            }
            return this._uncache(true);
         };
 
         p._kill = function(vars, target) {
            if (!vars && !target) {
               return this._enabled(false, false);
            }
            var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
               i = tweens.length,
               changed = false;
            while (--i > -1) {
               if (tweens[i]._kill(vars, target)) {
                  changed = true;
               }
            }
            return changed;
         };
 
         p.clear = function(labels) {
            var tweens = this.getChildren(false, true, true),
               i = tweens.length;
            this._time = this._totalTime = 0;
            while (--i > -1) {
               tweens[i]._enabled(false, false);
            }
            if (labels !== false) {
               this._labels = {};
            }
            return this._uncache(true);
         };
 
         p.invalidate = function() {
            var tween = this._first;
            while (tween) {
               tween.invalidate();
               tween = tween._next;
            }
            return Animation.prototype.invalidate.call(this);		};
 
         p._enabled = function(enabled, ignoreTimeline) {
            if (enabled === this._gc) {
               var tween = this._first;
               while (tween) {
                  tween._enabled(enabled, true);
                  tween = tween._next;
               }
            }
            return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
         };
 
         p.totalTime = function(time, suppressEvents, uncapped) {
            this._forcingPlayhead = true;
            var val = Animation.prototype.totalTime.apply(this, arguments);
            this._forcingPlayhead = false;
            return val;
         };
 
         p.duration = function(value) {
            if (!arguments.length) {
               if (this._dirty) {
                  this.totalDuration(); //just triggers recalculation
               }
               return this._duration;
            }
            if (this.duration() !== 0 && value !== 0) {
               this.timeScale(this._duration / value);
            }
            return this;
         };
 
         p.totalDuration = function(value) {
            if (!arguments.length) {
               if (this._dirty) {
                  var max = 0,
                     self = this,
                     tween = self._last,
                     prevStart = 999999999999,
                     prev, end;
                  while (tween) {
                     prev = tween._prev; //record it here in case the tween changes position in the sequence...
                     if (tween._dirty) {
                        tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
                     }
                     if (tween._startTime > prevStart && self._sortChildren && !tween._paused && !self._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                        self._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
                        self.add(tween, tween._startTime - tween._delay);
                        self._calculatingDuration = 0;
                     } else {
                        prevStart = tween._startTime;
                     }
                     if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                        max -= tween._startTime;
                        if (self._timeline.smoothChildTiming) {
                           self._startTime += tween._startTime / self._timeScale;
                           self._time -= tween._startTime;
                           self._totalTime -= tween._startTime;
                           self._rawPrevTime -= tween._startTime;
                        }
                        self.shiftChildren(-tween._startTime, false, -9999999999);
                        prevStart = 0;
                     }
                     end = tween._startTime + (tween._totalDuration / tween._timeScale);
                     if (end > max) {
                        max = end;
                     }
                     tween = prev;
                  }
                  self._duration = self._totalDuration = max;
                  self._dirty = false;
               }
               return this._totalDuration;
            }
            return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
         };
 
         p.paused = function(value) {
            if (value === false && this._paused) { //if there's a pause directly at the spot from where we're unpausing, skip it.
               var tween = this._first;
               while (tween) {
                  if (tween._startTime === this._time && tween.data === "isPause") {
                     tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
                  }
                  tween = tween._next;
               }
            }
            return Animation.prototype.paused.apply(this, arguments);
         };
 
         p.usesFrames = function() {
            var tl = this._timeline;
            while (tl._timeline) {
               tl = tl._timeline;
            }
            return (tl === Animation._rootFramesTimeline);
         };
 
         p.rawTime = function(wrapRepeats) {
            return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
         };
 
         return TimelineLite;
 
      }, true);
 
   var TimelineLite = globals.TimelineLite;
 
   /*!
    * VERSION: 2.1.3
    * DATE: 2019-05-17
    * UPDATES AND DOCS AT: http://greensock.com
    *
    * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
    * This work is subject to the terms at http://greensock.com/standard-license or for
    * Club GreenSock members, the software agreement that was issued with your membership.
    * 
    * @author: Jack Doyle, jack@greensock.com
    */
 
   _gsScope._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function() {
         
         var TimelineMax = function(vars) {
               TimelineLite.call(this, vars);
               this._repeat = this.vars.repeat || 0;
               this._repeatDelay = this.vars.repeatDelay || 0;
               this._cycle = 0;
               this._yoyo = !!this.vars.yoyo;
               this._dirty = true;
            },
            _tinyNum = 0.00000001,
            TweenLiteInternals = TweenLite._internals,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _globals = _gsScope._gsDefine.globals,
            _easeNone = new Ease(null, null, 1, 0),
            p = TimelineMax.prototype = new TimelineLite();
 
         p.constructor = TimelineMax;
         p.kill()._gc = false;
         TimelineMax.version = "2.1.3";
 
         p.invalidate = function() {
            this._yoyo = !!this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return TimelineLite.prototype.invalidate.call(this);
         };
 
         p.addCallback = function(callback, position, params, scope) {
            return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
         };
 
         p.removeCallback = function(callback, position) {
            if (callback) {
               if (position == null) {
                  this._kill(null, callback);
               } else {
                  var a = this.getTweensOf(callback, false),
                     i = a.length,
                     time = this._parseTimeOrLabel(position);
                  while (--i > -1) {
                     if (a[i]._startTime === time) {
                        a[i]._enabled(false, false);
                     }
                  }
               }
            }
            return this;
         };
 
         p.removePause = function(position) {
            return this.removeCallback(TimelineLite._internals.pauseCallback, position);
         };
 
         p.tweenTo = function(position, vars) {
            vars = vars || {};
            var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false, lazy:false},
               Engine = (vars.repeat && _globals.TweenMax) || TweenLite,
               duration, p, t;
            for (p in vars) {
               copy[p] = vars[p];
            }
            copy.time = this._parseTimeOrLabel(position);
            duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
            t = new Engine(this, duration, copy);
            copy.onStart = function() {
               t.target.paused(true);
               if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
                  t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale ).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
               }
               if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
                  vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
               }
            };
            return t;
         };
 
         p.tweenFromTo = function(fromPosition, toPosition, vars) {
            vars = vars || {};
            fromPosition = this._parseTimeOrLabel(fromPosition);
            vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], callbackScope:this};
            vars.immediateRender = (vars.immediateRender !== false);
            var t = this.tweenTo(toPosition, vars);
            t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
            return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
         };
 
         p.render = function(time, suppressEvents, force) {
            if (this._gc) {
               this._enabled(true, false);
            }
            var self = this,
               prevTime = self._time,
               totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
               dur = self._duration,
               prevTotalTime = self._totalTime,
               prevStart = self._startTime,
               prevTimeScale = self._timeScale,
               prevRawPrevTime = self._rawPrevTime,
               prevPaused = self._paused,
               prevCycle = self._cycle,
               tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime, pauseTime;
            if (prevTime !== self._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
               time += self._time - prevTime;
            }
            if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
               if (!self._locked) {
                  self._totalTime = totalDur;
                  self._cycle = self._repeat;
               }
               if (!self._reversed) if (!self._hasPausedChild()) {
                  isComplete = true;
                  callback = "onComplete";
                  internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
                  if (self._duration === 0) if ((time <= 0 && time >= -_tinyNum) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && self._first) {
                     internalForce = true;
                     if (prevRawPrevTime > _tinyNum) {
                        callback = "onReverseComplete";
                     }
                  }
               }
               self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
               if (self._yoyo && (self._cycle & 1)) {
                  self._time = time = 0;
               } else {
                  self._time = dur;
                  time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
               }
 
            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
               if (!self._locked) {
                  self._totalTime = self._cycle = 0;
               }
               self._time = 0;
               if (time > -_tinyNum) {
                  time = 0;
               }
               if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !self._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
                  callback = "onReverseComplete";
                  isComplete = self._reversed;
               }
               if (time < 0) {
                  self._active = false;
                  if (self._timeline.autoRemoveChildren && self._reversed) {
                     internalForce = isComplete = true;
                     callback = "onReverseComplete";
                  } else if (prevRawPrevTime >= 0 && self._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
                     internalForce = true;
                  }
                  self._rawPrevTime = time;
               } else {
                  self._rawPrevTime = (dur || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                  if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
                     tween = self._first;
                     while (tween && tween._startTime === 0) {
                        if (!tween._duration) {
                           isComplete = false;
                        }
                        tween = tween._next;
                     }
                  }
                  time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
                  if (!self._initted) {
                     internalForce = true;
                  }
               }
 
            } else {
               if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
                  internalForce = true;
               }
               self._time = self._rawPrevTime = time;
               if (!self._locked) {
                  self._totalTime = time;
                  if (self._repeat !== 0) {
                     cycleDuration = dur + self._repeatDelay;
                     self._cycle = (self._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
                     if (self._cycle) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
                        self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
                     }
                     self._time = self._totalTime - (self._cycle * cycleDuration);
                     if (self._yoyo) if (self._cycle & 1) {
                        self._time = dur - self._time;
                     }
                     if (self._time > dur) {
                        self._time = dur;
                        time = dur + 0.0001; //to avoid occasional floating point rounding error
                     } else if (self._time < 0) {
                        self._time = time = 0;
                     } else {
                        time = self._time;
                     }
                  }
               }
            }
 
            if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
               time = self._time;
               if (time > prevTime || (self._repeat && prevCycle !== self._cycle)) {
                  tween = self._first;
                  while (tween && tween._startTime <= time && !pauseTween) {
                     if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
                        pauseTween = tween;
                     }
                     tween = tween._next;
                  }
               } else {
                  tween = self._last;
                  while (tween && tween._startTime >= time && !pauseTween) {
                     if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                        pauseTween = tween;
                     }
                     tween = tween._prev;
                  }
               }
               if (pauseTween) {
                  pauseTime = self._startTime + (self._reversed ? self._duration - pauseTween._startTime : pauseTween._startTime) / self._timeScale;
                  if (pauseTween._startTime < dur) {
                     self._time = self._rawPrevTime = time = pauseTween._startTime;
                     self._totalTime = time + (self._cycle * (self._totalDuration + self._repeatDelay));
                  }
               }
            }
 
            if (self._cycle !== prevCycle) if (!self._locked) {
               /*
               make sure children at the end/beginning of the timeline are rendered properly. If, for example,
               a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
               would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
               could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
               we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
               ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
               */
               var backwards = (self._yoyo && (prevCycle & 1) !== 0),
                  wrap = (backwards === (self._yoyo && (self._cycle & 1) !== 0)),
                  recTotalTime = self._totalTime,
                  recCycle = self._cycle,
                  recRawPrevTime = self._rawPrevTime,
                  recTime = self._time;
 
               self._totalTime = prevCycle * dur;
               if (self._cycle < prevCycle) {
                  backwards = !backwards;
               } else {
                  self._totalTime += dur;
               }
               self._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.
 
               self._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
               self._cycle = prevCycle;
               self._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
               prevTime = (backwards) ? 0 : dur;
               self.render(prevTime, suppressEvents, (dur === 0));
               if (!suppressEvents) if (!self._gc) {
                  if (self.vars.onRepeat) {
                     self._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
                     self._locked = false;
                     self._callback("onRepeat");
                  }
               }
               if (prevTime !== self._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
                  return;
               }
               if (wrap) {
                  self._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
                  self._locked = true;
                  prevTime = (backwards) ? dur + 0.0001 : -0.0001;
                  self.render(prevTime, true, false);
               }
               self._locked = false;
               if (self._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
                  return;
               }
               self._time = recTime;
               self._totalTime = recTotalTime;
               self._cycle = recCycle;
               self._rawPrevTime = recRawPrevTime;
            }
 
            if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
               if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
                  self._callback("onUpdate");
               }
               return;
            } else if (!self._initted) {
               self._initted = true;
            }
 
            if (!self._active) if (!self._paused && self._totalTime !== prevTotalTime && time > 0) {
               self._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
            }
 
            if (prevTotalTime === 0) if (self.vars.onStart) if (self._totalTime !== 0 || !self._totalDuration) if (!suppressEvents) {
               self._callback("onStart");
            }
 
            curTime = self._time;
            if (curTime >= prevTime) {
               tween = self._first;
               while (tween) {
                  next = tween._next; //record it here because the value could change after rendering...
                  if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                     break;
                  } else if (tween._active || (tween._startTime <= self._time && !tween._paused && !tween._gc)) {
                     if (pauseTween === tween) {
                        self.pause();
                        self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                     }
                     if (!tween._reversed) {
                        tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                     } else {
                        tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                     }
                  }
                  tween = next;
               }
            } else {
               tween = self._last;
               while (tween) {
                  next = tween._prev; //record it here because the value could change after rendering...
                  if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                     break;
                  } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                     if (pauseTween === tween) {
                        pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
                        while (pauseTween && pauseTween.endTime() > self._time) {
                           pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
                           pauseTween = pauseTween._prev;
                        }
                        pauseTween = null;
                        self.pause();
                        self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                     }
                     if (!tween._reversed) {
                        tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                     } else {
                        tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                     }
                  }
                  tween = next;
               }
            }
 
            if (self._onUpdate) if (!suppressEvents) {
               if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                  _lazyRender();
               }
               self._callback("onUpdate");
            }
            if (callback) if (!self._locked) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
               if (isComplete) {
                  if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
                     _lazyRender();
                  }
                  if (self._timeline.autoRemoveChildren) {
                     self._enabled(false, false);
                  }
                  self._active = false;
               }
               if (!suppressEvents && self.vars[callback]) {
                  self._callback(callback);
               }
            }
         };
 
         p.getActive = function(nested, tweens, timelines) {
            var a = [],
               all = this.getChildren(nested || (nested == null), tweens || (nested == null), !!timelines),
               cnt = 0,
               l = all.length,
               i, tween;
            for (i = 0; i < l; i++) {
               tween = all[i];
               if (tween.isActive()) {
                  a[cnt++] = tween;
               }
            }
            return a;
         };
 
 
         p.getLabelAfter = function(time) {
            if (!time) if (time !== 0) { //faster than isNan()
               time = this._time;
            }
            var labels = this.getLabelsArray(),
               l = labels.length,
               i;
            for (i = 0; i < l; i++) {
               if (labels[i].time > time) {
                  return labels[i].name;
               }
            }
            return null;
         };
 
         p.getLabelBefore = function(time) {
            if (time == null) {
               time = this._time;
            }
            var labels = this.getLabelsArray(),
               i = labels.length;
            while (--i > -1) {
               if (labels[i].time < time) {
                  return labels[i].name;
               }
            }
            return null;
         };
 
         p.getLabelsArray = function() {
            var a = [],
               cnt = 0,
               p;
            for (p in this._labels) {
               a[cnt++] = {time:this._labels[p], name:p};
            }
            a.sort(function(a,b) {
               return a.time - b.time;
            });
            return a;
         };
 
         p.invalidate = function() {
            this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
            return TimelineLite.prototype.invalidate.call(this);
         };
 
 
   //---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------
 
         p.progress = function(value, suppressEvents) {
            return (!arguments.length) ? (this._time / this.duration()) || 0 : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
         };
 
         p.totalProgress = function(value, suppressEvents) {
            return (!arguments.length) ? (this._totalTime / this.totalDuration()) || 0 : this.totalTime( this.totalDuration() * value, suppressEvents);
         };
 
         p.totalDuration = function(value) {
            if (!arguments.length) {
               if (this._dirty) {
                  TimelineLite.prototype.totalDuration.call(this); //just forces refresh
                  //Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
                  this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
               }
               return this._totalDuration;
            }
            return (this._repeat === -1 || !value) ? this : this.timeScale( this.totalDuration() / value );
         };
 
         p.time = function(value, suppressEvents) {
            if (!arguments.length) {
               return this._time;
            }
            if (this._dirty) {
               this.totalDuration();
            }
            var duration = this._duration,
               cycle = this._cycle,
               cycleDur = cycle * (duration + this._repeatDelay);
            if (value > duration) {
               value = duration;
            }
            return this.totalTime((this._yoyo && (cycle & 1)) ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
         };
 
         p.repeat = function(value) {
            if (!arguments.length) {
               return this._repeat;
            }
            this._repeat = value;
            return this._uncache(true);
         };
 
         p.repeatDelay = function(value) {
            if (!arguments.length) {
               return this._repeatDelay;
            }
            this._repeatDelay = value;
            return this._uncache(true);
         };
 
         p.yoyo = function(value) {
            if (!arguments.length) {
               return this._yoyo;
            }
            this._yoyo = value;
            return this;
         };
 
         p.currentLabel = function(value) {
            if (!arguments.length) {
               return this.getLabelBefore(this._time + _tinyNum);
            }
            return this.seek(value, true);
         };
         
         return TimelineMax;
         
      }, true);
 
   var TimelineMax = globals.TimelineMax;
 
   var stats_min = createCommonjsModule(function (module, exports) {
   !function(e,t){module.exports=t();}(commonjsGlobal,function(){var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e;}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length);},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now();},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576);}return e},update:function(){i=this.end();},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h));}}},c});
   });
 
   var GAME = {};
   GAME.Vector = Vector; //多维向量
 
   GAME.Vector2 = Vector2; //三维向量
 
   GAME.Vector3 = Vector3; //三维向量
 
   GAME.Matrix4 = Matrix4; //三维矩阵
 
   GAME.Clock = Clock; //进程时钟类
 
   GAME.Event = Event; //事件类
 
   GAME.Container = Container; //容器组件
 
   GAME.Sprite = Sprite; //图片精灵组件
   TweenLite.defaultEase = Linear.easeNone;
   GAME.TWEEN = TimelineMax; //配置运行实例
 
   var app = {};
   app.sys = System(); //系统基础信息
 
   app.canvas = Canvas; //获取Canvas函数
 
   app.context = app.canvas('main').getContext( 'webgl' );
   app.render =  WebglRender ;
   app.req = axios$1; //网络请求
 
   app.random = Random; //随机函数
 
   app.time = new Time(); //Date格式化工具
 
   app.image = new Image(new Image$1()); //图片控制
 
   app.audio = new Audio$1(new Audio$2()); //声音控制
 
   app.touch = new Touch(); //界面触摸
 
   app.collision = new Collision(); //碰撞比对
 
   app.clock = new Clock(); //全局时钟
 
   app.stage = new Director(); //全局容器
 
   app.dirty = new Dirty(600); //脏检查器
 
   app.run = function (options) {
     var width = options.width,
         height = options.height,
         interval = options.interval; //设置场景大小和视角
 
     var offset = GetMainCanvasOffset(app.context.canvas, app.sys.width, app.sys.height);
     if (!height) height = width / offset.ratio;
     app.stage.width = app.context.canvas.width = width;
     app.stage.height = app.context.canvas.height = height; //开始监听触摸并传入碰撞实例
 
     app.touch.size.set(width / offset.width, height / offset.height); //触摸控制
 
     app.touch.offset.set(offset.x, offset.y); //web触摸偏移
 
     TouchListen(!('ontouchstart' in window))(app.touch);
     app.touch.on('touchEnd', function (touch) {
       if (touch["long"] > 200 || touch.distance > 12) return;
       var vector = touch.clone().multiplyMatrix4(app.stage.matrix);
       app.collision.Recursive(app.stage, vector);
     }); //开始渲染流程
 
     {
       app.stage.matrix.setOrtho(0, width, height, 0, 0, 1);
       app.context.viewport(0, 0, width, height);
       var gl = app.context;
       gl.clearColor(0.0, 0.0, 0.0, 1.0);
       gl.enable(gl.BLEND);
       gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
       gl.shader = new WebGLShader(gl);
       gl.useProgram(gl.shader.program);
     }
 
     app.clock.on('tick', function () {
       app.dirty.tick();
       var renderArray = [];
       app.stage.pushTo(renderArray);
 
       for (var i = 0, len = renderArray.length; i < len; i++) {
         app.render(renderArray[i], app.context, app.dirty);
       }
 
       app.dirty.dispose(app.context);
     });
     app.clock.run(interval || 1000 / 60); //开始按60帧刷新
 
     app.run = function () {
       return console.log('无法多次初始化');
     }; //销毁app.run函数
 
   }; //后续调试设置
 
 
   document.body.style.background = 'green';
 
   {
     var stat = new stats_min();
     document.body.appendChild(stat.dom);
     app.clock.on('start', function () {
       return stat.begin();
     });
     app.clock.on('end', function () {
       return stat.end();
     });
     window.ENV = {
       dynamic: {"buildAt":1583974249940,"name":"","resource":{"local":{"load":{"bar":"png","cloud":"png","shadow":"png","shadowpx":"png"},"share":"png"},"remote":{"audio":{"bgm":"mp3","boom":"mp3","bullet":"mp3","home":"mp3"},"modal":{"add":"png","close":"png","title":"png"},"play":{"Common":"png","bg":"jpg","bullet":"png","enemy":"png","explosion1":"png","explosion10":"png","explosion11":"png","explosion12":"png","explosion13":"png","explosion14":"png","explosion15":"png","explosion16":"png","explosion17":"png","explosion18":"png","explosion19":"png","explosion2":"png","explosion3":"png","explosion4":"png","explosion5":"png","explosion6":"png","explosion7":"png","explosion8":"png","explosion9":"png","hero":"png"}}},"src":{"components":{"core":{"cache":"js","scroll":"js","sprite":"js","text":"js"},"global":"js","modal":"js","particle":"js","scrolling":"js"},"index":"js","scenes":{"home":"js","load":"js","play":"js"},"scripts":{"database":"js","json2component":"js","loader":"js","three":{"MTLLoader":"js","OBJLoader":"js","fileloader":"js","loader":"js","three":"js"},"wechat":{"banner":"js","gameclub":"js","shared":"js"}}}},
       input: {"target":"web","mode":"development","dev":"dev","webgl":"webgl"},
       project: {"name":"","qiniu":{"Url":"","Key":"","Secret":"","Bucket":""},"wxgame":{"game.json":{"deviceOrientation":"portrait","openDataContext":"open","navigateToMiniProgramAppIdList":[]},"project.config.json":{"compileType":"game","setting":{"es6":true,"postcss":true,"minified":true,"urlCheck":false,"uglifyFileName":true},"appid":""}},"oppo":{"manifest":{"package":"com.companty.game.demo","name":"","icon":"","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1}},"vivo":{"manifest":{"package":"com.companty.game.demo","name":"","icon":"/image/logo.png","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1000","deviceOrientation":"portrait","type":"game","networkTimeout":{"request":5000,"connectSocket":5000,"uploadFile":5000,"downloadFile":5000},"config":{"logLevel":"debug"},"display":{"statusbar":"false","titleBar":""}}}}
     };
     window.GAME = GAME;
     window.app = app;
   }
 
   app.sprite = function (texture) {
     var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
     if (texture) options.texture = texture;
     if (typeof options.texture == 'string') options.texture = app.image.get(options.texture);
     return new Sprite(options);
   };
 
   var ScrollContainer = /*#__PURE__*/function (_Core$Container) {
     inherits(ScrollContainer, _Core$Container);
 
     function ScrollContainer() {
       var _this;
 
       var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 
       classCallCheck(this, ScrollContainer);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(ScrollContainer).call(this, options));
       _this.width = options.width || 300;
       _this.height = options.height || 150;
       _this.realWidth = options.realWidth || 300;
       _this.realHeight = options.realHeight || 150;
       _this.maxWidth = Math.min(_this.width - _this.realWidth, 0);
       _this.maxHeight = Math.min(_this.height - _this.realHeight, 0);
       return _this;
     }
 
     createClass(ScrollContainer, [{
       key: "touchMoveX",
       value: function touchMoveX(mx) {
         var X = this.x;
         this.x = Math.min(Math.max(this.x + mx, this.maxWidth), 0);
         return this.x != X;
       }
     }, {
       key: "touchMoveY",
       value: function touchMoveY(my) {
         var Y = this.y;
         this.y = Math.min(Math.max(this.y + my, this.maxHeight), 0);
         return this.y != Y;
       }
     }]);
 
     return ScrollContainer;
   }(Container);
 
   var ScrollElement = /*#__PURE__*/function (_Core$Container2) {
     inherits(ScrollElement, _Core$Container2);
 
     function ScrollElement(container) {
       var _this2;
 
       classCallCheck(this, ScrollElement);
 
       _this2 = possibleConstructorReturn(this, getPrototypeOf(ScrollElement).call(this));
       _this2.container = container;
 
       _this2.on('create', function () {
         app.touch.on('touchMove', this.touchMove, this);
       });
 
       _this2.on('destroy', function () {
         app.touch.off('touchMove', this.touchMove, this);
       });
 
       _this2.invertMatrix = new Matrix4();
       _this2.invertMatrixId = 0;
 
       _this2.on('draw', function (gl, dirty) {
         var _this$getWorldVector = this.getWorldVector(new Vector3()),
             x = _this$getWorldVector.x,
             y = _this$getWorldVector.y;
 
         {
           var vx = (x + 1) * app.stage.width / 2;
           var vy = (y + 1) * app.stage.height / 2 - this.container.height;
           gl.enable(gl.SCISSOR_TEST);
           gl.scissor(vx, vy, this.container.width, this.container.height); // gl.clear(gl.COLOR_BUFFER_BIT);
         }
 
         var renderArray = [];
         this.container.pushTo(renderArray);
 
         for (var i = 0, len = renderArray.length; i < len; i++) {
           app.render(renderArray[i], gl, app.dirty);
         }
 
          gl.disable(gl.SCISSOR_TEST) ;
       });
 
       _this2.on('check', function (array) {
         array.push(this);
       });
 
       return _this2;
     }
 
     createClass(ScrollElement, [{
       key: "updateTransformInvert",
       value: function updateTransformInvert() {
         if (this.invertMatrixId == this.transformId) return; // this.updateTransform(false);
 
         this.invertMatrix.invert(this.matrix);
         this.invertMatrixId = this.transformId;
       }
     }, {
       key: "checkPoint",
       value: function checkPoint(vector) {
         this.updateTransformInvert();
         vector.multiplyMatrix4(this.invertMatrix);
         return vector.x >= 0 && vector.y >= 0 && vector.x <= this.container.width && vector.y <= this.container.height;
       }
     }, {
       key: "touchTap",
       value: function touchTap(touch) {
         var vector = touch.add(this.container.x, -this.container.y).multiplyMatrix4(this.container.matrix);
         app.collision.Recursive(this.container, vector);
       }
     }, {
       key: "touchMove",
       value: function touchMove(touch) {
         var vector = touch.clone();
         if (!this.checkPoint(vector.multiplyMatrix4(app.stage.matrix))) return;
         this.container.touchMoveX(touch.tick.x);
         this.container.touchMoveY(touch.tick.y);
       }
     }]);
 
     return ScrollElement;
   }(Container);
 
   app.scroll = function (container, scrollOptions) {
     var scrollContainer = new ScrollContainer(scrollOptions || {
       height: 300,
       realHeight: 600
     });
     scrollContainer.add(container);
     scrollContainer.parent = new ScrollElement(scrollContainer);
     return scrollContainer.parent;
   };
 
   var RichAttrs = /*#__PURE__*/function () {
     function RichAttrs() {
       var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 
       classCallCheck(this, RichAttrs);
 
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
     } //获取临时属性集
 
 
     createClass(RichAttrs, [{
       key: "getAttrs",
       value: function getAttrs() {
         var handle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
         handle.fillStyle = this.fillStyle;
         handle.strokeStyle = this.strokeStyle;
         handle.lineWidth = this.lineWidth;
         handle.family = this.family;
         handle.size = this.size;
         handle.weight = this.weight;
         return handle;
       } //获取特殊标记
 
     }, {
       key: "getTags",
       value: function getTags(values, icons) {
         var tags = {}; //文本内特殊标签
 
         values.replace(/\<(fillStyle|strokeStyle|lineWidth|family|weight|size|i)\=(\S+?)\>/g, function (tag, action, arg, index) {
           if (action == 'i') {
             if (!icons[arg]) return tag;
             tags[index] = {
               action: action,
               arg: icons[arg],
               length: tag.length - 1
             };
           } else {
             tags[index] = {
               action: action,
               arg: arg == '@' ? family[action] : arg,
               length: tag.length - 1
             };
           }
 
           return tag;
         });
         return tags;
       } //从临时属性集获取字体样式
 
     }, {
       key: "getFamily",
       value: function getFamily(handle) {
         return handle.size + 'px ' + handle.family + (handle.weight ? ' bold' : '');
       } //获取基础结构集
 
     }, {
       key: "getStructure",
       value: function getStructure(values, context, tags, handle) {
         context.font = this.getFamily(handle);
         var structure = {
           width: this.wrapWidth,
           height: 0,
           contents: [{
             width: 0,
             height: this.lineHeight,
             contents: []
           }]
         };
 
         for (var i = 0, len = values.length; i < len; i++) {
           var v = values[i];
 
           if (tags[i]) {
             var tag = tags[i];
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
             var width = context.measureText(v).width;
             this.checkSize(structure, width, handle.size);
             structure.contents[0].contents.push({
               value: v,
               width: width,
               height: handle.size
             });
           }
         }
 
         structure.height += structure.contents[0].height;
         if (structure.contents[0].width > structure.width) structure.width = structure.contents[0].width;
         return structure;
       } //检查结构集的当前大小,进行换行
 
     }, {
       key: "checkSize",
       value: function checkSize(structure, width, height) {
         var lines = structure.contents;
         if (this.wrapWidth >= 0 && lines[0].width + width > this.wrapWidth) this.addLine(structure);
         if (this.autoLineHeight && height > lines[0].height) lines[0].height = height;
         lines[0].width += width;
       } //为结构集换行
 
     }, {
       key: "addLine",
       value: function addLine(structure) {
         var lines = structure.contents;
         structure.height += lines[0].height;
         if (lines[0].width > structure.width) structure.width = lines[0].width;
         structure.contents.unshift({
           width: 0,
           height: this.lineHeight,
           contents: []
         });
       } //重绘内容
 
     }, {
       key: "compute",
       value: function compute(context, values) {
         if (!values) {
           context.width = context.height = 1;
           this.needUpdate = false;
           return;
         }
 
         var tags = this.getTags(values, this.icons);
         var handle = this.getAttrs();
         var structure = this.getStructure(values, context, tags, handle);
         this.getAttrs(handle);
         context.canvas.width = structure.width;
         context.canvas.height = structure.height;
         context.font = this.getFamily(handle);
         context.fillStyle = handle.fillStyle;
         context.strokeStyle = handle.strokeStyle;
         context.lineWidth = handle.lineWidth;
         context.textAlign = 'left';
         context.textBaseline = 'top';
         var totalWidth = structure.width;
         var offsetTop = 0;
 
         for (var i = structure.contents.length - 1; i >= 0; i--) {
           var _structure$contents$i = structure.contents[i],
               width = _structure$contents$i.width,
               height = _structure$contents$i.height,
               contents = _structure$contents$i.contents;
           var offsetLeft = (totalWidth - width) * 0.5; //handle.align
 
           for (var j = 0; j < contents.length; j++) {
             var element = contents[j];
 
             if (element.value) {
               context.fillText(element.value, offsetLeft, offsetTop + (height - element.height) * 0.5); //handle.baseline
 
               offsetLeft += element.width;
             } else if (element.action == 'i') {
               var image = element.arg;
               var dy = offsetTop + (height - image.height) * 0.5;
               context.drawImage(image, offsetLeft, dy, image.width, image.height);
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
     }]);
 
     return RichAttrs;
   }();
 
   var RichText = /*#__PURE__*/function (_Core$Sprite) {
     inherits(RichText, _Core$Sprite);
 
     function RichText() {
       var _this;
 
       var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 
       classCallCheck(this, RichText);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(RichText).call(this, options));
       if (!_this.texture || !_this.texture.getContext) throw 'canvas纹理不存在';
       if (!options.text) throw '富文本计算器不存在';
       _this.text = options.text;
       _this.needUpdateValue = false;
 
       _this.on('draw', _this.refresh);
 
       return _this;
     }
 
     createClass(RichText, [{
       key: "refresh",
       value: function refresh() {
         if (!this.needUpdateValue && !this.text.needUpdate) return;
         if (!this.texture.context) this.texture.context = this.texture.getContext('2d');
         this.text.compute(this.texture.context, this.value);
         this.text.needUpdate = false;
         this.needUpdateValue = false;
         this.texture.needUpdate = true;
         this.width = this.texture.width;
         this.height = this.texture.height;
       }
     }, {
       key: "value",
       get: function get() {
         return this._value;
       },
       set: function set(v) {
         var newValue = '' + v;
         if (newValue == this._value) return;
         this._value = newValue;
         this.needUpdateValue = true;
       }
     }]);
 
     return RichText;
   }(Sprite);
 
   app.text = function (font) {
     var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
     options.texture = app.canvas();
     options.text = new RichAttrs(font);
     var text = new RichText(options);
     text.value = font.value || '';
     if (font.value) text.refresh();
     return text;
   };
 
   var Load = /*#__PURE__*/function (_GAME$Container) {
     inherits(Load, _GAME$Container);
 
     function Load(ResLoader) {
       var _temp, _this;
 
       classCallCheck(this, Load);
 
       (_temp = _this = possibleConstructorReturn(this, getPrototypeOf(Load).call(this)), defineProperty(assertThisInitialized(_this), "Bar", app.sprite('load/bar').setPosition(0, 500)), _temp).add(app.sprite('load/cloud'), _this.Bar, _this.Desc);
 
       _this.on('loading', function (progress) {
         console.log(progress.name, progress.progress);
         _this.Bar.Progress = progress.progress;
       });
 
       ResLoader.extend(assertThisInitialized(_this)); // let Animation = new GAME.TWEEN({ repeat: -1 })
       // 	.to(this.Desc, 3, { value: '使用高级皮肤更容易得高分哦！！！' })
       // 	.to(this.Desc, 3, { value: '抽奖可以获得高级皮肤^_^' });
       // this.once('destroy', () => Animation.kill());
 
       return _this;
     } // Desc = new GAME.Text({ color: '#A398C0' }).setPosition(0,600);
     // update(Context) {
     // Context.fillStyle = 'rgba(101, 83, 150,1)';
     // Context.fillRect(0, 0, GAME.Pos.width, GAME.Pos.height);
     // let linearGradient2 =
     // 	this.linearGradient2 || (this.linearGradient2 = Context.createLinearGradient(GAME.Pos.center, 0, GAME.Pos.center, GAME.Pos.middle));
     // linearGradient2.addColorStop(0, 'rgba(128, 162, 218, 1)');
     // linearGradient2.addColorStop(1, 'rgba(101, 83, 150, 1)');
     // Context.fillStyle = linearGradient2;
     // Context.fillRect(0, 0, GAME.Pos.width, GAME.Pos.middle);
     // }
 
 
     return Load;
   }(GAME.Container);
 
   var Enemy = /*#__PURE__*/function (_GAME$Sprite) {
     inherits(Enemy, _GAME$Sprite);
 
     function Enemy() {
       var _this;
 
       classCallCheck(this, Enemy);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Enemy).call(this, {
         texture: app.image.get('play/enemy')
       }));
 
       defineProperty(assertThisInitialized(_this), "Animation", new GAME.TWEEN({
         paused: true
       }).to(assertThisInitialized(_this), 3, {
         y: app.stage.height
       }).set(assertThisInitialized(_this), {
         visible: false
       }));
 
       _this.on('destroy', function () {
         return _this.Animation.kill();
       });
 
       return _this;
     }
 
     createClass(Enemy, [{
       key: "Reset",
       value: function Reset() {
         this.x = app.random(app.stage.width);
         this.y = 0;
         this.Animation.play(0);
         this.visible = true;
         return this;
       }
     }]);
 
     return Enemy;
   }(GAME.Sprite);
 
   var Enemys = /*#__PURE__*/function (_GAME$Container) {
     inherits(Enemys, _GAME$Container);
 
     function Enemys() {
       var _getPrototypeOf2;
 
       var _this2;
 
       classCallCheck(this, Enemys);
 
       for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
       }
 
       _this2 = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Enemys)).call.apply(_getPrototypeOf2, [this].concat(args)));
 
       defineProperty(assertThisInitialized(_this2), "_Slow", true);
 
       defineProperty(assertThisInitialized(_this2), "Total", 1);
 
       return _this2;
     }
 
     createClass(Enemys, [{
       key: "Collision",
       value: function Collision(position) {
         var enemyVisibleLength = 0;
 
         for (var i = 0; i < this.children.length; i++) {
           var enemy = this.children[i];
           if (!enemy.visible) continue;
           enemyVisibleLength++;
           if (enemy.y >= app.stage.height) enemy.Reset();
           enemy.updateTransform();
           if (!app.collision.InComponent(enemy, position)) continue;
           return app.stage.go('Home');
         }
 
         if (enemyVisibleLength < this.Total) this.Send();
       }
     }, {
       key: "Send",
       value: function Send() {
         var enemy = this.children.find(function (e) {
           return !e.visible;
         });
         if (!enemy) this.add(enemy = new Enemy());
         enemy.Animation.timeScale(this.Slow ? 0.1 : 1);
         enemy.Reset();
       }
     }, {
       key: "Slow",
       set: function set(s) {
         if (s) {
           this.children.forEach(function (e) {
             return e.Animation.timeScale(0.1);
           });
         } else {
           this.children.forEach(function (e) {
             return e.Animation.timeScale(1);
           });
         }
 
         this._Slow = s;
       },
       get: function get() {
         return this._Slow;
       }
     }]);
 
     return Enemys;
   }(GAME.Container);
 
   var Bullet = /*#__PURE__*/function (_GAME$Sprite2) {
     inherits(Bullet, _GAME$Sprite2);
 
     function Bullet() {
       var _this3;
 
       classCallCheck(this, Bullet);
 
       _this3 = possibleConstructorReturn(this, getPrototypeOf(Bullet).call(this, {
         scaleX: 0.3,
         scaleY: 0.3,
         texture: app.image.get('play/bullet')
       }));
 
       _this3.on('check', function () {
         this.y -= this.parent.Slow ? 1 : 10;
         if (this.y < 0) this.visible = false;
       });
 
       return _this3;
     }
 
     createClass(Bullet, [{
       key: "Collision",
       value: function Collision(enemys) {
         if (!this.visible) return;
         var vector = this.getWorldVector(new GAME.Vector2());
 
         for (var i = 0; i < enemys.length; i++) {
           if (!enemys[i].visible) continue;
           if (!app.collision.InComponent(enemys[i], vector)) continue;
           enemys[i].visible = false;
           this.visible = false;
           app.audio.get('boom').play();
           return app.stage.children[0].emit('Boom', this.x, this.y);
         }
       }
     }]);
 
     return Bullet;
   }(GAME.Sprite);
 
   var Bullets = /*#__PURE__*/function (_GAME$Container2) {
     inherits(Bullets, _GAME$Container2);
 
     function Bullets() {
       var _getPrototypeOf3;
 
       var _this4;
 
       classCallCheck(this, Bullets);
 
       for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
         args[_key2] = arguments[_key2];
       }
 
       _this4 = possibleConstructorReturn(this, (_getPrototypeOf3 = getPrototypeOf(Bullets)).call.apply(_getPrototypeOf3, [this].concat(args)));
 
       defineProperty(assertThisInitialized(_this4), "Slow", true);
 
       return _this4;
     }
 
     createClass(Bullets, [{
       key: "Send",
       value: function Send(x, y) {
         var bullet = this.children.find(function (b) {
           return !b.visible;
         });
         if (!bullet) this.add(bullet = new Bullet());
         bullet.x = x;
         bullet.y = y - 35;
         bullet.visible = true;
         bullet.updateTransform();
         app.audio.get('bullet').play();
       }
     }, {
       key: "Collision",
       value: function Collision(enemys) {
         for (var i = 0; i < this.children.length; i++) {
           this.children[i].Collision(enemys);
         }
       }
     }]);
 
     return Bullets;
   }(GAME.Container);
 
   var Background = /*#__PURE__*/function (_GAME$Container3) {
     inherits(Background, _GAME$Container3);
 
     function Background() {
       var _this5;
 
       classCallCheck(this, Background);
 
       _this5 = possibleConstructorReturn(this, getPrototypeOf(Background).call(this));
 
       defineProperty(assertThisInitialized(_this5), "Background1", app.sprite('play/bg', {
         width: app.stage.width,
         height: app.stage.height,
         x: app.stage.center
       }));
 
       defineProperty(assertThisInitialized(_this5), "Background2", app.sprite('play/bg', {
         width: app.stage.width,
         height: app.stage.height,
         x: app.stage.center,
         y: app.stage.height
       }));
 
       _this5.add(_this5.Background1, _this5.Background2);
 
       _this5.on('check', function () {
         this.y++;
         if (this.y >= app.stage.middle) this.y = -app.stage.middle;
       });
 
       return _this5;
     }
 
     return Background;
   }(GAME.Container);
 
   var _Boom = /*#__PURE__*/function (_GAME$Sprite3) {
     inherits(Boom, _GAME$Sprite3);
 
     function Boom() {
       var _this6;
 
       classCallCheck(this, Boom);
 
       _this6 = possibleConstructorReturn(this, getPrototypeOf(Boom).call(this, {
         scaleX: 5,
         scaleY: 5
       }));
 
       defineProperty(assertThisInitialized(_this6), "State", 20);
 
       defineProperty(assertThisInitialized(_this6), "Textures", Array.apply(null, {
         length: 19
       }).map(function (_, i) {
         return 'play/explosion' + (i + 1);
       }));
 
       _this6.off('check');
 
       _this6.on('check', function (array) {
         if (this.State >= this.Textures.length) return;
         this.texture = app.image.get(this.Textures[this.State]);
         array.push(this);
         this.State++;
       });
 
       return _this6;
     }
 
     return Boom;
   }(GAME.Sprite);
 
   var Booms = /*#__PURE__*/function (_GAME$Container4) {
     inherits(Booms, _GAME$Container4);
 
     function Booms() {
       classCallCheck(this, Booms);
 
       return possibleConstructorReturn(this, getPrototypeOf(Booms).apply(this, arguments));
     }
 
     createClass(Booms, [{
       key: "Boom",
       value: function Boom(x, y) {
         var boom = this.children.find(function (b) {
           return b.State >= b.Textures.length;
         });
         if (!boom) this.add(boom = new _Boom());
         boom.x = x;
         boom.y = y;
         boom.State = 0;
       }
     }]);
 
     return Booms;
   }(GAME.Container);
 
   var Play = /*#__PURE__*/function (_GAME$Container5) {
     inherits(Play, _GAME$Container5);
 
     function Play() {
       var _temp, _this7;
 
       classCallCheck(this, Play);
 
       (_temp = _this7 = possibleConstructorReturn(this, getPrototypeOf(Play).call(this)), defineProperty(assertThisInitialized(_this7), "Background", new Background()), defineProperty(assertThisInitialized(_this7), "Player", app.sprite('play/hero', {
         x: app.stage.center,
         y: app.stage.height - 200
       })), defineProperty(assertThisInitialized(_this7), "Enemys", new Enemys()), defineProperty(assertThisInitialized(_this7), "Bullets", new Bullets()), defineProperty(assertThisInitialized(_this7), "Booms", new Booms()), defineProperty(assertThisInitialized(_this7), "Animation", new GAME.TWEEN({
         repeat: -1
       }).addCallback(function () {
         return _this7.Bullets.Send(_this7.Player.x, _this7.Player.y);
       }, 0.2)), defineProperty(assertThisInitialized(_this7), "Level", new GAME.TWEEN({
         repeat: -1
       }).addCallback(function () {
         return _this7.Enemys.Total++;
       }, 30)), _temp).add(_this7.Background, _this7.Player, _this7.Enemys, _this7.Bullets, _this7.Booms);
       new GAME.Container().setPosition(-_this7.Player.width / 3, -_this7.Player.height / 3).put(_this7.Player);
       new GAME.Container().setPosition(_this7.Player.width / 3, -_this7.Player.height / 3).put(_this7.Player);
 
       _this7.Animation.timeScale(0.1);
 
       _this7.Level.timeScale(0.1);
 
       _this7.Bullets.Slow = true;
       _this7.Enemys.Slow = true;
 
       _this7.on('create', function () {
         app.audio.get('bgm').play();
         app.audio.get('bgm').loop();
         app.touch.on('touchStart', this.TouchStart, this);
         app.touch.on('touchMove', this.TouchMove, this);
         app.touch.on('touchEnd', this.TouchEnd, this);
       });
 
       _this7.on('destroy', function () {
         app.audio.get('bgm').stop();
         app.touch.off('touchStart', this.TouchStart, this);
         app.touch.off('touchMove', this.TouchMove, this);
         app.touch.off('touchEnd', this.TouchEnd, this);
         this.Animation.kill();
         this.Level.kill();
       });
 
       _this7.on('Boom', _this7.Booms.Boom, _this7.Booms);
 
       _this7.on('check', function () {
         this.Enemys.Collision(this.Player.getWorldVector(new GAME.Vector2(-60, -40)));
         this.Enemys.Collision(this.Player.getWorldVector(new GAME.Vector2(60, -40)));
         this.Bullets.Collision(this.Enemys.children);
       });
 
       return _this7;
     }
 
     createClass(Play, [{
       key: "TouchStart",
       value: function TouchStart(touch) {
         this.Animation.timeScale(1);
         this.Level.timeScale(1);
         this.Bullets.Slow = false;
         this.Enemys.Slow = false;
 
         if (app.collision.InComponent(this.Player, app.stage.getWorldVector(touch, true))) {
           this.Player.Moving = true;
         }
       }
     }, {
       key: "TouchMove",
       value: function TouchMove(touch) {
         if (!this.Player.Moving) return;
         this.Player.x = touch.x;
         this.Player.y = touch.y;
       }
     }, {
       key: "TouchEnd",
       value: function TouchEnd(touch) {
         this.Animation.timeScale(0.1);
         this.Level.timeScale(0.1);
         this.Bullets.Slow = true;
         this.Enemys.Slow = true;
         this.Player.Moving = false;
       }
     }]);
 
     return Play;
   }(GAME.Container);
 
   var Home = /*#__PURE__*/function (_GAME$Container) {
     inherits(Home, _GAME$Container);
 
     createClass(Home, [{
       key: "create",
       // .setPosition(-200, -100);
       value: function create() {
         app.audio.get('home').play();
       }
     }, {
       key: "destroy",
       value: function destroy() {
         app.audio.get('home').stop();
       }
     }]);
 
     function Home() {
       var _this;
 
       classCallCheck(this, Home);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Home).call(this)); // new GAME.Text({
       // 	font: { size: 36, fillStyle: '#ff0000' },
       // 	icons: { s: GAME.Image.get('load/shadow') },
       // 	value: '开始游戏<i=s>\n富文<size=16>本<i=s>测<fillStyle=#FFFFFF>试',
       // }).put(this.Play);
 
       defineProperty(assertThisInitialized(_this), "Background", app.sprite('play/bg').setPosition(app.stage.width / 2, app.stage.height / 2).setSize(app.stage.width, app.stage.height));
 
       defineProperty(assertThisInitialized(_this), "Play", app.sprite('play/Common').setClip(app.image.get('play/Common').sprite.button).setSize(200, 100).setPosition(-200, -100));
 
       defineProperty(assertThisInitialized(_this), "Rank", app.sprite('play/Common').setClip(app.image.get('play/Common').sprite.button).setSize(200, 100).setPosition(200, -100));
 
       defineProperty(assertThisInitialized(_this), "Share", app.sprite('play/Common').setClip(app.image.get('play/Common').sprite.button).setSize(200, 100).setPosition(-200, 100));
 
       defineProperty(assertThisInitialized(_this), "Audio", app.sprite('play/Common').setClip(app.image.get('play/Common').sprite.button).setSize(200, 100).setPosition(200, 100));
 
       app.text({
         fillStyle: '#ff0000',
         icons: {
           s: app.image.get('load/shadow')
         },
         value: '开始游戏<i=s>\n富文<size=16>本<i=s>测<fillStyle=#FFFFFF>试'
       }).put(_this.Play);
 
       _this.Play.touchTap = function () {
         console.log('Play');
         app.stage.go(new Play());
       }; // new GAME.LineText({ font: { size: 26, fillStyle: '#00ff00' }, value: '排行榜' }).put(this.Rank);
 
 
       app.text({
         size: 20,
         fillStyle: '#00ff00',
         value: '排行榜'
       }).put(_this.Rank);
 
       _this.Rank.touchTap = function () {
         console.log('Rank'); // GAME.Director.addChild(new Board());
       };
 
       app.text({
         size: 36,
         fillStyle: '#00ff00',
         value: '分享'
       }).put(_this.Share);
 
       _this.Share.touchTap = function () {
         console.log('Share'); // GAME.Reward('Home');
       };
 
       var audio = app.text({
         size: 26,
         value: app.audio.mute ? '声音:关' : '声音:开'
       }).put(_this.Audio);
 
       _this.Audio.touchTap = function () {
         console.log('Audio');
         app.audio.mute = !app.audio.mute;
         audio.value = app.audio.mute ? '声音:关' : '声音:开';
         return 'refresh';
       };
 
       _this.add(_this.Background);
 
       _this.Background.add(_this.Play, _this.Rank, _this.Share, _this.Audio);
 
       var scrollContainer = app.sprite('play/Common').setClip(app.image.get('play/Common').sprite.button).setSize(200, 100).setPosition(0, 300);
 
       scrollContainer.touchTap = function (touch) {
         console.log('滚动按钮');
       };
 
       var scroll = app.scroll(scrollContainer).setPosition(100, 100);
       var test = new GAME.Container({
         x: 100,
         y: 100
       });
       test.add(scroll);
 
       _this.add(test);
 
       _this.touchTap = function () {
         test.x += 100;
       }; // return new GAME.Component.Scroll(this, { clip: { x: 0, y: 0, width: GAME.Pos.width, height: GAME.Pos.height } }).refresh(
       // 	GAME.Pos.width + 200,
       // 	GAME.Pos.height + 400,
       // );
 
 
       return _this;
     }
 
     return Home;
   }(GAME.Container);
 
   var _DelStorage =  function (key) {
     window.localStorage.removeItem(key);
     return Promise.resolve();
   };
 
   var _GetStorage =  function (key) {
     return Promise.resolve({
       data: window.localStorage.getItem(key)
     });
   };
 
   var _SetStorage =  function (_ref) {
     var key = _ref.key,
         data = _ref.data;
     window.localStorage.setItem(key, data);
     return Promise.resolve();
   };
 
   var _Table3 = /*#__PURE__*/function () {
     function Table() {
       var database = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
       var table = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
 
       classCallCheck(this, Table);
 
       defineProperty(this, "Name", 'default_default');
 
       defineProperty(this, "Data", null);
 
       this.Name = database + '_' + table;
     }
 
     createClass(Table, [{
       key: "Get",
       value: function Get(key) {
         if (key === undefined) return this.Data;
         return this.Data ? this.Data[key] : undefined;
       }
     }, {
       key: "Set",
       value: function Set(Key, Data) {
         if (this.Data) this.Data[Key] = Data;
         return this;
       }
     }, {
       key: "Add",
       value: function Add(Key) {
         var Data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
         this.Data[Key] += Data;
         return this;
       }
     }, {
       key: "GetString",
       value: function GetString() {
         return JSON.stringify(this.Data);
       }
     }, {
       key: "SetString",
       value: function SetString(Data) {
         try {
           this.Data = JSON.parse(Data);
         } catch (e) {
           this.Data = null;
         }
 
         return this;
       }
     }, {
       key: "Execute",
       value: function Execute(Callback) {
         var Res = Callback(this.Data, this);
         if (Res) this.Data = Res;
         return this;
       }
     }, {
       key: "SetStorage",
       value: function SetStorage() {
         var _this = this;
 
         return _SetStorage({
           key: this.Name,
           data: this.GetString()
         }).then(function () {
           return _this.Data;
         });
       }
     }, {
       key: "GetStorage",
       value: function GetStorage(merge) {
         var _this2 = this;
 
         return _GetStorage(this.Name, 'key')["catch"](function (e) {
           return e;
         }).then(function (res) {
           return _this2.SetString(res.data, merge);
         });
       }
     }, {
       key: "DelStorage",
       value: function DelStorage() {
         var _this3 = this;
 
         return _DelStorage(this.Name, 'key').then(function () {
           return _this3.SetString();
         });
       }
     }]);
 
     return Table;
   }();
   var ArrTable = /*#__PURE__*/function (_Table) {
     inherits(ArrTable, _Table);
 
     function ArrTable(database) {
       var _this4;
 
       var table = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
       var oldData = arguments.length > 2 ? arguments[2] : undefined;
 
       classCallCheck(this, ArrTable);
 
       _this4 = possibleConstructorReturn(this, getPrototypeOf(ArrTable).call(this, database, table));
 
       defineProperty(assertThisInitialized(_this4), "Data", []);
 
       if (oldData) {
         var Data = oldData instanceof _Table3 ? oldData.Data : oldData;
         if (Data) _this4.Merge(Data);
       }
 
       return _this4;
     }
 
     createClass(ArrTable, [{
       key: "Merge",
       value: function Merge(Data) {
         this.Data = this.Data.concat(Data);
         return this;
       }
     }, {
       key: "MergeTo",
       value: function MergeTo(Data) {
         return Data.concat(this.Data);
       }
     }, {
       key: "SetString",
       value: function SetString(Data) {
         var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
         var oldData = this.Data;
 
         get(getPrototypeOf(ArrTable.prototype), "SetString", this).call(this, Data);
 
         if (!this.Data instanceof Array) this.Data = [];
         if (merge) this.Data = oldData.concat(this.Data);
         return this;
       }
     }, {
       key: "Insert",
       value: function Insert(value) {
         var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
 
         if (index == -1) {
           this.Data.push(value);
         } else if (index == 0) {
           this.Data.unshift(value);
         } else {
           this.Data.splice(index, 0, value);
         }
 
         return this;
       }
     }, {
       key: "length",
       get: function get() {
         return this.Data.length;
       }
     }, {
       key: "keys",
       get: function get() {
         return Object.keys(this.Data);
       }
     }]);
 
     return ArrTable;
   }(_Table3);
   var MapTable = /*#__PURE__*/function (_Table2) {
     inherits(MapTable, _Table2);
 
     function MapTable(database) {
       var _this5;
 
       var table = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
       var oldData = arguments.length > 2 ? arguments[2] : undefined;
 
       classCallCheck(this, MapTable);
 
       _this5 = possibleConstructorReturn(this, getPrototypeOf(MapTable).call(this, database, table));
 
       defineProperty(assertThisInitialized(_this5), "Data", {});
 
       if (oldData) {
         var Data = oldData instanceof _Table3 ? oldData.Data : oldData;
         if (Data) _this5.Merge(Data);
       }
 
       return _this5;
     }
 
     createClass(MapTable, [{
       key: "MergeTo",
       value: function MergeTo(Data) {
         return Object.assign(Data, this.Data);
       }
     }, {
       key: "Merge",
       value: function Merge(Data) {
         this.Data = Object.assign(this.Data || {}, Data || {});
         return this;
       }
     }, {
       key: "SetString",
       value: function SetString(Data) {
         var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
         var oldData = this.Data;
 
         get(getPrototypeOf(MapTable.prototype), "SetString", this).call(this, Data);
 
         if (_typeof_1(this.Data) != 'object') this.Data = {};
         if (merge) this.Data = Object.assign(oldData, this.Data);
         return this;
       }
     }]);
 
     return MapTable;
   }(_Table3);
 
   var Database = /*#__PURE__*/function () {
     function Database() {
       var database = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
 
       classCallCheck(this, Database);
 
       defineProperty(this, "Name", 'default');
 
       defineProperty(this, "Data", {});
 
       this.Name = database;
     }
 
     createClass(Database, [{
       key: "Map",
       value: function Map() {
         var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
         if (this.Data[key] instanceof MapTable) return this.Data[key];
         this.Data[key] = new MapTable(this.Name, key, this.Data[key]);
         return this.Data[key];
       }
     }, {
       key: "Arr",
       value: function Arr() {
         var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
         if (this.Data[key] instanceof ArrTable) return this.Data[key];
         this.Data[key] = new ArrTable(this.Name, key, this.Data[key]);
         return this.Data[key];
       }
     }, {
       key: "Table",
       value: function Table() {
         var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
         if (!this.Data[key]) this.Data[key] = new _Table3(this.Name, key);
         return this.Data[key];
       }
     }, {
       key: "MergeMap",
       value: function MergeMap(key, value) {
         return this.Map(key).Merge(value);
       }
     }, {
       key: "MergeArr",
       value: function MergeArr(key, value) {
         return this.Arr(key).Merge(value);
       }
     }, {
       key: "GetString",
       value: function GetString() {
         var Keys = arguments.length ? arguments : Object.keys(this.Data);
         var Data = {};
 
         for (var i = 0; i < Keys.length; i++) {
           Data[Keys[i]] = this.Data[Keys[i]].GetString();
         }
 
         return JSON.stringify(Data);
       }
     }, {
       key: "SetString",
       value: function SetString(Data) {
         var _this6 = this;
 
         try {
           Data = JSON.parse(Data);
         } catch (e) {
           return this;
         }
 
         Object.keys(Data).forEach(function (key) {
           _this6.Data[key] = _this6.Table(key).SetString(Data[key]);
         });
         return this;
       }
     }]);
 
     return Database;
   }();
 
   function Remote(url, loaded) {
     loaded(100);
     return Promise.resolve({
       assetsUrl: url,
       resourceMap: {"audio":{"bgm":"mp3","boom":"mp3","bullet":"mp3","home":"mp3"},"modal":{"add":"png","close":"png","title":"png"},"play":{"Common":"png","bg":"jpg","bullet":"png","enemy":"png","explosion1":"png","explosion10":"png","explosion11":"png","explosion12":"png","explosion13":"png","explosion14":"png","explosion15":"png","explosion16":"png","explosion17":"png","explosion18":"png","explosion19":"png","explosion2":"png","explosion3":"png","explosion4":"png","explosion5":"png","explosion6":"png","explosion7":"png","explosion8":"png","explosion9":"png","hero":"png"}}
     });
   }
   var Progress = /*#__PURE__*/function (_GAME$Event) {
     inherits(Progress, _GAME$Event);
 
     createClass(Progress, [{
       key: "progress",
       get: function get() {
         return this._full ? this._current / this._full : 1;
       }
     }]);
 
     function Progress() {
       var _this;
 
       var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
       var full = arguments.length > 1 ? arguments[1] : undefined;
       var current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
 
       classCallCheck(this, Progress);
 
       _this = possibleConstructorReturn(this, getPrototypeOf(Progress).call(this));
       _this.name = name;
       _this.full = full || 0;
       _this.current = current;
       return _this;
     }
 
     createClass(Progress, [{
       key: "full",
       set: function set(n) {
         this._full = n;
         this.emit('loading');
       }
     }, {
       key: "current",
       set: function set(n) {
         this._current = n;
         this.emit('loading');
       },
       get: function get() {
         return this._current;
       }
     }]);
 
     return Progress;
   }(GAME.Event);
   var Listen = /*#__PURE__*/function (_GAME$Event2) {
     inherits(Listen, _GAME$Event2);
 
     function Listen() {
       var _this2;
 
       classCallCheck(this, Listen);
 
       _this2 = possibleConstructorReturn(this, getPrototypeOf(Listen).call(this));
       _this2.loading = null;
       _this2.progresses = [];
       return _this2;
     }
 
     createClass(Listen, [{
       key: "add",
       value: function add(name, full) {
         var current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
         var start = this.progresses.length;
         var progress = new Progress(name, full, current);
         this.progresses.push(progress);
         this.tagNext(start);
         return progress;
       }
     }, {
       key: "tagNext",
       value: function tagNext(start) {
         var _this3 = this;
 
         if (this.loading) return this.loading.emit('loading');
 
         var _loop = function _loop(i) {
           var progress = _this3.progresses[i];
           if (progress.finish) return "continue";
           _this3.loading = progress;
           progress.on('loading', function () {
             return _this3.emit('loading', progress);
           });
           progress.once('finish', function () {
             _this3.loading = null;
             progress.finish = true;
             progress.off('loading');
 
             _this3.tagNext(i);
           });
         };
 
         for (var i = start; i < this.progresses.length; i++) {
           var _ret = _loop(i);
 
           if (_ret === "continue") continue;
         }
       }
     }, {
       key: "extendLoading",
       value: function extendLoading(progress) {
         this.emit('loading', progress);
       }
     }, {
       key: "extend",
       value: function extend(load) {
         var _this4 = this;
 
         this.on('loading', this.extendLoading, load);
         load.once('destroy', function () {
           return _this4.off('loading', _this4.extendLoading, load);
         });
         if (this.loading) this.loading.emit('loading', this.loading);
       }
     }, {
       key: "destroy",
       value: function destroy() {
         this.off('loading');
         this.loading = null;
         this.progresses.length = 0;
         this.emit('finish');
       }
     }]);
 
     return Listen;
   }(GAME.Event);
   function loadMap() {
     var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
     var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
     var perfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
     var exts = arguments.length > 3 ? arguments[3] : undefined;
     var Result = {};
     Object.keys(map).forEach(function (k) {
       if (k == '_') {
         if (exts.indexOf(map[k]) == -1) return;
         var key = perfix.slice(0, -1);
         var url = root + perfix.slice(0, -1) + '.' + map[k];
         Result[key] = url;
       } else if (typeof map[k] == 'string') {
         if (exts.indexOf(map[k]) == -1) return;
 
         var _key = perfix + k;
 
         var _url = root + perfix + k + '.' + map[k];
 
         Result[_key] = _url;
       } else {
         Object.assign(Result, loadMap(map[k], root, perfix + k + '/', exts));
       }
     });
     return Result;
   }
 
   app.stage.set(Load, Home); // 全局数据库预设配置
   app.data = new Database('global_' + "development");
   app.data.Map('Setting').Merge({
     Audio: true,
     Shock: true
   }); //开放域
   // import Shared from './scripts/wechat/shared.js';
   // GAME.Shared = Shared.SetSize(750, 750 / GAME.System.ratio);
   //初始化项目
 
   app.run({
     width: 750,
     interval: 1000 / 60
   }); //初始化资源加载监听器
   var ResLoader = new Listen(); //运行流程
 
   Promise.all([Promise.all([app.image.loads(loadMap({"load":{"bar":"png","cloud":"png","shadow":"png","shadowpx":"png"},"share":"png"}, 'resource/local/', '', ['png', 'jpg'])), //载入本地图片
   app.data.Map('Setting').GetStorage(true).then(function () {
     return app.audio.mute = !app.data.Map('Setting').Get('Audio');
   }) //读取声音配置
   ]), // .then(() => app.stage.go(new loadScene(ResLoader))),
   Promise.resolve(ResLoader.add('资源包下载', 100)).then(function (DownloadLoader) {
     return Remote( 'resource/remote', function (progress) {
       return DownloadLoader.current = progress;
     });
   }).then(function (res) {
     console.log('得到远程资源路径', res); // GAME.Shared.Send({ resource: GAME.Image.loadMap(res.resourceMap.rank, res.assetsUrl + '/rank/', '', ['png', 'jpg']) });
 
     var images = loadMap(res.resourceMap, res.assetsUrl + '/', '', ['png', 'jpg']);
     var ImageLoader = ResLoader.add('图片预读', Object.keys(images).length);
     var audios = loadMap(res.resourceMap.audio, res.assetsUrl + '/audio/', '', ['mp3']);
     var AudioLoader = ResLoader.add('音频加载', Object.keys(audios).length);
     return Promise.all([app.image.loads(images, '', function () {
       return ImageLoader.current++;
     }), app.audio.loads(audios, '', function () {
       return AudioLoader.current++;
     })]);
   }).then(function () {
     app.image.get('play/Common').sprite = {
       button: {
         x: 121,
         y: 7.3,
         width: 37,
         height: 21.7
       }
     };
   }) // Promise.resolve().then(() => (ResLoader.add('登陆', 5, 0).current = 5)), //用户登陆
   ]).then(function () {
     return ResLoader.destroy();
   }).then(function () {
     return app.stage.go('Home');
   }) //显示主要界面
   ["catch"](function (e) {
     //载入出错
     console.error(e); // GAME.Ald.UploadError('载入失败', e);
   });
 
 }());
 