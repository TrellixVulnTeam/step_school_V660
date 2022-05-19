let n = 3, m = 4;

for (let i = 1; i <= n; i++) {

  let str = '';

  for (let j = 1; j <= m; j++) {

    str += i % 2 ? 'AAABBB' : 'BBBAAA';
  }
  console.log(str);
}

/****************************************************/

let h = 10, w = 2 * h;

for (let i = 1; i <= h; i++) {

  let str = '';

  for (let j = 1; j <= w; j++) {

    str += j === 1 || j === w || i === 1 || i === h ? 'A' : 'B';    
  }
  console.log(str);
}

/****************************************************/

let x = 578, y = 10024;

for (let i = 0; i < 3; i++) {

  console.log(Math.floor((Math.abs(x - y) + 1) * Math.random()) + Math.min(x, y));
}

/****************************************************/

console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

/****************************************************/

let a = 10, b = -15;
console.log(Math.abs(a - b));

/****************************************************/

let l = 111;

if(l % 2) {

  for (let i = 1; i <= l; i++) {

    if(i % 2) {
      let plus = '', minus = '';

      for (let amountPlus = 1; amountPlus <= i; amountPlus++) {
        plus += '+';
      }
  
      for (let amountMinus = 1; amountMinus <= (l - i) / 2; amountMinus++) {
        minus += '-';
      }

      console.log(minus + plus + minus);
    }
  }

} else {
  console.log('Error');
}





