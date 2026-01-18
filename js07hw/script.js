// TASK #1
function logArguments(fn) {
    return function(...args) {
        console.log(args)
        return fn(...args);
    };
}

// TASK #2
function validate(fn, validator) {
    return function(...args) {
        const isValid = validator(...args);
        if (!isValid) {
            throw new Error('Упс, что-то пошло не так. Аргументы не проходят проверку')
        }
        return fn(...args);
    }
}

// TASK #3
function retry (fn, maxAttempts) {
    return function(...args) {
        let trying = 0;
        let error = null;
        while (trying < maxAttempts) {
            trying ++;
            try {
               const result = fn(...args);
                return result;
               
            } catch (e) {
                error = e;
            }
        } 
        throw error
    }
}