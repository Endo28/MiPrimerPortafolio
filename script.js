document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.categorias a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < 300) { 
            links.forEach(link => link.classList.remove('activo'));
            const id = section.getAttribute('id');
            document.querySelector(`.categorias a[href="#${id}"]`).classList.add('activo');
        }
    });
});
