let money, time, expence, cost;

money = Number(prompt('Ваш бюджет на месяц?'));
time = prompt('Введите дату в формате YYYY-MM-DD');
expence = prompt('Введите обязательную строку расходов в этом месяце');
cost = Number(prompt('Во сколько обойдется?'));

let appData = {
    budjet: money,
    timeData: time,
    expences: {
        expence: cost
    },
    optionalExpence: {},
    income: [],
    savings: false
};

alert(appData.budjet / 30);
