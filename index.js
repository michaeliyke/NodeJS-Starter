const hostname = "127.0.0.1";
const port = 3000;
const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(upload());

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.post("/", (request, response) => {
  const files = request.files;

  if (!files) {
    response.status(404).send("<h1>File not found</h1>");
    return
  }
  console.log(`Upload of ${files.photograph.name} received!`);
  files.photograph.mv(`./uploads/${files.photograph.name}`, (error) => {
    if (error) {
      response.status(500).send("<h1>Internal server error.</h1>");
      return
    }
    console.log("File successfully ploaded!");
    response.status(200).send("<h1>File successfully ploaded!</h1>");
  });
});


app.listen(port, "127.0.0.1", () => {
  console.log(`Sever running at http://${hostname}:${port}`);
});