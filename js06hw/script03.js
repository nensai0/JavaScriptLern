const students = [ 
{ name: "Alice", age: 20, grade: 4.5 }, 
{ name: "Bob", age: 21, grade: 3.9 }, 
{ name: "Charlie", age: 19, grade: 4.8 } 
]; 

function greed () {
    let result = 0;
for (const score of students) {
    result = result + score.grade;
} 
    let sum = result / students.length;
    return sum
}
console.log(greed())


