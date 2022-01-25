var jobs = [
    {
        title: 'Best Choice LLC',
        monts: 14,
        description: 'Web Developer and Project Manager'
    },
    {
        title: 'Arzobispado de Sto. Dgo',
        monts: 28,
        description: 'Web Developer and Multimedia Designer'
    },
    {
        title: 'Proceso.com.do',
        monts: 10,
        description: 'Web Developer'
    },
    {
        title: 'DIGEPEP',
        monts: 16,
        description: 'WordPress Developer, Front-End Developer and Web Master'
    }
]

var skills = [
    {
        title: 'HTML',
        level: 9
    },
    {
        title: 'CSS',
        level: 7
    },
    {
        title: 'JavaScript',
        level: 8
    },
    {
        title: 'PHP',
        level: 6
    }
]


// var user_bio = [
//     {
//         about: "Web Developer with more than 6 years of experience creating amazing websites and web apps as freelancer and employee of great agencies and organizations, even the government."
//     },
// ];

// user_bio.forEach(user => document.getElementsByClassName("about").innerHTML += `${user.about}`);


jobs.forEach(job => document.getElementById("experience").innerHTML += 
    `<span class="experience">
        <h4>${job.title} <span>(${job.monts} meses)</span></h4>
        <p>${job.description}</p>
    </span>`
);

skills.forEach(skill => document.getElementById("skills_list").innerHTML += `
    <tr>
        <td class="skill">${skill.title}</td>
            <td class="progress">
                <progress max="10" value="${skill.level}"></progress>
            </td>
        <td class="progress_text">${skill.level}/10</td>
    </tr>
`);

