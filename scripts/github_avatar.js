fetch('https://api.github.com/users/carlossr404')
    .then(response => response.json())
    .then(data => {
        const avatar = document.getElementById('github-avatar')
        avatar.src = data.avatar_url;
    })
    .catch(error => console.error('GitHub API error: ', error))