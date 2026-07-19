document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('button.md\\:hidden');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // In a real app, this would toggle a mobile menu
            alert('Mobile menu triggered');
        });
    }
});
