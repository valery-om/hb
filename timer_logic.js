
// Solar Timer (Elapsed Time)
function initYearProgress() {
    const timerDays = document.getElementById('timerDays');
    const timerHours = document.getElementById('timerHours');
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds');
    const timerMessage = document.getElementById('timerMessage');

    if (!timerDays) return;

    function updateTimer() {
        const now = new Date();
        const solarStart = new Date(2026, 0, 14, 0, 0, 0); // Jan 14, 2026

        let diff = now - solarStart;
        let isStarted = diff >= 0;

        if (!isStarted) {
            // Countdown mode
            diff = Math.abs(diff);
            timerMessage.textContent = "До старта твоего Соляра осталось:";
        } else {
            // Elapsed mode
            timerMessage.textContent = "Твой персональный год длится уже:";
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update DOM with animation for changed numbers? 
        // For now just text update
        timerDays.textContent = days;
        timerHours.textContent = String(hours).padStart(2, '0');
        timerMinutes.textContent = String(minutes).padStart(2, '0');
        timerSeconds.textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}
