let number = 5;

if ( number < 0) {
    console.log("The value is Invalid.");
} else {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log("Factorial of " +  number  +  " is "  + factorial);
}

