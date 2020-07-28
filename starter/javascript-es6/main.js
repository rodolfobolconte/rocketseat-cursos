//exercicio 1
class Usuario {
    construtor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.Admin? true:false;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.Admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); //false
console.log(Adm1.isAdmin()); //true

//exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

//2.1
const ex21 = usuarios.map(function(item) {
    return item.idade;
});
console.log(ex21);

//2.2
const ex22 = usuarios.filter(function(item) {
    return item.empresa == 'Rocketseat';
});

console.log(ex22);

//2.3
const ex23 = usuarios.find(function(item) {
    return item.empresa == 'Google';
});
console.log(ex23);

//2.4
const ex24 = usuarios.filter(function(item) {
    item.idade *= 2;
    return item.idade <= 50;
});
console.log(ex24);

//exercicio 3
//3.1
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((item) => item + 10);
console.log(arr2);

//3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

//3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());

//exercicio 4
//4.1
const empresa = {
    nomeEmpresa: 'Rocketseat',
    enderecoEmpresa: {
        cidadeEmpresa: 'Rio do Sul',
        estadoEmpresa: 'SC',
    }
};

const { nomeEmpresa, enderecoEmpresa: {cidadeEmpresa, estadoEmpresa} } = empresa;
console.log(nomeEmpresa); // Rocketseat
console.log(cidadeEmpresa); // Rio do Sul
console.log(estadoEmpresa); // SC

//4.2
function mostraInfo(usuario) {
    const {nomeUsuario, idadeUsuario} = usuario;
    return `${nomeUsuario} tem ${idadeUsuario} anos.`;
}
console.log(mostraInfo({ nomeUsuario: 'Diego', idadeUsuario: 23 }));

//exercicio 5
//5.1
var arr1 = [1, 2, 3, 4, 5, 6];
var [x, ...y] = arr1;

console.log(x);
console.log(y);

function soma(...numeros) {
    return numeros.reduce(function(item, prox) {
        return item + prox;
    })
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2
const usuario2 = {
    nome2: 'Diego',
    idade2: 23,
    endereco2: {
        cidade2: 'Rio do Sul',
        uf2: 'SC',
        pais2: 'Brasil',
    }
};

const usuario3 = {...usuario2, nome2: 'Gabriel'};
const usuario4 = {...usuario2, endereco2: ({...usuario2.endereco2, cidade2: 'Lontras'})};
console.log(usuario3);
console.log(usuario4);

//exercicio 6
const usuario5 = 'Diego';
const idade5 = 23;
console.log(`O usuário ${usuario5} possui ${idade5} anos`);

//exercicio 7
const nome7 = 'Diego';
const idade7 = 23;
const usuario7 = {
    nome7,
    idade7,
    cidade7: 'Rio do Sul',
};
console.log(usuario7);