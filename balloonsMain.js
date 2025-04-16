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
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
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
            profitBoost = true;
            let timeLeft = profitBoostDuration;

            const banner = document.getElementById('eventBanner');
            const bannerMsg = document.getElementById('eventMessage');

            logMessage(`💸 Profit Boost Activated! Earnings are doubled for ${profitBoostDuration} seconds.`);
            banner.classList.add('active');
            banner.classList.add("positive");
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
                banner.classList.remove("positive");
                clearInterval(profitBoostCountdown);
            }, profitBoostDuration * 1000);
        }
}


let marketDownturn = false;
const marketDownturnDuration = 10;
let marketDownturnTimer = null;
let marketDownturnCountdown = null;

function activateMarketDownturn() {
    if (!marketDownturn) {
            marketDownturn = true;
            let timeLeft = marketDownturnDuration;

            const banner = document.getElementById('eventBanner');
            const bannerMsg = document.getElementById('eventMessage');

            logMessage(`💸 Market Downturn! Earnings are halved for ${marketDownturnDuration} seconds.`);
            banner.classList.add('active');
            banner.classList.add("negative");
            bannerMsg.textContent = `💸 Market Downturn! ${timeLeft} seconds remaining...`;

            // Countdown interval
            marketDownturnCountdown = setInterval(() => {
                timeLeft--;
                bannerMsg.textContent = `💸 Market Downturn! ${timeLeft} seconds remaining...`;
                if (timeLeft <= 0) {
                    clearInterval(marketDownturnCountdown);
                }
            }, 1000);

            // End profit boost after the duration
            marketDownturnTimer = setTimeout(() => {
                marketDownturn = false;
                logMessage("Market Downturn has ended.");
                banner.classList.remove('active');
                banner.classList.remove("negative");
                clearInterval(marketDownturnCountdown);
            }, marketDownturnDuration * 1000);
        }
}


