// --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ТЕМ ---
document.addEventListener("DOMContentLoaded", function() {
    const themeBtn = document.getElementById('theme-toggle');
    
    // Если кнопки нет на странице, просто выходим (чтобы не было ошибок)
    if (!themeBtn) return; 

    // Проверяем, не сохранена ли уже светлая тема
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeBtn.textContent = '☀️';
    }

    // Клик по кнопке
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        if (isLight) {
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
});