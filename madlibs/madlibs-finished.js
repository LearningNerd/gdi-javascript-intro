// Make a JavaScript object for the HTML submit button
var submitButton = document.getElementById('submit');

// When submit button is clicked, run the showMadLib function
submitButton.addEventListener('click', showMadLib);

// Define the showMadLib function
function showMadLib() {

	// Get the values of HTML input boxes with the IDs "noun", "verb", "adjective"
	var noun = document.getElementById('noun').value;
	var verb = document.getElementById('verb').value;
	var adjective = document.getElementById('adjective').value;

	// Combine the above user inputs with our Mad Lib story

	var madLib = 'Bob robbed the bank with a deadly <span class="fill">' + noun + '</span>, but then his <span class="fill">' + adjective + '</span> girlfriend <span class="fill">' + verb + '</span> the cash!';
	// Make a JavaScript object for the HTML element with id "madlib"
	var madLibContainer = document.getElementById('madlib');

	// Change its contents to contain our madLib string, turning the string into HTML
	madLibContainer.innerHTML = madLib;
}
