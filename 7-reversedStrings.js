// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// 7/366

function solution(str) {
  // var newstring = "";
  // for (let index = str.length - 1; index >= 0; index--) {
  //   newstring += str[index];
  // }
  // return newstring;
  // return str == "" ? "" : solution(str.substr(1)) + str.charAt(0);
  // return str.split("").reverse().join("")
  return str.split("").reverse().join("");
}

console.log(solution("word"));
