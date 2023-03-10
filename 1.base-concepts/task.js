"use strict"
function solveEquation(a, b, c) {
  let d = b*b - 4*a*c;
  if (d > 0) {
    return [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
  } else if (d === 0) {
    return [-b/(2*a)];
  } else if (d < 0) {
    return [];
  };
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
      return false;
      }
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;
  let payment = S * (P + (P / (((1 + P)**n) - 1)));
  let sum = payment * n;
      sum = Math.round(sum*100)/100;
      return sum;
}
