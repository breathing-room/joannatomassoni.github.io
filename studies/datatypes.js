/*
* DATATYPES:
*
* 0. 'Datatypes' refers to the different types of values that can be used in JavaScript code.
* We distinguish between simple and complex datatypes.
*
* 1. Simple, or primitive, dataypes are numbers, strings, Booleans, NaN, 
* undefined, and null. They cannot store other datatypes. 
* When simple datatypes are operated on, they become new values, 
* rather than being an altered version of the original value.
* They have a fixed "size," or the amount of memory they take up.
*
* 2. Complex datatypes are objects, arrays, and functions. 
* They are complex because they can hold other values.
* They do not have a fixed size.
*
*
*/


// 1. Numbers // 
/* 
*
* Simple datatype. All possible numeric values, i.e. 4, 0, -24.
* Perform arithmetic operations with numbers and arithmetic operators (+, -, *, /, and %).
* % returns the remainder of division between numbers. 
*
*/

var number = 1 + 2; // 3
var anotherNumber = 2 - 1; // 1
var yetAnotherNumber = 3 * 4; // 12
var stillAnotherNumber = 4 / 2; // 2
var remainderNumber = 4 % 2; // 0, remainder of dividing 4 by 2


// 2. Strings//
/*
* 
* Simple datatype. Sets of characters, used to represent text, wrapped in quotes, 
* i.e. "Joanna", " ", "That's $100, please."
* Strings have associated built-in properties that can be called. Properties that contain functions
* are known as methods.
* Strings can be concatenated using the + operator.
* Elements of strings can be accessed with bracket notation.
*/

var myString = "Hello World!";
myString.length; // property of myString that returns 12 
myString.toUpperCase(); // method of myString that returns "HELLO WORLD!"
var newString = "Hello" + "World!"; // "Hello World!"
(newString[0]); // "H";



// 3. Booleans //
/*
* 
* Simple datatype. One of two values: true and false. 
* Typically produced in comparison operations. Vital to conditional statements.
* In situations where a Boolean value would be expected (i.e. in the condition area of an if-else statement),
* non-Boolean values are coerced to the Boolean type. 
*
*/

console.log(5 > 4); // prints "true"
console.log(4 > 5); // prints "false"
console.log("And" < "Zoo"); // prints "true"
console.log(NaN == NaN); // prints "false", NaN is the only value in JavaScript that is not equal to itself


// 4. Arrays //
/*
*
* Complex datatype. Arrays are ordered lists of information, 
* which can be of any datatype, including other arrays.
* Arrays are enclosed in square brackets []. 
* Like strings, arrays have built-in properties and methods.
* Elements inside arrays are stored at numerical indexes starting at 0. 
* There is no meaningful association between an element and the number of its index.
* Array elements are accessed using their index via bracket notation, i.e. myArray[index]. 
* Index values can be stored in variables, as in loops.
* Similar to strings, arrays can be concatenated with the + operator.
*
*/

var array = []; // an empty array literal
var myArray = [1, 2, 3, 4];

myArray.push(5); // adds a new element to the end of array
console.log(myArray); // prints [1, 2, 3, 4, 5]

console.log(myArray[myArray.length - 1]); // prints 5, the last item in this array
myArray.pop(); // removes last element of array, returns that element
console.log(myArray[myArray.length - 1]); // prints 4

var someArray = [[1, 2, 3], [4, [ 5, 6]]];
console.log(someArray[0][0]); // prints the number 1, which is at index 0 of the nested array, which is at index 0




// 5. Objects //
/*
* 
* Complex datatype. Objects are unordered associative arrays, 
* meaning that instead of being groups of values matched up with indexes/numbers,
* they are made up of key-value pairs that have some kind of meaningful association. 
* Objects are enclosed in curly braces, {}. 
* Objects are useful when you want to collect pieces of information about something, 
* such as a user/person.
* Object keys are always strings.
* To access an object value, you can use either dot notation or bracket notation.
*
*
*/

var object = {}; // an empty object literal
var person = {
    firstName: "Joanna",
    lastName: "Tomassoni",
    username: "joannatomassoni"
}

