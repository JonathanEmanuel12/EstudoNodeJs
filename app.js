var express = require('express');
var bodyParser = require('body-parser');
var mysqlFunctions = require('./utils/mysql_functions');
var contato = require('./utils/contato');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views/paginas'));

app.get('/', function(req, res){
	res.render('./paginas/index');
});

app.get('/contato', function(req, res){
	res.render('./paginas/contato');
});

//rota exemplo que nao foi usada
app.post('/contato', function(req, res) {
	res.render('./paginas/contato', {objeto: req.body.produto});
});

app.post('/', function(req, res) {
	mysqlFunctions.inserirContato(contato(req.body));
	res.render('./paginas/index');
});

app.listen(8080);
console.log('porta 8080');