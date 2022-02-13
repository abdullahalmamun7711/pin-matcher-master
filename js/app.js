
// for generate pin

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }



}

function gereratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}


// for keypad

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }

    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('type-numbers').value;

    const sucessMessage = document.getElementById('notify-sucess');

    const failError = document.getElementById('nofity-fail');

    if (pin == typeNumbers) {

        sucessMessage.style.display = 'block';
        failError.style.display = 'none';


    }
    else {

        failError.style.display = 'block';
        sucessMessage.style.display = 'none';
    }
}