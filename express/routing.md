# Basics

Ref: https://expressjs.com/en/guide/routing.html

- how an application’s endpoints (URIs)
- respond to client requests

Routes can be defined by

- specifying route methods derived from HTTP methods
- that are called on an instance of the express class (e.g. app)

These routing methods

- specify a callback function (sometimes called “handler functions”)
- called when the application receives a request
- to the specified route (endpoint) and HTTP method

# order of routing middlewares

IMPORTANT: the order of middleware functions matter!

- so the more middleware functions with a more general path to the start (e.g. "/user/:uid") and
- the more specified middleware functions to the END (e.g. "/")

# Examples:

- app.use(): registers a middleware that runs on all incoming requests
- app.get(): registers a middleware that runs just for the get requests
- app.post(): registers a middleware that runs just for the post requests

```javascript
var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});
```

# Detailed

So the applications listens

- for requests that match the specified route(s) and method(s)
- and when it detects a match, it calls the one or multiple specified callback functions

Next needs to be provided

- as an argument to the callback function and
- then call next() within the body of the function
- to hand off control to the next callback

# Route Parameters

Are used to capture the values

- specified at their position in the URL and
- are also named URL segments that

The captured values

- are populated in the req.params object,
- with the name of the route parameter specified
- in the path as their respective keys

  Route path: /users/:userId/books/:bookId
  Request URL: http://localhost:3000/users/34/books/8989
  req.params: { "userId": "34", "bookId": "8989" }

To define routes with route parameters,

- simply specify the route parameters
- in the path of the route

```javascript
app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});
```

# Route Handler

You can provide multiple callback functions

- that behave like middleware
- to handle a request

A single callback function can handle a route

```javascript
app.get("/example/a", function (req, res) {
  res.send("Hello from A!");
});
```

More than one callback function can handle a route (make sure you specify the next object)

```javascript
app.get(
  "/example/b",
  function (req, res, next) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function (req, res) {
    res.send("Hello from B!");
  }
);
```
