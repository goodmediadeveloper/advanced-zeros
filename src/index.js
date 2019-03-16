module.exports = function getZerosCount(number, base) {
  
  var zeros = 0;
  var remainder = 1;
  var divisor = 2;

  while (base !== divisor) {
    if (base % divisor === 0) {
      remainder++;
      base /= divisor;

    } else {
      remainder = 1;
      divisor++;
    }
  }

  while (number > 0) {
    number = number / divisor ^ 0;
    zeros += number;
  }
  return parseInt(zeros / remainder);
}