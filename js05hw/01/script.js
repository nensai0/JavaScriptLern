let enter = prompt(`Введіть строку: `);

function doubleLetter(enter) {
    let result = '';
    for (i = 0; i < enter.length; i++) {
        result += enter[i] + enter[i];
    }
    return result;
}
console.log(doubleLetter(enter));


