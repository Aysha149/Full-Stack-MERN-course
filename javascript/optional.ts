function greetUser(name: string, age?: number): void {
  if (age === undefined) {
    console.log(`Hello ${name}!`);
  } else {
    console.log(`Hello ${name}, your age is ${age}`);
  }
}

greetUser("Aysha", 16);