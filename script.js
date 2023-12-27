document.querySelectorAll('.section h1').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const wrapper = content.querySelector('.content-wrapper');

        if (content.style.height) {
            // Collapse section
            content.style.height = null;
        } else {
            // Expand section
            content.style.height = wrapper.scrollHeight + 'px';
        }

        // Toggles the 'open' class on the section
        this.parentElement.classList.toggle('open');
    });
});