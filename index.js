const express = require("express");
const http = require("http");
// const morgan = require("morgan");
const hostname = "localhost";
const port = 3000;

const app = express(); //Our app wants to use the Express Node module, so construct it!
// app.use(morgan("dev"));
const server = http.createServer(app);
app.use(express.static(`${__dirname}/public`));
app.use((request, response, next) => {
  /*Next here is a pass for middle wares into internal exec*/
  console.log(request.headers);
  response.statusCode =  200;
  response.setHeaders("Content-Type", "text/html");
  response.end("<html><body><h1>This is an Express Server</h1></body></html>")
});


server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}`)
});


// 