let bulkButtonUnlocked = false;

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
        if (marketDownturn) {
            availableFunds += profitMatrix.sell50 / 2;
            earningsTotal += profitMatrix.sell50 /2;
            logMessage(`Sold 50 balloons from inventory for $${profitMatrix.sell50 / 2}. Delivery service will return in ${deliveryCooldown} seconds.`)
        }
        else {
            availableFunds += profitMatrix.sell50;
            earningsTotal += profitMatrix.sell50;
            logMessage(`Sold 50 balloons from inventory for $${profitMatrix.sell50}. Delivery service will return in ${deliveryCooldown} seconds.`);
        }

        balloonInventory -= 50;
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
        countDisplay.innerHTML = balloonInventory;


        disableButtonWithCountdown(sellButton, deliveryCooldown);

        if (earningsTotal >= 1000 && !bulkButtonUnlocked) {
                sellButton3.disabled = false;
                sellButton3.classList.remove("locked");
                sellButton3.innerHTML = "Fulfill Balloon Order (1000 count)";

            logMessage("$1000 total earnings reached. New bulk delivery unlocked.");
            bulkButtonUnlocked = true;
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
        if (marketDownturn) {
            availableFunds += profitMatrix.sell200 / 2;
            earningsTotal += profitMatrix.sell200 /2;
            logMessage(`Sold 200 balloons from inventory for $${profitMatrix.sell200 / 2}. Delivery service will return in ${deliveryCooldown} seconds.`)
        }
        else {
            availableFunds += profitMatrix.sell200;
            earningsTotal += profitMatrix.sell200;
            logMessage(`Sold 200 balloons from inventory for $${profitMatrix.sell200}. Delivery service will return in ${deliveryCooldown * 2} seconds.`);
        }

        balloonInventory -= 200;
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
        countDisplay.innerHTML = balloonInventory;

        disableButtonWithCountdown(sellButton2, deliveryCooldown * 2);

        if (earningsTotal >= 1000 && !bulkButtonUnlocked) {
            sellButton3.disabled = false;
            sellButton3.classList.remove("locked");
            sellButton3.innerHTML = "Fulfill Balloon Order (1000 count)";
            logMessage("$1000 total earnings reached. New bulk delivery unlocked.");
            bulkButtonUnlocked = true;
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
        if (marketDownturn) {
            availableFunds += profitMatrix.sell1000 / 2;
            earningsTotal += profitMatrix.sell1000 / 2;
            logMessage(`Sold 1000 balloons from inventory for $${profitMatrix.sell1000 / 2}. Delivery service will return in ${deliveryCooldown} seconds.`)
        }
        else {
            availableFunds += profitMatrix.sell1000;
            earningsTotal += profitMatrix.sell1000;
            logMessage(`Sold 1000 balloons from inventory for $${profitMatrix.sell1000}. Delivery service will return in ${deliveryCooldown * 3} seconds.`);
        }

        balloonInventory -= 1000;
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
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
        fundsDisplay.innerHTML = availableFunds.toFixed(2);

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
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
        superButton.disabled = false;
        superButton.classList.remove("locked");
        superButton.innerHTML = "Blow 5 balloons!";



        superBalloonInflater.disabled = true;

        hireWorkerButton.disabled = false;
        hireWorkerButton.classList.remove("locked");
        hireWorkerButton.innerHTML = "Hire an employee to inflate balloons ($2000)";

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
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
        passiveBps = 1;
        bpsValue.innerHTML = passiveBps;
        balloonWorkerLoop();

        hireWorkerButton.disabled = true;
        oilChangeButton.disabled = false;
        oilChangeButton.classList.remove("locked");
        oilChangeButton.innerHTML = "Take the delivery vans in for an oil change ($3000)";
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
        fundsDisplay.innerHTML = availableFunds.toFixed(2);
        oilChangeButton.disabled = true;
        deliveryCooldown /= 2;
        trainingButton.disabled = false;
        trainingButton.classList.remove("locked");
        trainingButton.innerHTML = "Buy a Super Inflator training manual for your staff ($4000)";
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
        passiveBps,
        bulkButtonUnlocked,
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
            passiveBps = data.passiveBps;

            bulkButtonUnlocked = data.bulkButtonUnlocked;

            // Update the UI with the loaded data
            countDisplay.textContent = balloonInventory;
            heliumDisplay.textContent = heliumSupply;
            fundsDisplay.textContent = availableFunds;
            bpsValue.innerHTML = passiveBps;

            // Restore other game states like buttons, etc.
            if (data.workerHired) {
                hireWorkerButton.classList.remove("locked");
                hireWorkerButton.innerHTML = "Hire an employee to inflate balloons ($2000)";
                hireWorkerButton.disabled = true;
                balloonWorkerLoop();
                document.getElementById("passiveBps").classList.remove("hidden");
                document.getElementById("bpsValue").classList.remove("hidden");
            }


            if (data.superInflater) {
                superBalloonInflater.disabled = true;
            }

            if (data.electricInflater) {
                inflateRate = 0.5;
                electricBalloonInflater.disabled = true;
            }

            if (data.fiveButtonVisible) {
                superButton.disabled = false;
                superButton.classList.remove("locked");
                superButton.innerHTML = "Blow five balloons!";
            }

            if (data.workerHired) {
                hireWorkerButton.disabled = true;
                hireWorkerButton.classList.remove("locked");
                hireWorkerButton.innerHTML = "Hire an employee to inflate balloons ($2000)";
                oilChangeButton.disabled = false;
                oilChangeButton.classList.remove("locked");
                oilChangeButton.innerHTML = "Take the delivery vans in for an oil change ($3000)";
                document.getElementById("passiveBps").classList.remove("hidden");
                document.getElementById("bpsValue").classList.remove("hidden");
                balloonWorkerLoop();
            }

            if (data.oilChangePurchased) {
                oilChangeButton.disabled = true;
                deliveryCooldown /= 2;
                oilChangeButton.classList.remove("locked");
                oilChangeButton.innerHTML = "Take the delivery vans in for an oil change ($3000)";
                trainingButton.classList.remove("locked");
                trainingButton.innerHTML = "Buy a Super Inflator training manual for your staff ($4000)";
            }

            if (bulkButtonUnlocked) {
                sellButton3.disabled = false;
                sellButton3.classList.remove("locked");
                sellButton3.innerHTML = "Fulfill Balloon Order (1000 count)";
            }

            if (data.trainingManualPurchased) {
                trainingButton.disabled = true;
                trainingButton.classList.remove("locked");
                trainingButton.innerHTML = "Buy a Super Inflator training manual for your staff ($4000)";
                passiveBps = 5;
                bpsValue.innerHTML = passiveBps;
            }


            alert("Save imported successfully!");
        } catch (error) {
            alert("Failed to import save. Please ensure the file is valid.");
            console.log(error);
        }
    };

    reader.readAsText(file); // Read the file as text
}


