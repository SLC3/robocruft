const fs = require("fs");
const DELIMITER = "\n";
const FIELDS = ["email"];

let input = fs.readFileSync("input", { encoding: "utf-8" });

let processed = input
  .split("\n")
  // Remove empty lines and those that start with '/', '{' or '}'
  .filter(line => line !== "" && !line.match(/^\/|{|}/))
  // TODO Only keep lines with fields in FIELDS
  // .filter(line => FIELDS.map(field => new RegExp('^s+"' + field)))
  // Remove the field name
  .map(line => line.replace(/^\s+"\w+" : "/, ""))
  // Remove trailing quotation marks
  .map(line => line.replace(/"$/, ""))
  .join(DELIMITER);


console.log("\nFinished! Check 'output' for results.\n\n")
fs.writeFileSync("output", processed);
