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
    chooseExp: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyDay = (appData.budget / 30).toFixed();
        alert('Budget per day: ' + appData.moneyDay);
    },
    detectLevel: function () {
        if (appData.moneyDay < 100) {
            console.log('Minimum')
        } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
            console.log('GOOD')
        } else if (appData.moneyDay > 2000) {
            console.log('EXELLENT')
        } else {
            console.log('error')
        }
    },
    chooseOptExpenses: function() {
        for (let j = 0; j < 3; j++) {
            let dopMoney = prompt('Статья необязательных расходов??', '');
            appData.optionalExpenses[j] = dopMoney;

        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt('Do you have money?'),
                percent = +prompt('which percent?');
            appData.dohod = save / 100 / 12 * percent;
            alert('Dohod: ' + appData.dohod)
        }
    },
    chooseIncome: function () {

        for (let j = 0; j < 1; j++) {
            let items = prompt('What did you get?', '');
            if ((typeof (items)) === 'string' && (typeof (items)) != null && (typeof (items)) != '') {
                appData.income = items.split(',');
                appData.income.push(prompt('What else?', ''));
                appData.income.sort();
            } else { j= j - 1}
        }
            appData.income.forEach((item)=>alert("Способы доп. заработка: " + item));
    }
};

// appData.chooseExp();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.chooseOptExpenses();
appData.chooseIncome();
