var playerwin = 0;
var compwin = 0;
var ties = 0;
const rounds = 3;
var GameEnd = false;
const paper = document.getElementById("paper_btn");
const scissors = document.getElementById("scissors_btn");
const  score = document.getElementById("score");
const finalresult = document.getElementById("finalresult");
const game = document.getElementById("Game");
const refresh = document.getElementById("refreshtext");
const rock = document.getElementById("rock_btn");
var userwins = 0;
var compwins = 0;
var ties = 0;

Listeners();

function Listeners (){
	rock.addEventListener("click", function() {
		Round("rock");
	});
	
	paper.addEventListener("click", function() {
		Round("paper");
	});
	scissors.addEventListener("click", function() {
		Round("scissors");
	});
}
function ComputerChoice(){
	var comp = Math.floor(Math.random() * 3); /*window.crypto.getRandomValues check it out later*/
	let options = ["rock","paper","scissors"];
	console.log("comp: " + options[comp]);
	return options[comp];
}

function Round(choice){	
	
		if(GameEnd == false){
			
			var compchoice = ComputerChoice();
			let result = Winner(choice, compchoice);
			if(result == "win"){
				userwins++;
			}else if(result == "lose"){
				compwins++;
			}else{
				ties++;
				finalresult.innerHTML = "It's a tie! You both got: "+choice;
			}
				score.innerHTML = "Player has " + userwins + " wins and computer has " +
				 compwins + " wins. Total ties " + ties + ".";
			if((userwins == 3) || (compwins == 3)){
				GameEnd = true;
				btnremovefunction();
			if(userwins > compwins){
					refresh.innerHTML = "You have won the game";
			}else{
					refresh.innerHTML = "The computer won. Good luck next time!";
			}
			}
		}
}

function Winner(Player, Computer){
	if(Player == Computer){	/*There's no need of === since we already know the bot variables share type*/
		return "tie";	
	}else if((Player == "scissors" && Computer == "paper") ||
		     (Player == "rock" && Computer == "scissors") ||
		     (Player == "paper" && Computer == "rock")){
		return "win";
	}else if((Computer == "scissors" && Player == "paper") ||
		     (Computer == "rock" && Player == "scissors") ||
		     (Computer == "paper" && Player == "rock")){
		return "lose";
	}
}

function btnremovefunction(){
	rock.disabled = true;
	paper.disabled = true; 
	scissors.disabled = true;

	rock.style.opacity = .5;
	paper.style.opacity = .5;
	scissors.style.opacity = .5;
}