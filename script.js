
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop + 100) {
            section.style.opacity = '1';
        }
    });
});


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const country = card.dataset.country;
        alert(`${country} details are coming soon!`);
    });
});
