fillArrayOneZero(array) {
  for (let i = 0; i < array.length; i++) {
    i === 0 || i === array.length - 1 ? array[i] = 1 :  array[i] = 0;
  }
  console.log(array);
}

fillArrayOneZero([9, 8, 6, 5, 10 ,"", -2]);

/****************************************************************************/

function fillArrayZeroOne(array) {
  for (let i = 0; i < array.length; i++) {
    ! (i % 2) ? array[i] = 0 :  array[i] = 1;
  }
  console.log(array);
}

fillArrayZeroOne([9, 8, 6, 5, 10 ,"", -2]);

/****************************************************************************/

function fillArrayOne() {
  const array = [];
  for (let i = 0; i < 32; i++) {
    i % 2 ? array[i] = i % 5 : array[i] = 1;
  }
  console.log(array);
}

fillArrayOne();

/****************************************************************************/

function getFirstOrLast(array) {
  let first = 0, last = 0;
  for(const el of array) {
    !(el % array[0]) && first++;
    !(el % array[array.length - 1]) && last++;
  }
  console.log( last === first ? 'first = last' : last > first ? 'last' : 'first' );
}

getFirstOrLast([5, 2, 7, 10 , 1000, 34, 8, 7, 12, 78, 34, 2]);

/****************************************************************************/

function getMax(array) {
  let max = -Infinity;
  for(const el of array) {
    max = Math.max(max, el);
  }

  console.log(max);
}

getMax([0, 2, 7, 10 , -1000, 34, 8, 7, 12, 78, 34, 1]);

/****************************************************************************/

function getSumMaxMin(array) {
  let max = -Infinity, min = Infinity;
  for(const el of array) {
    max = Math.max(max, el);
    min = Math.min(min, el);
  }

  console.log(max + min);
}

getSumMaxMin([0, 2, 7, 10 , -100, 34, 8, 7, 12, 78, 34, 1]);

/****************************************************************************/

function isDecreasingOrIncreasing(array) {
  let isDecreasing = true, isIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if(array[i] > array[i - 1]) {
      isDecreasing = false;
      break;
    }
  }

  for (let i = 1; i < array.length; i++) {
    if(array[i] < array[i - 1]) {
      isIncreasing = false;
      break;
    }
  }

  console.log(`isDecreasing: ${isDecreasing}, isIncreasing: ${isIncreasing}`);
}

isDecreasingOrIncreasing([1, 2, 3, 4, 5]);

/****************************************************************************/

function changeMaxMin(array) {
  let max = -Infinity, min = Infinity;
  for(const el of array) {
    max = Math.max(max, el);
    min = Math.min(min, el);
  }

  let maxInd = array.indexOf(max);
  let minInd = array.indexOf(min);

  [array[maxInd], array[minInd]] = [array[minInd], array[maxInd]];

  console.log(array);
}

changeMaxMin([1, -20, 40, 90, 23, -2, 0, 1, 100, 16]);

/****************************************************************************/

function deleteLastAndFirst(array) {
  // array.pop();
  // array.shift();
  console.log(array.slice(1, -1));
}

deleteLastAndFirst([1, 2, 3, 4, 7]);

/****************************************************************************/

function reverseArray(array) {
  let arr = [], counter = array.length;
  for (let i = 0; i < counter; i++) {
    arr[i] = array.pop();
  }
  console.log(arr);
}

reverseArray([1, 2, 3, 4, 5, 6, 7, 8]);

/****************************************************************************/

function deleteAllPos(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] > 0 && array.splice(i, 1) && i--;
  }
  console.log(array);
}

deleteAllPos([2, -2, 4, -5, 6, -9, 8, 10, 8, 1]);
