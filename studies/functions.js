/*
* FUNCTIONS
*
* Functions allow us to write a piece of code once that can then be used multiple times within a program.
* They are statements that perform some kind of action when called by name.
* Functions can include loops, variable declarations, arithemetic operations, if-else chains,
* and other functions (known as recursion). 
* Once a function is declared, we can call it or execute it as many times as we want.
* 
*/



// 1. Declaring and calling a function //
/*
* To use a function, we must first declare it with the function keyword.
* Typically, we give functions meaningful names, although there are exceptions.
* The function name is declared after the function keyword.
* To call a function, we literally call it by name.
*/

function myFunction() { // declaring myFunction()
    // code block here
}

myFunction(); // calling myFunction




// 2. Parameters versus arguments //
/*
* Inside the parentheses, after the function name,
* we have the option of inputting one or more parameters.
* Parameters are placeholders for future values that will be input
* into the function.
* When a function is called or executed, we pass in arguments in place of the parameters.
* Those arguments are the values that are manipulated inside the function.
*
*/

// We want to create a function that adds any two numbers together
function add(num1, num2) {  // num1 and num2 are parameters, or placeholders
    return num1 + num2      // code block tells the program what to do with those parameters/arguments
}

// call the function with arguments
add(1,2); // returns 3




// 3. Named function syntax //

/*
* 
* We need (1) the function keyword, (2) a meaningful unique name,
* (3) parentheses (which may or may not contain parameters),
* (4) curly braces, and (5) our block of code inside the curly braces.
* Without a return statement or a console.log, the function will
* return as undefined.
*
*/

function functionName(parameter1, parameter2) {
    // code block here, indented
    // return statement
}




// 4. Function expressions -- assigning a function to a variable //
/*
* Functions that are stored within variables are called function expressions.
* These functions can be anonymous, or nameless.
* Such functions are called by the name of the variable they are stored in.
* (Function expressions, unlike plain old functions, are not hoisted in JS.)
*/

var addingFunction = add; // stores the add function from line 45 in the variable addingFunction
addingFunction(1,2); // calls and returns the result of the add function; 3
addingFunction(5, 6); // 11

var newAddFunction = add(1,2); // stores just the result of calling the add function with arguments 1 and 2; 3
newAddFunction === 3; // true. newAddFunction just stores the returned value of the add function




// 5. Inputs and outputs when calling a function
/*
*
* Inputs to functions are necessary when the function is written with parameters.
* (Not all functions take parameters.) Parameters should have meaningful names.
* When calling the function, we input arguments that take the place of the parameters.
* These arguments are manipulated inside the function body, producing an output.
*
* If a function code block does not contain a return or console.log statement,
* the function will come back as undefined.
*
*/

function subtract(num1, num2) { // meaningful parameter names
    return num1 - num2;         // output: return the value of subtracting num2 from num1
}

subtract(5, 3); // 2




// 6. Function scope //
/*
*
* Declared functions are hoisted to the top of their scope in JS, meaning they can be executed
* before they are declared.
*
* Functions can access variables in the parent or global scope. 
* They cannot access variables in their inner nested functions.
*
* Function expressions are not hoisted.
*
*/

hoistedFunction(); // this works, function declared below 

function hoistedFunction() {
    // code block
}

// functionExpression(); <-- will not run function expression declared on line 128

var functionExpression = function() {
    // code block here
}




// 7. Closures //
/*
*
* Closures are functions inside other functions who use variables from the outer
* function's scope. In an outer-inner variable pairing, the inner variable can keep
* the variables declared in the outer function alive even after the outer function has been called.
* This applies to parameters as well as variables declared inside the function body.
*
* Closures can be used for partial application, creating dynamic functions, 
* or privatizing variables.
*/


function multiply(a) {
    return function(b) {
        return a * b;
    }
}

let timesTwo = multiply(2); // call the outer function, returns a function
timesTwo(5); // returns 10 // call the inner function, which still has access to the a variable
timesTwo(6); // returns 12



function outerFunction(greet) { 
    return function(name) {
        return greet + name;
    }
}

var friendOrFoe = outerFunction("Hello");
friendOrFoe(", friend"); // "Hello, friend"
friendOrFoe(", enemy"); // "Hello, enemy"