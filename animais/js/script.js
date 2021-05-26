function alteraImg(nomearquivo,nomeanimal){
	document.querySelector('.imagem').setAttribute('src','img/'+nomearquivo);
	document.querySelector('.imagem').setAttribute('data-animal',nomeanimal);
}

function mostraAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    console.log('O animal é: ' + animal);
    alert('O animal é: ' + animal);
}