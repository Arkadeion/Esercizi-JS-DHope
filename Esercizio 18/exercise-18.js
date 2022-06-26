function memoize(fn) {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache for', n);
      return cache[n];
    }
    else {
      console.log('Calculating result for', n);
      let result = fn(n);
      cache[n] = result;
      console.log(cache);
      return result;
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