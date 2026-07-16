// Mouse Events

var hoverDiv = document.getElementById('hoverDiv');


hoverDiv.addEventListener('mouseenter', function() {
    this.innerHTML = "You See this Message";
});
    hoverDiv.addEventListener('mouseleave', function() {
    this.innerHTML = "Hover Me To See This Message";
});


// Keyboard Events

let input = document.querySelector("Input");
let log = document.getElementById("log")

input.addEventListener("keydown", logKey);


function logKey(e) {
    log.textContent += `${e.code}`;
}
