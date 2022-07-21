function fac10(n) {
  let result = 1;
  let cont = 1;
  while (cont <= n) {
    result *= cont;
    cont++;
  }

  return result;
}

console.log(fac10(10));
