

//document.ready

$(document).ready(function() {

	//declare global variables
	var wins = 0;
	var losses = 0;
	var goal = 0;
	var currentNumber = 0;
	var gems = [];



	// get a random number between 19 and 120
		goal = getRandNumber(19,120);
		$("#disGoalNum").text(goal);
		console.log(goal);

	//get a random number beteewn 1 and 12
		gems = $(".crystal");
		for (i=0; i < gems.length; i++){
			gems[i].butVal = getRandNumber(1,12);

		}
		console.log(gems);

	// display the calculated number
		function getCurrentResult{
		$("#disCurrentResult").text(currentNumber);
		}
		console.log(currentNumber);

	// function random number with 2 parameters
		function getRandNumber(minnum, maxnum){
			return Math.floor((Math.random() * maxnum ) + minnum);
		}


	//on click
		function onGemClick(){
			$(".crystal").click(function() {
			if (gems[0]) {
				return $('#butPurple').data('butVal');
			} else if (gems[1]) {
				return $('#butBlue').data('butVal');
			} else {
				return $('#butClear').data('butVal');
			}
			
		})};
		
		console.log(onGemClick());

		
	//function to add numbers
		function addNumbers() {
			currentNumber += onGemClick();
			getCurrentResult();
		}

	//if user wins 
	    //increment the win count variable
	    //reset the game
	    //display "You Win!"
	    // function youWin() {
	    // 	wins++;
	    // 	resetGame();
	    // 	$("").text(function())
	    // }

	 //if user loses  
	    //increment the lose count variable
	    //reset the game
	    //display "You Lose

	 // reset function
	 	// set global variables to 0
	 	// function resetGame(){
	 	// 	goal = 0;
	 	// 	currentNumber = 0;
	 	// }
	 	// generate random numbers
});