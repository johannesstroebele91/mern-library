// Middleware for places routes
const express = require("express");

// gives a object were middleware can be registered on
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    userId: "u1",
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

  // catche error using !place
  // when returned no other code is executed
  if (!place) {
    return res
      .status(404)
      .json({ message: "Could not find a place for the provided id" }); // didn't find anything for given input
  } else {
    // json method takes any data that can be converted into json
    // e.g. obj, array, string
    // and sends it
    res.json({ place: place }); // can be written as place (if name of property is equal to value)
  }
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((place) => place.userId === userId);

  res.json({ place });
});

// Link to the app.js fils via export
module.exports = router;
