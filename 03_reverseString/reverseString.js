const reverseString = function(string = "") {
    let newString = '';
    let stringToArray = string.split("");
    for (let i = 0; i < string.length; i++) {
    newString = newString.concat(stringToArray.pop());
    }
    return newString;
};
reverseString();
// Do not edit below this line
module.exports = reverseString;
