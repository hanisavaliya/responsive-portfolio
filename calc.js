// Get command-line arguments
const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (args.length < 3) {
  console.log("Usage: node calc.js <add|sub|mul|div> <num1> <num2>");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.log("Error: Division by zero");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operation");
    process.exit(1);
}

console.log(`Result: ${result}`);
