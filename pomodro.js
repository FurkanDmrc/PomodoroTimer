let startEl = document.querySelector(`.btn-start`);
let stopEl = document.querySelector(`.btn-stop`);
let resetEl = document.querySelector(`.btn-reset`);
let pomEl = document.querySelector(`.pomodro`);

let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updatePomodoroDisplay() {
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    pomEl.innerHTML = `${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function() {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    alert('Time is up!');
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updatePomodoroDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updatePomodoroDisplay();
}

startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);

updatePomodoroDisplay(); // Initial display update
