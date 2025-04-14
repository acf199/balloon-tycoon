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

let profitMatrix = {"sell50": 75, "sell200": 375, "sell1000": 2250, "sell6000": 15750};

// Function to activate the profit boost
let profitBoost = false;
const profitBoostDuration = 10; // in seconds
let profitBoostTimer = null;
let profitBoostCountdown = null;

function activateProfitBoost() {
    if (!profitBoost) {
        const randomChance = Math.random();
        if (randomChance < 0.2) {
            profitBoost = true;
            let timeLeft = profitBoostDuration;

            const banner = document.getElementById('profitBoostBanner');
            const bannerMsg = document.getElementById('profitBoostMessage');

            logMessage(`💸 Profit Boost Activated! Earnings are doubled for ${profitBoostDuration} seconds.`);
            banner.classList.add('active');
            bannerMsg.textContent = `💸 Profit Boost Active! ${timeLeft} seconds remaining...`;

            // Countdown interval
            profitBoostCountdown = setInterval(() => {
                timeLeft--;
                bannerMsg.textContent = `💸 Profit Boost Active! ${timeLeft} seconds remaining...`;
                if (timeLeft <= 0) {
                    clearInterval(profitBoostCountdown);
                }
            }, 1000);

            // End profit boost after the duration
            profitBoostTimer = setTimeout(() => {
                profitBoost = false;
                logMessage("Profit Boost has ended.");
                banner.classList.remove('active');
                clearInterval(profitBoostCountdown);
            }, profitBoostDuration * 1000);
        }
    }
}




const sellButton = document.getElementById("sellBalloons50");
sellButton.addEventListener("click", sellBalloons50);

