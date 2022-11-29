// task 1
let n = 20;
while (n <= 30) {
    console.log(n);
    n = n + 0.5;
}
// task 2
let usdPrice = 27;
let usdAmount = 10;
while (usdAmount <= 100) {
    console.log(usdAmount * usdPrice);
    usdAmount = (usdAmount + 10);
}
//task 3
let m = 1;
const cap = 66;
while ((m * m) < cap && m <= 100) {
    console.log(m);
    m++;
}

//task 4
const number = 7;
let c;
for (c = 2; c < number; ++c) {
    if (Number.isInteger(number/c)) {
        console.log('Ваше число - не є простим.');
        break;
    }
}
if (c === number) {
    console.log('Ваше число - просте.');
}

//task 5
const enteredNumber = 81;
let d;
let i = 1;
for (d = enteredNumber; d > 3; d/3) {
    d = d/3
    if (Number.isInteger(d)) {
        i++;
    }
}
if (d === 3) {
    console.log('Ваше число це трійка в ступені ' + i);
}
else {
    console.log('Ваше число не можна отримати множенням трійок');
}