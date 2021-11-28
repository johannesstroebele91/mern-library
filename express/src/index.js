const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//  bodyParser.urlencoded automatically parses data that was submitted through a form
app.use(bodyParser.urlencoded({ extended: false }));

// GET method route
app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.listen(5000);
