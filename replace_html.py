
import os

file_path = '/Users/valeria/.gemini/antigravity/scratch/lev-birthday-site/index.html'

with open(file_path, 'r') as f:
    content = f.read()

# Define the start and end markers for the section to replace
start_marker = '<!-- Interactive Calendar Section -->'
end_marker = '<!-- Quarters Section -->'

# Find positions
start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find section boundaries")
    print(f"Start found: {start_idx != -1}")
    print(f"End found: {end_idx != -1}")
else:
    # New content
    new_section = '''<!-- Magic Oracle Section -->
    <section class="section section-oracle" id="oracle">
        <div class="container">
            <h2 class="section-title">Магический Шар Соляра 🔮</h2>
            <p class="section-subtitle">Задай вопрос, кликни на шар и получи знак Вселенной</p>

            <div class="oracle-container">
                <div class="magic-ball-wrapper">
                    <div class="magic-ball" id="magicBall">
                        <div class="magic-ball-inner">
                            <div class="magic-stars"></div>
                            <span class="magic-ball-text">?</span>
                        </div>
                    </div>
                    <div class="magic-ball-platform"></div>
                </div>
                
                <div class="oracle-message-container" id="oracleMessageContainer">
                    <div class="oracle-placeholder">Нажми на шар, чтобы получить знак</div>
                    <div class="oracle-result hidden" id="oracleResult">
                        <div class="oracle-result-icon">✨</div>
                        <p class="oracle-text" id="oracleText"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    '''
    
    # Construct new content
    # We want to keep everything before start_marker and everything starting from end_marker
    new_content = content[:start_idx] + new_section + content[end_idx:]
    
    with open(file_path, 'w') as f:
        f.write(new_content)
    
    print("Successfully replaced Calendar with Oracle")
