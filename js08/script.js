const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = [
    {
        type: 'food', name: 'Pizza'
    },
     {
        type: 'drink', name: 'Coffee'
    },
     {
        type: 'food', name: 'Hot Dog'
    },
      {
        type: 'drink', name: 'Cola'
    },
]

const fruits = ['banana', 'apple', 'pear', 'orange'];
const nums = [10, 2, 7, 55, 1]

const initialValue = 0;
// const arr = numbers.filter((curValue, curIndex, curArr) => curValue > 1);
// const arr = numbers.find((curValue, curIndex, curArr) => curValue > 1);
// const arr = numbers.findLast((curValue, curIndex, curArr) => curValue > 1);
// const arr = numbers.findIndex((curValue, curIndex, curArr) => curValue > 1);
// const arr = numbers.findLastIndex((curValue, curIndex, curArr) => curValue > 1);
// const arr = data.flatMap((curValue, curIndex, curArr) => curValue.id);
//const arr = numbers.reduce((accumulator, curValue, curIndex, curArr) => accumulator + curValue, initialValue);
// const arr = numbers.reduceRight((accumulator, curValue, curIndex, curArr) => accumulator + curValue, initialValue);

// const arr = Object.groupBy(data, (item, index) => item.type);

const arr = nums.sort((a, b) => a - b);

const str = 'hello';
console.log(Array.from(str));

console.log(arr) 