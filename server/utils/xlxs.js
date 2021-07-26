const xlsx = require("xlsx");
const prompt = require("prompt-sync")();

const input = prompt("What is your Filename? ");
console.log(`Filename is: ${input}`);

const input2 = prompt("What is the sheet name? ");

const workbook = xlsx.readFile(`${input}`, {
  cellDates: true,
});
const worksheet = workbook.Sheets[`${input2}`];

const data = xlsx.utils.sheet_to_json(worksheet);

console.log(data);

const newWorkBook = xlsx.utils.book_new();
const newWorkSheet = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, "New Data");

//xlsx.writeFile(newWorkBook, "New Data File.xlsx");
