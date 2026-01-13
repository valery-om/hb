
// Background Music Control
function initMusic() {
    const audio = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const icon = toggleBtn.querySelector('.music-icon');
    
    if (!audio || !toggleBtn) return;

    let isPlaying = false;

    // Set volume low for background
    audio.volume = 0.3;

    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            icon.textContent = '🔇';
            toggleBtn.title = "Включить музыку";
        } else {
            audio.play().then(() => {
                icon.textContent = '🔊';
                toggleBtn.title = "Выключить музыку";
            }).catch(e => {
                console.log("Audio play failed, likely needs interaction first", e);
            });
        }
        isPlaying = !isPlaying;
    }

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Avoid triggering document listener
        toggleMusic();
    });

    // Auto-play on first interaction
    const startAudioOnInteraction = () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                icon.textContent = '🔊';
                toggleBtn.title = "Выключить музыку";
            }).catch(() => {
                // Silently fail if still blocked
            });
        }
        // Remove listeners once tried
        document.removeEventListener('click', startAudioOnInteraction);
        document.removeEventListener('touchstart', startAudioOnInteraction);
        document.removeEventListener('keydown', startAudioOnInteraction);
    };

    document.addEventListener('click', startAudioOnInteraction);
    document.addEventListener('touchstart', startAudioOnInteraction);
    document.addEventListener('keydown', startAudioOnInteraction);
}
