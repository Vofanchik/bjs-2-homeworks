function getArrayParams(...arr) {

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0){return 0}
  return arr.reduce((a, b)=>a+b)
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0 || arr.length == 1){return 0}
  let maxNum = Math.max(...arr), minNum = Math.min(...arr)
  return maxNum - minNum
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0 || arr.length == 1){return 0}
  let sumEvenElement = 0, sumOddElement = 0;
  for(i=0; i<arr.length; i++){
    if (arr[i]%2 === 0){sumEvenElement+=arr[i]}
    else {sumOddElement+=arr[i]}
  }
  return sumEvenElement-sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0){return 0}
  let sumEvenElement = 0, countEvenElement = 0, avg = 0;
  for(i=0; i<arr.length; i++){
    if (arr[i]%2 === 0){
      sumEvenElement+=arr[i];
      countEvenElement++}
    }
  avg = sumEvenElement/countEvenElement
  return avg

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const total = [];
  for (let i = 0; i<arrOfArr.length; i++){
    total.push(func(...arrOfArr[i]));    
    if (maxWorkerResult<func(...arrOfArr[i])){
      maxWorkerResult = func(...arrOfArr[i])
    }
  }
  return maxWorkerResult
}
