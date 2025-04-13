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
    workerStatus = setInterval(() => {
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
        fiveButtonVisible: !superButton.hasAttribute("style"),
        workerIntervalActive: workerStatus !== null,
        oilChangePurchased: oilChangeButton.disabled
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
                hireWorkerButton.disabled = true;
                balloonWorkerLoop(); // Re-hire the worker if they were hired
            }

            if (data.superInflater) {
                superBalloonInflater.disabled = true;
            }

            if (data.electricInflater) {
                electricBalloonInflater.disabled = true;
            }

            if (data.fiveButtonVisible) {
                superButton.removeAttribute("style"); // Show the five balloons button
            }

            if (data.oilChangePurchased) {
                oilChangeButton.disabled = true;
            }

            alert("Save imported successfully!");
        } catch (error) {
            alert("Failed to import save. Please ensure the file is valid.");
        }
    };

    reader.readAsText(file); // Read the file as text
}




document.getElementById("resetGame").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset your progress?")) {
        // Wipe localStorage
        localStorage.removeItem("balloonTycoonSave");

        // Reset variables to avoid flicker
        balloonInventory = 0;
        heliumSupply = 100;
        availableFunds = 100;
        earningsTotal = 100;
        inflateRate = 1;
        deliveryCooldown = 10;

        // Clear worker if active
        if (workerStatus) {
            clearInterval(workerStatus);
            workerStatus = null;
        }

        // Clear the DOM displays too (optional but helps avoid UI flicker)
        countDisplay.textContent = balloonInventory;
        heliumDisplay.textContent = heliumSupply;
        fundsDisplay.textContent = availableFunds;

        // Delay the reload to let everything settle
        setTimeout(() => {
            location.reload();
        }, 200);
    }
});




function saveGame() {
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
        fiveButtonVisible: !superButton.hasAttribute("style"),
        workerIntervalActive: workerStatus !== null,
        oilChangePurchased: oilChangeButton.disabled
    };

    localStorage.setItem("balloonTycoonSave", JSON.stringify(saveData));
}

function loadGame() {
    const saved = localStorage.getItem("balloonTycoonSave");
    if (!saved) {
        // Set default visibility state
        hireWorkerButton.setAttribute("style", "display:none;");
        superButton.setAttribute("style", "display:none;");
        oilChangeButton.setAttribute("style", "display:none;");
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
        hireWorkerButton.disabled = true;
        balloonWorkerLoop();
    } else {
        hireWorkerButton.setAttribute("style", "display:none;");
    }

    if (data.superInflater) {
        superBalloonInflater.disabled = true;
    }

    if (data.electricInflater) {
        electricBalloonInflater.disabled = true;
    }

    if (data.fiveButtonVisible) {
        superButton.removeAttribute("style");
    }

    if (data.oilChangePurchased) {
        oilChangeButton.disabled = true;
    } else {
        oilChangeButton.setAttribute("style", "display:none;");
    }
}


window.addEventListener("beforeunload", saveGame);
window.addEventListener("load", loadGame);
