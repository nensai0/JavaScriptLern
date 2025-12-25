function camelCase (str, separator) {
    let words = str.split(separator);
    let result = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        let word = words[i]
        let firstLetter = word[0].toUpperCase();
        let rest = word.slice(1).toLowerCase();
        let cap = firstLetter + rest;
        result += cap;
    }
    return result;
}

console.log(camelCase('hello_world_test', '_'))