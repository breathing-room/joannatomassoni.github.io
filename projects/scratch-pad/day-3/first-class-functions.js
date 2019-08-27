// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function that takes a value 
    return function(value) {
    // that function returns a comparison of value and base
        return value > base;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function that takes a value
    return function(value) {
    // that function checks if value is less than base
        return value < base;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // convert startsWith to lowercase
    startsWith = startsWith.toLowerCase();
    // return a function that takes a string
    return function(string) {
    // convert string to lowercase
    string = string.toLowerCase();
    // that function uses bracket notation to check if startsWith equals first character of string
        return startsWith === string[0];
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // convert endsWith to lower case with toLowerCase()
    endsWith = endsWith.toLowerCase();
    // return function that takes a string parameter
    return function(string) {
        // convert string to lower case with toLowerCase()
        string = string.toLowerCase();
        // use bracket notation to access last character of string, compare that character to endsWith
        return endsWith === string[string.length - 1];
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create a variable to store modified array elements
    let newArray = [];
    // create a loop to iterate over the input array of strings
    for (var i = 0; i < strings.length; i++) {
        // call the modify function with each element as its argument using bracket notation
        // push modified element to new array
        newArray.push(modify(strings[i]));
    } // return new array
    return newArray;
    
    // for (var i = 0; i < strings.length; i++) {
    //     strings[i] = modify(strings[i]);
    //     newArray.push(strings[i]);
    // } return newArray;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // create status variable, set to true
    let flag = true;
    // create loop to iterate over array of strings
    for (var i = 0; i < strings.length; i++)
        // for each element in array, run test
        // if test returns false, update flag to false
        if (!test(strings[i])) {
            flag = false;
        } 
    // return flag
    return flag;

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}