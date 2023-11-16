/*要素を取得*/
const time = document.getElementById(`time`);
const startButton = document.getElementById(`start`);
const stopButton = document.getElementById(`stop`);
const resetButton = document.getElementById(`reset`);
/*変数を用意*/
let startTime;
let stopTime = 0;
let timeoutID;

function countTime() {
    const d = new Date(Date.now() - startTime + stopTime);
    const h = String(d.getHours()-9).padStart(2, `0`);
    const m = String(d.getMinutes()).padStart(2, `0`);
    const s = String(d.getSeconds()).padStart(2, `0`);
    const ms = String(d.getMilliseconds()).padStart(3, `0`);
    time.textContent = `${h}:${m}:${s}.${ms}`;/*現在のカウント時間に上書き*/
    
    timeoutID = setTimeout(countTime, 10);
}

startButton.addEventListener(`click`, () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    countTime();
});

stopButton.addEventListener(`click`, function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
    stopTime += (Date.now() - startTime);
});

resetButton.addEventListener(`click`, function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = `00:00:00:00`;
    stopTime = 0;
});