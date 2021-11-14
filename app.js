'use strict'
let userName = prompt("What is your name?");
let price = prompt("What price range were you looking at?");
let year = prompt("What year are you looking for?");
let condition = "";
if(year >= 2021){
    condition = "new";
} else if(year <= 2020){
    condition = "used";
}
let greeting = "";
console.log(userName);
console.log(price);
document.write("Welcome " + userName + "! " + "Looks like you are searching for a $" + price + " " + condition + " vehicle. You've come to the right place!");

