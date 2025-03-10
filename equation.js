#!/usr/bin/env node
const readline = require("readline");
const fs = require("fs");

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

function parseNumber(input) {
  let number = Number(input);
  if (isNaN(number)) {
    console.error(`Error. Expected a valid real number, got ${input} instead`);
    return null;
  }
  return number;
}

function interactiveMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function ask(question, callback) {
    rl.question(question, (answer) => {
      let num = parseNumber(answer);
      if (num !== null) {
        callback(num);
      } else {
        ask(question, callback);
      }
    });
  }

  ask("a = ", (a) => {
    if (a === 0) {
      console.error("Error. a cannot be 0");
      process.exit(1);
    }
    ask("b = ", (b) => {
      ask("c = ", (c) => {
        rl.close();
        solveQuadraticEquation(a, b, c);
      });
    });
  });
}

function fileMode(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`file ${filePath} does not exist`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf8").trim();
  const parts = content.split(/\s+/);

  if (parts.length !== 3) {
    console.error("invalid file format");
    process.exit(1);
  }

  let a = parseNumber(parts[0]);
  let b = parseNumber(parts[1]);
  let c = parseNumber(parts[2]);

  if (a === null || b === null || c === null) {
    console.error("invalid file format");
    process.exit(1);
  }

  solveQuadraticEquation(a, b, c);
}

if (process.argv.length === 2) {
  interactiveMode();
} else if (process.argv.length === 3) {
  fileMode(process.argv[2]);
} else {
  console.error("Usage: ./equation [filename]");
  process.exit(1);
}
