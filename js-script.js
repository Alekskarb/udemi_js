let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    money, time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
let out = prompt('Введите обязательную статью расходов в этом месяце?', '');
let sum = prompt('Во сколько обойдется?', '');

appData.expenses.out = sum;
console.log(appData);
console.log(appData.expenses.out);