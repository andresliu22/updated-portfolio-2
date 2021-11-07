const getRepos = async () => {
    var apiUrl = 'https://api.github.com/users/andresliu22/repos?type=public&sort=created';
    
    const dataResponse = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (dataResponse.ok) {
        const repos = await dataResponse.json();
        for (let i = 0 ; i < repos.length ; i++) {
            if (repos[i].stargazers_count > 0) {
                const repoName = repos[i].name.replaceAll("-", " ");
                const name = repoName.slice(0, 1).toUpperCase() + repoName.slice(1);
                const url_name = repos[i].name;
                const url_github = repos[i].html_url;
                const url_image =`https://raw.githubusercontent.com/andresliu22/${repos[i].name}/main/assets/images/site-img.PNG`;
                const url_deploy_link =`https://andresliu22.github.io/${repos[i].name}`;

                const response = await fetch(`/api/repos`, {
                    method: 'POST',
                    body: JSON.stringify({ name, url_name, url_github, url_image, url_deploy_link }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    console.log('Failed to load repo');
                }
            }
        }
    } else {
        console.log('Error');
    }
};

getRepos();