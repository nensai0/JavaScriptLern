const students = [ 
{ name: "Alice", age: 20, grade: 4.5 }, 
{ name: "Bob", age: 21, grade: 3.9 }, 
{ name: "Charlie", age: 19, grade: 4.8 } 
]; 

const arr = students.flatMap((cur) => cur.grade);
const result = arr.reduce((a, b) => a + b, 0);
const score = result / students.length;

console.log(score)
