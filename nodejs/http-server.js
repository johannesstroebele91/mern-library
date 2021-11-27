// http module
// allows to create a server
const http = require("http");

// Starts the server
/// The server crashes if not response is provided
/// because it does not have anything to do anymore
const server = http.createServer((req, res) => {
  console.log("Incoming request");
  console.log(req.method, req.url); // OUTPUT: get was used for the incoming request

  // Sending responses and handling incoming data
  if (req.method === "POST") {
    let body = "";
    // Event listeners
    req.on("end", () => {
      console.log(body);
      const userName = body.split("=")[1]; // because "/?username=sdcx" is the body
      res.end("<h1>" + userName + "</h1>");
    });

    req.on("data", function (chunk) {
      body += chunk;
    });
  } else {
    // To specify the content of the data that gets sent to the client
    // serval parameters can be used such as:
    // text/plain, text/html, application/json (JSON.stringify({ a: 1 })), ...
    res.setHeader("Content-Type", "text/html");

    // This statement tells the server to continue to run
    // and the page can be visited on "http://localhost:5000/"
    // which is interpreted as HTML by default
    // Writing is important: '' should be used instead of ""
    res.end(
      '<form method="POST"><input type="text" name="username"><button type="submit">Create user</button></form>'
    );
  }

  // Sends post request to the server
  // extract data and
  // send back that data to the client
});

server.listen(5000);
