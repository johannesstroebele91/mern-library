const express = require("express");
const app = express();

app.use((req, res, next) => {
  let body = "";

  // Only called in the end
  // Prase request body manually -> IMPROVABLE!
  req.on("end", () => {
    const userName = body.split[1];
    if (userName) {
      req.body = { name: userName };
    }
    next();
  });

  // Called in the beginning
  req.on("data", (chunk) => {
    req.on("end", () => {
      body += chunk;
    });
  });
  console.log("MIDDLEWARE");
  // Without next at the end,
  // the request will timeout after the last middleware
});

// app.use()
/// registers a middleware that
/// runs on all incoming requests
app.use((req, res) => {
  // If check for the response that should be sent -> IMPROVABLE!
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    '<form method="POST" ><input type="text" name="username"><button type="submit">Create a user</button></input></form>'
  );
});

app.listen(5000);
