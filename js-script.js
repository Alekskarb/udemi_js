let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
for (let i=0; i<1; i++){
    let out = prompt('Введите обязательную статью расходов в этом месяце?', '');
    let sum = prompt('Во сколько обойдется?', '');
    if (typeof (out) ==='string' && typeof (out) !=null && typeof (sum) !=null
        && out !=='' && sum !=='' && out.length <5 && sum.length <5) {appData.expenses[out] = sum;break}

    else {continue}
}

appData.moneyDay= appData.budget/30;

console.log(appData);
alert(appData.moneyDay);
