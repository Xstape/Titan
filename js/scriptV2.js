
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
let isPumpActive = false;

indicator.addEventListener('click', () => {
    indicator.classList.toggle('indicator-on');
    isPumpActive ? isPumpActive = false : isPumpActive = true;
    console.log(isPumpActive)
});

// Water level control
const openControl = document.getElementById('openControl'),
      closeControl = document.getElementById('closeControl'),
      waterLevel = document.getElementById('waterLevel'),
      levelHeight = document.querySelector('.waterLevel').offsetHeight;
let waterLevelHeight = 0

function waterLevelCalc () {
    let maxFillingSpeed = 200,
        maxOutpouringSpeed,
        calcBuffer;

    isPumpActive ? maxOutpouringSpeed = 200 : maxOutpouringSpeed = 0;

    calcBuffer = waterLevelHeight;
    
    if (calcBuffer <= 0) {
        // maxOutpouringSpeed = 0;
        waterLevelHeight += maxFillingSpeed * (openControl.value / 100);
    }
    if (calcBuffer >= 2000) {
        // maxFillingSpeed = 0;
        waterLevelHeight -= maxOutpouringSpeed * (closeControl.value / 100);
    }
    if (calcBuffer > 0 && calcBuffer < 2000) {
        waterLevelHeight += maxFillingSpeed * (openControl.value / 100) - maxOutpouringSpeed * (closeControl.value / 100);
    }

   /*  // Active pump
    if (isPumpActive) {
        // underflow condition
        if ((maxFillingSpeed * (openControl.value / 100) - maxOutpouringSpeed * (closeControl.value / 100)) < 0) {
            maxOutpouringSpeed = 0;
            waterLevelHeight = waterLevelHeight;
        } else {
            waterLevelHeight += maxFillingSpeed * (openControl.value / 100) - maxOutpouringSpeed * (closeControl.value / 100);
        }
    } else {
        // overflow condition
        if ((waterLevelHeight + maxFillingSpeed * (openControl.value / 100)) < 2000) {
            waterLevelHeight += maxFillingSpeed * (openControl.value / 100);
        } else {
            maxFillingSpeed = 0;
            waterLevelHeight = waterLevelHeight;
        }
    } */
    content('#L', waterLevelHeight);
    // Output convertation
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