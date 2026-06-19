document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== */
    // ЛОГИКА ВОРОТ */
    // ==================== */
    const mainGate = document.getElementById('main-gate');
    const marchSection = document.getElementById('march-section');
    const yearSection = document.getElementById('year-section');
    const gateCards = document.querySelectorAll('.gate-card');
    const backButtons = document.querySelectorAll('.back-to-gate');
    
    // Открыть секцию
    gateCards.forEach(card => {
        card.addEventListener('click', function() {
            const gate = this.getAttribute('data-gate');
            
            // Анимация ухода ворот
            mainGate.classList.add('fade-out');
            
            setTimeout(() => {
                mainGate.classList.remove('active-gate', 'fade-out');
                
                if (gate === 'march') {
                    marchSection.classList.add('active-section');
                    yearSection.classList.remove('active-section');
                } else if (gate === 'year') {
                    yearSection.classList.add('active-section');
                    marchSection.classList.remove('active-section');
                }
                
                // Сброс на первую вкладку в открытой секции
                resetTabs(gate);
            }, 500);
        });
    });
    
    // Вернуться к воротам
    backButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            marchSection.classList.remove('active-section');
            yearSection.classList.remove('active-section');
            mainGate.classList.add('active-gate');
        });
    });
    
    function resetTabs(section) {
        if (section === 'march') {
            document.querySelectorAll('#march-section .tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#march-section [data-tab="home"]').classList.add('active');
            document.querySelectorAll('#march-section .tab-pane').forEach(pane => pane.classList.remove('active'));
            document.getElementById('home').classList.add('active');
        } else if (section === 'year') {
            document.querySelectorAll('#year-section .tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelector('#year-section [data-tab="year-home"]').classList.add('active');
            document.querySelectorAll('#year-section .tab-pane').forEach(pane => pane.classList.remove('active'));
            document.getElementById('year-home').classList.add('active');
        }
    }
    
    // ==================== */
    // ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК */
    // ==================== */
    const allTabButtons = document.querySelectorAll('.tab-button:not(.back-to-gate)');
    
    allTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const section = this.getAttribute('data-section');
            
            // Определяем, в какой мы секции
            let parentSection;
            if (section === 'year') {
                parentSection = yearSection;
            } else {
                parentSection = marchSection;
            }
            
            // Снимаем активность со всех кнопок и панелей внутри этой секции
            parentSection.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            parentSection.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Активируем нужные
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // ==================== */
    // 25 ПРИЧИН */
    // ==================== */
    const reasonsList = document.getElementById('reasons-list');
    
    if (reasonsList) {
        const reasons = [
            "просто за то что ты есть",
            "за то какая ты есть",
            "за твои прекрасные глаза",
            "за твой милый голос",
            "за твой чудесный смех",
            "за твои безумно глубокие глаза",
            "за твой аккуратный носик",
            "за почти прекрасные твои ресницы)))",
            "за твой идеальный характер",
            "за твою доброту",
            "за твою честность",
            "за твою верность",
            "твое прекрасное личико",
            "твоя чудесная фигура",
            "безумная фотогеничность",
            "лучшее имя на свете(потому что оно твое)",
            "твои искренние чувства",
            "твой прекрасный запах",
            "твой чудесный ум",
            "твоя любовь к чтению",
            "за комфорт который я ощущаю только с тобой",
            "за наши разговоры каждый день",
            "за твои чудесные кружочки",
            "за твою искренность",
            "все в тебе прекрасно ян"
        ];
        
        reasons.forEach((reason, index) => {
            const card = document.createElement('div');
            card.className = 'reason-card';
            card.innerHTML = `
                <div class="reason-number">${index + 1}</div>
                <div class="reason-text">${reason}</div>
            `;
            reasonsList.appendChild(card);
        });
    }
    
    // ==================== */
    // ПИСЬМО В БУДУЩЕЕ */
    // ==================== */
    const letterContent = document.getElementById('future-letter');
    
    if (letterContent) {
        const letter = `Моя любимая Янка хулиганка,

Сегодня 07.03.2025 ты далековато от меня и пока мы не встретимся и ты не получишь подарок, я решил написать для тебя этот сайтик.

Я вижу нас с тобой через десятилетия, мы с тобой стали максимально близкими для друг друга, пережили все препятствия и наконец просто вместе, без чего то лишнего, мне больше ничего и не нужно.

С начала нашего общения и отношения не было ни одного дня в котором мы с тобой не взаимодействовали, всегда находили способ и время чтобы провести время вместе и не важно что уже полнейшая ночь, мы просто хотели и поэтому были вместе.

Я вижу как ты читаешь это по истечению долгого времени и наши чувства все сильнее и сильнее, я так же сильно безумно тебя люблю и хочу быть вместе с тобой.

Просто хочу сказать тебе спасибо за все, главное просто за то что ты есть и будешь всегда, я безумно сильно люблю тебя и скучаю.

Твой вечный поклонник,
Я`;
        
        letterContent.textContent = letter;
    }
    
    // ==================== */
    // СЮРПРИЗ */
    // ==================== */
    const surpriseTrigger = document.getElementById('surprise-trigger');
    const surpriseModal = document.getElementById('surprise-modal');
    const closeModal = document.querySelector('.close-modal');
    
    surpriseTrigger.addEventListener('click', () => {
        surpriseModal.classList.add('show');
        
        const messages = [
            "Ты — самое лучшее, что случилось в моей жизни. Спасибо, что ты есть!",
            "Ты самая прекрасная девушка на свете 😉",
            "Спасибо что ты есть янчиииик!",
            "Я люблю тебя янчик!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('surprise-message').textContent = randomMessage;
    });
    
    closeModal.addEventListener('click', () => {
        surpriseModal.classList.remove('show');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === surpriseModal) {
            surpriseModal.classList.remove('show');
        }
    });
    
    // ==================== */
    // МУЗЫКА */
    // ==================== */
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.querySelector('.music-icon');
    const musicText = document.querySelector('.music-text');
    const volumeSlider = document.getElementById('volumeSlider');
    
    let isMusicPlaying = false;
    
    bgMusic.load();
    
    function playMusic() {
        bgMusic.play()
            .then(() => {
                isMusicPlaying = true;
                musicIcon.textContent = '🎵';
                musicText.textContent = 'Выключить музыку';
                musicIcon.classList.add('playing');
            })
            .catch(error => {
                console.log("Автовоспроизведение заблокировано браузером:", error);
            });
    }
    
    function pauseMusic() {
        bgMusic.pause();
        isMusicPlaying = false;
        musicIcon.textContent = '🔇';
        musicText.textContent = 'Включить музыку';
        musicIcon.classList.remove('playing');
    }
    
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            bgMusic.volume = e.target.value;
        });
    }
    
    function firstInteraction() {
        playMusic();
        document.removeEventListener('click', firstInteraction);
        document.removeEventListener('touchstart', firstInteraction);
    }
    
    document.addEventListener('click', firstInteraction);
    document.addEventListener('touchstart', firstInteraction);
    
    musicToggle.addEventListener('click', () => {
        document.removeEventListener('click', firstInteraction);
        document.removeEventListener('touchstart', firstInteraction);
    });
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isMusicPlaying) {
            bgMusic.pause();
        }
    });
    
    // ==================== */
    // СЧЁТЧИК ДНЕЙ */
    // ==================== */
    function updateDaysCounter() {
        const startDate = new Date(2025, 5, 16); // 16 июня 2025
        const today = new Date();
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        const daysCounter = document.getElementById('daysCounter');
        if (daysCounter) {
            daysCounter.textContent = `Мы вместе уже ${diffDays} дней ❤️`;
        }
        
        const daysTogether = document.getElementById('daysTogether');
        const hoursTogether = document.getElementById('hoursTogether');
        if (daysTogether) {
            daysTogether.textContent = diffDays;
        }
        if (hoursTogether) {
            hoursTogether.textContent = diffDays * 24;
        }
    }
    updateDaysCounter();
    
    // ==================== */
    // ЛЕПЕСТКИ */
    // ==================== */
    function createPetals() {
        const container = document.getElementById('petalsContainer');
        const petals = ['🌸', '🌷', '🌹', '🌺', '🌸'];
        
        setInterval(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = Math.random() * 3 + 5 + 's';
            petal.style.fontSize = Math.random() * 20 + 15 + 'px';
            petal.style.opacity = Math.random() * 0.3 + 0.3;
            
            container.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 8000);
        }, 500);
    }
    createPetals();
    
    // ==================== */
    // ЛЕПЕСТКИ ДЛЯ ФОНА ВОРОТ */
    // ==================== */
    function createGatePetals() {
        const petalsBg = document.querySelector('.petals-bg');
        if (!petalsBg) return;
        
        const emojis = ['🌸', '🌷', '💕', '✨', '🌺', '💗'];
        
        setInterval(() => {
            const petal = document.createElement('span');
            petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            petal.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -30px;
                font-size: ${Math.random() * 20 + 15}px;
                opacity: ${Math.random() * 0.4 + 0.2};
                animation: gatePetalFall ${Math.random() * 4 + 6}s linear forwards;
                pointer-events: none;
            `;
            
            petalsBg.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 10000);
        }, 400);
    }
    createGatePetals();
});

// Добавим стиль для анимации лепестков на воротах
const style = document.createElement('style');
style.textContent = `
    @keyframes gatePetalFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);