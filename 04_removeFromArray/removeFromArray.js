const removeFromArray = function(arr, ...numbers) {
    let args = Array.from(numbers);
    for (let i = 0; i < args.length; i++) {
        if (!arr.includes(args[i])) {
            continue;
        }
        let index = arr.indexOf(args[i]);
        arr.splice(index, 1);
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
