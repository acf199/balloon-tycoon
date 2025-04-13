balloonButton = document.getElementById("mainControl");
balloonButton.addEventListener("click", blowBalloon);

const countDisplay = document.getElementById("inventoryQuantity")
let balloonInventory = 0;
let heliumSupply = 100
const terminalPrinter = document.getElementById("logMsg");
const heliumDisplay = document.getElementById("heliumSupply")

let inflateRate = 1

const MAX_LOGS = 5; // Optional: limit number of messages

function blowBalloon() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (heliumSupply >= inflateRate) {
        const randomNumber = Math.random();


        if (randomNumber < 0.97) {
            balloonInventory += 1;
            heliumSupply -= inflateRate;
            heliumDisplay.innerHTML = heliumSupply;
            countDisplay.innerHTML = balloonInventory;
            message.textContent = "One (1) balloon added to inventory.";
        } else {
            heliumSupply -= inflateRate;
            heliumDisplay.innerHTML = heliumSupply;
            message.textContent = "Helium Leak! No balloon yielded.";
        }
    }
    else {
        message.textContent = "Not enough helium gas. Purchase more to continue!"
    }

    // Trim log if too many messages
    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);
};

balloonButton5 = document.getElementById("fiveControl");
balloonButton5.addEventListener("click", blowFiveBalloons);

function blowFiveBalloons() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (heliumSupply >= inflateRate * 5) {

        balloonInventory += 5;
        heliumSupply -= inflateRate * 5;
        heliumDisplay.innerHTML = heliumSupply;
        countDisplay.innerHTML = balloonInventory;
        message.textContent = "Five (5) balloons added to inventory.";

    }
    else {
        message.textContent = "Not enough helium gas. Purchase more to continue!"
    }

    // Trim log if too many messages
    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);
};


let availableFunds = 100


heliumButton = document.getElementById("buyHelium");
heliumButton.addEventListener("click", buyHelium);
fundsDisplay = document.getElementById("funds")

function buyHelium() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (availableFunds >= 25) {
        availableFunds -= 25;
        heliumSupply += 50;
        heliumDisplay.innerHTML = heliumSupply
        fundsDisplay.innerHTML = availableFunds
        message.textContent = "Success! Purchased 50 cu. ft. of Helium Gas for $25"
    }
    else {
        message.textContent = "Insufficient Funds."
    }

    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);
}


function disableButtonWithCountdown(button, seconds) {
    let remaining = seconds;
    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = `${originalText} (${remaining})`;

    const countdown = setInterval(() => {
        remaining--;
        if (remaining > 0) {
            button.textContent = `${originalText} (${remaining})`;
        } else {
            clearInterval(countdown);
            button.textContent = originalText;
            button.disabled = false;
        }
    }, 1000);
}



const sellButton = document.getElementById("sellBalloons50");
sellButton.addEventListener("click", sellBalloons50);

function sellBalloons50() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (balloonInventory >= 50) {
        availableFunds += 75;
        balloonInventory -= 50;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

        message.textContent = "Sold 50 balloons from inventory for $75."

        disableButtonWithCountdown(sellButton, 10);


    }
    else {
        message.textContent = "Insufficent inventory to fulfill order. Delivery service will return in 30 seconds"

        disableButtonWithCountdown(sellButton, 15);

    }

    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);
};



const sellButton2 = document.getElementById("sellBalloons200");
sellButton2.addEventListener("click", sellBalloons200);

function sellBalloons200() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (balloonInventory >= 200) {
        availableFunds += 300;
        balloonInventory -= 200;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

        message.textContent = "Sold 200 balloons in bulk from inventory for $300. Delivery truck will return in 20 seconds"

        disableButtonWithCountdown(sellButton2, 20);


    }
    else {
        message.textContent = "Insufficent inventory to fulfill order. Delivery service will return in 40 seconds."

        disableButtonWithCountdown(sellButton2, 40);

    }

    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);
};




const electricBalloonInflater = document.getElementById("buyElectricInflater");
electricBalloonInflater.addEventListener("click", purchaseInflater);

function purchaseInflater() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (availableFunds >= 150) {
        availableFunds -= 150;
        inflateRate = 0.5;
        fundsDisplay.innerHTML = availableFunds;

        electricBalloonInflater.disabled = true;

        message.textContent = "Electric Inflater purchased for $150. Balloons now only take 0.5 cu. ft. of Helium Gas to inflate"
    }
    else {
        message.textContent = "Insufficient Funds."
    }

    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);


}




const superBalloonInflater = document.getElementById("buySuperInflater");
superBalloonInflater.addEventListener("click", purchaseSuperInflater);
superButton = document.getElementById("fiveControl")

function purchaseSuperInflater() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (availableFunds >= 1000) {
        availableFunds -= 1000;
        fundsDisplay.innerHTML = availableFunds;
        superButton.removeAttribute("style")



        superBalloonInflater.disabled = true;

        message.textContent = "Five-Hose Balloon Super Inflater purchased for $1000. Balloons can now be inflated five (5) at a time."
    }
    else {
        message.textContent = "Insufficient Funds."
    }

    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    // Trigger fade after short delay
    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    // Remove message after it fades out
    setTimeout(() => {
        message.remove();
    }, 2100);


}