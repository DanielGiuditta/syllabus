document.querySelectorAll('.section h1').forEach(header => {
    header.addEventListener('click', function() {
        const section = this.parentElement;
        const content = this.nextElementSibling;
        const wrapper = content.querySelector('.content-wrapper');

        if (section.classList.contains('open')) {
            // Collapse section
            content.style.height = '0';
        } else {
            // Expand section
            content.style.height = wrapper.scrollHeight + 'px';
        }

        section.classList.toggle('open');
    });
});
