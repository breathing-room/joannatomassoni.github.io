/*
* OPERATORS
*
* 0. Operators allow us to perform actions on our data-- specifically, assignment, 
* comparison, and arithmetic.
* These operations create new values, and are therefore expressions.
* Operands are the values that operators operate on.
*
* 1. Operators in JavaScript are either unary, binary, or ternary. 
* Unary operators take one operand, binary take two, 
* and ternay take three.
*
*/


// 1. Assignment operators (=)
/*
*
* Assignment operators are binary operators that assign a value (righthand operand) to the lefthand operand.
* = is the most basic assignment operator, but it can be combined with +, -, *, /, and more
* to create shorthand arithmetic operations.
*/


var a = 1; // assignment of 1 to a
var b = 2 + 4; // righthand side of expression is evaluated to 6, then assigned to b
a += 2; // 3


// 2. Arithmetic operators (+, -, *, /, %, **, --, ++) //
/*
*
* Arithmetic operators perform math on numeric values-- addition, subtraction, multiplication,
* division, modulus, exponentiation, incrementation, and decrementation.
*
* The modulus operator (%) returns the remainder of a division operation. 
*
* Order of operations in an expression that contains multiple operators-- 1. parentheses, 2. exponents,
* 3. multiplication, 4. division, 5. addition, 6. subtraction.
*
* Arithmetic operators are generally binary operators, meaning they need a lefthand and righthand operand 
* on either side.
*
* When the addition operator is used with strings, it concatenates the strings.
*
*/

3 + 4; // 7
4 - 1; //
(5 + 3) / 2; // 4;
4 % 2; // 0

"Hello" + " World"; // "Hello World"



// 3. Comparison operators (>, <, <=, >=, ==, ===, !=, !==) // 
/*
*
* Comparison operators are binary operators that compare two values in an expression.
* The expression returns a Boolean value, i.e. true or false
*
*/

4 > 5; // false
4 <= 5; // true
"abc" < "zxy"; // true

/*
* == and != loosely compare two values. If the values are of different types, 
* the program will coerce one value to match the datatype of the other, 
* and then run the comparison.
*/

'2' == 2; // true

/*
* === and !== strictly compare two values, meaning they evaluate to false
* if the two operands are not of the same type.
*/

'3' === '3'; // true
'3' === 3; // false



// 4. Logical operators (&&, ||, !) //
/*
* && --> both sides of the logical and opeator must be true for it to evaluate to true 
* || --> at least one side of the logical or operator must be true for it to evaluate to true 
* ! --> unary, the logical not operator. It returns false if the expression evalutes to true,
* and returns true if the expression evaluates to false. It converts non-Boolean values 
* to Boolean before negating.
*/

3 == '3' && 5 == 4; // false
3 == '3' || 5 ==4; // true

!true; // false
!false; // true
!("this is a string that exists"); // false <-- the string has a truthy value since it exists.
!0; // true <-- converts 0 to its Boolean equivalent, false, then negates that, resulting in true.


// 5. Unary operators (typeof, !, -) //
/*
* Unary operators take just one operand. 
*
* typeof returns the a string representing the datatype of the operand. Mostly useful for
* numbers, strings, boolean, and undefined datatypes. 
*
* (Using typeof on an array will return "object," since arrays are technically objects.
* Using the method Array.isArray() is a good way to test if something is an array.)
*
*/

/*
* ! is the logical not operator. It returns false if the expression evalutes to true,
* and returns true if the expression evaluates to false. It converts non-Boolean values 
* to Boolean before negating. (See examples above)
*/

/*
* - is the unary negation operator. It sits before an operand and negates it.
* It also coerces non-numeric values into numbers.
*/

/* 
* (++ and --, the incrementation and decrementation arithmetic operators, 
* are also unary operators.)
*/

typeof 42; // "number"
typeof "heyyyyyy"; // "string"
typeof true; // Boolean
typeof someDeclaredButUnassignedVariable; // "undefined"
typeof []; // "object"

-5; // -5
-("-2"); // 2
-false; // -0 <-- converts false to 0 then negates it
-true; // -1 <-- converts true to 1 and then negates it


// 6. Ternary operator //
/*
* The ternary operator takes three operands, 
* and is often used as a shorthand for if statements.  
*
*/

/*
* (a ? b : c) --> 
* a is the condition
* b is returned if a is true
* c is returned if a is false
*/

(false === true) ? 1 : 0; // returns 0