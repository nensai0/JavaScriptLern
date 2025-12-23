// let stroka = String(prompt(`Введіть строку: `));

// function palindrom () {
//     return stroka.split('').reverse().join('');
// }
// let result = palindrom();

// if (stroka === result) {
//     console.log(`Це паліндром`)
// } else {
//     console.log(`Це не паліндром`)
// }


function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

let stroka = prompt('Введіть строку:');

if (isPalindrome(stroka)) {
    console.log('Це паліндром');
} else {
    console.log('Це не паліндром');
}
