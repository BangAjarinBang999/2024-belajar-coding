// https://www.codewars.com/kata/515e271a311df0350d00000f
// 12/366

const squareSum = (num) => num.reduce((a, num) => a + num * num, 0);

// function squareSum(numbers) {
//   var result = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     result += numbers[index] * numbers[index];
//   }

//   return result;
// }
console.log(squareSum([1, 2]));
