let score = 0;
const milestones = [101, 251, 501, 751, 1001, 1501, 2001, 3001, 5001, 7501, 10001, 15001, 20001, 25001, 50001];
let currentMilestoneIndex = 0;
let scorerank = 1;

function incrementCounter() {
    score += scorerank;
    document.getElementById('score').textContent = score;
    updateProgressBar();
}

function updateProgressBar() {
    if (currentMilestoneIndex >= milestones.length) {
        return; 
    }

    const milestone = milestones[currentMilestoneIndex];
    const progressBar = document.getElementById('progress-bar');
    const progressPercentageElement = document.getElementById('progress-percentage');
    const clicksLeftElement = document.getElementById('clicks-left');
    const rankElement = document.getElementById('rank');

    const progressPercentage = Math.min((score / milestone) * 100, 100);

    progressBar.style.width = progressPercentage + '%';
    progressPercentageElement.textContent = Math.floor(progressPercentage) + '%';
    clicksLeftElement.textContent = `${milestone - score} собранных скуфов до следующего уровня`;

    if (score < milestones[0]) {
        rankElement.textContent = "Новичок Скуфозавоев";
    } else if (score < milestones[1]) {
        rankElement.textContent = "Охотник за Скуфами";
        scorerank = 2;
    } else if (score < milestones[2]) {
        rankElement.textContent = "Эксперт по Скуфам";
        scorerank = 3;
    } else if (score < milestones[3]) {
        rankElement.textContent = "Собиратель Скуфов";
        scorerank = 4;
    } else if (score < milestones[4]) {
        rankElement.textContent = "Проворный Скуфолов";
        scorerank = 5;
    } else if (score < milestones[5]) {
        rankElement.textContent = "Мастер Скуфопада";
        scorerank = 6;
    } else if (score < milestones[6]) {
        rankElement.textContent = "Скуфомант";
        scorerank = 7;
    } else if (score < milestones[7]) {
        rankElement.textContent = "Герой Скуфов";
        scorerank = 8;
    } else if (score < milestones[8]) {
        rankElement.textContent = "Легенда Скуфов";
        scorerank = 9;
    } else if (score < milestones[9]) {
        rankElement.textContent = "Чемпион Скуфов";
        scorerank = 10;
    } else if (score < milestones[10]) {
        rankElement.textContent = "Магистр Скуфов";
        scorerank = 11;
    } else if (score < milestones[11]) {
        rankElement.textContent = "Император Скуфов";
        scorerank = 12;
    } else if (score < milestones[12]) {
        rankElement.textContent = "Властелин Скуфов";
        scorerank = 13;
    } else if (score < milestones[13]) {
        rankElement.textContent = "Король Скуфов";
        scorerank = 14;
    } else {
        rankElement.textContent = "Бог Скуфов";
        scorerank = 15;
    }

    if (score >= milestone) {
        currentMilestoneIndex += 1;
    }
}
