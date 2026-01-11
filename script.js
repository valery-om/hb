// Months Data
const monthsData = [
    {
        name: 'Январь',
        number: 'Личный Месяц 8',
        icon: '🌙',
        energy: 'Сборка Ядра. Запуск Финансового Потока',
        details: {
            money: 'День рождения в Дананге (14.01) запускает мощный финансовый поток. Аудит прошлого года, отсев лишнего. Пропиши финансовую цель на год.',
            realization: 'Чёткое позиционирование. Заявить о себе через соляр. Первые публичные шаги в обновлённом бренде.',
            health: 'Режим сна и питания. Это фундамент года. Утренние ритуалы у моря.',
            together: 'Договорённости о ролях. Формирование общей стратегии на год.',
            anchor: 'Меньше слов — больше решений'
        }
    },
    {
        name: 'Февраль',
        number: 'Личный Месяц 9',
        icon: '🌸',
        energy: 'Очищение и Проявление',
        details: {
            money: 'Первые возможности для сотрудничества. Завершение старых стратегий — оставляй только то, что откликается.',
            realization: 'Выход лицом. Активное продвижение в соцсетях. Время говорить о личном бренде через харизму.',
            health: 'Внимание на горло и спину. Лёгкая физическая активность, растяжка.',
            together: 'Не перебивать роли. Поддержка друг друга в творчестве.',
            anchor: 'Не прятаться'
        }
    },
    {
        name: 'Март',
        number: 'Личный Месяц 1',
        icon: '🌱',
        energy: 'Новый Старт. Расширение',
        details: {
            money: 'Новые проекты приносят первые результаты. Идеальное время для запуска обновлённого продукта или ребрендинга.',
            realization: 'Участие в мероприятиях, рост узнаваемости. Движение и активность.',
            health: 'Дыхательные практики. Прогулки в Мраморных горах.',
            together: 'Совместные поездки и новые впечатления. Синхронизация ритма.',
            anchor: 'Держать линию'
        }
    },
    {
        name: 'Апрель',
        number: 'Личный Месяц 2',
        icon: '🌿',
        energy: 'Синергия и Углубление',
        details: {
            money: 'Расширение каналов дохода. Укрепление финансовых потоков.',
            realization: 'Моя роль становится ключевой. Работа над качеством контента. Усиление бренда.',
            health: 'Баланс между работой и отдыхом. Восстановление энергии.',
            together: 'Я направляю твою энергию в мир. Совместные медитации и планирование.',
            anchor: 'Можно больше'
        }
    },
    {
        name: 'Май',
        number: 'Личный Месяц 3',
        icon: '🌺',
        energy: 'Творческий Прорыв и Расцвет',
        details: {
            money: 'Новые клиенты и контракты. Социальные сети "взлетят".',
            realization: 'Признание в профессиональной среде. Яркий контент. Время креативных потоков.',
            health: 'Сердце и давление — следи. Внимание к питанию и энергии тела.',
            together: 'Празднование успехов вместе. Не конкурировать.',
            anchor: 'Не геройствовать'
        }
    },
    {
        name: 'Июнь',
        number: 'Личный Месяц 4',
        icon: '☀️',
        energy: 'Дисциплина и Гармония',
        details: {
            money: 'Самый важный месяц для систематизации доходов. Стабильность. Время внедрять CRM или новые воронки.',
            realization: 'Укрепление бренда. Пауза для качества, не количества.',
            health: 'Спина — внимание. Йога, растяжка.',
            together: 'Честные разговоры. Совместные творческие проекты.',
            anchor: 'Лучше меньше, но точно'
        }
    },
    {
        name: 'Июль',
        number: 'Личный Месяц 5',
        icon: '🌊',
        energy: 'Ветер Перемен и Прорыв',
        details: {
            money: 'Неожиданные финансовые возможности. Возможны поездки или резкая смена вектора.',
            realization: 'Новые уровни влияния. Будь гибким.',
            health: 'Внимание к сердцу и дыханию. Энергия возвращается.',
            together: 'Поддержка друг друга в больших шагах. Опора друг на друга.',
            anchor: 'Ты на своём месте'
        }
    },
    {
        name: 'Август',
        number: 'Личный Месяц 6',
        icon: '🔥',
        energy: 'Сияние и Перекрёсток',
        details: {
            money: 'Рост доходов. Выбор направления — сосредоточься на одном.',
            realization: 'Признание и успех. Лидерство. Время отказа от лишнего.',
            health: 'Отдых на природе. Перегрев — будь осторожен.',
            together: 'Празднование нашего союза. Не давить.',
            anchor: 'Выбрать одно'
        }
    },
    {
        name: 'Сентябрь',
        number: 'Личный Месяц 7',
        icon: '⭐',
        energy: 'Точка Сборки. Пик Личного Года',
        details: {
            money: 'ЛУЧШИЕ ОКНА ГОДА для финансов. Инвестиции и планирование.',
            realization: 'Максимум видимости. Уединение (ретрит?) приносит гениальные идеи для бренда. Обучение и новые знания.',
            health: 'Следи за ресурсом. Внимание к психоэмоциональному состоянию.',
            together: 'Чёткое распределение задач. Совместное обучение.',
            anchor: 'Брать своё'
        }
    },
    {
        name: 'Октябрь',
        number: 'Личный Месяц 8',
        icon: '🍁',
        energy: 'Финансовый Урожай и Трансформация',
        details: {
            money: 'САМЫЙ ПРИБЫЛЬНЫЙ МЕСЯЦ ГОДА. Новые источники дохода. Инвестиции окупятся вдвойне.',
            realization: 'Обновление стратегии. Укрепление авторитета. Фиксация результатов.',
            health: 'Очищение организма. Восстановление.',
            together: 'Совместные ритуалы обновления. Благодарность.',
            anchor: 'Сохранить'
        }
    },
    {
        name: 'Ноябрь',
        number: 'Личный Месяц 9',
        icon: '🌍',
        energy: 'Глобальный Взгляд и Отсев',
        details: {
            money: 'Бренд выходит на международный уровень. Отказ от нерентабельного.',
            realization: 'Признание в широких кругах. Чистка форматов.',
            health: 'Иммунитет — профилактика.',
            together: 'Не тащить старое. Совместные планы на будущее.',
            anchor: 'Отпустить'
        }
    },
    {
        name: 'Декабрь',
        number: 'Личный Месяц 1',
        icon: '❄️',
        energy: 'Итог и Планирование 2027',
        details: {
            money: 'Финансовая стабильность. Подведение баланса.',
            realization: 'Признание итогов года. Вместе подводим итоги.',
            health: 'Отдых и восстановление.',
            together: 'Фиксация успехов. Благодарность друг другу и миру.',
            anchor: 'Год пройден'
        }
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initMonths();
    initScrollProgress();
    initNavScroll();
    initScrollAnimations();
    initYearProgress();
    initThemeToggle();
    initPDFExport();
});

