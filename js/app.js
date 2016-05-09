/*-------- to define global scope for var randomNum as its a local var in makeAGuess function---------*/
var randomNum;
var trackGuesses = 0;//the reason we define trackguesses out here is that we just one se the trackguesses only once. if we have in the function it will reset the value to zero

$(document).ready(function startGame(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--------- Start a new game -------*/
  	$(".new").click(function(){
  		clearText();
      makeARandomNum();
      resetVariable(); 
  	});


  	/*------ generates random number ----*/	
  	function makeARandomNum(){
  		/*----- by removing var in the randomNum I am setting a global variable in it. Had it had var randomNum in it, it would be local var------*/
  		randomNum = Math.floor(Math.random()*100)  + 1;
  		console.log(randomNum);
  	}

  	/*------- add the click handler -----------*/
  	$("#guessForm").submit(function(e){
  		e.preventDefault();//this is to prevent from refreshing the page when we click on the button
      var inputNumber = $('#userGuess').val();
  		if (validateNum(inputNumber) != false){
        enterAGuess(inputNumber);  
      }
      clearText(); 
      //trackGuesses++;
      //$("#count").text(trackGuesses);
      

  		//alert("Test");
  	});
  	makeARandomNum(1,100);
    

  /*----------- validating the user input -------------*/
  function validateNum(numberToBeValidated){
    if (numberToBeValidated % 1 != 0){
      alert("Please input an integer");
      return false;
    }
    else if (numberToBeValidated < 0 || numberToBeValidated > 100){
      alert("Please input the number between the range of 1 and 100");
      return false;
    }
    clearText();
    // else if for past guesses ask Casey for help about the past guesses else if 
  }  


  /*----------- defining the function for calculation of hot and cold app--------*/
  function enterAGuess(guessedNumbered){

    var differenceNum = Math.abs(guessedNumbered - randomNum);
    if (differenceNum == 0){
    	//alert("You did it!");
    	$("h2").text("You Won!");
    } 
  	else if (differenceNum >= 50){
  		$("h2").text("Colder");
  	}
    else if (differenceNum >= 30){
    	$("h2").text("Cold");
    }
    else if (differenceNum >=20){
    	$("h2").text("Hot");
    }
    else if (differenceNum >=10){
    	$("h2").text("Hotter");
    } 
    /*---- counting the number of guesses */
    countTrackGuesses(guessedNumbered);	
  }

  /*----------- to track the guesses -------*/
  function countTrackGuesses(numberGuessed) {
  	trackGuesses++;
    $("#count").text(trackGuesses);
    $('#guessList').append( "<li>" + numberGuessed + "</li>")
  }

  /*----- to clear text box --------*/
  function clearText(){
    $('#userGuess').val('');
  }


  /*---- reset variable ---*/
  function resetVariable(){
    $("h2").text("Make your Guess");
    trackGuesses = 0;
    $('#count').text(trackGuesses);
    $("#guessList li").remove();//removes the guessed numbered list
  }


});

