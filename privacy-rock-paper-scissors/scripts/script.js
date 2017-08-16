// Set starting life totals here
var playerLife = 5;
var hackerLife = 5;


var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);
var roundStarted = false;

updateScores();

var playerCardEls = document.querySelectorAll(".player-area .card");

for(var i = 0; i < playerCardEls.length; i++) {
  var playerCardEl = playerCardEls[i];
  playerCardEl.addEventListener("click",function(e){
    cardClicked(this);
  });
}

// document.querySelector(".player-area").addEventListener("click",function(e){
//   console.log("hello");
//   console.log(e.target)
// });


function cardClicked(cardEl) {


  if(roundStarted) {
    return;
  }

  cardEl.classList.add("played-card");
  roundStarted = true;

  // Wait 500ms to reveal the hacker power
  setTimeout(function(){
    revealHackerPower();
  },500)

  // Wait 750ms to reveal the player power
  setTimeout(function(){
    revealPlayerPower();
  },750)

  // Wait 1250ms to compare the card scoers
  setTimeout(function(){
    compareCards();
  }, 1250);
}

// Shows the power level on the player card
function revealPlayerPower(){
  var playerCard = document.querySelector(".played-card");
  var playerPowerEl = playerCard.querySelector(".power");
  playerPowerEl.style.display = "block";
}

// Shows the power level on the hacker card
function revealHackerPower(){
  var hackerCard = document.querySelector(".hacker-card");
  var hackerPowerEl = hackerCard.querySelector(".power");
  hackerPowerEl.style.display = "block";
}

function compareCards(){
  var playerCard = document.querySelector(".played-card");
  var playerPowerEl = playerCard.querySelector(".power");

  var hackerCard = document.querySelector(".hacker-card");
  var hackerPowerEl = hackerCard.querySelector(".power");

  var playerPower = parseInt(playerPowerEl.innerHTML);
  var hackerPower = parseInt(hackerPowerEl.innerHTML);

  var powerDifference = playerPower - hackerPower;

  if (powerDifference < 0) {
   // Player Loses
   playerLife = playerLife + powerDifference;
   hackerCard.classList.add("better-card");
   playerCard.classList.add("worse-card");
   document.querySelector(".player-stats .thumbnail").classList.add("ouch");
  } else if (powerDifference > 0) {
   // Player Wins
   hackerLife = hackerLife - powerDifference;
   playerCard.classList.add("better-card");
   hackerCard.classList.add("worse-card");
   document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
  } else {
   playerCard.classList.add("tie-card");
   hackerCard.classList.add("tie-card");
  }

  updateScores();

  if(playerLife <= 0) {
    gameOver("Hacker");
  } else if (hackerLife <= 0){
    gameOver("Player")
  }

  roundStarted = false;

  document.querySelector("button.play").removeAttribute("disabled");
}

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
    cards[i].querySelector(".power").style.display = "none";
    cards[i].classList.remove("worse-card");
    cards[i].classList.remove("better-card");
    cards[i].classList.remove("tie-card");
    cards[i].classList.remove("played-card");
    cards[i].classList.remove("prepared");
    cards[i].classList.remove("showCard");
  }


  var randomScenarioIndex = Math.floor(Math.random() * (scenarios.length));
  var scenario = scenarios[randomScenarioIndex];

  var hackerCard = scenario.hackerCard;
  var hackerCardEl = document.querySelector(".hacker-area .card");
  // Display the hacker card
  hackerCardEl.querySelector(".text").innerHTML = hackerCard.description;
  hackerCardEl.querySelector(".power").innerHTML = hackerCard.power;

  // Display the player cards

  var playerCards = scenario.playerCards;

  for(var i = 0; i < playerCards.length; i++) {
    var playerCard = playerCards[i];
    var playerCardEl = playerCardEls[i];

    playerCardEl.querySelector(".text").innerHTML = playerCard.description;
    playerCardEl.querySelector(".power").innerHTML = playerCard.power;
  }


  // Show all of the cards

    for(var i = 0; i < cards.length; i++) {
      var card = cards[i];
      card.classList.add("prepared");
      card.style.display = "block";

      setTimeout(function(card){
        return function() {
          card.classList.remove("prepared");
          card.classList.add("showCard");
        }
      }(card,i), i * 100);

      // setTimeout(function(){
      //   cards[i].style.display = "block";
      // },200);
    }




}

function opponentPlay(description, points) {

  this.description = description;
  this.points = points;

}
