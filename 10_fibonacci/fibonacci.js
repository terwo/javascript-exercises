const fibonacci = function (count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    firstPrev = 1;
    secondPrev = 0;

    for (let i = 1; i < count; i++) {
        current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
