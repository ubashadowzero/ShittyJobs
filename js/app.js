function init(){

	var open_menu = document.querySelector("#openMenu");
	var close_menu = document.querySelector("#closeMenu");
	var menu = document.querySelector('#menu');

	var openMenu = function (event){
		open_menu.style.display = 'none';
		menu.style.display = 'block';
		menu.style.position = 'absolute';
		close_menu.style.display = 'block';
		event.stopPropagation();
	}

	var closeMenu = function (event){
		open_menu.style.display = 'block';
		menu.style.display = 'none';
		close_menu.style.display = 'none';
		event.stopPropagation();
	}

	open_menu.addEventListener('click', openMenu);
	close_menu.addEventListener('click', closeMenu);

}

window.addEventListener('load', init);