function sellBalloons50() {

    const message = document.createElement("div");
    message.classList.add("logMessage");


    if (balloonInventory >= 50) {
        if (profitBoost) {
            availableFunds += profitMatrix.sell50 * 2;
            earningsTotal += profitMatrix.sell50 * 2;
            logMessage(`Sold 50 balloons from inventory for $${profitMatrix.sell50 * 2}. Delivery service will return in ${deliveryCooldown} seconds.`);
        }
        else {
            availableFunds += profitMatrix.sell50;
            earningsTotal += profitMatrix.sell50;
            logMessage(`Sold 50 balloons from inventory for $${profitMatrix.sell50}. Delivery service will return in ${deliveryCooldown} seconds.`);
        }

        balloonInventory -= 50;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;


        disableButtonWithCountdown(sellButton, deliveryCooldown);

        if (earningsTotal >= 1000 && sellButton3.classList.contains("hidden")) {
            sellButton3.classList.remove("hidden");
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

        if (profitBoost) {
            availableFunds += profitMatrix.sell200 * 2;
            earningsTotal += profitMatrix.sell200 * 2;
            logMessage(`Sold 200 balloons from inventory for $${profitMatrix.sell200 * 2}. Delivery service will return in ${deliveryCooldown * 2} seconds.`);
        }
        else {
            availableFunds += profitMatrix.sell200;
            earningsTotal += profitMatrix.sell200;
            logMessage(`Sold 200 balloons from inventory for $${profitMatrix.sell200}. Delivery service will return in ${deliveryCooldown * 2} seconds.`);
        }

        balloonInventory -= 200;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

        disableButtonWithCountdown(sellButton2, deliveryCooldown * 2);

        if (earningsTotal >= 1000 && sellButton3.classList.contains("hidden")) {
            sellButton3.classList.remove("hidden");
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

        if (profitBoost) {
            availableFunds += profitMatrix.sell1000 * 2;
            earningsTotal += profitMatrix.sell1000 * 2;
            logMessage(`Sold 1000 balloons from inventory for $${profitMatrix.sell1000 * 2}. Delivery service will return in ${deliveryCooldown * 3} seconds.`);
        }
        else {
            availableFunds += profitMatrix.sell1000;
            earningsTotal += profitMatrix.sell1000;
            logMessage(`Sold 1000 balloons from inventory for $${profitMatrix.sell1000}. Delivery service will return in ${deliveryCooldown * 3} seconds.`);
        }

        balloonInventory -= 1000;
        fundsDisplay.innerHTML = availableFunds;
        countDisplay.innerHTML = balloonInventory;

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

        logMessage("Electric Inflator purchased for $150. Balloons now only take 0.5 cu. ft. of Helium Gas to inflate");
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
        superButton.classList.remove("hidden")



        superBalloonInflater.disabled = true;

        hireWorkerButton.classList.remove("hidden");

        logMessage("Five-Hose Balloon Super Inflator purchased for $1000. Balloons can now be inflated five (5) at a time.");
    }
    else {
        logMessage("Insufficient Funds.");
    }
}

let staffRate = 1000;
let workerStatus = null

hireWorkerButton.addEventListener("click", hireWorker);

function balloonWorkerLoop() {
    if (workerStatus !== null) {
        console.log("Worker already running");
        return;
    }
    workerStatus = setInterval(() => {
        bpsLabel.classList.remove("hidden")
        bpsValue.classList.remove("hidden");
        if (passiveBps == 5) {
            blowFiveBalloons();
        }
        else {
            blowBalloon();
        }
    }, staffRate);
}

let passiveBps = 1

const bpsLabel = document.getElementById("passiveBps");
const bpsValue = document.getElementById("bpsValue");

function hireWorker() {

    const message = document.createElement("div");
    message.classList.add("logMessage");

    if (availableFunds >= 2000) {
        availableFunds -= 2000;
        fundsDisplay.innerHTML = availableFunds
        passiveBps = 1;
        bpsValue.innerHTML = passiveBps;
        balloonWorkerLoop();

        hireWorkerButton.disabled = true;
        oilChangeButton.classList.remove("hidden");
        logMessage("Worker hired. They will now help inflate balloons automatically.");
        if (terminalPrinter.children.length >= MAX_LOGS) {
            terminalPrinter.firstChild.remove();
        }
    }

    else {
        logMessage("Insufficient Funds.");
    }
}


const trainingButton = document.getElementById("trainingManual");


const oilChangeButton = document.getElementById("oilChange");
oilChangeButton.addEventListener("click", oilChange);

function oilChange() {
    if (availableFunds >= 3000) {
        availableFunds -= 3000
        fundsDisplay.innerHTML = availableFunds
        oilChangeButton.disabled = true;
        deliveryCooldown /= 2;
        trainingButton.classList.remove("hidden");
        logMessage("Delivery cooldowns cut in half!");
    }
    else {
        logMessage("Insufficient Funds.")
    }
}

trainingButton.addEventListener("click", trainingManual)

function trainingManual() {
    if (availableFunds >= 4000) {
        availableFunds -= 4000
        fundsDisplay.innerHTML = availableFunds
        trainingButton.disabled = true;
        passiveBps = 5
        bpsValue.innerHTML = passiveBps;
        // trainingButton.classList.remove("hidden"); FOR ADDING NEW UPGRADE
        logMessage("Workers can now use the super inflator. Bps increased.");
    }
    else {
        logMessage("Insufficient Funds.")
    }
}

document.getElementById("exportSave").addEventListener("click", exportSave);

function exportSave() {
    const saveData = {
        balloonInventory,
        heliumSupply,
        availableFunds,
        earningsTotal,
        inflateRate,
        deliveryCooldown,
        workerHired: hireWorkerButton.disabled,
        superInflater: superBalloonInflater.disabled,
        electricInflater: electricBalloonInflater.disabled,
        fiveButtonVisible: !superButton.classList.contains("hidden"),
        workerIntervalActive: workerStatus !== null,
        oilChangePurchased: oilChangeButton.disabled,
        trainingManualPurchased: trainingButton.disabled
    };

    const blob = new Blob([JSON.stringify(saveData)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "balloon_tycoon_save.json"; // The name of the file that will be downloaded
    a.click(); // Trigger the download
}


document.getElementById("importSave").addEventListener("click", importSave);

function importSave() {
    const fileInput = document.getElementById("importFile");
    const file = fileInput.files[0]; // Get the file that the user uploaded

    if (!file) {
        alert("Please select a save file to import.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result); // Parse the JSON data

            // Load the saved game state
            balloonInventory = data.balloonInventory;
            heliumSupply = data.heliumSupply;
            availableFunds = data.availableFunds;
            earningsTotal = data.earningsTotal;
            inflateRate = data.inflateRate;
            deliveryCooldown = data.deliveryCooldown;

            // Update the UI with the loaded data
            countDisplay.textContent = balloonInventory;
            heliumDisplay.textContent = heliumSupply;
            fundsDisplay.textContent = availableFunds;

            // Restore other game states like buttons, etc.
            if (data.workerHired) {
                hireWorkerButton.classList.remove("hidden"); // make it visible
                hireWorkerButton.disabled = true;
                balloonWorkerLoop();
                document.getElementById("passiveLabel").classList.remove("hidden");
                document.getElementById("passiveRate").classList.remove("hidden");
            }


            if (data.superInflater) {
                superBalloonInflater.disabled = true;
            }

            if (data.electricInflater) {
                electricBalloonInflater.disabled = true;
            }

            if (data.fiveButtonVisible) {
                superButton.classList.remove("hidden"); // Show the five balloons button
            }

            if (data.oilChangePurchased) {
                oilChangeButton.disabled = true;
                deliveryCooldown /= 2
            }

            if (data.superInflater) {
                hireWorkerButton.classList.remove("hidden");
            }

            if (data.workerHired) {
                oilChangeButton.classList.remove("hidden");
            }

            alert("Save imported successfully!");
        } catch (error) {
            alert("Failed to import save. Please ensure the file is valid.");
        }
    };

    reader.readAsText(file); // Read the file as text
}


let resetting = false;


document.getElementById("resetGame").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset your progress?")) {
        resetting = true;

        localStorage.removeItem("balloonTycoonSave");

        // Reset state
        balloonInventory = 0;
        heliumSupply = 100;
        availableFunds = 100;
        earningsTotal = 100;
        inflateRate = 1;
        deliveryCooldown = 10;

        sellButton3.classList.add("hidden");
        oilChangeButton.classList.add("hidden");
        hireWorkerButton.classList.add("hidden");

        if (workerStatus) {
            clearInterval(workerStatus);
            workerStatus = null;
        }

        countDisplay.textContent = balloonInventory;
        heliumDisplay.textContent = heliumSupply;
        fundsDisplay.textContent = availableFunds;

        setTimeout(() => {
            location.reload();
        }, 200);
    }
});


const manualSave = document.getElementById("saveGame");
manualSave.addEventListener("click", saveGame);


function saveGame() {
    if (resetting) return; // prevent saving on reset

    console.log("Saving game...");
    const saveData = {
        balloonInventory,
        heliumSupply,
        availableFunds,
        earningsTotal,
        inflateRate,
        deliveryCooldown,
        passiveBps,
        workerHired: hireWorkerButton.disabled,
        superInflater: superBalloonInflater.disabled,
        electricInflater: electricBalloonInflater.disabled,
        fiveButtonVisible: !superButton.classList.contains("hidden"),
        workerIntervalActive: workerStatus !== null,
        oilChangePurchased: oilChangeButton.disabled,
        trainingManualPurchased: trainingButton.disabled
    };

    localStorage.setItem("balloonTycoonSave", JSON.stringify(saveData));
    logMessage("Saving progress...")
}

function loadGame() {
    const saved = localStorage.getItem("balloonTycoonSave");
    if (!saved) {
        // Set default visibility state
        hireWorkerButton.classList.add("hidden");
        superButton.classList.add("hidden");
        oilChangeButton.classList.add("hidden");
        trainingButton.classList.add("hidden");
        return;
    }

    const data = JSON.parse(saved);

    balloonInventory = data.balloonInventory;
    heliumSupply = data.heliumSupply;
    availableFunds = data.availableFunds;
    earningsTotal = data.earningsTotal;
    inflateRate = data.inflateRate;
    deliveryCooldown = data.deliveryCooldown;

    countDisplay.textContent = balloonInventory;
    heliumDisplay.textContent = heliumSupply;
    fundsDisplay.textContent = availableFunds;

    if (data.workerHired) {
        hireWorkerButton.classList.remove("hidden"); // Make sure it's visible
        hireWorkerButton.disabled = true;
        balloonWorkerLoop();

        bpsLabel.classList.remove("hidden");
        bpsValue.classList.remove("hidden");
    }

    else {
        hireWorkerButton.classList.add("hidden");
    }

        // Show hireWorkerButton if the user unlocked it (even if it's already bought)
    if (data.superInflater) {
        superBalloonInflater.disabled = true;
        hireWorkerButton.classList.remove("hidden"); // <--- Ensure it's visible
    }

    // Show oil change if the user has hired a worker
    if (data.workerHired) {
        hireWorkerButton.disabled = true;
        balloonWorkerLoop();
        bpsLabel.classList.remove("hidden");
        bpsValue.classList.remove("hidden");

        oilChangeButton.classList.remove("hidden"); // <--- Ensure it's visible
    }

    // Show training manual if oil change was bought
    if (data.oilChangePurchased) {
        oilChangeButton.disabled = true;
        deliveryCooldown /= 2;

        trainingButton.classList.remove("hidden"); // <--- Ensure it's visible
    }

    // Apply training manual effect if already purchased
    if (data.trainingManualPurchased) {
        trainingButton.disabled = true;
        passiveBps = 5;
        bpsValue.innerHTML = passiveBps;
    }

}

setInterval(activateProfitBoost, 30000); // 60000 milliseconds = 60 seconds


window.addEventListener("beforeunload", saveGame);
window.addEventListener("load", loadGame);
