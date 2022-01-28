//Menu Botão.

const btnHamburger = document.querySelector('.btn-hamburger');
btnHamburger.addEventListener('click', ()=> {
	const menu = document.querySelector('.menu');
	menu.classList.toggle('active');
})

//Títulos

const efeitoTitulo = document.querySelectorAll('.efeitoTitulo');
efeitoTitulo.forEach(function(elemento){
	efeitoMouse(elemento);
})

//Cards

const card = document.querySelectorAll('.card');
card.forEach(function(elemento) {
	efeitoMouse(elemento);
})


//Função que cria o efeito ao passar o mouse por cima do elemento.

function efeitoMouse(elemento) {
	elemento.addEventListener('mouseenter', ()=> {
		elemento.classList.add('active');
	})

	elemento.addEventListener('mouseleave', ()=> {
		elemento.classList.remove('active');
	})
}
