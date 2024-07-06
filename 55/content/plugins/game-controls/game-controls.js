
document.getElementById('playerInstructionsToggle').addEventListener('click', function() {
    event.stopPropagation(); // Prevent the event from propagating
   var instructions = document.getElementById('playerInstructions');
    var gameInfo = document.querySelector('.game-info');
var offsetY = -270; // Adjust vertical offset to position the menu above the button (current height 200px + 10px padding)

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


document.getElementById('closeInstructions').addEventListener('click', function() {
    document.getElementById('playerInstructions').classList.add('hidden');
});

// Define the event on the document to close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    var instructions = document.getElementById('playerInstructions');
    if (!instructions.classList.contains('hidden') && !instructions.contains(event.target) && event.target.id !== 'playerInstructionsToggle') {
        instructions.classList.add('hidden');
    }
});



//------------------  ------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    var videoButton = document.querySelector('.ptn-video');
    var targetElement = document.querySelector('.btn-vedio-2');

   
});

document.getElementById('closeInstructions').addEventListener('click', function() {
            document.getElementById('playerInstructions').classList.add('hidden');
        });

        document.addEventListener('DOMContentLoaded', function() {
            var ptnVideoButton = document.querySelector('.ptn-video');
            var targetElement = document.querySelector('.btn-vedio-2');

            ptnVideoButton.addEventListener('click', function(event) {
                event.preventDefault();
                document.getElementById('playerInstructions').classList.add('hidden');
                smoothScrollTo(targetElement, 2000); // Scroll to targetElement over 2 seconds
            });
        });

        function smoothScrollTo(target, duration) {
            var targetPosition = target.getBoundingClientRect().top + window.scrollY;
            var startPosition = window.scrollY;
            var distance = targetPosition - startPosition;
            var startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                var timeElapsed = currentTime - startTime;
                var run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }