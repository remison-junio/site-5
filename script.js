//Menu Botão.

const btnHamburger = document.querySelector('.btn-hamburger');
btnHamburger.addEventListener('click', ()=> {
	const menu = document.querySelector('.menu');
	menu.classList.toggle('active');
})

//Títulos

const efeitoTitulo = document.querySelectorAll('.efeitoTitulo');
efeitoTitulo.forEach(function(elemento){
	efeitoHover(elemento);
})

//Cards

const card = document.querySelectorAll('.card');
card.forEach(function(elemento) {
	efeitoHover(elemento);
})

//Botões da seção portfolio

const btnPortfolio = document.querySelectorAll('.portfolio-btn');
var allItem = document.querySelectorAll('.all-item');
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

//Portfolio album textos

const albumItem = document.querySelectorAll('.album-item');
const albumTituloImg = document.querySelectorAll('.titulo-img');

albumItem.forEach(function(elemento){
	efeitoHover(elemento);
})


//Blog 

const blogItem = document.querySelectorAll('.blog-conteudo-item');
blogItem.forEach(function(elemento){
	efeitoHover(elemento);
})



//Função que cria o efeito ao passar o mouse por cima do elemento.

function efeitoHover(elemento) {
	elemento.addEventListener('mouseenter', ()=> {
		elemento.classList.add('active');
	})

	elemento.addEventListener('mouseleave', ()=> {
		elemento.classList.remove('active');
	})
}

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