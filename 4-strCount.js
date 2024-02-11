// 4/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
  var result = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] == letter) {
      result += 1;
    }
  }
  return result;
  // return str.split(letter).length - 1;
}
console.log(strCount("", "l"));
