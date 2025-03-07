// What are conditional statements?

// Conditional statements allow us to control the flow of our program
// It allows us to run a statement/instruction if a condition is met or run another seperate instruction if otherwise

// if, else if and else statement

let numA = -1;

// if statement - execute a statement if a specified condition is true

if (numA < 0) {
  console.log("Hello");
} else {
  console.log("Hello Again");
}

/*
    syntax: if(condition){
        statement;    
    }
*/

//  The result of the expression added in the if condition must result to true, else, the statement inside the if() function will not run.

//  else if clause

/*
    - executes statements if previous condition are false and if the specified condition is true
    - the else-if clause is optional and can be added to capture additional condition to chage the flow of a program
*/

let city = "Tokyo";

if (city === "New York") {
  console.log("Welcome to NY!");
} else if (city === "New york") {
  console.log("Welcome to New York");
} else {
  console.log("Again!");
}

// we were able to run the else if statement after we evaluated that the if condition was true

// If the if(conditioon) was passed and run, we will no longer evaluate to else if() and end the process is already there

// else statement

/*
    -executes a statement if all other condition are false
    - the 'else' statement is optional and can be added to capture any result to change the flow of the program

    - The 'return' statement can be utilize with conditional statement in combination with functions to change values to be use for other features of our applications.

*/

let message = "No message";

function determineTyphoonIntensity(windSpeed) {
  if (windSpeed < 30) {
    return "Not a typhoon yet";
  } else if (windSpeed <= 61) {
    return "Tropical depression detected";
  } else if (windSpeed >= 62 && windSpeed <= 88) {
    return "Tropical storm detected";
  } else if (windSpeed >= 89 || windSpeed <= 117) {
    return "Severe tropical storm detected";
  } else {
    return "Typhoon detected";
  }
}

//  return the string to the varible 'message' that invoked it

message = determineTyphoonIntensity(80);
console.log(message);

// console.warn() is a good way to print warnings in our console that could help us developers to act on a certain output within our code
if (message === "Tropical storm detected") {
  console.warn(message);
}

// [Section] truthy and falsy
/* 
    -In JS, a 'truthy' value is a value that is considered when encountered in a Boolean context
    -Value are considered true unless defined 
    otherwise
    - False values/exception for truthy

    1. false
    2. 0
    3. -0
    4. ""
    5. null
    6. undefine
    7. NaN
*/

if (true) {
  console.log("Truthy");
}
if (1) {
  console.log("Truthy");
}
if (undefined) {
  console.log("Falsy");
}
if (0) {
  console.log("Falsy");
}
if ([]) {
  console.log("Truthy");
}
if ("") {
  console.log("Falsy");
}

// Conditional (Ternary) Operator

/* 
    - The conditional ternary operator takes in three operands: 
        1. condition
        2. expression to execute if the condition is truthy
        3. expression te execute if the condition is falsy
    - can be used as an alternative to an 'if else' statement
    -Ternary operators have an implicit 'return' statement meaning without 'return' keyword , the resulting expression can be stored in a variable
    
    syntax:
        (expression) ? ifTrue : ifFalse;
*/

// Single statement execution
let ternaryResult = 1 < 18 ? true : false;
console.log(ternaryResult);

if (numA < 0) {
  console.log("Hello");
} else {
  console.log("Hello Again");
}

numA < 0 ? console.log("Hello") : console.log("Hello Again");

function determineTyphoonIntensity(windSpeed) {
  if (windSpeed < 30) {
    return "Not a typhoon yet";
  } else if (windSpeed <= 61) {
    return "Tropical depression detected";
  } else if (windSpeed >= 62 && windSpeed <= 88) {
    return "Tropical storm detected";
  } else if (windSpeed >= 89 || windSpeed <= 117) {
    return "Severe tropical storm detected";
  } else {
    return "Typhoon detected";
  }
}

let windSpeed = 110;

windSpeed < 30
  ? console.log("Not a typhoon yet")
  : windSpeed <= 61
  ? console.log("Tropical depression detected")
  : windSpeed >= 62 && windSpeed <= 88
  ? console.log("Tropical storm detected")
  : windSpeed >= 89 || windSpeed <= 117
  ? console.log("Sever tropical storm detected")
  : console.log("Typhoon detected");

// Try-Catch-Finally Statement
/* 
    -try catch statement re commonly used for error handling
    -there are instances when the application returns an error/warning that is not necessarily an error
    in the context of our code
    - these errors are the result of an attempt of the programming language to help developers in creating 
    efficient code.
    -the finally block is used to specify a response/action that used to handle/resolve errors
*/

function showIntensityAlert(windSpeed) {
  try {
    alertat(determineTyphoonIntensity(windSpeed));
    // error/err are commonly used variables names used by
    // the developers for storing errors
  } catch (e) {
    console.log(typeof e);
    // typeof operator is used to chech the data string value of what the data type is
    console.warn(e);
    // catch errors within try statement
    // In this case the error is an unknown function 'alertat' which does not exist in Javascript
    // error.message is used to access the information relating to an error object
  } finally {
    // continue execution of cide regardless of success and failure of code execution in the try block to handle/resolve errors
    alert("Intensity updates will show new alert");
  }
}

showIntensityAlert(56);
