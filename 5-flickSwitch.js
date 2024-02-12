// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
// 5/366

const flickSwitch = (arr) => (
  (flick = true),
  arr.map((index) => (index == "flick" ? (flick = !flick) : flick))
);
function flickSwitch(arr) {
  //   var asd = true;
  //   return arr.map((index) => {
  //     if (index == "flick") {
  //       asd = !asd;
  //     }
  //     return asd;
  //   });
  //   for (let index = 0; index < arr.length; index++) {
  //     if (arr[index] == "flick") {
  //       asd = !asd;
  //     }
  //     arr[index] = asd;
  //   }
  //   return arr;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
