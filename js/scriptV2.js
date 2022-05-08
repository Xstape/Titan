
// Dark theme
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () =>{
    document.body.classList.toggle('dark');
});

// Text manipulating
function content(divSelector, value) {
    document.querySelector(divSelector).innerHTML = value;
};

// Indicator control
const indicator = document.querySelector('.indicator');

indicator.addEventListener('click', () => {
    indicator.classList.toggle('indicator-on');
});

// Water level control
const openControl = document.getElementById('openControl'),
    closeControl = document.getElementById('closeControl'),
    waterLevel = document.getElementById('waterLevel'),
    levelHeight = document.querySelector('.waterLevel').offsetHeight,
    maxFillingSpeed = 200;

let waterLevelHeight = 0;
function waterLevelCalc () {
    content('#L', waterLevelHeight);
    waterLevelHeight += maxFillingSpeed * (openControl.value / 100);
    waterLevel.style.height = levelHeight - waterLevelHeight * (levelHeight / 2000) + "px";
}

setInterval(waterLevelCalc, 1000);

// [TODO]
// Тело функции waterLevelCalc необходимо доработать:
// 1) Ограничить максимум наполнения
// 2) Сделать более читаемым алгоритм
// 3) Добавить реализацию убывания воды при активном closeControl
// 
// Добавить setState для включения насоса