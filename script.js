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
    initCalendar();
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

// Interactive Calendar 2026
function initCalendar() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;
    
    // Calendar data with daily insights
    const calendar2026 = {
        months: [
            { name: 'Январь', energy: 'Сборка Ядра. Запуск Финансового Потока', icon: '🌙' },
            { name: 'Февраль', energy: 'Очищение и Проявление', icon: '🌸' },
            { name: 'Март', energy: 'Новый Старт. Расширение', icon: '🌱' },
            { name: 'Апрель', energy: 'Синергия и Углубление', icon: '🌿' },
            { name: 'Май', energy: 'Творческий Прорыв и Расцвет', icon: '🌺' },
            { name: 'Июнь', energy: 'Дисциплина и Гармония', icon: '☀️' },
            { name: 'Июль', energy: 'Ветер Перемен и Прорыв', icon: '🌊' },
            { name: 'Август', energy: 'Сияние и Перекрёсток', icon: '🔥' },
            { name: 'Сентябрь', energy: 'Точка Сборки. Пик Личного Года', icon: '⭐' },
            { name: 'Октябрь', energy: 'Финансовый Урожай и Трансформация', icon: '🍁' },
            { name: 'Ноябрь', energy: 'Глобальный Взгляд и Отсев', icon: '🌍' },
            { name: 'Декабрь', energy: 'Итог и Планирование 2027', icon: '❄️' }
        ],
        specialDates: {
            '2026-01-14': { type: 'birthday', label: 'День Рождения! 🎂', energy: 'Запуск соляра' },
            '2026-09-01': { type: 'special', label: 'Пик года', energy: 'Лучшие финансовые окна' },
            '2026-10-01': { type: 'special', label: 'Урожай', energy: 'Самый прибыльный месяц' }
        }
    };
    
    // Generate calendar for all 12 months
    function generateCalendar() {
        container.innerHTML = '';
        const dayLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        
        calendar2026.months.forEach((month, monthIndex) => {
            const monthDiv = document.createElement('div');
            monthDiv.className = 'calendar-month';
            
            // Month header
            const header = document.createElement('div');
            header.className = 'calendar-month-header';
            header.innerHTML = `
                <div class="calendar-month-title">${month.icon} ${month.name}</div>
                <div class="calendar-month-energy">${month.energy}</div>
            `;
            monthDiv.appendChild(header);
            
            // Calendar grid
            const grid = document.createElement('div');
            grid.className = 'calendar-grid';
            
            // Day labels
            dayLabels.forEach(label => {
                const dayLabel = document.createElement('div');
                dayLabel.className = 'calendar-day-label';
                dayLabel.textContent = label;
                grid.appendChild(dayLabel);
            });
            
            // Get first day of month and total days
            const firstDay = new Date(2026, monthIndex, 1);
            const lastDay = new Date(2026, monthIndex + 1, 0);
            const daysInMonth = lastDay.getDate();
            const startingDayOfWeek = firstDay.getDay() || 7; // Monday = 1
            
            // Empty cells before month starts
            for (let i = 1; i < startingDayOfWeek; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day empty';
                grid.appendChild(emptyDay);
            }
            
            // Days of the month
            const today = new Date();
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(2026, monthIndex, day);
                const dateString = `2026-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayOfWeek = date.getDay();
                
                const dayCell = document.createElement('div');
                dayCell.className = 'calendar-day';
                dayCell.textContent = day;
                dayCell.dataset.date = dateString;
                dayCell.dataset.month = month.name;
                
                // Add classes
                if (dateString === '2026-01-14') {
                    dayCell.classList.add('birthday');
                } else if (calendar2026.specialDates[dateString]) {
                    dayCell.classList.add('special');
                }
                
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    dayCell.classList.add('weekend');
                }
                
                if (date.toDateString() === today.toDateString()) {
                    dayCell.classList.add('current');
                }
                
                // Click handler
                dayCell.addEventListener('click', () => showDayInfo(dateString, day, month.name));
                
                grid.appendChild(dayCell);
            }
            
            monthDiv.appendChild(grid);
            container.appendChild(monthDiv);
        });
    }
    
    // Show day information in modal
    function showDayInfo(dateString, day, monthName) {
        const modal = document.getElementById('calendarModal');
        const modalDate = document.getElementById('modalDate');
        const modalNumber = document.getElementById('modalNumber');
        const modalEnergy = document.getElementById('modalEnergy');
        const modalRecommendations = document.getElementById('modalRecommendations');
        
        if (!modal) return;
        
        // Calculate day number in solar year (from Jan 14)
        const solarStart = new Date(2026, 0, 14);
        const currentDate = new Date(dateString);
        const daysSinceBirthday = Math.ceil((currentDate - solarStart) / (1000 * 60 * 60 * 24));
        
        // Get month energy
        const monthIndex = parseInt(dateString.split('-')[1]) - 1;
        const monthData = calendar2026.months[monthIndex];
        
        // Check for special dates
        const specialDate = calendar2026.specialDates[dateString];
        
        // Build modal content
        modalDate.textContent = `${day} ${monthName} 2026`;
        modalNumber.textContent = specialDate ? specialDate.label : `День ${daysSinceBirthday} соляра`;
        
        let energyHTML = `<h3>Энергия дня</h3>`;
        if (specialDate) {
            energyHTML += `<p><strong>${specialDate.energy}</strong></p>`;
        } else {
            energyHTML += `<p>Общая энергия месяца: ${monthData.energy}</p>`;
        }
        modalEnergy.innerHTML = energyHTML;
        
        // Generate recommendations
        const recommendations = generateDayRecommendations(dateString, daysSinceBirthday, monthData);
        let recsHTML = `<h3>Рекомендации</h3><ul>`;
        recommendations.forEach(rec => {
            recsHTML += `<li>${rec}</li>`;
        });
        recsHTML += `</ul>`;
        modalRecommendations.innerHTML = recsHTML;
        
        // Show modal
        modal.classList.add('active');
    }
    
    // Generate smart recommendations based on date
    function generateDayRecommendations(dateString, dayNumber, monthData) {
        const recommendations = [];
        const dayOfWeek = new Date(dateString).getDay();
        
        // Day of week recommendations
        if (dayOfWeek === 1) recommendations.push('Понедельник  - планируй неделю');
        if (dayOfWeek === 5) recommendations.push('Пятница - подведи итоги недели');
        if (dayOfWeek === 0 || dayOfWeek === 6) recommendations.push('Выходной - время для восстановления');
        
        // Birthday period
        if (dayNumber <= 7) {
            recommendations.push('Первая неделя соляра - закладываем фундамент');
        } else if (dayNumber > 358) {
            recommendations.push('Завершение соляра - подводим итоги года');
        }
        
        // Based on month energy
        if (monthData.name === 'Январь') {
            recommendations.push('Пропиши финансовую цель на год');
        } else if (monthData.name === 'Май') {
            recommendations.push('Время для творческих проектов');
        } else if (monthData.name === 'Сентябрь') {
            recommendations.push('Пик года - максимум активности');
        } else if (monthData.name === 'Октябрь') {
            recommendations.push('Лучшее время для финансов');
        }
        
        // General solar year guidance
        recommendations.push('Год №7 - фокус на качестве, не количестве');
        
        return recommendations;
    }
    
    // Close modal
    const modal = document.getElementById('calendarModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal?.querySelector('.calendar-modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Generate calendar
    generateCalendar();
}

// Monthly Wishes Quiz
function initQuiz() {
    const quizMonthsGrid = document.getElementById('quizMonthsGrid');
    const quizResult = document.getElementById('quizResult');
    
    if (!quizMonthsGrid || !quizResult) return;
    
    // Monthly wishes data with personalized content
    const monthlyWishes = [
        {
            name: 'Январь',
            icon: '🌙',
            energy: 'Сборка Ядра. Запуск Финансового Потока',
            wish: 'Пусть твой день рождения станет точкой отсчета самого мощного года в твоей жизни. Желаю тебе смелости заявить о себе миру во весь голос и собрать первые плоды своих усилий уже в этом месяце. Ты готов к масштабу — возьми его!',
            guidance: [
                'Пропиши свою главную финансовую цель года на бумаге',
                'Начни утренние ритуалы у моря — это твоя перезагрузка',
                'Договорись о ролях с близкими, чтобы двигаться в одном направлении',
                'Не мельчи — решения, а не разговоры'
            ],
            affirmation: 'Январь — мой стартовая площадка. Я готов взлететь! 🚀'
        },
        {
            name: 'Февраль',
            icon: '🌸',
            energy: 'Очищение и Проявление',
            wish: 'Желаю тебе отпустить все лишнее и выйти лицом к миру. Пусть твоя харизма и экспертность привлекут именно тех людей, которые тебе нужны. Не прячься — мир ждет тебя!',
            guidance: [
                'Активно продвигай себя в соцсетях — говори о своей экспертности',
                'Завершай старые стратегии, оставляй только то, что откликается',
                'Внимание на горло и спину — физическая активность обязательна',
                'Поддерживай партнера в творчестве, не перебивай роли'
            ],
            affirmation: 'Я не прячусь. Я выхожу и сияю! ✨'
        },
        {
            name: 'Март',
            icon: '🌱',
            energy: 'Новый Старт. Расширение',
            wish: 'Пусть март принесет тебе свежий ветер перемен и новые возможности. Желаю смелости начать то, о чем давно мечтал, и энергии довести это до результата. Движение — это жизнь!',
            guidance: [
                'Запускай обновленный продукт или ребрендинг — идеальное время',
                'Участвуй в мероприятиях, расширяй сеть контактов',
                'Практикуй дыхательные техники, гуляй в Мраморных горах',
                'Планируй совместные поездки и новые впечатления'
            ],
            affirmation: 'Я держу линию и двигаюсь вперед! 🌱'
        },
        {
            name: 'Апрель',
            icon: '🌿',
            energy: 'Синергия и Углубление',
            wish: 'Желаю тебе почувствовать силу партнерства и синергии. Пусть в этом месяце ты осознаешь, как мощно работать в команде и как важна твоя роль в нашем союзе. Вместе мы сила!',
            guidance: [
                'Расширяй каналы дохода — диверсификация это сила',
                'Фокусируйся на качестве контента, усиливай бренд',
                'Балансируй работу и отдых — восстанавливай энергию',
                'Вместе планируйте и медитируйте — я направляю твою энергию'
            ],
            affirmation: 'Я могу больше. Я не один — я в силе! 💪'
        },
        {
            name: 'Май',
            icon: '🌺',
            energy: 'Творческий Прорыв и Расцвет',
            wish: 'Пусть май раскроет твой творческий потенциал на полную! Желаю тебе вдохновения, признания и того самого "взлета", когда все складывается как по волшебству. Твое время сиять — сейчас!',
            guidance: [
                'Создавай яркий креативный контент — соцсети взлетят',
                'Не геройствуй — следи за сердцем и давлением',
                'Празднуй успехи, не конкурируй с партнером',
                'Новые клиенты и контракты идут к тебе — будь открыт'
            ],
            affirmation: 'Я сияю и творю чудеса! 🌟'
        },
        {
            name: 'Июнь',
            icon: '☀️',
            energy: 'Дисциплина и Гармония',
            wish: 'Желаю тебе найти баланс между амбициями и покоем. Пусть июнь станет месяцем гармонии, когда ты систематизируешь все процессы и почувствуешь уверенность в своих силах. Качество важнее количества!',
            guidance: [
                'Внедри CRM или новые воронки — систематизируй финансы',
                'Укрепляй бренд через качество, а не количество',
                'Йога и растяжка — береги спину',
                'Честные разговоры и совместное творчество'
            ],
            affirmation: 'Лучше меньше, но точно. Я выбираю качество! ✅'
        },
        {
            name: 'Июль',
            icon: '🌊',
            energy: 'Ветер Перемен и Прорыв',
            wish: 'Пусть июль принесет тебе смелость принять неожиданные возможности и гибкость изменить курс, если нужно. Желаю тебе довериться потоку и почувствовать силу перемен. Ты на своем месте!',
            guidance: [
                'Будь открыт к неожиданным финансовым возможностям',
                'Возможны поездки или резкая смена вектора — доверяй',
                'Внимание к сердцу и дыханию — энергия возвращается',
                'Поддерживайте друг друга в больших шагах'
            ],
            affirmation: 'Я на своем месте. Я доверяю переменам! 🌊'
        },
        {
            name: 'Август',
            icon: '🔥',
            energy: 'Сияние и Перекрёсток',
            wish: 'Желаю тебе смелости сделать важный выбор и сосредоточиться на одном главном направлении. Пусть август принесет признание, успех и ясность в том, куда двигаться дальше. Ты лидер!',
            guidance: [
                'Рост доходов — выбирай ОДНО главное направление',
                'Признание и лидерство — время отказаться от лишнего',
                'Отдыхай на природе, не перегревайся',
                'Празднуйте союз, не давите друг на друга'
            ],
            affirmation: 'Я выбираю одно и достигаю в нем совершенства! 🔥'
        },
        {
            name: 'Сентябрь',
            icon: '⭐',
            energy: 'Точка Сборки. Пик Личного Года',
            wish: 'Это ТВОЙ месяц! Желаю тебе собрать все плоды года и почувствовать масштаб своих достижений. Пусть сентябрь станет пиком, когда все сходится и открываются лучшие возможности года!',
            guidance: [
                'ЛУЧШИЕ финансовые окна — инвестируй и планируй',
                'Максимум видимости — ретрит может дать гениальные идеи',
                'Следи за ресурсом, внимание к психоэмоциональному состоянию',
                'Четкое распределение задач, совместное обучение'
            ],
            affirmation: 'Я беру свое! Это мой пик! ⭐'
        },
        {
            name: 'Октябрь',
            icon: '🍁',
            energy: 'Финансовый Урожай и Трансформация',
            wish: 'Пусть октябрь принесет тебе самые щедрые плоды года! Желаю изобилия, процветания и мудрости правильно распорядиться ресурсами. Ты создал это — наслаждайся результатом!',
            guidance: [
                'САМЫЙ ПРИБЫЛЬНЫЙ МЕСЯЦ — инвестиции окупятся вдвойне',
                'Обнови стратегию, укрепи авторитет, фиксируй результаты',
                'Очищение организма и восстановление',
                'Совместные ритуалы обновления, благодарность'
            ],
            affirmation: 'Я сохраняю и приумножаю! Урожай мой! 🍁'
        },
        {
            name: 'Ноябрь',
            icon: '🌍',
            energy: 'Глобальный Взгляд и Отсев',
            wish: 'Желаю тебе глобального видения и смелости мыслить масштабно. Пусть ноябрь поднимет тебя на новый уровень — международный. Отпусти старое и смотри вперед!',
            guidance: [
                'Бренд выходит на международный уровень — думай глобально',
                'Отказывайся от нерентабельного без сожалений',
                'Профилактика иммунитета — береги здоровье',
                'Не тащите старое, планируйте будущее вместе'
            ],
            affirmation: 'Я отпускаю старое и иду к новым горизонтам! 🌍'
        },
        {
            name: 'Декабрь',
            icon: '❄️',
            energy: 'Итог и Планирование 2027',
            wish: 'Пусть декабрь станет месяцем благодарности за пройденный путь и вдохновения для нового года. Желаю тебе осознать, как много ты достиг, и с радостью смотреть в будущее. Год пройден — ты молодец!',
            guidance: [
                'Финансовая стабильность — подводи баланс года',
                'Признавай итоги, вместе подводите результаты',
                'Отдых и полное восстановление — ты заслужил',
                'Фиксируй успехи, благодари себя, партнера и мир'
            ],
            affirmation: 'Год пройден! Я горжусь собой! ❄️✨'
        }
    ];
    
    // Generate month buttons
    monthlyWishes.forEach((month, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-month-btn';
        btn.innerHTML = `
            <span class="quiz-month-icon">${month.icon}</span>
            <span class="quiz-month-name">${month.name}</span>
        `;
        btn.addEventListener('click', () => showMonthResult(month, btn));
        quizMonthsGrid.appendChild(btn);
    });
    
    // Show selected month result
    function showMonthResult(month, selectedBtn) {
        // Update active button
        document.querySelectorAll('.quiz-month-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        selectedBtn.classList.add('active');
        
        // Build result HTML
        let resultHTML = `
            <div class="quiz-result-content">
                <div class="quiz-result-header">
                    <div class="quiz-result-month">${month.icon} ${month.name} 2026</div>
                    <div class="quiz-result-energy">${month.energy}</div>
                </div>
                
                <div class="quiz-result-wishes">
                    <h3>💝 Пожелания для тебя</h3>
                    <p class="quiz-result-wishes-text">${month.wish}</p>
                </div>
                
                <div class="quiz-result-guidance">
                    <h3>🎯 Напутствия на месяц</h3>
                    <ul class="quiz-result-guidance-list">
        `;
        
        month.guidance.forEach(item => {
            resultHTML += `<li>${item}</li>`;
        });
        
        resultHTML += `
                    </ul>
                </div>
                
                <div class="quiz-result-affirmation">
                    <p class="quiz-result-affirmation-text">"${month.affirmation}"</p>
                </div>
            </div>
        `;
        
        quizResult.innerHTML = resultHTML;
        
        // Smooth scroll to result
        quizResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Add to initialization
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initMonths();
    initScrollProgress();
    initNavScroll();
    initScrollAnimations();
    initYearProgress();
    initThemeToggle();
    initPDFExport();
    initCalendar();
    initQuiz();
});
