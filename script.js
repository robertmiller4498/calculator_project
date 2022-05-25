let firstNum = "";
let secondNum = "";
let operator = "";

function calcAddition (firstNum, secondNum) {
    return console.log(firstNum + secondNum);
}

function calcSubtract (firstNum, secondNum) {
    return console.log(firstNum - secondNum);
}

function calcMultiply (firstNum, secondNum) {
    return console.log(firstNum * secondNum);
}

function calcDivide (firstNum, secondNum) {
    return console.log(firstNum / secondNum);
}


let operatorButtons = document.querySelectorAll('.operatorButtons');
const numbers = document.querySelectorAll(".numberButtons");

 let displayNumber = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
        let value = button.value;
        return document.querySelector('.displayValue').innerText += value;
        if (operatorButtons === "") {
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else {
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
        })
});  

/* numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else { // Read second number
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
    });
}); */

operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;

            console.log(firstNum);
            console.log(operator);

        } else {
            console.log(secondNum);

            switch (operator) {
                case "+":
                    console.log(calcAddition(firstNum, secondNum));
                    break;

                case "-":
                    console.log(calcSubtract(firstNum, secondNum));
                    break;

                case "*":
                    console.log(calcMultiply(firstNum, secondNum));
                    break;
                
                case "/":
                    console.log(calcDivide(firstNum, secondNum));
                
                default:
                    break;
            }
        }
    })
});
