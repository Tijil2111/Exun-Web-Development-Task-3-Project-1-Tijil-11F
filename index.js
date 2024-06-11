const readline = require("node:readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let textToBeFiltered;
fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  textToBeFiltered = data;
});

rl.question(`The word for finding `, (word) => {
  let ans;
  if (textToBeFiltered.search(word) === -1) {
    ans = false;
  } else {
    ans = true;
  }
  console.log(ans);
  rl.close();
});
