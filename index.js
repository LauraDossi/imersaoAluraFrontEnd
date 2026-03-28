document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent immediate navigation

            const name = profile.getAttribute('data-name');
            const image = profile.getAttribute('data-image');

            // Store in localStorage
            localStorage.setItem('perfilAtivoNome', name);
            localStorage.setItem('perfilAtivoImagem', image);

            // Navigate to catalogo.html
            window.location.href = profile.href;
        });
    });
});
