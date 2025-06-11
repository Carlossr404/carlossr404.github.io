fetch('https://api.github.com/users/carlossr404')
    .then(response => response.json())
    .then(data => {
        const bio = document.getElementById('github-bio')
        bio.textContent = data.bio;
    })
    .catch(error => console.error('GitHub API error: ', error))