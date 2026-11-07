for (j = 2; j <= 20; j++) {
  console.log("*** Table of " + j + " ***");
  for (let i = 1; i <= 10; i++) {
    let ans = j * i;
    console.log(j + " x " + i + " = " + ans);
  }
  console.log("--------------------");
}