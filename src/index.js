/*jshint esversion: 8 */

module.exports = function reverse (n) {
  let number = 0;
    if (n >= 0) {
      number = n;
    } else {
      number = Math.abs(n);
    }

    let myArray = Array.from(number.toString());
   
    let reverseArray = myArray.reverse();
    let result = reverseArray.join('');
    let resultNum = Number(result);
    
    return resultNum;
  };

