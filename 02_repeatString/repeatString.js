const repeatString = function(string = '', num) {
    let text = '';
    if (num < 0) return 'ERROR';
    while (num > 0) {
        text = text.concat(string);
        num--;
    }
    return text;
}
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
