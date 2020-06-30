//pseudocode

// init variables
// ===================================
// numString ??
// numArray to store input numbers
// display getelement by display
// a boolean for previous result ??

// function start program listen()
// has event listner to get pressed button value

// function to getButtonValue()
// button = event target value
// if it's NaN nothing or a dot, then number(button)
// else if it's AC, allClear()
// else if CE, clear()
// else if =, calculate()
// else, storeNumber(button)

// number(button)
// if button has a dot and numstring also includes a dot, return
// else if do some magic and return
// else
// nested if previous result is true then empty numString = '', then prev result = false
// after nested if, numString += button, then update display.value = numString;

// allClear()
// reset numstring so it = ''
// empty hte numArray so it = []
// set display.value = 0

// clear()
// reset numstring so it = ''
// set display.value = 0

// storeNumber(button)
// if numString is empty or no length, then return
// else if it's just empty
// numArray length = numArray.length -1
// push the button
// else
// numarray push numstring
// numarray push button
// numstring = '' <-- resets it 

// calculate()
// Pushes number into numArray
// Does calculations
// displays number
// empties numArray at the end