function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const normalizedNumbers = numbers.replace(/\n/g, ",");
  const nums = normalizedNumbers.split(",").map(Number);

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
