
function fib() {
  let a = 1;
  let b = 0;
  const list = [];
  for (let i = 100; i > 0; i--) {
    const temp = a;
    a += b;
    b = temp;
    list.push(b);
  }
  return list;
}

console.log(fib());

function numsToStrings(numbers) {
  return _.map(numbers, function (num) { return num.toString(); });
}

console.log(numsToStrings(fib()));

function numEvenNums(numbers) {
  let count = 0;
  _.each(numbers, function (num) { if ((num % 2) === 0) { count++; } });
  return count;
}

console.log(numEvenNums(fib()));
