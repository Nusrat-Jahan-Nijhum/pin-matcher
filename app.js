// this function is related to generatePin() and it is  created not to generate pin numbers of 3 digits
function FourDigitPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('This is not a valid 4 digit pin', pin)
        return FourDigitPin();
    }
}
// Main function to generate PIN NUMBERS
function generatePin() {
    document.getElementById('display-pin').value = FourDigitPin();
}

//PIN typing 
document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('clicked-number');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''; // to clean all digits
        }
    }
    else {
        const previousInputValue = calcInput.value;
        const newInputValue = previousInputValue + number;
        calcInput.value = newInputValue;
    }

})

//// for matching two pin numbers
document.getElementById('submit-click').addEventListener('click', function () {

    const genPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('clicked-number').value;

    const failMsg = document.getElementById('match-fail');
    const successMsg = document.getElementById('match-success');

    if (genPin == typedPin) {
        failMsg.style.display = 'none';
        successMsg.style.display = 'block';
    }
    else {
        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }

})


