/**
 * 
 */

//$(document).ready(function() {


	//var choiceArray = ["Djokovic", "Tsonga", "Federer", "Nadal", "Murray", "Roddick", "Sampras", "Agassi", "Del Potro", "Wawrinka"];
	
	
	var choiceArray = new Array(4);
	
	choiceArray[0] = {name: "Roger Federer", elo: 1000};
	choiceArray[1] = {name: "Rafael Nadal", elo: 1000};
	choiceArray[2] = {name: "Novak Djokovic", elo: 1000};
	choiceArray[3] = {name: "Andy Murray", elo: 1000};
	
	//document.getElementById("choice1").innerHTML = choiceArray[0].name;
	
	function updateButtons(i, j) {
		document.getElementById("choice1").innerHTML = choiceArray[i].name + " " + choiceArray[i].elo;
		document.getElementById("choice2").innerHTML = choiceArray[j].name + " " + choiceArray[j].elo;
	};
	
	
	//Math for the elo ranking system. Description of mathematical formula found on wikipedia page for elo system.
	//Parameters are winner index (i), loser index (j).  
	function updateRank(i, j) {

			var estimWinElo, estimLosElo;
			var kFactor = 50;
			
			estimWinElo = 1/(1+Math.pow(10, (choiceArray[j].elo - choiceArray[i].elo)/400));
			//alert("estimWinElo " + estimWinElo)
			estimLosElo = 1/(1+Math.pow(10, (choiceArray[i].elo - choiceArray[j].elo)/400));
			//alert("estimLosElo " + estimLosElo)
			
			choiceArray[i].elo = choiceArray[i].elo + (kFactor * (1 - estimWinElo));
			choiceArray[j].elo = choiceArray[j].elo + (kFactor * (0 - estimLosElo));
			
	};
	
	
	//Random pair selector. Selects two integers >=0 and < choiceArray.length.
	//checks that selected integers were not the same number.
	//Returns an object of two integers. Allows the indexes to be passed as a single parameter
	function selectPair() {
		var i, j;
		var result;
		
		 i = Math.floor(Math.random() * 4);
		 j = Math.floor(Math.random() * 4);
		 
		 while (Boolean(i == j)) {
			 j = Math.floor(Math.random() * 4);	 
		 }
		 
		 result = {left: i, right: j};
		 
		 return result;
	}
	
	
	/*
	//First comparison loop
	//handles even number in array. 
	if (choiceArray.length%2 == 0){
		for (int i = 0; i < choiceArray.length; i += 2){
		choiceArray[i] = button1;
		choiceArray[i+1] =  button2;
		
		if (button1){
			choiceArray[i].rank++;
			choiceArray[i+1].rank--;
		}
		
		if(button2){
			choiceArray[i].rank--;
			choiceArray[i+1].rank++;
		}
		}//for
	}//if
	
	//handles odd number elements in array. Last element is not compared
	else {
		for (int i = 0; i < choiceArray.length-1; I += 2){
			choiceArray[i] = button1;
			choiceArray[i+1] =  button2;
			
			if (button1){
				choiceArray[i].rank++;
				choiceArray[i+1].rank--;
			}
			
			if(button2){
				choiceArray[i].rank--;
				choiceArray[i+1].rank++;
			}
		}
	}
	*/
//});