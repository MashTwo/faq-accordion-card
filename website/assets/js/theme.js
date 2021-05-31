const accordion = (() => {
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(item => {
        const title = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        content.style.display = 'none';

        title.addEventListener('click', (e) => {
            content.style.display === 'none' ? content.style.display = 'block' : content.style.display = 'none';
        });
    });
})();