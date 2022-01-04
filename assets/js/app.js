function countDown() {
    // Fetching Dom Elements
    const dayEl = document.querySelector('.day h2');
    const hourEl = document.querySelector('.hour h2');
    const minuteEl = document.querySelector('.minute h2');
    const secondEl = document.querySelector('.second h2');

    // Calculation
    const currentDate = new Date().getTime();
    let targetDate = new Date(currentDate);
    targetDate.setDate(targetDate.getDate() + 30);
    targetDate.setHours(0, 0, 0);
    targetDate = targetDate.getTime();
    const diff = targetDate - currentDate;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Display
    const displayDay = Math.floor(diff / day);
    const displayHour = Math.floor((diff % day) / hour);
    const displayMinute = Math.floor((diff % hour) / minute);
    const displaySecond = Math.floor((diff % minute) / second);
    dayEl.textContent = displayDay;
    hourEl.textContent = displayHour;
    minuteEl.textContent = displayMinute;
    secondEl.textContent = displaySecond;
}
setInterval(countDown, 1000);