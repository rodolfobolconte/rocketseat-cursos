var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list-todos')) || [];

function atualizarTodos() {
    //remove o conteúdo da lista
    listElement.innerHTML = '';
    
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

atualizarTodos();

function adicionarTodo() {
    var todoTexto = inputElement.value;

    todos.push(todoTexto);
    inputElement.value = '';
    atualizarTodos();
    saveToStorage();
}

buttonElement.onclick = adicionarTodo;

function deleteTodo(posicao) {
    todos.splice(posicao, 1);
    atualizarTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list-todos', JSON.stringify(todos));
}