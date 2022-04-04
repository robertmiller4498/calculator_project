const a = 4;
const b = 2;

function calcAddition (a, b) {
    return console.log(a + b);
}

function calcSubtract (a, b) {
    return console.log(a - b);
}

function calcMultiply (a, b) {
    return console.log(a * b);
}

function calcDivide (a, b) {
    return console.log(a / b);
}


function operate (a, b) {
    console.log(calcMultiply(a, b));
}

operate(a, b);