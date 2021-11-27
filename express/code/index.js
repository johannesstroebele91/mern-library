const express = require("express");

const bodyParser = require("body-parser");
/* The bodyParser dependency
 * provides functions that act as middleware
 * to funnel or requests and responses
 * easily through multiple steps
 * e.g. parse incoming request bodies

Types of bodyParser functions:
 * bodyParser.json():
 ** allows to automatically parse data that was submitted through a form
 ** automatically calles next() at the end to automatically move on to the next middleware
 * bodyParser.urlencoded():
 ** allow to automatically parse requests for JSON data */

const app = express();

/* app.use() registers a middleware
 * which runs on all incoming requests
 * e.g. "/users" would handle all requests
 ** that START with "/users"
 ** even if it would be "/users/new" */

//  bodyParser.urlencoded automatically parses data that was submitted through a form
app.use(bodyParser.urlencoded({ extended: false }));

/* The request to POST data to the server
 * is best to write with app.post()
 * BECAUSE app.use() would register a middleware
 * which would run on all incoming requests
 * (not just for the POST requests)

Path needs to be specified
* so only for requests targeting this path
* the request will be send
*/
app.post("/user", (req, res, next) => {
  /* BodyParser automatically creates and populates req.body
   * BUT the field needs to stated based on
   *  e.g. the input field with the name "username"

   * res.send(): is about sending data
   * req.body.username: is data that is requested from the server */
  res.send("<h1>User: " + req.body.username + "</h1>");
});

/* The request to get data from the server
 * is best to write with app.get()
 * BECAUSE app.use() would register a middleware
 * which would run on all incoming requests
 * (not just for the GET requests)

Path needs to be specified
* so only for requests targeting this path
* the request will be send
* so http://localhost:5000 works!
* BUT http://localhost:5000/users DOES NOT!
*/
app.get("/", (req, res) => {
  res.send(
    '<form action="/user" method="POST" ><input type="text" name="username"><button type="submit">Create a user</button></input></form>'
  );
});

app.listen(5000);
