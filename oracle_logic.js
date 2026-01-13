
// Magic Oracle
function initOracle() {
    const magicBall = document.getElementById('magicBall');
    const oracleMessageContainer = document.getElementById('oracleMessageContainer');
    const oracleResults = document.getElementById('oracleResult');
    const oracleText = document.getElementById('oracleText');
    const oraclePlaceholder = oracleMessageContainer.querySelector('.oracle-placeholder');

    if (!magicBall || !oracleResults) return;

    const messages = [
        // Inspiration & Action
        "Действуй смело! Звезды на твоей стороне. 🚀",
        "Идея, которая пришла сегодня — гениальна. Запиши её! 💡",
        "Ты стоишь на пороге большого прорыва. Верь в себя! ⭐",
        "Ответ находится внутри тебя. Прислушайся. 🧘‍♂️",
        "Сегодня идеальный день для начала нового. 🌱",
        "Твоя харизма сегодня способна открыть любые двери. 🦁",
        "Не бойся масштаба. Ты готов к большему! 🌍",
        "Доверься потоку, он вынесет тебя в нужное место. 🌊",
        "Сфокусируйся на одной главной цели. Успех гарантирован. 🎯",
        "Рискни! Удача любит смелых. 🔥",

        // Love & Support
        "Ты не один. Мы — команда! ❤️",
        "Твоя сила — в твоем сердце. Люблю тебя! 💖",
        "Помнишь, как мы мечтали? Скоро это сбудется. ✨",
        "Ты — мой герой каждый день. 🦸‍♂️",
        "Позвони мне, у меня есть для тебя сюрприз! 🎁",
        "Ты делаешь мир лучше просто тем, что ты есть. 🌟",
        "Наша синергия сегодня на максимуме. Давай творить! 👩‍❤️‍👨",
        "Ты невероятный муж и отец. Горжусь тобой! 👪",

        // Money & Business
        "Деньги любят тишину и твою уверенность. 💰",
        "Финансовый поток расширяется. Будь готов принимать! 💸",
        "Качество — твой главный козырь. Держи марку. ⭐",
        "Инвестируй в себя — это лучшие вложения. 📈",
        "Новый контакт принесет большие перспективы. 🤝",
        "Систематизируй хаос, и придет прибыль. 📊",
        "Твой личный бренд сияет. Покажи себя миру! 📢",
        "Сегодня удачный день для переговоров. 🗣️",

        // Mystical
        "Знаки повсюду. Смотри внимательнее. 👀",
        "Вселенная готовит для тебя подарок. 🎁",
        "Твой ангел-хранитель сегодня работает сверхурочно. 😇",
        "Магия момента — здесь и сейчас. ✨"
    ];

    let isAnimating = false;

    magicBall.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        // Reset previous result
        if (oracleResults.classList.contains('visible')) {
            oracleResults.classList.remove('visible');
            setTimeout(() => {
                oracleResults.classList.add('hidden');
                oraclePlaceholder.classList.remove('hidden');
                startAnimation();
            }, 300);
        } else {
            startAnimation();
        }
    });

    function startAnimation() {
        // Add shaking effect
        magicBall.classList.add('shaking');
        oraclePlaceholder.textContent = "Спрашиваю Вселенную...";

        // Random delay for "thinking"
        setTimeout(() => {
            magicBall.classList.remove('shaking');
            showPrediction();
            isAnimating = false;
        }, 1500);
    }

    function showPrediction() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const prediction = messages[randomIndex];

        oracleText.textContent = prediction;
        oraclePlaceholder.classList.add('hidden');

        oracleResults.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            oracleResults.classList.add('visible');
        });
    }
}
