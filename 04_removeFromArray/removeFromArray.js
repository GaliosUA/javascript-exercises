const removeFromArray = function(array,...args) {
    return array.filter(value => !args.includes(value));
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
