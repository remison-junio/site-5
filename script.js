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
btnPortfolio.forEach(function(elemento){
	elemento.addEventListener('click', ()=> {

		if(elemento.classList.contains('active') == false) {
			btnPortfolio.forEach(function(elemento){
				elemento.classList.remove('active');
			})

			elemento.classList.add('active');
		}
	})
})

//Portfolio album 

const albumItem = document.querySelectorAll('.album-item');
const albumTituloImg = document.querySelectorAll('.titulo-img');

albumItem.forEach(function(elemento){
	elemento.addEventListener('mouseenter', ()=> {
		elemento.classList.add('active');
		
	})

	elemento.addEventListener('mouseleave', ()=> {
		elemento.classList.remove('active');
		
	})



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