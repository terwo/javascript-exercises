const reverseString = function(someString) {
    let reverseString = '';
    for (let i = someString.length - 1; i >=0; i--) {
        reverseString += someString[i];
    }
    return reverseString;
    

};

// Do not edit below this line
module.exports = reverseString;
