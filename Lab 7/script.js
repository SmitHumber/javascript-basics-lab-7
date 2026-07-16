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

//Form Event

function formEvent(){

let form = document.getElementById("form");
let log = document.getElementById("log2");

function logSubmit(event) {
    log.textContent = `Form Submitted Completed: ${event.timeStamp}`;
    event.preventDefault();
}

form.addEventListener("sumbit", logSubmit);

}

// Focus and blur events

function validateCurrency(){
let currency = document.getElementById('currencyInput');
let currencyValue = parseInt(currency.value, 10);

if (currencyValue >= 50) {
    alert('Payment Comfirmed')
    currency.style.backgroundColor = 'green';
    console.log('Payment Comfirmed');
} else {
    alert('Not Enough Payment');
    currency.style.backgroundColor = 'red';
    console.log('Not Enough Payment');
}

}

// Event delegation:

let list = document.getElementById('numList');

list.addEventListener('click', function(event) {
    
    if (event.target.tagName === 'LI') {
    alert('You clicked: ' + event.target.textContent);
                
    event.target.style.backgroundColor = 'limegreen';
    }
});
    