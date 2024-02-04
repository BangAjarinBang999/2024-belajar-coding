function evenOrOdd(number) {
  //   return (result = number % 2 == 0 ? "Even" : "Odd");
  const num = number;
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));