console.log(person.firstName); // prints "Joanna" to the screen
console.log(person["lastName"]); // prints "Tomassoni to the screen"
person.age = 30; // adds key-value pair of `age: 30` to the object
person["favorite color"] = "blue"; // adds key-value pair of `favorite color: "blue"` to the object




// 6. Functions //

/*
* 
* Complex datatype. Functions are a way for us to store actions in variables, 
* and instruct the program to perform those actions on multiple inputs, 
* without having to rewrite code over and over again.
* A function, like a variable, usually needs a name. 
* (Anonymous, or nameless, functions can exist within JavaScript).
* A function is declared with the `function` keyword.
* Functions can take parameters, which are placeholders for arguments that are later input into the function.
* Code to be executed is placed in curly braces.
* To extract a value from a function, use the return keyword.
*/

function add(param1, param2) {
    return param1 + param2;
}

add(4, 5); // returns 9
add(10, 20); // returns 30


/*
* UNDEFINED AND NULL
* 
* Undefined and null are both primitive datatypes.
*
* Undefined represents an uninitialized variable, or a nonexistant property of an object-- 
* a variable has been declared but not assigned a value; an accidental loss of information.
* A declared but unassigned variable will be assigne the value of undefined automatically by JavaScript.
* A programmer can intentionally set a variable to undefined.
* If a function does not return a value, it returns undefined.
*
*
* Null, on the other hand, expresses the intentional absence of a value. 
* Null is a kind of assignment that represents a lack of value. 
* It must be intentionally assigned by the programmer; a purposeful lack of information.
*
* Null and undefined are both "falsey" values.
*
*/

var a;
console.log(a); // prints "undefined"
var b = null;
console.log(b); // prints "null"
var c = undefined;
console.log(c); // prints "undefined"




/*
* NaN (not a number)
*
* NaN is a global property in JavaScript that stands for "not-a-number" 
* that can check if a value is not a number with the method Number.isNaN().
* NaN is the only datatype that is not equal to itself.
*
*/

var num1 = "string";
var num2 = 24;
console.log(Number.isNaN(num1)); // false
console.log(Number.isNaN(num2)); // true
NaN == NaN; // false


/*
* POSITIVE INFINITY AND NEGATIVE INFINITY
*
* Positive infinity is a numeric value representing infinity. It behaves the same as
* mathematical infinity-- multiply any number by infinity results in infinity.
*
* Negative infinity is a numeric value representing negative infinity. 
* Multiplying any positive number by negative infinity returns negative infinity.
* Multiplty any negative number by negative infinity returns positive infinity.
*
*/


/*
* SIMPLE DATATYPES ARE PASSED BY COPY
* 
* The way primitive and complex datatypes are stored and referenced in a program 
* is a product of the limitations of computer memory. 
* Simple datatypes have a maximum size that fits within the 8 bytes of memory
* available to variables.
*
* Simple datatypes take up a limited amount of space. 
* When a variable is assigned the value of a simple datatype,
* it can contain the value itself. 
* If a is assigned 5, and b is assigned a, both a and b then contain different instances of 5. 
* Reassigning one will not change the other. a and b contain different instances of 5.
*
*/

var a = 5;
b = a; // b is assigned the value contained in a
console.log(a, b); // 5, 5
a = 2; // reassign a to 2
console.log(a, b); // 2, 5 <-- b still contains the primitive value of 5, even though a was reassigned

// If you assign the same simple datatype to two distinct variables, 
// those variables are equivalent. 
var num1 = 1;
var num2 = 1;
num1 === num2; // true <-- the simple datatypes stored in these two distinct variables are equivalent

/*
* COMPLEX DATATYPES ARE PASSED BY REFERENCE
*
* Complex datatypes can take up a limitless amount of space. To deal with this, 
* when complex datatypes are stored in variables, 
* the variables contain a *reference* to the value,
* not the value itself. This means that if you assign an object literal to x, 
* then assign y to x,changing y will also change x and vice versa.
*
*/

var x = {}; // assign object literal to x
var y = x; // assign value of x to y
console.log(x, y); // {}, {}
x = []; // reassign value of x to empty array literal;
console.log(x, y); // [], {}


// On the other hand, if you assign two identical complex datatypes 
// to two distinct variables, they are not equivalent.
let object1 = {};
let object2 = {};
object1 === object2; // false
