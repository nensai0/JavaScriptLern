// TASK #1
const originalArray = [1, 2, 3, 4, 5]; 

function greed(originalArray) {
    return originalArray.toReversed();
}
console.log(greed(originalArray))

// TASK #2
const arr1 = [1, 2, 3, 4, 5]; 
const arr2 = [3, 4, 5, 6, 7]; 

function greed (arr1, arr2) {
    return arr = new Set([...arr1, ...arr2])
    // return arr = [new Set(arr1.concat(arr2))]
}
console.log(greed(arr1, arr2))

// TASK #3
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