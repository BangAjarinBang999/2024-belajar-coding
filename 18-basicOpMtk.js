// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// 18/366

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

function basicOp(operation, value1, value2) {
  if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
    return value1 / value2;
  } else if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  }
}

console.log(basicOp("/", 4, 7));
