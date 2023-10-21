function sumNumbers(a = 0) {
  let currentSum = a;

  function func(b = 0) {
    currentSum += b;

    return func;
  }

  func.valueOf = function () {
    return currentSum;
  };

  return func;
}

console.log(+sumNumbers(1)(2)(5));
