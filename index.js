"use strict";
const atm = require("./atm");
const prompt = require("prompt-sync")();

atm.validatePin()
atm.validatePin();

function mainMenu (){
    const menu = parseInt(prompt("Welcome Customer! Please select from the options below:(1)Balance(2)Withdraw(3)Deposit(4)Exit\t"))
    switch (menu) {
        case 1:
            atm.getBalance()
            mainMenu()
            atm.getBalance();
            mainMenu();
        case 2:
            atm.withdraw()
            mainMenu()
            atm.withdraw();
            mainMenu();
        case 3:
            atm.deposit()
            mainMenu()
            atm.deposit();
            mainMenu();
        case 4:
            break;
        default:
            console.log("Select a valid input.")
            mainMenu()
            console.log("Select a valid input.");
            mainMenu();
    }
}

mainMenu() 
mainMenu(); 