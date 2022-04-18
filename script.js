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



let buttonFired = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        return document.querySelector('.displayValue').textContent = value;
        });
});





