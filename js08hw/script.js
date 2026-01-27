// TASK #1
function summarize (num) {
    return function (x) {
        if (x === undefined) {
            x = 1
        } return x + num;
    }
}

// TASK #2
function counter (startValue, step) {
    let currentValue = startValue;
    let fn = function() {
        currentValue += step;
        return currentValue;
    } 
        fn.increment = function () { currentValue += step; return currentValue; }
	    fn.decrement = function () { currentValue -= step; return currentValue; }
	    fn.reset = function () { currentValue = startValue; return currentValue; }
    return fn;
}
