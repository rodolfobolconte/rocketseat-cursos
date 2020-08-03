import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading) {
            let loadEl = document.createElement('span');
            loadEl.setAttribute('id', 'loading');
            let loadText = document.createTextNode('Carregando...');
            loadEl.appendChild(loadText);

            this.formEl.appendChild(loadEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const {name, description, html_url, owner: { avatar_url}} = response.data;

            this.repositories.push({
                avatar_url,
                name,
                description,
                html_url,
            })

            this.render();
        } catch (err) {
            alert('O repositório não existe.');
        }

        this.setLoading(false);

        this.inputEl.value = '';
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let nameEl = document.createElement('strong');
            nameEl.appendChild(document.createTextNode(repo.name));
            
            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));
            
            let linkEl = document.createElement('a');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(nameEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();