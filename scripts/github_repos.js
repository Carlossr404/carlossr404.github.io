const projectsGrid = document.getElementById('projects-grid')

fetch('https://api.github.com/users/carlossr404/repos?sort=updated&per_page=4')
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            // Create Project card for each repository
            const card = document.createElement('div')
            card.classList.add('project-card')

            // Images
            const image = document.createElement('img')
            image.classList.add('project-image')
            image.src = `imgs/projects/${repo.name}.png`
            image.alt = `${repo.name} project screenshot`

            // Project info container
            const info = document.createElement('div')
            info.classList.add('project-info')

            // Project title (also links to repository)
            const title = document.createElement('div')
            title.classList.add('project-title')
            const titleLink = document.createElement('a')
            titleLink.href = repo.html_url
            titleLink.target = '_blank'
            titleLink.textContent = repo.name
            title.appendChild(titleLink)

            // Project description
            const desc = document.createElement('p')
            desc.classList.add('project-description')
            desc.textContent = repo.description || 'no description provided'

            // Append title and description to info
            info.appendChild(title)
            info.appendChild(desc)

            // Append img and info to card
            card.appendChild(image)
            card.appendChild(info)

            // Append card to grid
            projectsGrid.appendChild(card)

        })
    })
    .catch(err => {
        console.error('Error fetching repositories: ', err)
        projectsGrid.innerHTML = '<p>Failed to load projects.</p>'
    })