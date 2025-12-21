let N = parseInt(prompt("Введіть число:"));

for (let x = 1; x <= N; x++) {
  let sum = 0;

  for (let i = 1; i < x; i++) {
    if (x % i === 0) {
      sum += i;
    }
  }

  if (sum === x) {
    console.log(x);
  }
}