let resetting = false;

const resetButton = document.getElementById("resetGame");

resetButton.addEventListener("click", resetGame);


function resetGame() {
    if (confirm("Are you sure you want to reset your progress?")) {
        // Step 1: Reset variables
        balloonInventory = 0;
        heliumSupply = 100;
        availableFunds = 100;
        earningsTotal = 100;
        inflateRate = 1;
        deliveryCooldown = 10;
        passiveBps = 0;
        bulkButtonUnlocked = false;

        if (workerStatus) {
            clearInterval(workerStatus);
            workerStatus = null;
        }

        // Step 2: Reset DOM elements
        countDisplay.textContent = balloonInventory;
        heliumDisplay.textContent = heliumSupply;
        fundsDisplay.textContent = availableFunds;
        bpsValue.innerHTML = passiveBps;

        hireWorkerButton.disabled = true;
        hireWorkerButton.classList.add("locked");
        hireWorkerButton.innerHTML = "???";

        oilChangeButton.disabled = true;
        oilChangeButton.classList.add("locked");
        oilChangeButton.innerHTML = "???";

        trainingButton.disabled = true;
        trainingButton.classList.add("locked");
        trainingButton.innerHTML = "???";

        sellButton3.disabled = true;
        sellButton3.classList.add("locked");
        sellButton3.innerHTML = "???";

        superBalloonInflater.disabled = false;
        superButton.disabled = true;
        superButton.classList.add("locked");
        superButton.innerHTML = "???";

        electricBalloonInflater.disabled = false;

        bpsLabel.classList.add("hidden");
        bpsValue.classList.add("hidden");

        // Step 3: Overwrite localStorage with clean slate
        const blankSave = {
            balloonInventory: 0,
            heliumSupply: 100,
            availableFunds: 100,
            earningsTotal: 100,
            inflateRate: 1,
            deliveryCooldown: 10,
            passiveBps: 0,
            bulkButtonUnlocked: false,
            workerHired: false,
            superInflater: false,
            electricInflater: false,
            fiveButtonVisible: false,
            workerIntervalActive: false,
            oilChangePurchased: false,
            trainingManualPurchased: false
        };

        localStorage.setItem("balloonTycoonSave", JSON.stringify(blankSave));

        logMessage("Progress has been reset.");
    }
}





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
        bulkButtonUnlocked,
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
    if (!saved) return;

    const data = JSON.parse(saved);

    // Restore core variables
    balloonInventory = data.balloonInventory;
    heliumSupply = data.heliumSupply;
    availableFunds = data.availableFunds;
    earningsTotal = data.earningsTotal;
    inflateRate = data.inflateRate;
    deliveryCooldown = data.deliveryCooldown;
    passiveBps = data.passiveBps || 0;
    bulkButtonUnlocked = data.bulkButtonUnlocked || false;

    countDisplay.textContent = balloonInventory;
    heliumDisplay.textContent = heliumSupply;
    fundsDisplay.textContent = availableFunds;
    bpsValue.textContent = passiveBps;

    // Electric inflator
    if (data.electricInflater) {
        electricBalloonInflater.disabled = true;
        inflateRate = 0.5;
    }

    // Super inflator
    if (data.superInflater) {
        superBalloonInflater.disabled = true;
        superButton.classList.remove("locked");
        superButton.disabled = false;
        superButton.innerHTML = "Blow five balloons!";
    } else {
        superButton.classList.add("locked");
        superButton.disabled = true;
        superButton.innerHTML = "???";
    }

    // Worker
    if (data.workerHired) {
        hireWorkerButton.disabled = true;
        hireWorkerButton.classList.remove("locked");
        hireWorkerButton.innerHTML = "Hire an employee to inflate balloons ($2000)";
        balloonWorkerLoop();
        bpsLabel.classList.remove("hidden");
        bpsValue.classList.remove("hidden");
    } else {
        hireWorkerButton.classList.add("locked");
        hireWorkerButton.disabled = true;
        hireWorkerButton.innerHTML = "???";
    }

    // Oil Change
    if (data.oilChangePurchased) {
        oilChangeButton.disabled = true;
        oilChangeButton.classList.remove("locked");
        oilChangeButton.innerHTML = "Take the delivery vans in for an oil change ($3000)";
        deliveryCooldown /= 2;
    } else {
        oilChangeButton.classList.add("locked");
        oilChangeButton.disabled = true;
        oilChangeButton.innerHTML = "???";
    }

    // Training Manual
    if (data.trainingManualPurchased) {
        trainingButton.disabled = true;
        trainingButton.classList.remove("locked");
        trainingButton.innerHTML = "Buy a Super Inflator training manual for your staff ($4000)";
        passiveBps = 5;
        bpsValue.innerHTML = passiveBps;
    } else {
        trainingButton.classList.add("locked");
        trainingButton.disabled = true;
        trainingButton.innerHTML = "???";
    }

    // Bulk Sell Button
    if (data.bulkButtonUnlocked) {
        sellButton3.disabled = false;
        sellButton3.classList.remove("locked");
        sellButton3.innerHTML = "Fulfill Balloon Order (1000 count)";
    } else {
        sellButton3.disabled = true;
        sellButton3.classList.add("locked");
        sellButton3.innerHTML = "???";
    }

    console.log("Game loaded from save");
}





