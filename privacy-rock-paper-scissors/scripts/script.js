// Set starting life totals here
var playerLife = 5;
var hackerLife = 5;


var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);



updateScores();

var hackerCards = [
  {
    description : "I looked over your shoulder while you typed your password.",
    power : 5,
  },
  {
    description : "I looked over your shoulder while you typed your password.",
    power : 1,
  }
]

var playerCards = [
  {
    description : "I always use the same password.",
    power : 2,
  },
  {
    description : "I write my password down on a post-it",
    power : 2,
  }
]

function gameOver(winner) {
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-message").innerHTML = winner + " wins!";
  document.querySelector(".winner-section").style.display = "block";
}

function restartGame(){
  document.querySelector(".game-board").classList.remove("game-over");
  document.querySelector(".winner-section").style.display = "none";
  document.querySelector("#hacker-card").style.display = "none";
  document.querySelector("#player-card").style.display = "none";


  playerLife = playerStartLife;
  hackerLIfe = hackerStartLife;
}


function updateScores(){
  // Update life totals
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

  // Set player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0) {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height =  playerPercent + "%";

  var hackerPercent = hackerLife / hackerStartLife * 100
  if (hackerPercent < 0) {
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height =  hackerPercent + "%";


}

function playGame() {

  //Show cards
  var cards = document.querySelectorAll(".card");

  document.querySelector("button").setAttribute("disabled", "true");

  for(var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
    cards[i].classList.remove("worse-card");
    cards[i].classList.remove("better-card");
    cards[i].classList.remove("tie-card");
  }

  // Pick the player card
  var randomPlayerCardIndex = Math.floor(Math.random() * (playerCards.length));
  var playerCard = playerCards[randomPlayerCardIndex];
  document.querySelector("#player-card .text").innerHTML = playerCard.description;
  document.querySelector("#player-card .power").innerHTML = playerCard.power;

  // Remove the "ouch" class animation
  document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".player-stats .thumbnail").classList.remove("ouch");

  // Picks the hacker card
  var randomhackerCardIndex = Math.floor(Math.random() * (hackerCards.length));
  var hackerCard = hackerCards[randomhackerCardIndex];
  document.querySelector("#hacker-card .text").innerHTML = hackerCard.description;
  document.querySelector("#hacker-card .power").innerHTML = hackerCard.power;

  setTimeout(function(){
    for(var i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  },200)


  setTimeout(function(){
    var powerDifference = playerCard.power - hackerCard.power;

    if(powerDifference < 0) {
      playerLife = playerLife + powerDifference;
      document.querySelector("#hacker-card").classList.add("better-card");
      document.querySelector("#player-card").classList.add("worse-card");
      document.querySelector(".player-stats .thumbnail").classList.add("ouch");
    } else if (powerDifference > 0) {
      hackerLife = hackerLife - powerDifference;
      document.querySelector("#player-card").classList.add("better-card");
      document.querySelector("#hacker-card").classList.add("worse-card");
      document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
    } else {
      document.querySelector("#player-card").classList.add("tie-card");
      document.querySelector("#hacker-card").classList.add("tie-card");
    }

    updateScores();

    if(playerLife <= 0) {
      gameOver("Hacker");
    } else if (hackerLife <= 0){
      gameOver("Player")
    }

    document.querySelector("button").removeAttribute("disabled");

  },1000)








}

function opponentPlay(description, points) {

  this.description = description;
  this.points = points;

}
