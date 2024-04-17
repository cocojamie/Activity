var card=$(".card"); //variable for card class
$(card).on("mousemove",(function(e){ //being used as an event listener for a mouse move event on a card element.vent
  var xAxis=(window.innerWidth /2 - e.pageX) / 20; //rotating the element into x axis
  var yAxis=(window.innerHeight /2 - e.pageY) / 20; //rotating the element into y axis
  card.attr("style","transform: rotateY("+xAxis+"deg) rotateX("+yAxis+"deg);") //The rotation is applied to the card using the transform property and the rotateY and rotateX functions.

  $(card).on("mouseleave",(function(){ //mouse leave event listener that resets the rotation of the card back to the default value using the attr function.
    card.attr("style","transform: all 0.5 ease"); //same code as for javascript vanilla
    card.attr("style","transform: rotateY(0deg) rotateX(0deg)") // rotation of the card
  }));
}));