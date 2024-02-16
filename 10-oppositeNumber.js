// https://www.codewars.com/kata/56dec885c54a926dcd001095
// 10/366

// const opposite = (number) => (number > 0 ? number * -1 : Math.abs(number));
const opposite = (number) => -number;

// function opposite(number) {
//   var result;
//   if (number > 0) {
//     result = number * -1;
//   } else if (number < 0) {
//     result = Math.abs(number);
//   }
//   return result;
//   return (result = number > 0 ? number * -1 : Math.abs(number));
//   return -number;
// }

console.log(opposite(-222));
