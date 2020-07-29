/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//exercicio 1\nvar Usuario = /*#__PURE__*/function () {\n  function Usuario() {\n    _classCallCheck(this, Usuario);\n  }\n\n  _createClass(Usuario, [{\n    key: \"construtor\",\n    value: function construtor(email, senha) {\n      this.email = email;\n      this.senha = senha;\n    }\n  }, {\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.Admin ? true : false;\n    }\n  }]);\n\n  return Usuario;\n}();\n\nvar Admin = /*#__PURE__*/function (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  var _super = _createSuper(Admin);\n\n  function Admin(email, senha) {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _super.call(this, email, senha);\n    _this.Admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(Usuario);\n\nvar User1 = new Usuario('email@teste.com', 'senha123');\nvar Adm1 = new Admin('email@teste.com', 'senha123');\nconsole.log(User1.isAdmin()); //false\n\nconsole.log(Adm1.isAdmin()); //true\n//exercicio 2\n\nvar usuarios = [{\n  nome: 'Diego',\n  idade: 23,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Gabriel',\n  idade: 15,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Lucas',\n  idade: 30,\n  empresa: 'Facebook'\n}]; //2.1\n\nvar ex21 = usuarios.map(function (item) {\n  return item.idade;\n});\nconsole.log(ex21); //2.2\n\nvar ex22 = usuarios.filter(function (item) {\n  return item.empresa == 'Rocketseat';\n});\nconsole.log(ex22); //2.3\n\nvar ex23 = usuarios.find(function (item) {\n  return item.empresa == 'Google';\n});\nconsole.log(ex23); //2.4\n\nvar ex24 = usuarios.filter(function (item) {\n  item.idade *= 2;\n  return item.idade <= 50;\n});\nconsole.log(ex24); //exercicio 3\n//3.1\n\nvar arr = [1, 2, 3, 4, 5];\nvar arr2 = arr.map(function (item) {\n  return item + 10;\n});\nconsole.log(arr2); //3.2\n// Dica: Utilize uma constante pra function\n\nvar usuario = {\n  nome: 'Diego',\n  idade: 23\n};\n\nvar mostraIdade = function mostraIdade(usuario) {\n  return usuario.idade;\n};\n\nconsole.log(mostraIdade(usuario)); //3.3\n// Dica: Utilize uma constante pra function\n\nvar nome = \"Diego\";\nvar idade = 23;\n\nvar mostraUsuario = function mostraUsuario() {\n  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';\n  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;\n  return {\n    nome: nome,\n    idade: idade\n  };\n};\n\nconsole.log(mostraUsuario(nome, idade));\nconsole.log(mostraUsuario(nome)); //3.4\n\nvar promise = function promise() {\n  return new Promise(function (resolve, reject) {\n    return resolve();\n  });\n};\n\nconsole.log(promise()); //exercicio 4\n//4.1\n\nvar empresa = {\n  nomeEmpresa: 'Rocketseat',\n  enderecoEmpresa: {\n    cidadeEmpresa: 'Rio do Sul',\n    estadoEmpresa: 'SC'\n  }\n};\nvar nomeEmpresa = empresa.nomeEmpresa,\n    _empresa$enderecoEmpr = empresa.enderecoEmpresa,\n    cidadeEmpresa = _empresa$enderecoEmpr.cidadeEmpresa,\n    estadoEmpresa = _empresa$enderecoEmpr.estadoEmpresa;\nconsole.log(nomeEmpresa); // Rocketseat\n\nconsole.log(cidadeEmpresa); // Rio do Sul\n\nconsole.log(estadoEmpresa); // SC\n//4.2\n\nfunction mostraInfo(usuario) {\n  var nomeUsuario = usuario.nomeUsuario,\n      idadeUsuario = usuario.idadeUsuario;\n  return \"\".concat(nomeUsuario, \" tem \").concat(idadeUsuario, \" anos.\");\n}\n\nconsole.log(mostraInfo({\n  nomeUsuario: 'Diego',\n  idadeUsuario: 23\n})); //exercicio 5\n//5.1\n\nvar arr1 = [1, 2, 3, 4, 5, 6];\nvar x = arr1[0],\n    y = arr1.slice(1);\nconsole.log(x);\nconsole.log(y);\n\nfunction soma() {\n  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {\n    numeros[_key] = arguments[_key];\n  }\n\n  return numeros.reduce(function (item, prox) {\n    return item + prox;\n  });\n}\n\nconsole.log(soma(1, 2, 3, 4, 5, 6)); // 21\n\nconsole.log(soma(1, 2)); // 3\n//5.2\n\nvar usuario2 = {\n  nome2: 'Diego',\n  idade2: 23,\n  endereco2: {\n    cidade2: 'Rio do Sul',\n    uf2: 'SC',\n    pais2: 'Brasil'\n  }\n};\n\nvar usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {\n  nome2: 'Gabriel'\n});\n\nvar usuario4 = _objectSpread(_objectSpread({}, usuario2), {}, {\n  endereco2: _objectSpread(_objectSpread({}, usuario2.endereco2), {}, {\n    cidade2: 'Lontras'\n  })\n});\n\nconsole.log(usuario3);\nconsole.log(usuario4); //exercicio 6\n\nvar usuario5 = 'Diego';\nvar idade5 = 23;\nconsole.log(\"O usu\\xE1rio \".concat(usuario5, \" possui \").concat(idade5, \" anos\")); //exercicio 7\n\nvar nome7 = 'Diego';\nvar idade7 = 23;\nvar usuario7 = {\n  nome7: nome7,\n  idade7: idade7,\n  cidade7: 'Rio do Sul'\n};\nconsole.log(usuario7);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });