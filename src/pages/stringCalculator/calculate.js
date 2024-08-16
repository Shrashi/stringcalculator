function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  let delimiters = /,|\n/;
  if (numbers.startsWith("//")) {
    const arr = numbers.split("\n");
    delimiters = new RegExp(arr[0].slice(2));
    numbers = arr[1];
  }
  const numArray = numbers.split(delimiters).map(Number);
  const negativeNums = numArray.filter((n) => n < 0);
  if (negativeNums.length) {
    throw new Error(`Negative numbers not allowed: ${negativeNums.join(", ")}`);
  }
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
