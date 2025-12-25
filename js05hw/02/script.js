let str = prompt(`Введіть текст: `);
let num = +prompt(`Введіть цифру: `);

function padString(str, num, symbol = '*', toLeft = false) {
    if (num <= str.length) {
        return str;
    }

    let count = num - str.length;
    let pad = '';

    for (let i = 0; i < count; i++) {
        pad += symbol;
    }

    if (toLeft === true) {
        return pad + str;
    } else {
        return str + pad;
    }
}

console.log(padString(str, num));