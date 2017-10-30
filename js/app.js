function init(){

	var openMenu = document.querySelector("#openMenu");
	var closeMenu = document.querySelector("#closeMenu");
	var navMenu = document.querySelector(".header__show-nav");


	var actionOpenMenu = function actionOpenMenu(){
		navMenu.style.visibility = "visible";
		openMenu.style.visibility = 'hidden';
		closeMenu.style.visibility = 'visible';
	}


	var actionCloseMenu = function actionCloseMenu(){
		navMenu.style.visibility = 'hidden';
		openMenu.style.visibility = 'visible';
		closeMenu.style.visibility = 'hidden';
	}

	openMenu.addEventListener( 'click', actionOpenMenu );
	closeMenu.addEventListener( 'click', actionCloseMenu);

}

window.addEventListener('load', init);