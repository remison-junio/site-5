//Header e Menu Botão.

const header = document.querySelector('.header')
window.addEventListener("scroll", function (event) {

    var scroll = this.scrollY;
    if(scroll > 200) {
    	header.classList.add('nav-scroll');	
    } else if (scroll == 0){
    	header.classList.remove('nav-scroll');
    }
});

const btnHamburger = document.querySelector('.btn-hamburger');
btnHamburger.addEventListener('click', AbrirFecharMenu)

function AbrirFecharMenu() {
	const menu = document.querySelector('.menu');
	menu.classList.toggle('active');
}

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
					removendoActive(homeAdItem[2]);
					adicionandoActive(homeAdItem[0]);
					c++
					
					
				} else if(c == 1) {
					removendoActive(homeAdItem[0]);
					adicionandoActive(homeAdItem[1]);
					c++;
					
				} else if(c == 2) {
					removendoActive(homeAdItem[1]);
					adicionandoActive(homeAdItem[2]);

					c = 0;
				}

				console.log(c)
			}, 5000 * i);
		})();
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

//Scroll suave ao clicar nos links do menu

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})


function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
  AbrirFecharMenu();
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};