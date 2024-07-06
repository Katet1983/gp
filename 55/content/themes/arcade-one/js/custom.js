/* Custom script

This file will not be overwritten by the updater

*/

  // Capture the button
  const loadMoreButton = document.getElementById('load-more1');

  // Apply automatic vibration
  function autoVibrate() {
    loadMoreButton.classList.add('btn-vibrate');
    
    // Remove the "btn-vibrate" class after a certain time
    setTimeout(() => {
      loadMoreButton.classList.remove('btn-vibrate');
      
      // Restart vibration after a specific time interval
      setTimeout(autoVibrate, 4000); // 6000 milliseconds (6 seconds)
    }, 1200); // 1200 milliseconds (1.2 seconds)
  }

  // Start the automatic effect when the page loads
  window.addEventListener('load', autoVibrate);
  
  