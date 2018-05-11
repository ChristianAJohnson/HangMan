
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


function createletterboxes(word,hintphrase)
{	

	var guessWord = word.replace(/[a-z]/gi, "*"); // makes a variable called guest word which contains the word, but is replace with *
	var guessWord2 = guessWord.split("")
	var word2 = word.toUpperCase(); // turns string into upper case
	word2 = word2.split(""); // splits up string into an array
	var wrapper = document.createElement('div')
	wrapper.style.width = "90%";
	wrapper.style.margin = '0 auto'
	wrapper.style.border = '2px solid green'
	document.body.appendChild(wrapper)

	for(let i = 0;i<26;i++)
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
	            console.log(event.target.innerHTML)
		            for(i=0;i<word2.length;i++)
		            {	
			            if(event.target.innerHTML == word2[i])
			            {
			            	console.log("you pressed the letter " + word2[i])
			            	guessword2 = guessWord2.splice(i, 1, word2[i]); //replacing the guess word with all * with correct letter
			            	// guessword2 = guessword2.join(""); // i dont think you will need this to change array into string
			            	console.log(guessWord2)
			            }
			            else
			            {

			            }
			        }
	        })

	    }

	    var hintText = document.createElement("div")
	    hintText.style.width = "100px"
	    hintText.style.border = "2px solid blue"
	    hintText.className = "hintText"
	    hintText.innerHTML = hintphrase
	    wrapper.appendChild(hintText)

	    var guessText = document.createElement("div")
	    guessText.style.width = "50px"
	    guessText.style.border = "2px solid yellow"
	    guessText.className = "guessText"
	    guessText.innerHTML = guessWord
	    wrapper.appendChild(guessText)


	    console.log("The hint for this word is " + hintphrase)
	    console.log("Here is the guest word " + guessWord)
	    console.log("The original word is " + word )
	    console.log(word2)


}









