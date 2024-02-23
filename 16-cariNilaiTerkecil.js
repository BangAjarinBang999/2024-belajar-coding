// const findSmallestInt = (args) =>
//   args.reduce((index, args) => (args < index ? args : index));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const sorted = args.sort((num1, num2) => num1 - num2);
    return sorted[0];
    //   var small = args[0];
    //   for (let index = 0; index < args.length; index++) {
    //     if (args[index] < small) {
    //       small = args[index];
    //     }
    //   }
    //   return small;
  }
}
const small = new SmallestIntegerFinder();
console.log(small.findSmallestInt([34, -345, -1, 100]));
console.log(small.findSmallestInt([1, 56, 232, 12, 8]));
console.log(small.findSmallestInt([78, 56, 232, 412, 228]));
