const fs = require("fs");

const userName = "Max";

console.log(userName);

// create a file
fs.writeFile("created-js-file.js", "Name: " + userName, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Created file");
});
