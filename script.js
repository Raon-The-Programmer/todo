

// Countdown function
const countdown = (count) => {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
  
    const countdownInterval = setInterval(() => {
      count--;
  
      if (count > 0) {
        countdownElement.innerText = count;
      } else {
        clearInterval(countdownInterval);
        countdownElement.classList.add('hidden');
        messageElement.classList.remove('hidden');
      }
    }, 1000);
  };
  
  // Start the countdown
  countdown(10);
  