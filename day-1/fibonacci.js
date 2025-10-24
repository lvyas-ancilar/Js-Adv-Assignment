function memoizedFibo() {
  const cache = {}; 
  function fib(n) {
    if (n in cache) return cache[n]; 
    if (n <= 1) return n; 
    
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}


// const fib = memoizedFibo();
// console.log(fib(10))



memoizedFibo()(10) // if we want to call the inside function 