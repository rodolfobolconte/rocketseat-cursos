const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.sendfile(`./html/index.html`)
})

app.get('/sobre', function(req, res){
    res.sendfile('./html/sobre.html')
})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send(`Ola ${req.params.nome} <br/>Como vai o trabalho de ${req.params.cargo}?`);
})



//última linha do código
app.listen(8081, function() {
    console.log('Servidor rodando na porta 8081')
})