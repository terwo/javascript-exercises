const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    if (start > end) {
        [start, end] = [end, start];
    }
    sum = 0;
    for (index = start; index <= end; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
