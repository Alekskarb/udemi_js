let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
let out = prompt('Введите обязательную статью расходов в этом месяце?', '');
let sum = prompt('Во сколько обойдется?', '');
let outer = prompt('Введите обязательную статью расходов в этом месяце?', '');
let summ = prompt('Во сколько обойдется?', '');

appData.expenses[out] = sum;
appData.expenses.outer = summ;
console.log(appData);
alert(appData.budjet/30);
