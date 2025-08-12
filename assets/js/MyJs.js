// ====== DarkMode ======
(function () {
    var btn = document.getElementById('themeToggle');
    var icon = document.getElementById('themeIcon');

    btn.addEventListener('click', function () {
        var html = document.documentElement;
        var current = html.getAttribute('data-bs-theme');
        var next = (current === 'dark') ? 'light' : 'dark';

        html.setAttribute('data-bs-theme', next);
        localStorage.setItem('theme', next);

        // اجرای انیمیشن
        icon.classList.add('icon-rotate');

        setTimeout(() => {
            // تغییر آیکون وسط انیمیشن
            icon.className = (next === 'dark') ? 'bi bi-moon' : 'bi bi-sun';
        }, 200);

        setTimeout(() => icon.classList.remove('icon-rotate'), 400);
    });
    // تنظیم آیکون اولیه بر اساس تم ذخیره‌شده یا سیستم
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        icon.className = (savedTheme === 'dark') ? 'bi bi-moon' : 'bi bi-sun';
    } else {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        document.documentElement.setAttribute('data-bs-theme', mq.matches ? 'dark' : 'light');
        icon.className = mq.matches ? 'bi bi-moon' : 'bi bi-sun';
        mq.addEventListener?.('change', function (e) {
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
                icon.className = e.matches ? 'bi bi-moon' : 'bi bi-sun';
            }
        });
    }
})();
// ====== End DarkMode ======
$(document).ready(function () {
});