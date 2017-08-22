function fillBlanks() {
  var inputElements = document.querySelectorAll("input");

  document.querySelector("body").classList.add("show-story");

  for(var i = 0; i < inputElements.length; i++) {
    var inputElement = inputElements[i];
    var inputName = inputElement.getAttribute("name");
    var inputValue = inputElement.value || "???";
    document.querySelector(".story ." + inputName).innerText = inputValue;
  }
}


// Go back from the story to the form
function goBack() {
  document.querySelector("body").classList.remove("show-story");
}

// Clear the form fields
function resetForm(){
  document.querySelector("form").reset();
}
