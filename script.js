//Menu Botão.

const btnHamburger = document.querySelector('.btn-hamburger');
btnHamburger.addEventListener('click', ()=> {
	const menu = document.querySelector('.menu');
	menu.classList.toggle('active');
})

//Animação da home

function animacaoHome() {
	const homeAdItem = document.querySelectorAll('.home-ad-item');
	
	function removendoActive(elemento) {
		elemento.classList.remove('active');
	}

	function adicionandoActive(elemento){
		elemento.classList.add('active');
	}

	let c = 0

	for(let i = 0; i < 100000 ; i++){
		(function (){
			setTimeout(function(){

				if(c == 0){
					removendoActive(homeAdItem[2])
					adicionandoActive(homeAdItem[0])
					c++
					
					
				} else if(c == 1) {
					removendoActive(homeAdItem[0])
					adicionandoActive(homeAdItem[1])
					c++
					
				} else if(c == 2) {
					removendoActive(homeAdItem[1])
					adicionandoActive(homeAdItem[2])

					c = 0	
				}

				console.log(c)
			}, 5000 * i);
		})()
	}
}

animacaoHome();

//Botões da seção portfolio

const btnPortfolio = document.querySelectorAll('.portfolio-btn');
const allItem = document.querySelectorAll('.all-item');
const brandItem = document.querySelectorAll('.brand-item');
const designItem = document.querySelectorAll('.design-item');
const graphicItem = document.querySelectorAll('.graphic-item');


btnPortfolio.forEach(function(elemento){
	elemento.addEventListener('click', ()=> {

		if(elemento.classList.contains('active') == false) {
			btnPortfolio.forEach(function(elemento){
				elemento.classList.remove('active');
			})

			elemento.classList.add('active');
		}

		//Mostrando as imagens do álbum ao clicar o botão do álbum escolhido

		if (elemento.classList.contains('all')){	
			mostrarAlbum(allItem);
		} else if(elemento.classList.contains('brand')){
			mostrarAlbum(brandItem);
			ocutarAlbum(designItem);
			ocutarAlbum(graphicItem);
		} else if (elemento.classList.contains('design')) {
			mostrarAlbum(designItem);
			ocutarAlbum(brandItem);
			ocutarAlbum(graphicItem);
		} else if (elemento.classList.contains('graphic')) {
			mostrarAlbum(graphicItem);
			ocutarAlbum(brandItem);
			ocutarAlbum(designItem);
		}
	})
})

//Função que mostra as imagem do álbum

function mostrarAlbum(item) {
	item.forEach(function(elemento){
		elemento.classList.add('mostra');
	})
}

//Função que ocuta as imagem do álbum

function ocutarAlbum(item) {
	item.forEach(function(elemento){
		elemento.classList.remove('mostra');
	})
}