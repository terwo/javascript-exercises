const repeatString = function(someString, times) {
    let result = '';
    if (times < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < times; i++) {
        result = result.concat(someString);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
