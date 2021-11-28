# npm

- managing packages for node.js
- so adding third-party libaries
- Examples
  - e.g. npm install express --save (--save for core app dep)
  - e.g. npm i nodemon --save-dev (--save-dev for development only)

# Scripts

Scripts can be added in the package.json

- The keyword run can be omitted for `npm start` and `npm test`
- but not for other script names, e.g. `npm run dev`

# Restart server automatically

Nodemon restarts the server automatically

- each time a file changes
- in the project folder changes
