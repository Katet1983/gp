document.getElementById('embedButtonToggle').addEventListener('click', function() {
    event.stopPropagation(); // Prevent the event from propagating
    var instructions = document.getElementById('embedButton');
    var gameInfo = document.querySelector('.game-info');
    var offsetY = -200; // Adjust vertical offset to position the menu above the button (current height 200px + 10px padding)

    if (gameInfo) {
        instructions.style.width = gameInfo.offsetWidth + 'px';
    }

    if (instructions.classList.contains('hidden')) {
        instructions.classList.remove('hidden');
        var buttonRect = this.getBoundingClientRect();
        var topPosition = buttonRect.top + window.scrollY + offsetY;

        instructions.style.top = topPosition + 'px';
       
    } else {
        instructions.classList.add('hidden');
    }
});

// Define the event on the close button
document.getElementById('closeembedButton').addEventListener('click', function() {
    document.getElementById('embedButton').classList.add('hidden');
});

// Define the event on the document to close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    var instructions = document.getElementById('embedButton');
    if (!instructions.classList.contains('hidden') && !instructions.contains(event.target) && event.target.id !== 'embedButtonToggle') {
        instructions.classList.add('hidden');
    }
});



   // --------------- embedButton --------------------  //

const embedButton = document.getElementById("embedButton");
const embedPopup = document.getElementById("embedPopup");
const iframeText = document.getElementById("iframeText");
const copySuccessImage = document.getElementById("copySuccessImage");

embedButton.addEventListener("click", function () {
    if (embedPopup.style.display === "none" || embedPopup.style.display === "") {
        embedPopup.style.display = "block";
    } else {
        embedPopup.style.display = "none";
    }
});

function closePopup() {
    embedPopup.style.display = "none";
}

function copyText() {
    iframeText.select();
    document.execCommand("copy");

    // Resize the image to 50% after the original format
    copySuccessImage.style.display = "block";
    copySuccessImage.style.width = "50px";
    copySuccessImage.style.height = "50px";

    // Delay image zoom to 100% after a second (1000 ms)
    setTimeout(function () {
        copySuccessImage.style.width = "50px";
        copySuccessImage.style.height = "50px";
    }, 160);

    // Set the time to hide the image after 2 seconds (2000 ms)
    setTimeout(function () {
        copySuccessImage.style.display = "none";
    }, 1200);
}


