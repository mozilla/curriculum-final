function playGame() {
  
  //myPlay function
  
  function myPlay(description, points) {
    
    this.description = description;
    this.points = points;
    
  }
  
  //opponentPlay function
  
  function opponentPlay(description, points) {
    
    this.description = description;
    this.points = points;
    
  }
  
  // myPlay objects
  
  var samePassword = new myPlay("I always use the same password.", -1);
  var differentPassword = new myPlay("I always use different passwords.", 0);
  var passwordManager = new myPlay("I use a password manager.", 1);
  
  // opponentPlay objects
  
  var gotThemAll = new opponentPlay("I cracked your password and got into all your accounts!", -1);
  var gotOne = new opponentPlay("I cracked a password and got into one account!", 0);
  var gotNothing = new opponentPlay("I got nothing.", 1);
  
  // Variables for playing Privacy Rock-Paper-Scissors
  
  var myPlays  = [samePassword, differentPassword, passwordManager];
  var opponentPlays = [gotThemAll, gotOne, gotNothing];
  // var score = 0;
  // this.score = score;
  
  //Maths for playing Privacy Rock-Paper-Scissors
  
  var outcome = Math.round(Math.random()*3);
  this.outcome = outcome;

  var myOutcome = myPlays[this.outcome-1];
  var opponentOutcome = opponentPlays[this.outcome-1];
  
  this.myOutcome = myOutcome;
  this.opponentOutcome = opponentOutcome;
  
  if(this.outcome < 2){
    document.getElementById("results").innerHTML = "<div>You lose!</div>";
  }
  else if(this.outcome > 2) {
    document.getElementById("results").innerHTML = "<div>You win!</div>";
  }
  else {
    document.getElementById("results").innerHTML = "<div>It's a draw!</div>";
  }

  
  // What shows up on the webpage after each round
  
  document.getElementById("opponent-play-space").innerHTML = "<div>" + this.opponentOutcome.description + "</div>";
  document.getElementById("my-play-space").innerHTML = "<div>" + this.myOutcome.description + "</div>";
  // document.getElementById("score").innerHTML ="<div>" + this.score + "</div>";
  
}