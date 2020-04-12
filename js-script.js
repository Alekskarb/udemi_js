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
    if ((typeof (out)) ==='string' && (typeof (out)) != null && (typeof (sum))  !=null
        && out !=='' && sum !=='' && out.length <5 && sum.length <5) {
        appData.expenses[out] = sum;break
    }

    else {let out = prompt('Введите обязательную статью расходов в этом месяце?', '');
        let sum = prompt('Во сколько обойдется?', '');}
}

// var arr = [2, 3, 4, 6, 1, 5, 3, 1];
// console.log(arr.filter(function(value, index, self) {
//     return self.indexOf(value) === index;}));

appData.moneyDay= appData.budget/30;

console.log(appData);
alert('Budget per day: ' + appData.moneyDay);
if (appData.moneyDay<100){
    console.log('Minimum')}
else if (appData.moneyDay> 100 && appData.moneyDay<2000){
    console.log('GOOD')}
else if (appData.moneyDay>2000){console.log('EXELLENT')}
else {console.log('error')}