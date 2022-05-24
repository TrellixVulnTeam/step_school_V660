function getCircleLength(r) {
  return 2 * Math.PI * r;
}

console.log(getCircleLength(10));

function getNewPrice(price) {
  return (price * 0.96).toFixed(2); 
}
console.log(getNewPrice(2.6));

function getMinNum(a, b) {
  return Math.min(a, b);
}
console.log(getMinNum(10, 7));
