document.addEventListener('DOMContentLoaded', () => {
    const offset = 20; 

    document.querySelectorAll('ol a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' 
        });
    });
});