#!/usr/bin/env node

function solveQuadraticEquation(a, b, c) {
  if (a === 0) {
    console.error("Error. a cannot be 0");
    process.exit(1);
  }

  console.log(
    `Equation is: (${a.toFixed(1)}) x^2 + (${b.toFixed(1)}) x + (${c.toFixed(
      1
    )}) = 0`
  );

  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("There are 2 roots");
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    console.log("There is 1 root");
    console.log(`x = ${x}`);
  } else {
    console.log("There are 0 roots");
  }
}

module.exports = { solveQuadraticEquation };
