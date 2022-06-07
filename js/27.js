
let str1 = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud';

function getSumAndMult(str) {
  const allDigits = str.split('').filter(el => '0123456789'.includes(el));
  let amount = allDigits.length;
  let sum = allDigits.reduce((sum, d) => sum + +d, 0);
  let mult = allDigits.reduce((mult, d) => mult * d);

  return [amount, sum, mult];
}

console.log(getSumAndMult(str1));

/******************************************************************************************/

let word = 'abcddcba';

function isPalindrom(word) {
  return word === word.split('').reverse().join('');
}

console.log(isPalindrom(word));

/******************************************************************************************/

let str2 = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

function getLongestWord(str) {
  return str.split(/\s+/).sort((a, b) => b.length - a.length)[0];
}

console.log(getLongestWord(str2));

/******************************************************************************************/

let str3 = 'abdc asdff asdfa asdffggg bdfdb';

function getWords(str) {
  return str.split(/\s+/).filter(el => el[0] === el[el.length - 1]);
}

console.log(getWords(str3));

/******************************************************************************************/

let arr = [1, 4, 5, 6, 7, 3, 42, 35, 8768, 90, 56, 234, 56, 63, 24, -5, 256, 62, 0];

function getMax(arr) {
  return Math.max(...arr.filter( (el, i) => i % 2 && !(el % 3) )); 
}

console.log(getMax(arr));