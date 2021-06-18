var banners = ['img/banner01.png','img/banner02.png','img/banner03.png'];
var banner_atual = 0;

function trocaBanner(){
	if(banner_atual>2){
		banner_atual = 0;
	}
	//console.log(banner_atual);
	document.querySelector('.banner_rotativo img').src = banners[banner_atual];
	banner_atual += 1;
}

setInterval(trocaBanner,2000);