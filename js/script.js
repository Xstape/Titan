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

const waterLevel = document.querySelector('.waterLevel span');
async function delayedGreeting() {
    for (step = 0; step <= 100; step++) {
        content('#out', step);
        // An easier way to build a level line from bottom to top
        waterLevel.style.height = 400 - step * 4 + "px";
        await sleep(1000);
    }
}
  
delayedGreeting();
