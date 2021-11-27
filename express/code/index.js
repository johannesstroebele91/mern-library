const express = require("express");

// Give a app object
// full of express functions
const app = express();

/* In express all requests
 * are funneled through a bunch of middleware functions
 * which is done by called use() on the app object
 ** request obj:
 ** response obj:
 ** next obj:
 *** call if you don't want to send a response to the middleware,
 *** but forward the request to the next middleware in line */

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
  // Always call next
  // unless you are in a middleware
  // when you send back a response
});

app.use((req, res) => {
  // If check for the response that should be sent -> IMPROVABLE!
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    '<form method="POST" ><input type="text" name="username"><button type="submit">Create a user</button></input></form>'
  );
});

// exposes the server output under port 5000
app.listen(5000);
