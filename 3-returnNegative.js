function makeNegative(num) {
  return (result = num <= 0 ? num : -Math.abs(num));
  //   if (num <= 0) {
  //     return num;
  //   } else {
  //     return -Math.abs(num)
  //   }
}
console.log(makeNegative(3));
