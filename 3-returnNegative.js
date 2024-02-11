// 3/366
// https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
  //   return (result = num <= 0 ? num : -Math.abs(num));
  return num <= 0 ? num : -num;
  //   if (num <= 0) {
  //     return num;
  //   } else {
  //     return -Math.abs(num)
  //   }
}
console.log(makeNegative(0));
