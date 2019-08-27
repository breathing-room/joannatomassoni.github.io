/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object.
var animal = {};
//Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = 'shark';
//Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal['name'] = 'Hamm';
//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
//Print your `animal` Object to the console by adding, `console.log(animal);`
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `noises` and assign it to an empty array.
var noises = [];
//Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = 'chomp';
//Using an array function add another noise to the end of `noises`.
noises.push('do do');
//add another element to array using unshift
noises.unshift('swish');
//Using **bracket syntax** again, add another element to the end of `noises`.
//should work with any amount of elements in noises / no hard coding
noises[noises.length] = 'splash';
//`console.log` the length of `noises`
console.log(noises.length);
//`console.log` the last element in `noises` again without hard coding the index.
console.log(noises[noises.length - 1]);
//console.log the whole array
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal['noises'] = noises; 
//Using any syntax add another noise to the `noises` property on `animal`.
animal.noises.push('i am a nice shark');
//console.log animal
console.log(animal);
/* *******************************************************************
 * Step 4 - Reviews
 *
 * 1. What are the different ways you can access properties on objects?
      dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *    bracket notation accessing index
 
 * *******************************************************************
 */
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */
//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
// `push` our `animal` that we created to `animals`.
animals.push(animal);
// `console.log` `animals`. What does it look like?
// console.log(animals);
// Create a variable called `duck` and assign it to the data:
//   - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
var duck = {
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
// `push` `duck` to `animals`
animals.push(duck);
// `console.log` `animals`. What does it look like?
console.log(animals);
//  Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var otter = {};
otter.species = "otter";
otter.name = 'Brad';
otter.noises = [];
otter.noises.push('hah!', 'growl', 'hiss', 'chirp');
animals.push(otter);
var cat = {};
cat.species = 'bobcat';
cat.name = 'Robert';
cat.noises = [];
cat.noises.push('hiss', 'growl')
animals.push(cat);
//  `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Choose a data structure for this **list** of friends.
    // Array
//  Write a comment in your code that explains why you chose this data structure.
    // Arrays are useful for lists, and can contain objects with properties of their own.
//  Create a variable called `friends` and assign it to the data structure that you chose.
var friends = [];
//  Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  Write a function called `getRandom` that takes our `animals` array (parameter) and returns the `index` of a random element using `Math.random`
function getRandom(array) {
    
     //create two bindings 
        //max (end of array)
        //min (beginning of array)
     var max = array.length - 1;
     var min = 0;
     
     //return a random index in a given array 
     return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
// console.log(getRandom(animals));
//using a random index from getRandom(animals); 
var randomIndex = getRandom(animals);
//access an animal at this random index
var newFren = animals[randomIndex];
//push rand. animals' name to friends []
friends.push(newFren.name);
//  `console.log` `friends`.
console.log(friends);
//  add `friends` as a **property** named `friends` on one of the animals in `animals`
animals[0].friends = friends;
//  `console.log` your work.
console.log(animals);


// //note: how would you assign your newFren name stored in friends
// //to an animal also at random
// // var randomIndex2 = getRandom(animals);
// // console.log(animals[randomIndex2].friends = friends);
// //need a function with conditional, so you can't befriend yoursel
// function excludeSelfAddFriend(array) {
//     //include bindings inside function
//     var randomIndex2 = getRandom(animals);
//     if (array.name !== array[randomIndex2].name) {
//       console.log(animals[randomIndex2].friends = friends); 
//     }
// }
// excludeSelfAddFriend(animals);
// console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
