// Part 1

// Test code. This is functioning code that will work with the accompanying html page.

var myFirstVariable;

var myFirstFunction = function () {
  myFirstVariable = "You clicked the first Button";
  document.getElementById("myFirstExercise").innerHTML = myFirstVariable;
}

var mySecondFunction = function () {
  myFirstVariable = "Clicked the second button. This is a different string now!";
  document.getElementById("myFirstExercise").innerHTML = myFirstVariable;
}

// Part 2

// Include your functions below this comment











// Part 3

//This code is broken. Find out why it is not working correctly.

var myFirstBrokenFunction = function () {
  var myFirstBrokenVariable = "You clicked the first Button";
  document.getElementById("myFirstBrokenVariable").innerHTML = myFirstBrokenVariable;
}

var mySecondBrokenFunction = function () {
  var mySecondBrokenVariable = "Now it's working!";
  document.getElementById("mySecondBrokenVariable").innerHTML = mySecondBrokenVariable;
}
