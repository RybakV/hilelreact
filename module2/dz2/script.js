let calcOperator = prompt('Оберіть операцію: add, sub, mult, div')
let operandOne = prompt('Введіть перше число','0')
let operandTwo = prompt('Введіть друге число','0')
let result = 0

switch(calcOperator) {
    case "add":
        result = Number(operandOne) + Number(operandTwo);
        alert(operandOne + "+" + operandTwo + "=" + result);
        break;
    case "sub":
        result = Number(operandOne) - Number(operandTwo);
        alert(operandOne + "-" + operandTwo + "=" + result);
        break;
    case "mult":
        result = Number(operandOne) * Number(operandTwo);
        alert(operandOne + "*" + operandTwo + "=" + result);
        break;
    case "div":
        result = Number(operandOne) / Number(operandTwo);
        alert(operandOne + "/" + operandTwo + "=" + result);
        break;
    default:
        alert("Перевірте корректність введених даних");
}