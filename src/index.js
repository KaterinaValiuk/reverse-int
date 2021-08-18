/*jshint esversion: 8 */

module.exports = function reverse (n) {
    const a = (Math.abs(n)).toString();
    let result =  '';
    let char = 0;
    const isNegative = n < 0;
    
    for (let i = 0; i < a.length; i++) {
      let char = a[i];}
      if (char !== '0') {result = char + result;}
      else if (char === '0' && a[i + 1] && a[i + 1] !== '0') {res = char + result;}
    
      return Number(isNegative ? result * -1 : result);
  }

