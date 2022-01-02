const express = require("express");
const bodyParser = require("body-parser");
const placesRoutes = require("./routes/places-routes");

const app = express();

//  bodyParser.urlencoded automatically parses data that was submitted through a form
app.use(bodyParser.urlencoded({ extended: false }));

// Add the middleware logic from places routes to app.js
// Path does not need to be specified with use,
// but is necessary here to ensure that express
// will only forward requests to that middleware
// if th path starts with /api/places
app.use("/api/places/", placesRoutes);

// GET method route
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.listen(5000);
