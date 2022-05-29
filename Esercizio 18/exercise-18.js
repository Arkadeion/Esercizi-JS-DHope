function memoize(fn) {
  let cache = {
    cache1: 120,
  };
  /* Object.values(cache).includes(`${}`) */
  return function (x) {
    if (cache[x]) {
      return `Calculating result for ${factorial}`;
    }
  }
  
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));