"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    var firstNum = isNumber(firstStr);
    //   console.log(firstNum);
    var op = isOperator(operator);
    //   console.log(op);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    //   console.log(validInput);
    if (validInput) {
        // console.log("\nIs valid");
        var firstNum_1 = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum_1, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\nInvalid inputs\n");
        main();
    }
    //   console.log(firstStr, operator, secondStr);
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    // if(operator === '+' || operator === '-'|| operator==='*'|| operator==='/'){}
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
main();
