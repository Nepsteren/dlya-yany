document.addEventListener('DOMContentLoaded', function() {
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function switchTab(tabId) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    const reasonsList = document.getElementById('reasons-list');
    
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

    const letterContent = document.getElementById('future-letter');
    
    const letter = `Моя любимая Янка хулиганка,

Сегодня 07.03.2025 ты далековато от меня и пока мы не встретимся и ты не получишь подарок, я решил написать для тебя этот сайтик.

Я вижу нас с тобой через десятилетия, мы с тобой стали максимально близкими для друг друга, пережили все препятствия и наконец просто вместе, без чего то лишнего, мне больше ничего и не нужно.

С начала нашего общения и отношения не было ни одного дня в котором мы с тобой не взаимодействовали, всегда находили способ и время чтобы провести время вместе и не важно что уже полнейшая ночь, мы просто хотели и поэтому были вместе.

Я вижу как ты читаешь это по истечению долгого времени и наши чувства все сильнее и сильнее, я так же сильно безумно тебя люблю и хочу быть вместе с тобой.

Просто хочу сказать тебе спасибо за все, главное просто за то что ты есть и будешь всегда, я безумно сильно люблю тебя и скучаю.

Твой вечный поклонник,
Я`;

    letterContent.textContent = letter;

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
        tabButtons.forEach(btn => btn.removeEventListener('click', firstInteraction));
    }

    document.addEventListener('click', firstInteraction);
    document.addEventListener('touchstart', firstInteraction);
    tabButtons.forEach(btn => btn.addEventListener('click', firstInteraction));

    musicToggle.addEventListener('click', () => {
        document.removeEventListener('click', firstInteraction);
        document.removeEventListener('touchstart', firstInteraction);
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isMusicPlaying) {
            bgMusic.pause();
        }
    });

        
    function updateDaysCounter() {
        const startDate = new Date(2025, 5, 16);
        const today = new Date();
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById('daysCounter').textContent = `Мы вместе уже ${diffDays} дней ❤️`;
    }
    updateDaysCounter();

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
});