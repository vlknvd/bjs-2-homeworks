function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function(min, max){
    return min + max;
  }); 
  sum = sum / arr.length;
  let avg = sum.toFixed(2);
  avg = Number(avg);
  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = arr.reduce(function(total, amount) {
    return total + amount;
  }, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement+= arr[i];
    } else {
      sumOddElement+= arr[i];
    }
  }
  return sumEvenElement - sumOddElement;;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement+= arr[i];
      countEvenElement+= 1;
    }
    }
    return sumEvenElement / countEvenElement;
  }

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const element = func(...arrOfArr[i]);
    if (element > maxWorkerResult) {
      maxWorkerResult = element;
    }
  }
  return maxWorkerResult;
}
