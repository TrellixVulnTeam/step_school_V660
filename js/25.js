const str1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
let counter1 = 0;

for(const space of str1) {
  space === ' ' && counter1++;
}

console.log(`Spaces: ${counter1}`);
console.log(str1.replaceAll('a', 'ab'));
/*******************************************************/

const str2 = '1234567';
console.log(str2.slice(0, 1) + ' ' + str2.slice(1, 4) + ' ' + str2.slice(-3));
/*******************************************************/

const str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud';
let acc = 0;

for(const dig of str) {
  '0123456789'.includes(dig) && acc++;
}

console.log(`Digites: ${acc}`);
/*******************************************************/

function reverseStr(str = 'Lorem ipsum dolor  sit amet, consectetur') {
  let result = '';

  for (let i = str.length - 1; i >=0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseStr());
/*******************************************************/

function isPalindrom(word = 'abcddcba') {
  console.log(word === reverseStr(word));
}

isPalindrom();
/*******************************************************/

function getMostLongerWord(str = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum') {
  
  str = str.trim() + ' ';

  while( str.includes('  ') ) {
    str = str.replace('  ', ' ');
  }
  
  let counter = 0, maxCount = 0;
      
  for (let i = 0; i < str.length; i++) {
    
    if(str[i] === ' ' || str[i] === ',' || str[i] === '.') {
      maxCount = Math.max(counter, maxCount);
      counter = -1;
    }

    counter++
  }

  for (let i = 0; i < str.length; i++) {

    if(str[i] === ' ' || str[i] === ',' || str[i] === '.') {

      let word = str.slice(counter, i);

      if(maxCount === word.length) {
        return word;
      }
      counter = i + 1;
    }
  }
}

console.log(getMostLongerWord());
/*******************************************************/

function getWords(str = 'abdc asdf asdfa asdffggg bdfdb') {
  
  str = str.trim() + ' ';

  while( str.includes('  ') ) {
    str = str.replace('  ', ' ');
  }

  let counter = 0

  for (let i = 0; i < str.length; i++) {

    if (str[i] === ' ') {
      let word = str.slice(counter, i);

      if (word[0] === word[word.length - 1]) {
        console.log(word);
      }

      counter = i + 1;
    }
  }
}

getWords();
/*******************************************************/

