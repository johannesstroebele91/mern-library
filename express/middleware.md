# 1. Middleware in General

Software that

- provides common services and capabilities to applications
- between applications, data, and users
- outside of what's offered by the operating system

![Middleware image](https://upload.wikimedia.org/wikipedia/commons/e/eb/Middleware.png)

# 2. Middleware in express

## Basics

Ref: https://expressjs.com/en/guide/writing-middleware.html

Middleware functions can perform the following tasks

- during the application’s request-response cycle
- and are executed when a request reaches the middleware function

1. Gets or edits the request object
2. Returns or edits the response object
3. Calls the next succeeding the current middleware in the stack (if next() is called)
4. Ends the request-response cycle (automatic timeout if next() is not called)

## Middleware parts explained

Ref: https://expressjs.com/de/guide/using-middleware.html

![Express middleware example](https://expressjs.com/images/express-mw.png)

1. HTTP method for which the middleware function applies (e.g. get)
2. Path (route) for which the middleware function applies (e.g. "/")
   1. e.g. "/" for "http://localhost:5000"
   2. e.g. "/users" would handle all requests
      1. that START with "/users"
      2. even if it would be "/users/new"
3. The middleware function (variable or inline function)
4. Next is a callback argument to the middleware function (optional, )
5. HTTP response (res) argument to the middleware function
6. HTTP request (req) argument to the middleware function

# Middleware myLogger (without next)

The middleware function “myLogger”

- just prints “LOGGED”
- when a request to the app passes through it

To load the middleware function,

- call app.use(),
- specifying the middleware function
- For example,
  - the following code loads the myLogger middleware function
  - BEFORE the route to the root path (/).

```javascript
var express = require("express");
var app = express();

app.use(function (req, res, next) {
  console.log("LOGGED");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);
```

Alternative code can be outsourced to a variable (e.g. myLogger):

```javascript
var myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);
```

# Application areas

Types of services that typically handled by a middleware are:

- Data management,
- application services,
- messaging,
- authentication, and
- API management

# 3. bodyParser

The bodyParser dependency

- provides functions that act as middleware
- to funnel or requests and responses
- easily through multiple steps
- e.g. parse incoming request bodies

## Types of bodyParser functions:

- bodyParser.json():
  - allows to automatically parse data that was submitted through a form
  - automatically calles next() at the end to automatically move on to the next middleware
- bodyParser.urlencoded(): \*_ allow to automatically parse requests for JSON data _/
