let money, time;

let start = function () {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

let chooseExp = function () {
    for (let i = 0; i < 1; i++) {
        let out = prompt('Введите обязательную статью расходов в этом месяце?', '');
        let sum = prompt('Во сколько обойдется?', '');
        if ((typeof (out)) === 'string' && (typeof (out)) != null && (typeof (sum)) != null
            && out != '' && sum != '' && out.length <= 5 && sum.length <= 5) {
            appData.expenses[out] = sum
        } else {
            i = i - 1
        }
    }
};
chooseExp();

let detectLevel = function () {
    if (appData.moneyDay < 100) {
        console.log('Minimum')
    } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
        console.log('GOOD')
    } else if (appData.moneyDay > 2000) {
        console.log('EXELLENT')
    } else {
        console.log('error')
    }
};

let detectDayBudget = function () {
    appData.moneyDay = (appData.budget / 30).toFixed();
    alert('Budget per day: ' + appData.moneyDay);
};
detectDayBudget();

let chooseOptExpenses = function() {
    for (let j = 0; j < 3; j++) {
        let dopMoney = prompt('Статья необязательных расходов??', '');
        appData.optionalExpenses[j] = dopMoney;

    }
}; chooseOptExpenses()

console.log(appData);

let checkSavings = function () {
    if (appData.savings) {
        let save = +prompt('Do you have money?'),
            percent = +prompt('which percent?');
        appData.dohod = save / 100 / 12 * percent;
        alert('Dohod: ' + appData.dohod)
    }
}
    checkSavings();