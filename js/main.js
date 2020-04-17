"use strict"
let startButton = document.getElementById("start"),
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
    btnOptional = document.getElementsByTagName("button")[1],
    btnCount = document.getElementsByTagName("button")[2],
    optional = document.querySelectorAll(".optionalexpenses-item"),
    incomeChose = document.querySelector(".choose-income"),
    checkSeving = document.querySelector("#savings"),

    summAcum = document.querySelector(".choose-sum"),
    percentAcum = document.querySelector(".choose-percent"),
    yearsValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


let money, time;

btnOptional.disabled = true;
btnCount.disabled = true;
btnEnter.disabled = true;
startButton.addEventListener('click', function (){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearsValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    

    btnEnter.disabled = false;
    btnOptional.disabled = false;
    btnCount.disabled = false;
});

btnEnter.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < inputExpenses.length; i++) {
        let a = inputExpenses[i].value;
        let b = inputExpenses[++i].value;
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("wery vell ")
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        };
    };
    expensesValue.textContent = sum;
});

btnOptional.addEventListener('click', () => {
    for (let i = 0; i < optional.length; i++) {
        let question = optional[i].value;
        appData.optionalExpenses[i] = question;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
        if (typeof(question) != "string") {
            i--
        }
    }
});

btnCount.addEventListener('click', () => {
    if(appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - expensesValue.textContent)/ 30).toFixed();
    dayDudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Нищеброд";
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Its normal";
    } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000) {
        levelValue.textContent = "HARD";
    } else if (appData.moneyPerDay > 10000) {
        levelValue.textContent = "Extra hard";
    } else {
        levelValue.textContent = "WTF dude?";
    }
} else {
dayDudgetValue.textContent = "error";
}
});

incomeChose.addEventListener('input', () => {
    let items = incomeChose.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSeving.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summAcum.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +summAcum.value;
        let percent = +percentAcum.value;

        appData.montjIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent =  appData.montjIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
})

percentAcum.addEventListener('input', () => {
    if (appData.sevings == true) {
        let sum = +summAcum.value;
        let percent = +percentAcum.value;

        appData.montjIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent =  appData.montjIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    
};
