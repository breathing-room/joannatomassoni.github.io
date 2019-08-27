/*
* LOOPS
*
* Loops allow us to run a block of code until a certain condition is no longer met. 
*
*/

// 1. While loops //
/*
* While loops run as long as a particular condition is met.
* If you're using a while loop, be sure to set up a way for the while loop to stop 
* (i.e. incrementing a variable).
*/

var i = 0
while (i < 5) {   // code runs as long as i is 0
    console.log(i); // prints a number to the console
    i++;            // increments i by 1. when i = 5, condition is no longer met, so loop stops
}

// loops print 0-4 to the console in order before the loop stops

// 2. For loops //
/*
* For loops allow us to loop through arrays.
* They require an initializing variable, a stopping condition, and an incrementer or decrementer.
*/

// prints the numbers 0-4 to the console
// checks that i < 5, runs code body, then increments i by 1. 
// i is 1, still less than 0, so the code body runs again, i is incremented...
for (var i = 0; i < 5; i++) {   
    console.log(i);
}


// 3. For-in loops //
/*
* For-in loops iterate over all keys in an object one time. 
* With the keys, we can access the values of objects 
* the way we use indexes to access values in arrays in for loops.
*/

var object = {};
for (var key in object) {       // iterates through all keys in object
    console.log(key);           // logs all key names to the console
    console.log(object[key]);   // logs all value names to the console
}



// 4. Looping over an array forwards and backwards //
var myArray = [1, 2, 3, 4];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);        // 1, 2, 3, 4   
}

for (var i = myArray.length - 1; i > -1; i--) {
    console.log(myArray[i]);        // 4, 3, 2, 1
}

var newArray = [];
for (var i = 0; i < myArray.length; i++) {
    newArray.unshift(myArray[i]); // <-- loops forward through array, but adds each element to the front of the new array
}
console.log(newArray); // 4, 3, 2, 1 




// 5. Looping over an object

var myObj = {
    key1: "one",
    key2: "two",
    key3: "three"
}

for (var key in myObj) {
    console.log(key);       
    console.log(myObj[key]);
}

// ^^ logs:
// key1
// one
// key2
// two
// key3
// three