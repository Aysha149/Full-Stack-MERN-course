function square(n) {
  let sq = n * n;
  return sq;
}

let fact = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

export { square, fact };