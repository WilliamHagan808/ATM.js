"use scrict"
//console.log("hi")
const account = require("./account")
const prompt = require("prompt-sync")();

function getBalance(){
    console.log(account.balance)
}
function validatePin(){
    let userPin = prompt('Please enter pin.')
    if(userPin ===account.pin){
        console.log("Correct Pin");
    }
    else{
        console.log("Incorrect Pin. Try Again.")
        return validatePin()
    }
}

function withDraw() {
    let userwithDraw = parseInt(prompt('Enter amount you wish to withdraw.'))

    if(Number.isInteger(userWithdraw)) && userWithdraw <= account.balamce){
        getBalance()
}
else if(!Number.isInteger(userWithdraw)){
    return withDraw()
}
else{
    console.log("Not enough Funds please Try Again.")
}