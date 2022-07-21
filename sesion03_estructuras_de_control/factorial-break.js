function fac10(n) {
  let cont = 1;
  let result = 1;
  while (true) {
    result *= cont;
    cont++;
    if (cont > n) {
      break;
    }
  }

  return result;
}

console.log(fac10(10));
