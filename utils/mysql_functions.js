var mysql = require('mysql2');

try {
	var connection = mysql.createConnection({
		host : process.env.PGHOST,
		user : process.env.PGUSER,
		password : process.env.PGPASSWORD,
		database : process.env.PGDATABASE,
		port : process.env.PGPORT
	});
}
catch(error) {
	console.log(error)
}

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