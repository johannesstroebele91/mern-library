const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//  bodyParser.urlencoded automatically parses data that was submitted through a form
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  /* The field automatically parsed by the BodyParser
   * needs to stated based on
   * e.g. the input field with the name "username"

   * res.send(): is about sending data
   * req.body.username: is data that is requested from the server */
  res.send("<h1>User: " + req.body.username + "</h1>");
});

app.get("/", (req, res) => {
  res.send(
    '<form action="/user" method="POST" ><input type="text" name="username"><button type="submit">Create a user</button></input></form>'
  );
});

app.listen(5000);