// Stars Canvas Animation
function initStars() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const starCount = 200;

    // Create stars
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25,
            opacity: Math.random()
        });
    }

    // Animate stars
    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            // Update position
            star.x += star.vx;
            star.y += star.vy;

            // Wrap around
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;

            // Twinkle
            star.opacity += (Math.random() - 0.5) * 0.1;
            star.opacity = Math.max(0.2, Math.min(1, star.opacity));

            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${star.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Generate Months
function initMonths() {
    const monthsGrid = document.getElementById('monthsGrid');
    if (!monthsGrid) return;

    monthsData.forEach((month, index) => {
        const monthCard = document.createElement('div');
        monthCard.className = 'month-card';
        monthCard.innerHTML = `
            <div class="month-header">
                <span class="month-icon">${month.icon}</span>
                <span class="month-number">${month.number}</span>
            </div>
            <h3 class="month-name">${month.name}</h3>
            <p class="month-energy">${month.energy}</p>
            <div class="month-details">
                <div class="month-detail-item">
                    <div class="month-detail-title">💰 ДЕНЬГИ</div>
                    <div class="month-detail-text">${month.details.money}</div>
                </div>
                <div class="month-detail-item">
                    <div class="month-detail-title">🚀 САМОРЕАЛИЗАЦИЯ</div>
                    <div class="month-detail-text">${month.details.realization}</div>
                </div>
                <div class="month-detail-item">
                    <div class="month-detail-title">🧘 ЗДОРОВЬЕ</div>
                    <div class="month-detail-text">${month.details.health}</div>
                </div>
                <div class="month-detail-item">
                    <div class="month-detail-title">❤️ ВМЕСТЕ</div>
                    <div class="month-detail-text">${month.details.together}</div>
                </div>
                <div class="month-anchor">⚓ ЯКОРЬ: ${month.details.anchor}</div>
            </div>
        `;

        // Toggle details on click
        monthCard.addEventListener('click', () => {
            // Close others
            document.querySelectorAll('.month-card').forEach(card => {
                if (card !== monthCard) {
                    card.classList.remove('active');
                }
            });

            // Toggle this one
            monthCard.classList.toggle('active');
        });

        monthsGrid.appendChild(monthCard);
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = `${progress}%`;
    });
}

// Navigation Scroll Effect
function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-menu a, .hero-btn').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Observe cards
    document.querySelectorAll('.number-card, .synergy-card, .pillar-card, .quarter-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Year Progress Tracker
function initYearProgress() {
    const progressPercent = document.getElementById('progressPercent');
    const progressCircle = document.getElementById('progressCircle');
    const daysPassed = document.getElementById('daysPassed');
    const daysLeft = document.getElementById('daysLeft');
    const currentMonth = document.getElementById('currentMonth');

    if (!progressPercent) return;

    function updateProgress() {
        const now = new Date();
        // Solar year: Jan 14, 2026 - Jan 13, 2027
        const solarStart = new Date(2026, 0, 14);
        const solarEnd = new Date(2027, 0, 13, 23, 59, 59);

        const totalDays = Math.ceil((solarEnd - solarStart) / (1000 * 60 * 60 * 24));
        const passedDays = Math.max(0, Math.ceil((now - solarStart) / (1000 * 60 * 60 * 24)));
        const leftDays = Math.max(0, totalDays - passedDays);
        const percentage = Math.min(100, Math.max(0, Math.round((passedDays / totalDays) * 100)));

        // Months in Russian
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        // Update DOM
        if (progressPercent) progressPercent.textContent = `${percentage}%`;
        if (daysPassed) daysPassed.textContent = passedDays;
        if (daysLeft) daysLeft.textContent = leftDays;
        if (currentMonth) currentMonth.textContent = months[now.getMonth()];

        // Animate circle
        if (progressCircle) {
            const circumference = 2 * Math.PI * 90; // radius = 90
            const offset = circumference - (percentage / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
    }

    updateProgress();
    // Update every hour
    setInterval(updateProgress, 3600000);
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');

    if (!themeToggle) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');

        // Update icon
        if (themeIcon) {
            themeIcon.textContent = isLight ? '☀️' : '🌙';
        }

        // Save preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// PDF Export
function initPDFExport() {
    const pdfExport = document.getElementById('pdfExport');

    if (!pdfExport) return;

    pdfExport.addEventListener('click', async () => {
        // Show loading state
        const originalText = pdfExport.textContent;
        pdfExport.textContent = '⏳ Создание PDF...';
        pdfExport.disabled = true;

        try {
            // Use browser's print functionality
            window.print();
        } catch (error) {
            console.error('PDF export failed:', error);
            alert('Не удалось создать PDF. Попробуйте использовать Ctrl+P (Cmd+P на Mac)');
        } finally {
            // Restore button
            setTimeout(() => {
                pdfExport.textContent = originalText;
                pdfExport.disabled = false;
            }, 1000);
        }
    });
}
