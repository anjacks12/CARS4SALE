'use strict'

function finalMessage(){
    let userName = askUserName();
    let car = numberOfCars();
    let year = getYear();
    document.write("Welcome "+userName+"! You're searching for "+car+" "+year+" vehicle");

}
function askUserName(){
    let userName = prompt("What is your name?");
    return userName;
}

function numberOfCars(){
    let car = "";
    do{
        car = prompt("How many cars are you buying?");
        if(car > 1){
            alert("Sorry, due to supply chain issues, there is a limit per customer. Please enter another number.");
        } else if(car < 1){
            alert("Are you sure? Please enter another number");
        } else{
            alert("Great! You've come to the right place");
        }
    }while(car != 1)
return car
}

function getYear(){
    let year = prompt("What year are you looking for? (Year range between 2010 to 2021)");
    let condition = "";
    if(year >= 2021){
    condition = "new";
    } else if(year <= 2020){
    condition = "used";
    }
    return condition;
}

function ratePage(){
    let rate = prompt("How are we doing? Rate from 1-3");
    for(let smile = 1; smile <= rate; smile++){
        //document.write('<img src="/mnt/c/Users/angel/desktop/codefellows/102n58/cars4sale/102-lab-smile-2.png/">');
        document.write("<img src='102-lab-smile-2.png'>");

    }

}