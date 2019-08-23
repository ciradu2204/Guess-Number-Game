

var computerGuess;
var userGuessLog =[];
var attempts = 0; 
var maxGuesses=10;

function gameEnded(){
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('easyBtn').style.display= 'none';
    document.getElementById('hardBtn').style.display="none";

    //everytime the game is over, the input will not take other input
    document.getElementById('inputBox').setAttribute('readonly', 'readonly')
}

function easyMode(){

    maxGuesses=10
    document.getElementById('easyBtn').className= 'activeButton';
    document.getElementById('hardBtn').className="";
}

function hardMode(){
    maxGuesses=5
    document.getElementById('easyBtn').className= '';
    document.getElementById('hardBtn').className="activeButton";
}

function init(){
    computerGuess= Math.floor(Math.random()* 100 +1);

    document.getElementById('newGameButton').style.display= 'none';
    // console.log(computerGuess);
}

function newGame(){

    window.location.reload();
}

function compareGuess(){

    var userGuess= "" + document.getElementById('inputBox').value;

    userGuessLog.push(userGuess);
    document.getElementById('guessLog').innerHTML = userGuessLog;
    // console.log(userGuess);

    attempts++
    document.getElementById('attempts').innerHTML= attempts;


if(userGuessLog.length < maxGuesses) {
    if(userGuess>computerGuess){

        document.getElementById('textOutput').innerHTML= 'Your Guess is too high'+ '<br> the number was ' + computerGuess;
        document.getElementById('inputBox').value="";
         

        
    }else if(userGuess < computerGuess){
        document.getElementById('textOutput').innerHTML= 'Your Guess is too low' + '<br> the number was ' + computerGuess;
        document.getElementById('inputBox').value="";
      
    }else{
        document.getElementById('textOutput').innerHTML= 'Correct!' + ' you got in with '+ attempts + ' attempts ';  
        document.getElementById('inputBox').value="";
        document.getElementById('container').style.backgroundColor= 'green';
        gameEnded();

    }
    
     
} else{
    if(userGuess > computerGuess) {

        document.getElementById('textOutput').innerHTML ='You lose!'+ '<br> the number was ' + computerGuess;
        document.getElementById('inputBox').value="";
        document.getElementById('container').style.backgroundColor= '#e82c4e';
        gameEnded();

    }else if(userGuess <computerGuess){
        document.getElementById('textOutput').innerHTML = 'You lose!' + '<br> the number was ' + computerGuess;
        document.getElementById('inputBox').value="";
        document.getElementById('container').style.backgroundColor= '#e82c4e';
        gameEnded();
    }else{
        document.getElementById('textOutput').innerHTML = 'Correct! you got it in "+ attempts + " attempts ';
        document.getElementById('inputBox').value="";
        document.getElementById('container').style.backgroundColor= 'green';
        gameEnded();
    }
}
}
    





