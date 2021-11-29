# Basics

Middleware from other files can be linked

- to a instance of the express class (e.g. app.js)
- via routing object of express

## places.routes.js

```javascript
// Middleware for places routes
const express = require("express");

// Gives a object were middleware can be registered on
const router = express.Router();

// Register a route
router.get("/", (req, res, next) => {
  console.log("GET Request in places");
  // json method takes any data that can be converted into json
  // e.g. obj, array, string
  // and sends it
  res.json({ message: "It works!" });
});

// Link to the app.js fils via export
module.exports = router;
```

## app.js

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Add the middleware logic from places routes to app.js
app.use(placesRoutes);

app.listen(5000);
```
