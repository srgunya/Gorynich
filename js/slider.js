let button = document.querySelector('.button');
let wrapCont = document.querySelector('.wrap_cont');
let logo = document.querySelector('.logo');
let logo2 = document.querySelector('.logo2');



button.onclick = function(){
	wrapCont.classList.add('dvizh1');
	wrapCont.classList.remove('dvizh2');
	button.classList.add('opacity0');
	button.classList.remove('opacity1');
	shadow.classList.remove('display0');
	shadow.classList.remove('opacity0');
	shadow.classList.add('opacity2');
	logo2.style.opacity = '.4';
	cur = 1;
}

