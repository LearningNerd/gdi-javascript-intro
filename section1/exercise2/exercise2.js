// Part 1

// Example code. This is the code to display how basic if/Else statements work

var trueFalseVariable = true;

var setTheVariable = function(){
  if (trueFalseVariable === true) {
    trueFalseVariable = false;
  } else {
    trueFalseVariable = true;
  }
  // Another way to write the above if/else statement is like this:
  // trueFalseVariable = !trueFalseVariable;

  document.getElementById("myFirstTrueFalseVariable").innerHTML = trueFalseVariable;
}

 var firstIfElseVariable;

var ifElseFunction = function () {
  if (trueFalseVariable) {
    firstIfElseVariable = "the trueFalseVariable is true";
  } else {
    firstIfElseVariable = "the trueFalseVariable is false";
  }
  document.getElementById("myFirstifElseVariable").innerHTML = firstIfElseVariable;
}

// Part 2

// Include your functions below this comment





















// Part 3

// this code is broken. Can you find out why?

var brokenFirstTrueFalseVariable = true;

var brokenSetTheVariable = function(){
  brokenFirstTrueFalseVariable = !brokenFirstTrueFalseVariable;
  document.getElementById("brokenFirstTrueFalseVariable").innerHTML = brokenFirstTrueFalseVariable;
}

var brokenFirstifElseVariable;

var brokenIfElseFunction = function () {
  if (brokenFirstTrueFalseVariable) {
    brokenFirstifElseVariable = "the brokenFirstifElseVariable is true";
  } else if (brokenFirstTrueFalseVariable) {
    brokenFirstifElseVariable = "the brokenFirstifElseVariable is false";
  }
  document.getElementById("brokenFirstifElseVariable").innerHTML = brokenFirstifElseVariable;
}
