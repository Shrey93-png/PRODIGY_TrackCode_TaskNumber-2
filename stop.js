let startTime, interval;
let isRunning = false;
let elapsedTime = 0;

function updateDisplay() {
  const display = document.getElementById('display');
  let time = elapsedTime;

  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');

  display.textContent = `${hrs}:${mins}:${secs}`;
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(interval);
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(interval);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (!isRunning) return;
  const lapTime = document.getElementById('display').textContent;
  const lap = document.createElement('li');
  lap.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(lap);
}
