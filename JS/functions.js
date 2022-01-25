var user_bio = {
    name: "José Manuel",
    last_name: "Cornelio",
    professional_title: "Web Developer",
    about: "More than 6 years of experience creating amazing websites and web apps as freelancer and employee of great agencies and organizations, even the government.",
    birth_date: "08-19-1993",
    city: "Santo Domingo",
    country: "Dominican Republic"
};

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
];

//User information output
document.getElementById("user_name").innerHTML = `${user_bio.name} ${user_bio.last_name}`;
document.getElementById("professional_title").innerHTML = user_bio.professional_title;
document.getElementById("about").innerHTML = user_bio.about;

jobs.forEach(job => document.getElementById("experience").innerHTML += 
    `<span class="experience">
        <h4>${job.title} <span>(${job.monts} months)</span></h4>
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

