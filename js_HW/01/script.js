let score = parseInt(prompt("Введіть число: "));

let isPrime = true;

if (score <= 1) {
  isPrime = false;
}

for (let i = 2; i < score; i++) {
  if (score % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`Число ${score} являється простим числом`);
} else {
  console.log(`Число ${score} не являється простим числом`);
}