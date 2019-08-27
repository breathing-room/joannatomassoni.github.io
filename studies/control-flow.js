/*
* CONTROL FLOW:
*
* 0. Control flow refers to how we can direct the order of operations within our code.
* Typically, code is executed line by line, top to bottom. 
* By adding features such as conditional statements and loops to our code,
* we can interrupt that top-to-bottom default flow, and order our code to do things based on 
* whether certain conditions are true or false. 
* For example, we only want to allow a user to access an email account
* *if* they enter the correct username and password. 
* *Else*, we deny them access.
* 
* 1. Conditional statements are used to evaluate if a particular condition is true or false--
* i.e. whether the condition is met or not. 
* Loops (for, while, do while) are a kind of control flow tool that run particular 
* code through a collection until a certain condition is no longer met.
*
*/



// 1. If //
/* 
* If is the keyword that marks the beginning of a conditional statement, in which
* we can tell our code block to run only if a particular condition is true.
* 
*/

// if statement, followed by condition in parentheses
if (true) {
// since condition is true, the code block in curly braces is run
    console.log(true);
}


// 2. Else-if // 
/*
* We can chain multiple conditional statements together in one if block using 
* the `else if` keyword.
* These chains can take you through many different possible conditions. 
* The code stops running once it lands on a true condition. 
* In the following code, we'd never get to line 53 
* because the condition in line 51 evaluates to true.
*/

var condition = true;
if (condition === false) {   
    // run this code
} else if (!condition) {
    // run this code
} else if (condition === true) { 
    // run this code // <-- this is the code that is run since the condition is true
} else {
    // run this code
}



// 3. Else //
/*
* Else keywords can be tagged onto the end of an if statement to run as a default
* in case none of the prior conditions are met.
*/

var condition = true;
if (condition === true) {   
    // run this code if condition is true
} else {
    // run this code if condition is false
}




// 4. Switch statements // 
/*
* Sometimes, if we have multiple conditions that we want to present our program, 
* it could be cleaner to use a switch statement.
* A switch statement takes an input expression (parameter?), 
* and runs through a series of case options, strictly comparing
* the case to the input, running code whenever the input matches the case. 
* Each case (except the last case) must be closed with a break expression, otherwise all code will run.
*
* Switch statements can include a default case if none of the other cases are met. 
* Default cases can be useful for error checking.
*/

// Switch syntax
function isOneThroughFive (num) {
    switch (num) {
        case 1:
        case 2:
        case 3:
            console.log("1, 2 or 3");
            break;
        case 4:
        case 5:
            console.log("4 or 5");
            break;
        default:
        console.log("Not one through five");
    }
}

/*
* 
* Control flow is also impacted by loops. (See section on Loops.)
*
*/