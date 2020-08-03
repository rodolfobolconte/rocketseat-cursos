//exercicio 1
function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) console.log('É maior ou igual a 18'); 
        else console.log('É menor que 18');
    });
}

axios.get('https://api.github.com/users/rodolfobolconte')
    .then(function(response) {
        var repos = response.data.public_repos;
        setTimeout(checaIdade, 2000, repos);
    })
    .catch(function(error) {
        console.warn(error);
    });

//exercicio 2
var button_ex2 = document.querySelector('#button-2');
var input_ex2 = document.querySelector('#input-2');
var lista = document.createElement('ul');
var ex2 = document.querySelector('div#ex2');
ex2.appendChild(lista);

button_ex2.onclick = function() {
    var carregandoItem = document.createElement('li');
    var carregandoTexto = document.createTextNode('Carregando...');
    carregandoItem.appendChild(carregandoTexto);
    lista.appendChild(carregandoItem);

    var url = `https://api.github.com/users/${input_ex2.value}/repos`;

    axios.get(url)
        .then(function(response){
            lista.innerHTML = '';
            for (repositorio of response.data) {
                var item = document.createElement('li');
                var textoItem = document.createTextNode(repositorio.name);
                item.appendChild(textoItem);
                lista.appendChild(item);
            }
            
        })
        .catch(function(error) {
            var item = document.createElement('li');
            var textoItem = document.createTextNode('Usuário Não Existe!');
            item.appendChild(textoItem);
            lista.innerHTML = '';
            lista.appendChild(item);
        });
}