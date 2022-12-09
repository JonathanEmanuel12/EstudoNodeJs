var mysql = require('mysql2');

var connection = mysql.createConnection({
	host : 'containers-us-west-120.railway.app',
	user : 'postgres',
	password : 'HaqyWZc64UluvjkArckk',
	database : 'railway',
	port : 6319
});

var mysqlFunctions = {
	inserirContato : function (contato) {
		connection.query('insert into contato(nome, email, tipo, observacoes) values(?, ?, ?, ?);', [contato.nome,  contato.email, contato.tipo, contato.observacoes], (err, res) => {
			if(err) throw err;
			console.log("Insert feito com sucesso");
		});
	},
	teste : function () {
		console.log('Teste');
	}

}

module.exports = mysqlFunctions;