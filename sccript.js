// EVENT HANDLER FOR WHEN THE DIGIT NUMBER BUTTON IS PRESSED
var newLine = true;
var value1;
var currentOperator;
function digitBtnPressed(button){
if(newLine){
    document.getElementById("inputbox").value = button;
    newLine = false;
}else{
     var currentValue = document.getElementById("inputbox").value;
     document.getElementById("inputbox").value = currentValue + button;
}

}
// Event Handler for AC button when it needs to be pressed.
function acBtnPressed(){
    document.getElementById("inputbox").value = 0;
    newLine = true;
}
 
// Event Handler for Operator buttons when it needs to be pressed.
function operatorBtnPressed(operator){
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputbox").value);
    newLine = true;
}
// Event handler for Eraser button when its pressed

function deleteLast(){
    document.getElementById("inputbox").value= document.getElementById("inputbox").value.slice(0,-1); 
    newLine = true

    }
    // event listener for decimal
function decimalBtnPressed() {
    let currentValue = document.getElementById("inputbox").value;   

    if (newLine) {
        currentValue = "0.";
        newLine = false;
    } else if (!currentValue.includes(".")) {
        currentValue += ".";
    }

    document.getElementById("inputbox").value = currentValue;
}
// event handler for %
function percentBtnPressed() {
    let currentValue = parseFloat(document.getElementById("inputbox").value);

    if (!isNaN(currentValue)) {
        currentValue = currentValue / 100;
        document.getElementById("inputbox").value = currentValue;
        newLine = true;
    }
}

// EVent handler for equals to button
function equalsBtnPressed(){
var value2 =parseInt(document.getElementById("inputbox").value);
var finalTotal;
switch(currentOperator){
    case "+":
        finalTotal = value1 + value2;
        break;
    case "-":
          finalTotal= value1 - value2;
        break;
    case "*":
        finalTotal = value1 * value2;
        break; 
    case "/" :
        finalTotal = value1 / value2;
        break;
    case '%':
        finalTotal =value1 %  value2;
        break;
}
document.getElementById("inputbox").value = finalTotal;
value1 = 0;
newLine = true; 
}
