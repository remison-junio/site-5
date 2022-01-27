const btnHamburger = document.querySelector('.btn-hamburger');
btnHamburger.addEventListener('click', ()=> {
	const menu = document.querySelector('.menu');
	menu.classList.toggle('active');
})