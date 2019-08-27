/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Implement a function called `search` with a signature of `search(animals, name) { //... }` that:
//   - Takes a paramater representing an Array of `animals`.
//   - Takes a paramater representing a String, the name of an animal on which to perform a search.
function search(animals, name) {
    //   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
    //change name toLowerCase();
    name = name.toLowerCase();
    //create flag variable called result
    var result = null;
    //create a for loop that searches animals array
    for (var i = 0; i <= animals.length - 1; i++) {
        //modify each instance of name to lowercase (not parameter, but value of name key in animals)
        animals[i].name = animals[i].name.toLowerCase();
        //write a conditional to see if the animal.name exists 
        if (animals[i].name === name) {
            //change that name's first character to upper case and add rest of name str.
            animals[i].name = animals[i].name.charAt(0).toUpperCase() + animals[i].name.slice(1);
            //assign object to result variable
            result = animals[i];
        
            
        //   - Returns null if no animal with that name exists
        }
        
        
        
    }
    //return animals' object
  return result; 
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//   - Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
//   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//   - Otherwise do nothing.
//  2. Test it on the website.
function replace(animals, name, replacement) {
    //change name toLowerCase();
    name = name.toLowerCase();
    //create a for loop that searches animals array
    for (var i = 0; i <= animals.length - 1; i++) {
        //modify each instance of name to lowercase (not parameter, but value of name key in animals)
        animals[i].name = animals[i].name.toLowerCase();
        //write a conditional to see if the animal.name exists 
        if (animals[i].name === name) {
            //change that name's first character to upper case and add rest of name str.
            animals[i].name = animals[i].name.charAt(0).toUpperCase() + animals[i].name.slice(1);
            //replace it's entire object with the replacement object
            console.log(animals.splice(i, 1, replacement));
  }
 } 
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  1. Write a function called `remove` with a signature of `remove(animals, name)` that:
//   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//   - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.
function remove(animals, name) {
    //animals is array / name is a string
    //if an animal with name (parameter) is equal to animal name property
    //remove it
        //change name toLowerCase();
    name = name.toLowerCase();
    //create a for loop that searches animals array
    for (var i = 0; i <= animals.length - 1; i++) {
        //modify each instance of name to lowercase (not parameter, but value of name key in animals)
        animals[i].name = animals[i].name.toLowerCase();
        //write a conditional to see if the animal.name exists 
        if (animals[i].name === name) {
            //change that name's first character to upper case and add rest of name str.
            animals[i].name = animals[i].name.charAt(0).toUpperCase() + animals[i].name.slice(1);
            animals.splice(i, 1);
  }
 } 
  
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////.
function add(animals, animal) {
    //animals is array, animal is a new animal object
    //set up a conditional to check that animal object has a name property with a length > 0 
    //checks that the animal object has a species property with a length > 0
    if (animal.name.length > 0 && animal.species.length > 0) {
        //create a for loop through the animals array 
        //trying to find names to test
        //flag variable
        var result = null;
        for (var i = 0; i < animals.length; i++) {
            if (animal.name === animals[i].name) {
                return result; 
            } else {
                animals.push(animal);
            }
    }
    
    
 }
}
/**
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
