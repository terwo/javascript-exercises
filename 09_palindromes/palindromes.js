const palindromes = function (str) {
    let processed = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = processed.split("").reverse().join("");
    for (let i = 0; i < processed.length; i++) {
        if (reversed[i] != processed[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
