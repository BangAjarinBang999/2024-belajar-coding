// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// 1/366

function evenOrOdd(number) {
  return (result = number % 2 == 0 ? "Even" : "Odd");
  //   const num = number;
  //   if (num % 2 == 0) {
  //     console.log("Even");
  //   } else {
  //     console.log("Even");
  //   }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));
