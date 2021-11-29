// Middleware for users routes
const express = require("express");
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Sky scraper",
    location: { longitude: 40, latitude: -73 },
    address: "20 W 35th St, New York",
    creatorId: "u1",
  },
];

router.get("/user/:uid", (req, res) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((user) => user.creatorId === userId);

  res.json({ place });
});

module.exports = router;
