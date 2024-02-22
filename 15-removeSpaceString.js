// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// 15/366

// const noSpace = (x) => x.replace(/\s+/g, "");
function noSpace(x) {
  return x.replaceAll(" ", "");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
