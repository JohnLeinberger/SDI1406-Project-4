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
var oldSeparator = ",";
var newSeparator = "/";
var numberString = "103";
var badNumberString = "1o3";
var arrayInput = [25, 32, 7, 99, 23, 1];
var numberInput = 8;
var mixedArray = [22,"no","2",50];

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
//goes through a string and creates a new one, replacing the desired separator with the new separator
function stringSeparatorSwap(originalString, originalSeparator, newSeparator) {
    
    var updatedString = "";
    
    for(var i = 0; i < originalString.length; i++){
        if (originalString[i] == originalSeparator) {
            updatedString = updatedString + newSeparator;
        }else{
            updatedString = updatedString + originalString[i];
        }
    }
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

//Function #4 - Validates a string to see if it follows the pattern of a phone number
//validates that the - is located in the proper places, then checks to make sure that the numbers are actually numbers between 0 and 9
function phoneNumberCheck(phoneString) {
    
    for(var i = 0; i < phoneString.length; i++){
        if (i === 3 || i === 7) {
            if (phoneString[i] != "-") {
                return false;
            }
        }else if(phoneString[i] < "0" || phoneString[i] > "9"){
                return false;
            }
    }
    return true;
};

//Function #5 - Find the smallest value in an array that is greater than a given number
//cycles through the array and re-asigns the value of the smallestNum if the index of the array is smaller than the existing smallestNum but still greater than the argument number
function smallestNumber(arrayInput, numberInput){
    for(var i = 0; i < arrayInput.length; i++){
        if (i === 0) {
            var smallestNum = numberInput;
            if (smallestNum > arrayInput[i] && arrayInput[i] > numberInput) {
                smallestNum = arrayInput[i];
            }
        }else{
            if (smallestNum > arrayInput[i] && arrayInput[i] > numberInput) {
                smallestNum = arrayInput[i];
            }
        }
    }
    return smallestNum;
};

//Function #6 - Find the total value of just the numbers in an array and return it
//uses the typeof function to check if the index of the array is a string, if its a string then it assigns that value as 0 and continues through the loop
function arraySum(mixedArray){
    
    var itemHolder = 0;
    var sumOfArray = 0;
    var numberCheck = "";
    
    for(var i = 0; i < mixedArray.length; i++){
        itemHolder = mixedArray[i]
        numberCheck = typeof(itemHolder);
        if (numberCheck == "string") {
            itemHolder = 0;
        }
        sumOfArray = sumOfArray + itemHolder;
    }
    return sumOfArray;
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

//checking Function #4 meets all parameters
returnBoolean = phoneNumberCheck("954-367-6116");
console.log(returnBoolean);
returnBoolean = phoneNumberCheck("228-0000-110");
console.log(returnBoolean);
returnBoolean = phoneNumberCheck("228-000-1j10");
console.log(returnBoolean);

//checking Function #5 meets all parameters
returnNumber = smallestNumber(arrayInput, numberInput);
console.log(returnNumber);

//checking Function #6 meets all parameters
returnNumber = arraySum(mixedArray);
console.log(returnNumber);