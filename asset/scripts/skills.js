let mySkills = [
    {skill: "HTML", level: '100%'},
    {skill: "CSS", level: '80%'},
    {skill: "JAVASCRIPT", level: '50%'},
    {skill: "TAILWIND", level: '80%'},
    {skill: "PYTHON", level: '40%'},
    {skill: "BOOTSTRAP", level: '90%'},
    {skill: "PHP", level: '20%'},
];

let skillContainer = document.querySelector('.skill-content');
mySkills.forEach((skills) => {
    let skillMeta = document.createElement('div');
    skillMeta.classList.add('skill-meta');
    let skillLabel = document.createElement('label');
    skillLabel.textContent = skills.skill;
    skillLabel.setAttribute('for', skills.skill);
    let progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    let progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.width = skills.level;
    progressBar.appendChild(progress);
    skillMeta.append(skillLabel, progressBar);
    skillContainer.appendChild(skillMeta);    
});

// console.log(body);
body.addEventListener('scroll', () => {
    let progress = document.querySelectorAll('.progress');
    if (skillContainer.getBoundingClientRect().top < body.clientHeight) {        
        progress.forEach((item) => {            
            item.style.transform = 'translateX(0)';
        })
    }
})
