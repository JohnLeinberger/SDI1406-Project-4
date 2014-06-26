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