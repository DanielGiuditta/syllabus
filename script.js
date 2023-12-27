document.querySelectorAll('.section h2').forEach(header => {
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

document.getElementById('style-selector').addEventListener('change', function() {
    switchStylesheet(this.value);
});

function switchStylesheet(styleId) {
    document.querySelectorAll("link[rel='stylesheet']").forEach(link => {
        link.disabled = (link.id !== styleId);
    });
}