// https://www.codewars.com/kata/54edbc7200b811e956000556
// 17/366

const countSheeps = (sheep) =>
  sheep.reduce((index, sheep) => (sheep == true ? index + 1 : index + 0), 0);

function countSheeps(sheep) {
  var result = 0;
  for (let index = 0; index < sheep.length; index++) {
    if (sheep[index] == true) {
      result += 1;
    } else {
      result;
    }
  }
  return result;
}
console.log(countSheeps([undefined, null, false, true, true, false]));
