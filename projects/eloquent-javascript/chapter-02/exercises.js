
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var hash = "";
  for (var i = 1; hash.length < num; i++) {
    hash += "#";
    console.log(hash);
  }
}

// triangles(8);

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // create array to store numbers and strings
  // loop through numbers from start to end
  for (var i = start; i <= end; i++) {
    // if i is divisible by 3 and 5, push "fizzbuzz" to result
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("fizzbuzz");
    } // else if i is divisible by 3, push "fizz" to result
    else if (i % 3 === 0) {
      console.log("fizz");
    } // else if i is divisible by 5, push "buzz" to result
    else if (i % 5 === 0) {
      console.log("buzz");
    } // else add number
      else {
        console.log(i);
    }
  } 
}

// console.log(fizzBuzz(1, 15));

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  // create variable of empty array that will store each row
 var board = [];
 // loop through columns
 for (var y = 1; y <= size; y++) {
   // declare row variable to store characters
   var row = "";
   // loop through row
   for (var x = 1; x <= size; x++) {
     // if placement of the row and column is even, add a space to the row
     if ((y + x) % 2 === 0) {
       row += " ";
     } // if placement of row and column is odd, add a hash 
      else {
       row += "#";
     }
     // after each row loop finishes, push that string to the board array
   } board.push(row);
   // join the strings in the array into a larger string connected by a newline character
 } board = board.join('\n');
 // return the board
  return board;
}

console.log(drawChessboard(8));

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
