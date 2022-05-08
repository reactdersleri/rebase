function addNumbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") throw new Error("Error");
  return x + y;
}

function multiplyNumbers(x, y) {
  return x * y;
}
