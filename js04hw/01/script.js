let str = String(prompt(`Введіть строку: `))
// ВАРІАНТ 1
function reverse () {
   return str.split('').reverse().join('');
}
console.log(reverse())
// ВАРІАНТ 1 end

// ВАРІАНТ 2
// function reverse () {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result = str[i] + result;
//     }
//     return result;
// }
// console.log(reverse());
// ВАРІАНТ 2 end

// ВАРІАНТ 3
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     result = str[i] + result;
// }
// console.log(result)
// ВАРІАНТ 3 end