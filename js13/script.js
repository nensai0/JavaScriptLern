// const person = {
//     firstName: "Artem",
//     lastName: "Horbeshko",
//     age: 27,
// }
// // Object.preventExtensions(person)
// // Object.seal(person)
// // Object.freeze(person)
// // person.city = "Kiev"

// // console.log(Object.getOwnPropertyDescriptors(person))
// Object.defineProperty(person, 'city', {
//     value: 'Kiev',
//     writable: false,
//     configurable: true,
//     enumerable: false,
// })

// console.log(person)

class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

const myArray = new MyArray(1, 2, 3);

console.log(myArray)