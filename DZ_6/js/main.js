let startBtn = document.querySelector('#start');

let blocks = document.querySelectorAll('.result-table div');
let inputs = document.querySelectorAll('.expenses-item');

let inputsOpt = document.querySelectorAll('.optionalexpenses-item');
let buttonArray = document.getElementsByTagName('button');
let apply = buttonArray[1];
let calc = buttonArray[2];
let maybe = document.querySelector('#income');
let chooseSum = document.querySelector('#sum');
let checkSavings = document.querySelector('#savings');
let percent = document.querySelector('#percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');


let news =[];
    blocks.forEach((item, ind)=> {
        if (ind % 2 === 1) {
            news.push(item)
        }});
console.log(maybe,chooseSum,checkSavings,percent,year,month,day);

// let liFive = document.createElement('li')
// liFive.classList.add("menu-item");
// liFive.textContent ='Пятый пункт';
//
// ulli.appendChild(liFive);
// let removed = document.querySelector('.adv');
// removed.remove();
// let good = document.querySelector('.title');
// let qu = document.getElementById('prompt');
// let txt ='';
// let answer = function () {txt = prompt('do you like Apple?', '');};
// answer();
// qu.textContent = txt;
//
//
// // document.body.style.background = 'url(../img/apple_true.jpg)'
// document.body.style.background = 'url(file:///D:/%231_INcubator/%231_HTML_CSS_JS/UDEMY/udemy_js/DZ_5/img/apple_true.jpg)'
// good.textContent = 'Мы продаем только подлинную технику Apple'

