var elements = document.querySelectorAll(".card *");
var tooltipEl = document.querySelector(".tooltip");

for(var i = 0; i < elements.length; i++) {
  var el = elements[i];

  el.addEventListener("mouseenter", function(e){
    e.stopPropagation();
    showTip(this);
  });

  el.addEventListener("mouseleave", function(e){
    hideTip(this);
  });
}

document.addEventListener("mousemove",function(e){
  var x = e.screenX;
  var y = e.screenY;
  positionTip(x,y);
});

function positionTip(x,y){
  tooltipEl.style.left = x + 10 + "px";
  tooltipEl.style.top = y - 150 + "px";
}

function showTip(el){
  if(!el.hasAttribute("tooltip")) { return }
  var tooltipText = el.getAttribute("tooltip");
  tooltipEl.style.display = "block";
  tooltipEl.innerText = tooltipText;
}

function hideTip(el){
  if(!el.hasAttribute("tooltip")) { return }
  tooltipEl.style.display = "none";
}

