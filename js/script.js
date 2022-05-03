const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () =>{
    // change theme of website
    document.body.classList.toggle('dark');
});

// Text manipulating
function content(divSelector, value) {
    document.querySelector(divSelector).innerHTML = value;
};

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

const openControl = document.getElementById('openControl'),
    waterLevel = document.querySelector('.waterLevel span'),
    level = document.querySelector('.waterLevel').offsetHeight,
    maxFillingSpeed = 200;

async function delayedCycle() {
    let waterLevelHeight = 0;
    // for (step = 0; step <= 1000; step++) {   
    //     content('#L', waterLevelHeight);
    //     // Расчет шага роста уровня воды с учетом степени открытия вентиля
    //     waterLevelHeight += maxFillingSpeed * (openControl.value / 100);
    //     // Конвертация и вывод высоты уровня воды в данную секунду
    //     waterLevel.style.height = level - waterLevelHeight * (level / 2000) + "px";
    //     await sleep(1000);
    // }
    // [TODO] — объем воды на цифровом датчике не должен превышать объем бака
    // Цикл должен возобновляться при снижении уровня/не достижении уровнем максимума
    while ((level - waterLevelHeight * (level / 2000)) > 0) {
        content('#L', waterLevelHeight);
        waterLevelHeight += maxFillingSpeed * (openControl.value / 100);
        waterLevel.style.height = level - waterLevelHeight * (level / 2000) + "px";
        await sleep(1000);
    }
}

delayedCycle();
