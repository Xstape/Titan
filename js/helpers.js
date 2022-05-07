// Рекурсивный setTimeout точнее, чем setInterval
function showNumber(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNumber, 1000, ++num);
    }
}

setTimeout(showNumber, 1000, 1)

// setInterval тест
function showMessage (text, name) {
    console.log(`${text}, ${name}!`);
}

setInterval(showMessage, 500, 'Привет', 'Вася');