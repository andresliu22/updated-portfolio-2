const showSkills = async () => {
    const skills = ["html", "css", "javascript", "angular", "react", "xcode", "swift", "sql"];

    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        const name = skill;
        const url_image = `./assets/images/${skill}-logo.png`;
        console.log(name);
        const response = await fetch(`/api/skills`, {
            method: 'POST',
            body: JSON.stringify({ name, url_image }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            console.log('Failed to load repo');
        }
    }
    
}

showSkills();