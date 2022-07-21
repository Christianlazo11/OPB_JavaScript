function fac10(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(fac10(10));
