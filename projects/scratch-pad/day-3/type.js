// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // use if-chain to check if value is array using Array.isArray() method
    if (Array.isArray(value)) {
        return true;
    } else return false;
    
    // return Array.isArray(value) <-- simpler method
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // use Array.isArray() to check if object is an array
    if (Array.isArray(value)) {
        return false;
    // use === to check if value is null    
    } else if (value === null) {
        return false;
    // use instanceof to check if value is Date
    } else if (value instanceof Date) {
        return false;
    // then use typeof to see if value is object
    } else if (typeof value === "object") {
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // use === to check if value is null
    if (value === null) {
        return false;
    // use instanceof to check if value is date
    } else if (value instanceof Date) {
        return false;
    // use typeof to check if value is object
    } else if (typeof value === "object") {
        return true;
    // return false as default
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // check if value is number using typeof
    if (typeof value === "number") {
        return "number";
    }
    // check if value is string using typeof
        else if (typeof value === "string") {
            return "string";
        }
    // check if value is boolean using typeof
        else if (typeof value === "boolean") {
            return "boolean";
        }
    // check if value is null using ===
        else if (value === null) {
            return "null";
        }
    // check if value is function using typeof
        else if (typeof value === "function") {
            return "function";
        }
    // check if value is undefined using typeof 
        else if (typeof value === "undefined") {
            return "undefined";   
        }
    // check if value is date using instance of
        else if (value instanceof Date) {
            return "date";
        }
    // check if value is array using Array.isArray()
        else if (Array.isArray(value)) {
            return "array";
        }
    // check if value is object using typof
        else if (typeof value === "object") {
            return "object";
        }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
