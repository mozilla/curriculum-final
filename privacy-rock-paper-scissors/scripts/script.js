var startingLife = 10
var playerLife = startingLife;
var hackerLife = startingLife;


var hackerCards = [
  {
    description : "I looked over your shoulder while you typed your password.",
    power : 4,
  },
  {
    description : "I looked over your shoulder while you typed your password.",
    power : 2,
  }
]

var playerCards = [
  {
    description : "I always use the same password.",
    power : 4,
  },
  {
    description : "I write my password down on a post-it",
    power : 2,
  }
]

function gameOver(winner){
  console.log("Winner is: " + winner);
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-message").innerHHTML = winner + " wins!";
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
    } else if (powerDifference > 0) {
      hackerLife = hackerLife - powerDifference;
      document.querySelector("#player-card").classList.add("better-card");
      document.querySelector("#hacker-card").classList.add("worse-card");
    } else {
      document.querySelector("#player-card").classList.add("tie-card");
      document.querySelector("#hacker-card").classList.add("tie-card");
    }

    // Update life totals
    document.querySelector(".player-stats .life-total").innerHTML = playerLife;
    document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

    document.querySelector(".hacker-stats .life-left").style.height = hackerLife / startingLife * 100 + "%";
    document.querySelector(".player-stats .life-left").style.height = playerLife / startingLife * 100 + "%";


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
