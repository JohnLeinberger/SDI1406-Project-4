//John Leinberger
//SDI 1406
//Assigment 4
//Date: 6/26/2014

//global variables
var returnBoolean = false;
var returnNumber = 0;
var returnString = " ";
var inputString1 = "htt://www.aol.com";
var inputString2 = "http://www.aol.com";
var inputString3 = "https://www.aol.com";
var oldString = "dog,cat,bird,lizard";
var oldSeparator = /,/g;
var newSeparator = "/";
var numberString = "103";
var badNumberString = "1o3";
var inputNumber1 = 0;
var inputNumber2 = 0;

//Function #1 - Check to see if the string is a URL
//finds the location of the 2nd / and runs a for loop to search through the string, creating a new one with those returned items to be used as a comparison
function urlChecker(inputString){
    //local variables
    var slashLocation = inputString.indexOf("/") + 1;
    var comparisonString = "";
    
    for(var i = 0; i <= slashLocation; i++){
        comparisonString = comparisonString + inputString[i];
    }
    if (comparisonString === "https://" || comparisonString === "http://") {
        return true;
    }else{
        return false;
    }
      
};

//Function #2 - Replace the separator in a string
//globally replaces the original separator with a new one and returns the updated string
function stringSeparatorSwap(originalString, originalSeparator, newSeparator) {
    
    var updatedString = originalString.replace(originalSeparator, newSeparator);
    
    return updatedString;
};

//Function #3 - Convert a string to a number, validate that the string is a number
//compares the parsed number to the string, if they match that means it was successfully parsed and is a number, otherwise it is not a number
function convertStringToNumber(stringNum){
    //local variables
    var isNotNum = "Not A Number";
    var number = 0;

    number = parseInt(stringNum);
        
    if (number == stringNum) {
        return number;
    }else{
        return isNotNum;
    }
};

//main code
//Checking Function #1 meets all parameters
returnBoolean = urlChecker(inputString1);
console.log("It is " + returnBoolean + " that " + inputString1 + " is a correct URL");
returnBoolean = urlChecker(inputString2);
console.log("It is " + returnBoolean + " that " + inputString2 + " is a correct URL");
returnBoolean = urlChecker(inputString3);
console.log("It is " + returnBoolean + " that " + inputString3 + " is a correct URL");

//checking Function #2 meets all parameters
returnString = stringSeparatorSwap(oldString, oldSeparator, newSeparator);
console.log("The old string was " + oldString);
console.log("The updated string is " + returnString);

//checking Function #3 meets all parameters
returnNumber = convertStringToNumber(numberString);
console.log("The number is: " + returnNumber);
returnNumber = convertStringToNumber(badNumberString);
console.log("The number is: " + returnNumber);