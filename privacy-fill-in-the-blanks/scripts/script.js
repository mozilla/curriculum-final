//This function replaces the form with a story that uses the words typed into the empty boxes.

function fillBlanks() {

  //These variables grab the words from the boxes (or inputs).

  var firstWord = document.getElementById('box1').value;
  var secondWord = document.getElementById('box2').value;
  var thirdWord = document.getElementById('box3').value;
  var fourthWord = document.getElementById('box4').value;
  var fifthWord = document.getElementById('box5').value;
  var sixthWord = document.getElementById('box6').value;

  //This piece of the code replaces the div on the webpage called "story-space" 
  //with the story below, including the words grabbed by the variables up above.
  //It also adds a reest button to the page.

  document.getElementById("story-space").innerHTML = "<div><p style='font-size: 2.5em;'>On my way home, I have to pass " + firstWord + " security cameras, so I wear a hoodie that makes me look like a " + secondWord + " to avoid facial recognition. I also set my phone to " + thirdWord + " mode to keep it from leaking data. When I have to use my phone, I encrypt all of my messages with " + fourthWord + " so no one can read them if they get intercepted. When I go online, I set my browser to " + fifthWord + " mode so it doesn't keep track of my browsing history and I never enable " + sixthWord + " serivces so no one can use my phone to track me.</p><p><button onClick='resetPage()'>Reset</button></p></div>"
}

//This function reloads a fresh copy of the page when you click the "reset" button.

function resetPage() {

  window.location.reload(true);

  $(document).ready(function() {
    resetForms();
  });

  function resetForms() {
    document.forms['story'].reset();
  }

}
