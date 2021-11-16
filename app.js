'use strict'

function finalMessage(){
    let userName = askUserName();
    let price = getPrice();
    let condition = getYear();
    document.write("Welcome "+userName+"! You're searching for "+condition+" vehicle for $"+price+". You've come to the right place!");
    
}
function askUserName(){
    let userName = prompt("What is your name?");
    return userName;
}
function getPrice(){
    let price = prompt("What price range were you looking at?");
    return price;
}
function getYear(){
    let year = prompt("What year are you looking for?");
    let condition = "";
    if(year >= 2021){
    condition = "a new";
    } else if(year <= 2020){
    condition = "an used";
    }
    return condition;
}
