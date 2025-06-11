// window.addEventListener('hashchange', e => {
//     history.replaceState({}, "", location.hash.slice(1))
// });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Optional: remove hash from the URL
            history.replaceState(null, '', window.location.pathname);
        }
    });
});
