"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  switch (true){
    case (d<0):
      break;
    case (d==0):
      arr.push(-b/(2*a));
      break;
    default:
      arr.push((-b + Math.sqrt(d)) / (2*a));
      arr.push((-b - Math.sqrt(d)) /(2*a));    
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  if (isNaN(percent)||isNaN(contribution)||isNaN(amount)||isNaN(countMonths)) {
    return false
  }
  percent = percent/100/12;

  let body = amount - contribution;
  let everyMonths = body * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  return Number((everyMonths*countMonths).toFixed(2));

}