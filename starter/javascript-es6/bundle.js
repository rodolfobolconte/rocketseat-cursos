"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//exercicio 1
var Usuario = /*#__PURE__*/function () {
  function Usuario() {
    _classCallCheck(this, Usuario);
  }

  _createClass(Usuario, [{
    key: "construtor",
    value: function construtor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      return this.Admin ? true : false;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.Admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); //false

console.log(Adm1.isAdmin()); //true
//exercicio 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1

var ex21 = usuarios.map(function (item) {
  return item.idade;
});
console.log(ex21); //2.2

var ex22 = usuarios.filter(function (item) {
  return item.empresa == 'Rocketseat';
});
console.log(ex22); //2.3

var ex23 = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
console.log(ex23); //2.4

var ex24 = usuarios.filter(function (item) {
  item.idade *= 2;
  return item.idade <= 50;
});
console.log(ex24); //exercicio 3
//3.1

var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (item) {
  return item + 10;
});
console.log(arr2); //3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); //3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise()); //exercicio 4
//4.1

var empresa = {
  nomeEmpresa: 'Rocketseat',
  enderecoEmpresa: {
    cidadeEmpresa: 'Rio do Sul',
    estadoEmpresa: 'SC'
  }
};
var nomeEmpresa = empresa.nomeEmpresa,
    _empresa$enderecoEmpr = empresa.enderecoEmpresa,
    cidadeEmpresa = _empresa$enderecoEmpr.cidadeEmpresa,
    estadoEmpresa = _empresa$enderecoEmpr.estadoEmpresa;
console.log(nomeEmpresa); // Rocketseat

console.log(cidadeEmpresa); // Rio do Sul

console.log(estadoEmpresa); // SC
//4.2

function mostraInfo(usuario) {
  var nomeUsuario = usuario.nomeUsuario,
      idadeUsuario = usuario.idadeUsuario;
  return "".concat(nomeUsuario, " tem ").concat(idadeUsuario, " anos.");
}

console.log(mostraInfo({
  nomeUsuario: 'Diego',
  idadeUsuario: 23
})); //exercicio 5
//5.1

var arr1 = [1, 2, 3, 4, 5, 6];
var x = arr1[0],
    y = arr1.slice(1);
console.log(x);
console.log(y);

function soma() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }

  return numeros.reduce(function (item, prox) {
    return item + prox;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//5.2

var usuario2 = {
  nome2: 'Diego',
  idade2: 23,
  endereco2: {
    cidade2: 'Rio do Sul',
    uf2: 'SC',
    pais2: 'Brasil'
  }
};

var usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {
  nome2: 'Gabriel'
});

var usuario4 = _objectSpread(_objectSpread({}, usuario2), {}, {
  endereco2: _objectSpread(_objectSpread({}, usuario2.endereco2), {}, {
    cidade2: 'Lontras'
  })
});

console.log(usuario3);
console.log(usuario4); //exercicio 6

var usuario5 = 'Diego';
var idade5 = 23;
console.log("O usu\xE1rio ".concat(usuario5, " possui ").concat(idade5, " anos")); //exercicio 7

var nome7 = 'Diego';
var idade7 = 23;
var usuario7 = {
  nome7: nome7,
  idade7: idade7,
  cidade7: 'Rio do Sul'
};
console.log(usuario7);
