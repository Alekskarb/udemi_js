let ulli = document.querySelector('.menu');
let liFive = document.createElement('li')
liFive.classList.add("menu-item");
liFive.textContent ='Пятый пункт';

ulli.appendChild(liFive);
let removed = document.querySelector('.adv');
// let pict = document.getElementsByTagName('body');
// pict.replaceChild('body2', 'body')
removed.remove();
document.body.style.background = '/#1_INcubator/#1_HTML_CSS_JS/UDEMY/udemy_js/DZ_№5/img/apple_true.jpg'
document.body.style.background = 'url(file:///D:/%231_INcubator/%231_HTML_CSS_JS/UDEMY/udemy_js/DZ_5/img/apple_true.jpg)'

