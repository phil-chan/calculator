//pseudocode

// init variables
// ===================================
// numString ?? the display
// numArray to store input numbers
// display getelement by display
// a boolean for previous result ??
var numString = ""; //stores what to display
var numArray = []; //stores actual numbers for calculation
var isPreviousResult = false; //maybe when user clicks same operation button

var display = document.getElementById('display');

listen();

// function start program listen()
// has event listner to get pressed button value
function listen() {
    document.addEventListener('click', getButtonValue);
}

// function to getButtonValue()
// button = event target value
// if it's not NaN  or a dot, then number(button)
// else if it's AC, allClear()
// else if CE, clear()
// else if =, calculate()
// else, storeNumber(button)
function getButtonValue() {
    let buttonVal = event.target.value; //gets the value of clicked thing
    if (!isNaN(buttonVal) || buttonVal === ".") number(buttonVal);
    else if (buttonVal === "AC") allClear();
    else if (buttonVal === "CE") clearEntry();
    else if (buttonVal === "=") calculate();
    else storeNumber(buttonVal)
}

// number(button)
// if button has a dot and numstring also includes a dot, return
// else if do some magic and return
// else
// nested if previous result is true then empty numString = '', then prev result = false
// after nested if, numString += button, then update display.value = numString;
function number(buttonVal) {
    //return if it's an invalid input
    if (buttonVal === "." && numString.includes(".")) return;
    else if (numString.charAt(0) === 0 && numString.length === 1 && buttonVal === '0') return;
    else {
        //actaully do the calcualtions
        if (isPreviousResult === true) {
            numString = '';
            isPreviousResult = false;
        }
        numString += buttonVal;
        display.value = numString;
    }
}

// allClear()
// reset numstring so it = ''
// empty hte numArray so it = []
// set display.value = 0
function allClear() {
    numString = '';
    numArray = [];
    display.value = 0;
}

// clear()
// reset numstring so it = ''
// set display.value = 0
function clearEntry() {
    numString = '';
    display.value = 0;
}

// storeNumber(button)
// if numString is empty or no length, then return
// else if it's just empty
// numArray length = numArray.length -1
// push the button
// else
// numarray push numstring
// numarray push button
// numstring = '' <-- resets it 
function storeNumber(buttonVal) {
    if (numString === '' || numString.length === 0) return;
    else if (numString === '') {
        numArray.length = numArray.length - 1;
        numArray.push(buttonVal);
    } else {
        numArray.push(numString);
        numArray.push(buttonVal);
        numString = '';
    }
}

// calculate()
// Pushes number into numArray
// Does calculations
// displays number
// empties numArray at the end
function calculate() {
    numArray.push(numString);
    let currentNum = Number(numArray[0]);
    for (let i = 0; i < numArray.length; i++) {
        let nextNum = Number(numArray[i + 1]);
        let operation = numArray[i];
        if (operation === "+") currentNum += nextNum;
        else if (operation === "-") currentNum -= nextNum;
        else if (operation === "*") currentNum *= nextNum;
        else if (operation === "/") currentNum /= nextNum;
    }
    if (currentNum < 0) currentNum = '-' + Math.abs(currentNum);

    display.value = currentNum;
    numString = JSON.stringify(currentNum);
    isPreviousResult = true;
    numArray = [];
}