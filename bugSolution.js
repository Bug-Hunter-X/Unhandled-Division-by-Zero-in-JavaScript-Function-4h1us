function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error("Division by zero");
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: Infinity
console.log(myFunction(0, 5)); // Output: 0
console.log(myFunction(10, 5)); // Output: 2