
import os

file_path = '/Users/valeria/.gemini/antigravity/scratch/lev-birthday-site/index.html'

with open(file_path, 'r') as f:
    content = f.read()

replacement_inner = '''<h2 class="section-title">Таймер Соляра ⏳</h2>
            <div class="progress-content">
                <div class="solar-timer-container" id="solarTimer">
                    <div class="timer-card">
                        <span class="timer-value" id="timerDays">0</span>
                        <span class="timer-label">Дней</span>
                    </div>
                    <div class="timer-card">
                        <span class="timer-value" id="timerHours">00</span>
                        <span class="timer-label">Часов</span>
                    </div>
                    <div class="timer-card">
                        <span class="timer-value" id="timerMinutes">00</span>
                        <span class="timer-label">Минут</span>
                    </div>
                    <div class="timer-card">
                        <span class="timer-value" id="timerSeconds">00</span>
                        <span class="timer-label">Секунд</span>
                    </div>
                </div>
                <div class="progress-details" style="margin-top: 2rem;">
                    <p class="progress-message" id="timerMessage">Твой персональный год набирает обороты...</p>
                </div>
            </div>
        </div>'''

# Find h2 start
h2_start = content.find('<h2 class="section-title">Прогресс 2026 Года ⏳</h2>')

# Find section end
section_end = content.find('</section>', h2_start)

if h2_start != -1 and section_end != -1:
    new_content = content[:h2_start] + replacement_inner + '\n    ' + content[section_end:]
    
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Successfully replaced Solar Timer HTML")
else:
    print("Could not find boundaries")
