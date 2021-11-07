const { Repo } = require("../../models");

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
        console.log(repos);
    for (let i = 0 ; i < repos.length ; i++) {
        if (repos[i].stargazers_count > 0) {
            
            let name = repos[i].name.replaceAll("-", " ");
            let url_name = repos[i].name;
            let url_github = repos[i].html_url;
            let url_image =`https://raw.githubusercontent.com/andresliu22/${repos[i].name}/main/assets/images/site-img.PNG`;
            let url_deploy_link =`https://andresliu22.github.io/${repos[i].name}`;

            const response = await fetch(`/api/repos`, {
                method: 'POST',
                body: JSON.stringify({ name, url_name, url_github, url_image, url_deploy_link })
            })

            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to load repos');
            }
        }
    }
        
    } else {
        console.log('Error');
    }
};

// function getRepos() {
//     var apiUrl = 'https://api.github.com/users/andresliu22/repos?type=public&sort=created';
  
//     fetch(apiUrl).then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//               console.log(data);
//             displayFeaturedRepos(data);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to GitHub');
//       });
//   };

getRepos();
// function displayFeaturedRepos(repos) {
//     for (let i = 0 ; i < repos.length ; i++) {
//         if (repos[i].stargazers_count > 0) {
//             let projectDiv = $('<div class="project">');
//             let header = $('<header>');
//             let repoName = repos[i].name.replaceAll("-", " ");

//             let aRepo = $('<a target="_blank">');
//             aRepo.attr("href", repos[i].html_url);
//             aRepo.text(repoName[0].toUpperCase() + repoName.slice(1));
            
//             let aLive = $('<a target="_blank">');
//             aLive.attr("href",`https://andresliu22.github.io/${repos[i].name}`);

//             let imageDiv = $('<div class="image-div">');
//             let img = $('<img>');
//             img.attr("src", `https://raw.githubusercontent.com/andresliu22/${repos[i].name}/main/assets/images/site-img.PNG`);
//             img.attr("alt", `${repos[i].name}`);

//             projectDiv.append(header);
//             header.append(aRepo);
//             projectDiv.append(aLive);
//             aLive.append(imageDiv);
//             imageDiv.append(img);

//             workRepos.append(projectDiv);
//         }
//     }
// }

// function displaySkills() {
//     let skills = ["html", "css", "javascript", "angular", "react", "xcode", "swift", "sql"];

//     skills.forEach(skill => {
//         let skillDiv = $('<div class="skill">');
//         let img = $('<img>');
//         img.attr("src", `./assets/images/${skill}-logo.png`);
//         img.attr("alt", `${skill}-logo`);

//         workSkills.append(skillDiv);
//         skillDiv.append(img);
//     });
// }