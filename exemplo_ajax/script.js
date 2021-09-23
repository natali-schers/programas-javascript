function carrega_txt(){
	const x = new XMLHttpRequest();

	x.onload = function(){
		document.getElementById("teste").innerHTML = this.responseText;
	}

	x.open("GET", "troca.txt");
	x.send();
}