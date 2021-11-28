# Basics

Each HTTP method consists of

# Request

Data is requested by the client
req.url()

- returns the URL
- e.g. "/people.json"

req.method()

- returns the HTTP method used
- e.g. "GET"

# Response

Sever returns some data in response of a request

res.send()

- checks the structure of your output and
- set header information accordingly
- e.g. res.send('<b>hello</b>');

res.end()

- you can only respond with text and
- it will not set "Content-Type"
