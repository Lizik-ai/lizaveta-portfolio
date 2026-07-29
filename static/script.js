// ==========================================================================
// ЛОГИКА ОДНОСТРАНИЧНОГО САЙТА (Плавный скролл и языки)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ
    const btnRu = document.getElementById('btn-ru');
    const btnEn = document.getElementById('btn-en');
    
    function changeLanguage(lang) {
        const translatableElements = document.querySelectorAll('[data-ru]');
        
        translatableElements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                element.innerHTML = translation;
            }
        });

        document.documentElement.lang = lang;
    }

    btnRu.addEventListener('click', () => {
        if (!btnRu.classList.contains('active')) {
            btnRu.classList.add('active');
            btnEn.classList.remove('active');
            changeLanguage('ru');
        }
    });

    btnEn.addEventListener('click', () => {
        if (!btnEn.classList.contains('active')) {
            btnEn.classList.add('active');
            btnRu.classList.remove('active');
            changeLanguage('en');
        }
    });

    // 2. ПЛАВНЫЙ СКРОЛЛ К ПОРТФОЛИО
    const scrollBtn = document.getElementById('go-to-portfolio');
    const portfolioSection = document.getElementById('portfolio');

    scrollBtn.addEventListener('click', () => {
        portfolioSection.scrollIntoView({ 
            behavior: 'smooth', // Плавная анимация скролла
            block: 'start'      // Скроллим до начала секции
        });
    });
});
