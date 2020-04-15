let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = +prompt("Во сколько обойдется?", "");
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        };
    };

};
chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}
detectDayBudget()
alert(`Budget per day: ${appData.moneyPerDay}`);

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопленний?", "");
        let percent = +prompt("Под какой процент", "");
        appData.montjIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.moneyPerDay);
    }
}
checkSaving();
detectLevel();
function detectLevel() {
    if (money < 100) {
        alert ("Нищеброд")
    } else if (money >= 100 && money < 2000) {
        alert ("Its normal")
    } else if (money > 2000 && money < 10000) {
        alert ("HARD")
    } else if (money > 10000) {
        alert("Extra hard")
    } else {
        alert ("WTF dude?")
    }
}
function optionalExpenses() {

    for (let i = 1; i < 4; i++) {
        let question = prompt("Какие необьязательные рассходы?", "");
        optionalExpenses[i] = question;
        if (typeof(question) != "string") {
            i--
        }
    }
}