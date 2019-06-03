
function criarContato(body) {
	var contato = {
		nome: body.nome,
		email: body.email,
		tipo: body.opcoes,
		observacoes: body.observacoes
	};
	return contato;
}


module.exports = criarContato;