const box = {
    type: 'box',
    items: [
        {
            type: 'box', items: []
        },
        {
            type: 'box', items: [
                { type: 'box', items: [] },
                { type: 'box', items: [
                    { type: 'key' },
                ] }
            ]
        },
        {
            type: 'box',
            items: [
                {
                    type: 'box',
                    items: [
                        { type: 'box', items: [] }
                    ]
                }
            ]
        }
    ]
}

function lookForKey (box) {
    const queue = [box];
    while (queue.length) {
        const item = queue.shift();
        if (item.type === 'key') return item;
        for (const innerItem of item.items) {
            if (innerItem.type === 'key') return innerItem;
            queue.push(innerItem);
        }
    }

    return null;
}

console.log(lookForKey(box));


function lookForKeyRecursive(item) {
    if (item.type === 'key') return item;
    for (const subItem of item.items) {
        const key = lookForKeyRecursive(subItem);
        if (key) return key;
    }
    return null
}

console.log(lookForKeyRecursive(box))


function countdown(i) {
    console.log(i)
    if (i == -5 ) return;
    countdown(i - 1)
}

countdown(1);

const factorial = (x) => x === 1 ? 1 : x * factorial(x - 1);
const factorialTRC = (x, acc = 1) => x === 1 ? acc : factorialTRC(x - 1, x * acc);
factorialTRC(3);
factorial(3);

const padStart = function (string, length, symbol) {
    const diff = length - string.length;
    return diff > 0 ? symbol.repeat(diff) + string : string;
}

const padStarT = function padStartRec(string, length, symbol) {
    return length - string.length > 0 ? padStartRec(symbol + string, length, symbol) : string;
}
console.log(padStarT('hello', 10, '?'));

console.log(padStart('hello', 10, '*'));

const multiply = (a, b, c) => a * b * c;

console.log(multiply(1, 2, 3));

const multiplyCurr = (a) => (b) => (c) => a * b * c;

console.log(multiplyCurr(1)(2)(3));