const hostname = "127.0.0.1";
const port = 3000;
const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(upload());

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});


app.listen(port, "127.0.0.1", () => {
  console.log(`Sever running at http://${hostname}:${port}`);
});