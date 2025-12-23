function find (a, b) {
    while (b !== 0) {
  r = a % b;
  a = b;
  b = r;
}
return a;
}

let a = +prompt(`Введіть число №1: `);
let b = +prompt(`Введіть число №2: `);

console.log(find(a, b))