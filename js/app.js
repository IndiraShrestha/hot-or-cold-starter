/*-------- to define global scope for var randomNum as its a local var in makeAGuess function---------*/
var randomNum;

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
  		startGame();
  	});

  	/*------ generates random number ----*/	
  	function makeARandomNum(min,max){
  		/*----- by removing var in the randomNum I am setting a global variable in it. Had it had var randomNum in it, it would be local var------*/
  		randomNum = Math.floor(Math.random()*(max - min + 1)) + min;
  	}

  	/*------- add the click handler -----------*/
  	$("#guessForm").submit(function(e){
  		e.preventDefault();//this is to prevent from refreshing the page when we click on the button
  		enterAGuess(); //can i just call the function enterAGuess instead of writing the function (){enterAGuess}
  		//alert("Test");
  	});

  	
  	makeARandomNum(1,100);
});

/*----------- defining the function for calculation of hmmm.....*/
var inputNumber = $("#userGuess").val();

function enterAGuess (){
  	if (inputNumber == randomNum){
  		alert("You did it!");
  		return $("h2").text("You Won!");
  	} 
	  	return checkIceCold();
  	
  	 	return checkCold();
  	
  	 	return checkHot();
  	
}

 function checkIceCold(){
 	var iceColdNum = randomNum + 50
		if (inputNumber >= iceColdNum || inputNumber <= iceColdNum) {
			alert("Ice Cold");
			$("h2").text("Ice Cold");
		}
}

function checkCold(){
 	var coldNum = randomNum + 30
		if (inputNumber >= coldNum || inputNumber <= coldNum) {
			alert("Cold");
			$("h2").text("Cold");
		}
}

function checkHot(){
 	var hotNum = randomNum + 10
		if (inputNumber >= hotNum || inputNumber <= hotNum) {
			alert("Hot");
			$("h2").text("Hot");
		}
}
