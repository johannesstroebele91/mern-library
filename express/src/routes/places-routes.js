// Middleware for places routes
const express = require("express");

// gives a object were middleware can be registered on
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Sky scraper",
    location: { longitude: 40, latitude: -73 },
    address: "20 W 35th St, New York",
    creator: "u1",
  },
];

// Register a route
router.get("/:pid", (req, res, next) => {
  // Extract value that was entered for the request
  // e.g. the id in the URL (e.g. localhost/api/places/p1)
  // and a place in the database (e.g. DUMMY_PLACES) can be searched via the id
  // and added to the response that was sent back
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((place) => (place.id = placeId));

  console.log("GET Request in places");
  // json method takes any data that can be converted into json
  // e.g. obj, array, string
  // and sends it
  res.json({ place: place }); // can be written as place (if name of property is equal to value)
});

// Link to the app.js fils via export
module.exports = router;
