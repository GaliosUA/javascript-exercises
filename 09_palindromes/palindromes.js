const palindromes = function (string) {
    string = string.replaceAll(' ', '');
    string = string.replaceAll('!', '');
    string = string.replaceAll('.', '');
    string = string.replaceAll(',', '');
    let arr = [...string];
    return arr.join('').toLowerCase() === arr.reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
