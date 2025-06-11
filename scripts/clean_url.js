window.addEventListener('hashchange', e => {
    history.replaceState({}, "", location.hash.slice(1))
});
