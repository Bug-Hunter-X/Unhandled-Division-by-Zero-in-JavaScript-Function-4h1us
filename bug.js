function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This handles the case where either a or b is 0
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: Infinity
console.log(myFunction(0, 5)); // Output: 0
console.log(myFunction(10, 5)); // Output: 2