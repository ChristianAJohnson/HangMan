
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var guessText = document.createElement("div")
// var wrapper = document.getElementsByClassName('wrapper')[0];
var wrapper = document.createElement('div') // this creates a wrapper
var A = document.getElementsByClassName("A")[0];
var B = document.getElementsByClassName("B")[0];

function createletterboxes(word,hintphrase)
{	

	var guessWord = word.replace(/[a-z]/gi, "*"); // makes a variable called guestWord which contains the word, but is replaced with *
	var guessWord2 = guessWord.split("")
	var word2 = word.toUpperCase(); // turns string into upper case

	word2 = word2.split(""); // splits up string into an array


	
	// var wrapper = document.getElementsByClassName('wrapper')[0]; // this creates a wrapper
	wrapper.style.width = "90%";
	wrapper.style.margin = '0 auto'
	wrapper.style.border = '2px solid green'
	document.body.appendChild(wrapper)

	 	var hintText = document.createElement("div") // this box holds the hint phrase for the word
	    hintText.style.width = "auto"
	    hintText.style.border = "2px solid blue"
	    hintText.className = "hintText"
	    hintText.innerHTML = hintphrase
		wrapper.appendChild(hintText)

	    createGuessWord(guessWord)

	for(let i = 0;i<26;i++) // this for loop creates the button layout for the alphabet, thats why it only goes to 26 because their are 26 characers in the alphabet
	    {
	        var alpha = document.createElement('div')
	        alpha.style.width = '20px'
	        alpha.style.border = '2px solid red'
	        alpha.style.textAlign = 'center';
	        alpha.style.display = 'inline-block'
	        alpha.style.margin = '5px'
	        alpha.className = 'a' 
	        alpha.innerHTML = alphabet[i]
	        wrapper.appendChild(alpha)
	        var boxes = document.getElementsByClassName('a')
	        boxes[i].addEventListener('click', function(event)
	        {
	            // console.log(event.target.innerHTML)
		            for(i=0;i<word2.length;i++) // this checks to see if a letter on the button layout is pressed is any of the letters in the word you are trying to solve
		            {	
			            if(event.target.innerHTML == word2[i]) // if one of the 
			            {
			            	
			            	guessWord2.splice(i, 1, word2[i]); //replacing the * with the correct letter, but leaving all the other letters with *
			            	var guessWord4 = guessWord2.join("") // join guessword2, so that is goes from from an array into a string
			            	createGuessWord(guessWord4)
			            }
			            else
			            {

			            }
			        }
	        })

	    }

	    // console.log("The hint for this word is " + hintphrase)
	    // console.log("Here is the guest word " + guessWord)
	    // console.log("The original word is " + word )
	    // console.log(word2)

}


function createGuessWord(guessWord3)
{
	guessText.style.width = "auto"
	guessText.style.border = "2px solid yellow"
	guessText.className = "guessText"
	guessText.innerHTML = guessWord3
	wrapper.appendChild(guessText)
}









