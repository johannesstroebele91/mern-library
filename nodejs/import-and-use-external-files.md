# Importing files

Is possible with the require() function

- which belongs to the filesystem
- takes a string with
  - a relative path to the file OR
  - or the name of the respective core module

# Using imported files

Functions from external files can be used like this:

- e.g. `fs.writeFile` from `const fs = require("fs");`
- e.g. `http.createServer` from `const http = require("http");`
