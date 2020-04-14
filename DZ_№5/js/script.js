let ulli = document.querySelector('.menu');
let liFive = document.createElement('li')
liFive.classList.add("menu-item");
liFive.textContent ='Пятый пункт';
console.log(liFive);
ulli.appendChild(liFive);
// ulli.innerHTML = 'Пятый пункт'
// ulli.appendChild();
let removed = document.querySelector('.adv');
removed.remove();