"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b*b - 4*a*c;
  if (d > 0) {
    return arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
  } else if (d === 0) {
    return arr = [-b/(2*a)];
  } else if (d < 0) {
    arr = [];
    return arr;
  };
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
      return false;
      } else {
        
      }
  let P, S, n, payment, sum;  
        P = (percent / 100) / 12;
        S = amount - contribution;
        n = countMonths;
        payment = S * (P + (P / (((1 + P)**n) - 1)));
        sum = payment * n;
        sum = Math.round(sum*100)/100;
        return sum;
}