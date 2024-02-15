// https://www.codewars.com/kata/5715eaedb436cf5606000381
// 6/366
const positiveSum = (arr) => arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
// function positiveSum(arr) {
//   var sum = 0;
//   for (const index in arr) {
//     if (arr[index] > 0) {
//       sum += arr[index];
//     }
//   }
//   return sum;
//   //   for (let index = 0; index < arr.length; index++) {
//   //     if (arr[index] > 0) {
//   //       //   sum = sum + arr[index];
//   //       sum += arr[index];
//   //     }
//   //   }
// }
console.log(positiveSum([-1, -2, 3, 4, -10]));
