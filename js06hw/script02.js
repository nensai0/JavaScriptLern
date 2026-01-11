const arr1 = [1, 2, 3, 4, 5]; 
const arr2 = [3, 4, 5, 6, 7]; 

function greed (arr1, arr2) {
    return arr = new Set([...arr1, ...arr2])
    // return arr = [new Set(arr1.concat(arr2))]
}

console.log(greed(arr1, arr2))