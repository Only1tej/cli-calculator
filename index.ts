import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter second number:\n");

  const firstNum = isNumber(firstStr);
  //   console.log(firstNum);

  const op = isOperator(operator);
  //   console.log(op);

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  //   console.log(validInput);
  if (validInput) {
    // console.log("\nIs valid");
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("\nInvalid inputs\n");
    main();
  }

  //   console.log(firstStr, operator, secondStr);
}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

function isOperator(operator: string): boolean {
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

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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
