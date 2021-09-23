function executar(){
	//alert("Estou funcionando!!!");
	let pedido = new XMLHttpRequest();

	pedido.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let dados = this.responseXML;
			//console.log(dados);
			let clientes = dados.getElementsByTagName("cliente");
			//console.log(clientes.length);
			let conteudo = '<h2> LISTA DE CLIENTES </h2>';
			for (let i=0; i < clientes.length; i++){
				conteudo += '<p>Nome: ' + clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + '</p>';
				conteudo += '<p>Idade: ' + clientes[i].getElementsByTagName("idade")[0].childNodes[0].nodeValue + '</p>';
				conteudo += '<hr>';
			}
			document.getElementById("caixa").innerHTML = conteudo;
		}
	}
	pedido.open("GET","dados.xml",true);
	pedido.send();
}