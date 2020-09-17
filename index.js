const http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(request.headers);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><body><h1>Hwllo World</h1></body></html>");
});

server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}`)
});