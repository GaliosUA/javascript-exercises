const convertToCelsius = function(temp) {
  let convert = (temp - 32) * 5/9;
  if (Number.isInteger(convert))
    {
      return +convert.toFixed();
    }
    else return +convert.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let convert = temp * 9/5 + 32;
  if (Number.isInteger(convert))
    {
      return +convert.toFixed();
    }
    else return +convert.toFixed(1);
};

convertToCelsius();
convertToFahrenheit();
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
