function studyTimer() {
    const workDuration = 25 * 60;
    const breakDuration = 5 * 60; 

    let isWorkPeriod = true;
    let timeRemaining = workDuration;
    let timerInterval;

    const timerDisplay = document.getElementById('timer');

    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            switchPeriod();
        }
    }

    function switchPeriod() {
        clearInterval(timerInterval);
        isWorkPeriod = !isWorkPeriod;
        timeRemaining = isWorkPeriod ? workDuration : breakDuration;
        startTimer();
    }

    startTimer();
}

