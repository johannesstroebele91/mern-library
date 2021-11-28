const express = require("express");

// Give a app object
// full of express functions
const app = express();

app.use((req, res) => {
  res.send("hello");
});

// exposes the server output under port 5000
app.listen(5000);
