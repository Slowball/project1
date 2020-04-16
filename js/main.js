let startButton = document.getElementById("start")[0],
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayDudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],


    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    inputExpenses = document.getElementsByClassName("expenses-item"),
    btnEnter = document.getElementsByTagName("button")[0],
    btnCencel = document.getElementsByTagName("button")[1],
    btnCount = document.getElementsByTagName("button")[2],
    optional = document.querySelectorAll(".optionalexpenses-item"),
    inconeChose = document.querySelector(".choose-income"),
    checkSeving = document.querySelector("#savings"),

    summAcum = document.querySelector(".choose-sum"),
    percentAcum = document.querySelector(".choose-percent"),
    yearsValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


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
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Budget per day: ${appData.moneyPerDay}`);
    },

    detectLevel: function() {
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
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопленний?", "");
            let percent = +prompt("Под какой процент", "");
            appData.montjIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.moneyPerDay);
        }
    },
    optionalExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let question = prompt("Какие необьязательные рассходы?", "");
            optionalExpenses[i] = question;
            if (typeof(question) != "string") {
                i--
            }
        }
    },
    chooseIncome: function() {
        
        let items = prompt('what give additional money?', "");
        if (typeof(items) == null || items == "" || typeof(item) != "string") {
          return appData.chooseIncome();  
        } else {
        appData.income = items.sptit(", ");
        appData.income.push(prompt("Mb samthing else?", ""));
        appData.income.sort();
        }
        appData.income.forEach(function (itemmasive, i) {
            alert(`Additional way of earning: ${1+i} - ${itemmasive}`);
        });
    }
};

for (let key in appData) {
    alert(`Our programm have this data: ${key} - ${appData[key]}`);
}
