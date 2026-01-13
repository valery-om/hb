
import os

script_path = '/Users/valeria/.gemini/antigravity/scratch/lev-birthday-site/script.js'

with open(script_path, 'r') as f:
    content = f.read()

new_logic = '''// Solar Timer (Elapsed Time)
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
            if(timerMessage) timerMessage.textContent = "До старта твоего Соляра осталось:";
        } else {
            // Elapsed mode
            if(timerMessage) timerMessage.textContent = "Твой персональный год длится уже:";
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update DOM
        timerDays.textContent = days;
        timerHours.textContent = String(hours).padStart(2, '0');
        timerMinutes.textContent = String(minutes).padStart(2, '0');
        timerSeconds.textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}'''

# Find the start of the old function
start_marker = '// Year Progress Tracker\nfunction initYearProgress() {'
start_idx = content.find(start_marker)

if start_idx == -1:
    print("Could not find start marker")
    exit(1)

# Find the end - searching for the next section header
next_func_marker = '// Theme Toggle'
end_idx = content.find(next_func_marker, start_idx)

if end_idx == -1:
    print("Could not find next function marker")
    exit(1)

# Modify content
new_content = content[:start_idx] + new_logic + '\n\n' + content[end_idx:]

with open(script_path, 'w') as f:
    f.write(new_content)
print("Successfully replaced initYearProgress")
