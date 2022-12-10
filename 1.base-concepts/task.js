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
  
}