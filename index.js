function addNumbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Input values must be integers");
  }
  return x + y;
}
