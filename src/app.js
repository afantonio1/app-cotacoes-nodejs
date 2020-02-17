const path = require('path');
const express = require('express');
const hbs = require('hbs');
const cotacoes = require('./util/cotacao');

const app = express();

const diretorioPublico = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(diretorioPublico));

//Rota para página inicial do site
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Bem vindo ao APP de cotações',
        autor: 'Alessandro Ferreira Antônio'
    });
})

app.get('/ajuda', (req, res) => {
    res.render('ajuda', {
        title: 'Página de Ajuda',
        autor: 'Alessandro Ferreira Antônio'
    });
})

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'Sobre',
        autor: 'Alessandro Ferreira Antônio'
    });
})

app.get('/contato', (req, res) =>{
    res.render('contato', {
        title: 'Contato',
        autor: 'Alessandro Ferreira Antônio'
    });
})

app.get('/cotacoes', (req, res) => {

    if (!req.query.ativo){
        return res.status(400).json({
            message: 'O ativo deve ser informado!',
            code: 400
        })
    }

    const symbol = req.query.ativo.toUpperCase();
    cotacoes(symbol, (err, body) =>{
        if (err){
            return res.status(err.code).json({error: {
                message: err.message,
                code: err.code
            }});
        }
        else
        {
           return res.status(200).json(body);
        }

    })
})

//Rota para página não encontrada
app.get('*', (req, res) => {
    res.render('error', {
        title: 'Erro 404',
        errorMessage : 'Erro - Página não encontrada.',
        autor: 'Alessandro Ferreira Antônio'
    });
 })


app.listen(3000, () =>{
    console.log('Servidor rodando na porta: http://localhost:3000')
})