/*
* STRING MANIPULATION
*
* 0. Strings are simple datatypes, and therefore immutable. But we can manipulate
* existing strings to create new strings, using operators and methods.
*
*/

// 1. With operators //
/*
* Strings can be concatenated with the + operator.
*/

var someName = "Jo";
var otherName = "anna";
var myName = someName + " " + otherName; // "Joanna"




// 2. With string methods //
/*
* String methods are functions that are built into JavaScript that we can call
* to manipulate strings. Some are described below.
*/

// .trim() will remove "white space" from the beginning and end of a string
let myLongString = "      hello      ";
myLongString.trim(); // "hello"

// .includes() checks to see if a certain string exists within a given string
let someDude = "Person Dude";
someDude.includes("Person"); // true

// .indexOf() looks for the specific position of a character 
// or string of characters within a given string
someDude.indexOf("Dude"); // returns 7 because "Dude" starts at index 7

// .toUpperCase() and .toLowerCase() change the case of a string
let myString = "Hello";
myString.toUpperCase(); // HELLO
myString.toLowerCase(); // hello

// .slice() removes a section of a string and returns that section, 
// but does not modify the original string
// First parameter indicates starting index, 
// optional second parameter indicates ending index.

myString.slice(myString.length - 1); // "o"
console.log(myString); // still is "hello"

// .split() turns a string into an array of strings, 
// taking a parameter of where you
// want to split the string, and returns the array. 
// The parameter is not included in the final array.
someDude = someDude.split(" "); // ["Person", "Dude"]
console.log(someDude);

// .join() turns an array of strings into a string. 
// The parameter indicates what the array strings will be joined by.
someDude = someDude.join(" "); // "Person Dude"

// .replace() takes two parameters: a substring to remove in a given string, 
// and another string to replace that with
someDude.replace("Person","This"); // "This Dude"
