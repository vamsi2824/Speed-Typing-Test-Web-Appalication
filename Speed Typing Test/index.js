let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let countdown = 1;



function displayres(json) {
    let interval = setInterval(function() {
        timer.textContent = countdown;
        countdown += 1;
    }, 1000);
    submitBtn.addEventListener("click", function() {
        let mainCountdown = countdown - 1;
        if (json.content === quoteInput.value) {
            let message = "You Compleated in " + mainCountdown + " seconds.";
            result.textContent = message;
            clearInterval(interval);
        }
        if (json.content !== quoteInput.value) {
            let message = "You typed incorrect sentence";
            result.textContent = message;
        }

    });
}



function display() {
    spinner.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(responce) {
            return responce.json();
        })
        .then(function(json) {
            spinner.classList.add("d-none");
            quoteDisplay.textContent = json.content;
            displayres(json);

        });
}
display();


resetBtn.addEventListener("click", function() {
    display();
    countdown = 0;
    quoteInput.value = "";
    result.textContent = "";



}); //cleared the time interval