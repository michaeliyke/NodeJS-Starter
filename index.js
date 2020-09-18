const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(request.headers, request.url, request.method);
  if (request.method == "GET") {
    const fileUrl = request.url == "/" ? "/index.html" : request.url;
    const filePath = path.resolve(`./plublic${fileUrl}`);
    const file_ext = path.extname(filePath);
    if (file_ext == ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          response.statusCode = 404;
          response.setHeader("Content-Type", "text/html");
          response.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
          return
        }
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(response);
      });
    } else {
      response.statusCode = 404;
          response.setHeader("Content-Type", "text/html");
          response.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
          return
    }
  } else {
    response.statusCode = 404;
          response.setHeader("Content-Type", "text/html");
          response.end(`<html><body><h1>Error 404: ${request.method} not supported</h1></body></html>`);
          return
  }
});

server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}`)
});


// 