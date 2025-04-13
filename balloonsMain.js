balloonButton = document.getElementById("mainControl");
balloonButton.addEventListener("click", blowBalloon);

const countDisplay = document.getElementById("inventoryQuantity")
let balloonInventory = 0;
let heliumSupply = 100
const terminalPrinter = document.getElementById("logMsg");
const heliumDisplay = document.getElementById("heliumSupply")

let inflateRate = 1

const MAX_LOGS = 5; // Optional: limit number of messages

function logMessage(text) {
    const message = document.createElement("div");
    message.classList.add("logMessage");
    message.textContent = text;

    if (terminalPrinter.children.length >= MAX_LOGS) {
        terminalPrinter.firstChild.remove();
    }

    terminalPrinter.appendChild(message);

    setTimeout(() => {
        message.style.opacity = "0";
    }, 300);

    setTimeout(() => {
        message.remove();
    }, 2100);
}



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
            logMessage("One (1) balloon added to inventory.");
        } else {
            heliumSupply -= inflateRate;
            heliumDisplay.innerHTML = heliumSupply;
            logMessage("Helium Leak! No balloon yielded.");
        }
    }
    else {
        logMessage("Not enough helium gas. Purchase more to continue!");
    }
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
        logMessage("Five (5) balloons added to inventory.");

    }
    else {
        logMessage("Not enough helium gas. Purchase more to continue!");
    }

};


let availableFunds = 100
let earningsTotal = 100


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
        logMessage("Success! Purchased 50 cu. ft. of Helium Gas for $25");
    }
    else {
        logMessage("Insufficient Funds.");
    }

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

let deliveryCooldown = 10


const sellButton = document.getElementById("sellBalloons50");
sellButton.addEventListener("click", sellBalloons50);

function sellBalloons50() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (balloonInventory >= 50) {
        availableFunds += 75;
        earningsTotal += 75;
        balloonInventory -= 50;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

        logMessage(`Sold 50 balloons from inventory for $75. Delivery service will return in ${deliveryCooldown} seconds.`);

        disableButtonWithCountdown(sellButton, deliveryCooldown);

        if (earningsTotal >= 1000) {
            sellButton3.removeAttribute("style");
            logMessage("$1000 total earnings reached. New bulk delivery unlocked.");
        }


    }
    else {
        logMessage(`Insufficent inventory to fulfill order. Delivery service will return in ${deliveryCooldown * 2} seconds`);

        disableButtonWithCountdown(sellButton, deliveryCooldown * 2);

    }
};



const sellButton2 = document.getElementById("sellBalloons200");
sellButton2.addEventListener("click", sellBalloons200);



const sellButton3 = document.getElementById("sellBalloons1000");
sellButton3.addEventListener("click", sellBalloons1000);

function sellBalloons200() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (balloonInventory >= 200) {
        availableFunds += 300;
        earningsTotal += 300;
        balloonInventory -= 200;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

        logMessage(`Sold 200 balloons in bulk from inventory for $300. Delivery truck will return in ${deliveryCooldown * 2} seconds`);

        disableButtonWithCountdown(sellButton2, deliveryCooldown * 2);

        if (earningsTotal >= 1000) {
            sellButton3.removeAttribute("style");
            logMessage("$1000 total earnings reached. New bulk delivery unlocked.");
        }


    }
    else {
        logMessage(`Insufficent inventory to fulfill order. Delivery service will return in ${deliveryCooldown * 3} seconds.`);

        disableButtonWithCountdown(sellButton2, deliveryCooldown * 3);

    }
};


function sellBalloons1000() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (balloonInventory >= 1000) {
        availableFunds += 1800;
        earningsTotal += 1800;
        balloonInventory -= 1000;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

        logMessage(`Sold 1000 balloons in bulk from inventory for $1800. Delivery truck will return in ${deliveryCooldown * 3} seconds`);

        disableButtonWithCountdown(sellButton3, deliveryCooldown * 3);


    }
    else {
        logMessage(`Insufficent inventory to fulfill order. Delivery service will return in ${deliveryCooldown * 4} seconds.`);

        disableButtonWithCountdown(sellButton3, deliveryCooldown * 4);

    }
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

        logMessage("Electric Inflater purchased for $150. Balloons now only take 0.5 cu. ft. of Helium Gas to inflate");
    }
    else {
        logMessage("Insufficient Funds.");
    }
}


const hireWorkerButton = document.getElementById("buyBalloonWorker");

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

        hireWorkerButton.removeAttribute("style");

        logMessage("Five-Hose Balloon Super Inflater purchased for $1000. Balloons can now be inflated five (5) at a time.");
    }
    else {
        logMessage("Insufficient Funds.");
    }
}

let staffRate = 1000;
let workerStatus = null

hireWorkerButton.addEventListener("click", hireWorker);

function balloonWorkerLoop() {
    if (workerStatus !== null) return;
    setInterval(() => {
        blowBalloon();
    }, staffRate);
}

function hireWorker() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (availableFunds >= 2000) {
        availableFunds -= 2000;
        balloonWorkerLoop();
        hireWorkerButton.disabled = true;
        oilChangeButton.removeAttribute("style");
        logMessage("Worker hired. They will now help inflate balloons automatically.");
        if (terminalPrinter.children.length >= MAX_LOGS) {
            terminalPrinter.firstChild.remove();
        }
    }

    else {
        logMessage("Insufficient Funds.");
    }
}


const oilChangeButton = document.getElementById("oilChange");
oilChangeButton.addEventListener("click", oilChange);

function oilChange() {
    if (availableFunds >= 3000) {
        availableFunds -= 3000
        fundsDisplay.innerHTML = availableFunds
        oilChangeButton.disabled = true;
        deliveryCooldown /= 2;
        logMessage("Delivery cooldowns cut in half!");
    }
    else {
        logMessage("Insufficient Funds.")
    }
}