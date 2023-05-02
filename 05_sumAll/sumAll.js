const sumAll = function(intOne = 1, intTwo = 1) {
    let iter = intTwo - intOne + 1;
    let finalSum = 0;
    if (intOne < 0 || intTwo < 0) {
        return 'ERROR';
    } 
    else if (typeof intOne != 'number' || typeof intTwo != 'number') {
        return 'ERROR';
    } 
    else if (intOne > intTwo) {
        iter = intOne - intTwo + 1;
        while (iter > 0){
            finalSum += intTwo++;
            iter--;
        }
    }
    else {
        while (iter > 0){
            finalSum += intOne++;
            iter--;
        }
    } 
    return finalSum;
};
sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
