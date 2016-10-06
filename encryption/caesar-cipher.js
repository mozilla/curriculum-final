//From MattC.K on codepen.io, http://codepen.io/MattCK/pen/OyQyxE

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

function runCipher(){
  var cipherText = $('#cypher').val();
  var cipherOffset = $('#offset').val();
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for(i=0; i<cipherText.length; i++){
     var letter = cipherText[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();

     var index = alphabet.indexOf(letter);
     if(index == -1){
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }

  $('#finish').val(cipherFinish);
}

$(document).ready(function() {
  $('#cypher').keypress(function(){
    setTimeout(function(){ runCipher(); },20);
  });
  $('#cypher').blur(function(){
    runCipher();
  });
  $('#offset').change(function(){
    setTimeout(runCipher(),20);
  });

});
