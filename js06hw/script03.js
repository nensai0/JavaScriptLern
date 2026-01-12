const students = [ 
{ name: "Alice", age: 20, grade: 4.5 }, 
{ name: "Bob", age: 21, grade: 3.9 }, 
{ name: "Charlie", age: 19, grade: 4.8 } 
]; 

function greed () {
    const grades = students.map(score => score.grade);
    const result = grades.reduce((a, b) => a + b, 0);
    return result / students.length;
}

console.log(greed())