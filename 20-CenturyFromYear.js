// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// 20/366

const century = (year) => Math.ceil(year / 100);

function century(year) {
  return ((year + 99) / 100) | 0;
}
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1899));
