const XLSX = require("xlsx");

// let fs = require("fs");

// Extract Data (create a workbook object from the table)
// XLSX.set_fs(fs);

var worksheet = XLSX.utils.aoa_to_sheet([
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A3", "B3", "C3"]
]);
// var worksheet = XLSX.utils.json_to_sheet(jsa, opts);
// Process Data (add a new row)
// let ws = workbook.Sheets["Sheet1"];

const workBook = XLSX.utils.book_new();
let workSheet = XLSX.utils.sheet_add_aoa(worksheet, [["Created "+new Date().toISOString()]], {origin:-1});
XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet 1');
// Package and Release Data (`writeFile` tries to write and save an XLSB file)
XLSX.writeFile(workBook, "Report.xlsx");