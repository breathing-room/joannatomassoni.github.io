/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, 
* we can use variables.  Variables are named identifiers that can point to 
* values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  
* Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, 
* followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: 
* declaration and initialization (or assignment).
*
* 3. There three keywords we can use to create a variable-- var, let, and const.
*
*/

// 1. declaration //
var myName;

/*
*
* At the declaration phase, the variable myName has the value undefined 
* because we have NOT initialized it to anything. 
* Declared variables are processed by JavaScript before any code is executed (hoisting).
*
*/

console.log(myName); // prints => undefined
// console.log(unDeclaredVariable); // ReferenceError: variable has not been declared

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// We can assign and re-assign anything with var and let; not so with const //
var myVariable = 1;
myVariable = true;
myVariable = "someString";



// 4. var vs let vs const
/*
* Variables declared with var and let can be reassigned; const cannot.
*
* Var is function scoped, meaning if a var variable is declared within a function, 
* only the function can access the var variable.
* When a var variable is declared in a loop or an if/else statement, 
* however, they are global in scope--
* other pieces of code have access to them.
*
* const and let were introduced in ES6. const is an immutable variable.
*
* let and const variables are more restrictive. They are block scoped, 
* meaning they are only accessible inside whatever block of code
* inside of which they've been declared.
*
*/

// var a = "ruth";
// a = "less"; // valid <-- var values can be reassigned
// let b = "tom";
// b = "orrow"; // valid <-- let values can be reassigned
// const c = "when";
// c = "ever"; // error <-- const values cannot be reassigned


function myFunction() {
    var x = 0;
    let y = 20;
    const z = 294;
}

// x, y, and z are all only accessible inside of myFunction()


if (true) {
    var x = 24;
    let y = 12;
    const z = 214;
}

// console.log(x, y, z);
// x is accessible because it was declared with var
// y and z are inaccessible here because they were declared with let and const


// 5. Hoisting
/* 
* var (and function) declarations are hoisted to top of program, meaning that before any 
* code is run, the program recognizes all function and var declarations. It can therefore make use
* of any declared var and function variables, even if they were declared on a later line than the line on which the 
* reference takes place.
*
* Hoisted variables do not take into account any initialization-- they are undefined.
*
* Best practice is to declare/initialize a variable before using it in code.
*
*/

console.log(myVariable); // prints undefined, not ReferenceError. 
// Program recognizes variable declaration but does not store its initialization from line 95.
var myVariable = "Weee!";
console.log(myVariable); // prints "Weee!";