function randomEventChoose() {
    const availableEvents = [activateProfitBoost, activateMarketDownturn, null]
    let randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
    return randomEvent;
}

setInterval(() => {
    const event = randomEventChoose();
    if (event) event();
}, 30000);



const ordersContainer = document.getElementById("ordersContainer");

const orderTemplates = [
  { title: "🎈 Party Supply Mega-Pack", required: 300, reward: 600 },
  { title: "🎪 Circus Contract", required: 500, reward: 1200 },
  { title: "🎉 Birthday Bonanza", required: 100, reward: 200 },
  { title: "🛍️ Retail Store Stock", required: 750, reward: 1600 },
  { title: "🏫 School Carnival Kit", required: 150, reward: 350 },
];

let activeOrders = [];
let orderIdCounter = 0;
const maxActiveOrders = 3;
const orderLifespan = 30; // seconds

function spawnSpecialOrder() {
    if (activeOrders.length >= maxActiveOrders) return;

    const randomOrder = { ...orderTemplates[Math.floor(Math.random() * orderTemplates.length)] };
    randomOrder.id = ++orderIdCounter;
    randomOrder.timeLeft = orderLifespan;

    activeOrders.push(randomOrder);
    renderOrder(randomOrder);

    // Countdown + Expiration
    const countdownInterval = setInterval(() => {
        const order = activeOrders.find(o => o.id === randomOrder.id);
        if (!order) return clearInterval(countdownInterval);

        order.timeLeft--;
        const timeEl = document.getElementById(`order-time-${order.id}`);
        if (timeEl) timeEl.textContent = `${order.timeLeft}s left`;

        if (order.timeLeft <= 0) {
        removeOrder(order.id);
        clearInterval(countdownInterval);
        }
    }, 1000);
}

function renderOrder(order) {
const card = document.createElement("div");
card.classList.add("orderCard");
card.setAttribute("id", `order-${order.id}`);

card.innerHTML = `
    <strong>${order.title}</strong><br>
    Needs: ${order.required} balloons<br>
    Reward: $${order.reward}<br>
    <span id="order-time-${order.id}">${order.timeLeft}s left</span><br>
    <button data-id="${order.id}">Fulfill Order</button>
`;

ordersContainer.appendChild(card);
}

function removeOrder(id) {
    activeOrders = activeOrders.filter(o => o.id !== id);
    const card = document.getElementById(`order-${id}`);
    if (card) card.remove();
  }

  ordersContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.dataset.id);
      const order = activeOrders.find(o => o.id === id);

      if (balloonInventory >= order.required) {
        balloonInventory -= order.required;
        availableFunds += order.reward;
        earningsTotal += order.reward;

        countDisplay.textContent = balloonInventory;
        fundsDisplay.textContent = availableFunds;

        logMessage(`✅ Fulfilled: ${order.title} for $${order.reward}`);
        removeOrder(order.id);
      } else {
        logMessage(`❌ Not enough balloons for: ${order.title}`);
      }
    }
});

setInterval(spawnSpecialOrder, 60000); // one new order every 60s
spawnSpecialOrder(); // spawn one on load







window.addEventListener("beforeunload", saveGame);
window.addEventListener("load", loadGame);
