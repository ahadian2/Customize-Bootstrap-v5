// ====== DarkMode ======
(function () {
    var html = document.documentElement;
    var inputs = document.querySelectorAll('.dark-mode-icon-toggle'); // همه سوییچ‌ها

    function applyTheme(theme, persist) {
        html.setAttribute('data-bs-theme', theme);
        if (persist) localStorage.setItem('theme', theme);
        inputs.forEach(input => input.checked = (theme === 'dark'));
    }

    // مقدار اولیه
    var saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved, false);
    } else {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        applyTheme(mq.matches ? 'dark' : 'light', false);
        mq.addEventListener?.('change', function (e) {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light', false);
            }
        });
    }

    // تغییر توسط هر دکمه
    inputs.forEach(input => {
        input.addEventListener('change', function () {
            applyTheme(this.checked ? 'dark' : 'light', true);
        });
    });
})();



// ====== End DarkMode ======
$(document).ready(function () {
});