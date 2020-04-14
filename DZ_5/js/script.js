let ulli = document.querySelector('.menu');
let liFive = document.createElement('li')
liFive.classList.add("menu-item");
liFive.textContent ='Пятый пункт';

ulli.appendChild(liFive);
let removed = document.querySelector('.adv');
removed.remove();
let good = document.querySelector('.title');
let qu = document.getElementById('prompt');
let txt ='';
let answer = function () {txt = prompt('do you like Apple?', '');};
answer();
qu.textContent = txt;


// document.body.style.background = 'url(../img/apple_true.jpg)'
document.body.style.background = 'url(file:///D:/%231_INcubator/%231_HTML_CSS_JS/UDEMY/udemy_js/DZ_5/img/apple_true.jpg)'
good.textContent = 'Мы продаем только подлинную технику Apple'

