// Import npm packages
const chalk = require("chalk");
const moment = require("moment");

// ----- User Module Logic (combined) -----
function getUser() {
  return {
    name: "Hani",
    role: "MERN Stack Intern",
  };
}

// ----- Logger Module Logic (combined) -----
function logMessage(message) {
  const time = moment().format("DD-MM-YYYY HH:mm:ss");
  console.log(chalk.blue(`[${time}]`), chalk.green(message));
}

// ----- Main App Logic -----
const user = getUser();

logMessage(`User Name: ${user.name}`);
logMessage(`Role: ${user.role}`);
