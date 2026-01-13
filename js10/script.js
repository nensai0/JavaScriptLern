// const me = {
//     name: 'ivan'
// }

// const you = {
//     name: 'artem'
// }

// function identify(context) {
//     return context.name.toUpperCase();
// }

// function speak(context) {
//     return `Hello, I am ${identify(context)}`
// }

// console.log(identify(you));
// console.log(speak(me));

function foo() {
    
    console.log(this.a);
}

foo();