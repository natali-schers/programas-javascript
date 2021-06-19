const img = document.getElementById("img");

const botoes = document.getElementById("botoes");

let indiceCor = 0;
let intervaloId = null;

const semaforo = (event) => {
	console.log(event.target.id);
	pararAutomatico();
	ligar[event.target.id]();
};

const proximoIndice = () => {
	if (indiceCor < 2) {
		indiceCor++;
	} else {
		indiceCor = 0;
	}
};

const mudaCor = () => {
	const cores = ["vermelho","amarelo","verde"];
	const cor = cores[indiceCor];
	ligar[cor]();
	proximoIndice();
};

const pararAutomatico = () => {
	clearInterval(intervaloId);
}

const ligar = {
	vermelho: () => (img.src = "img/vermelho.png"),
	amarelo: () => (img.src = "img/amarelo.png"),
	verde: () => (img.src = "img/verde.png"),
	automatico: () => intervaloId = setInterval(mudaCor,1000),
};

botoes.addEventListener("click",semaforo);