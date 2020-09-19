
const express = require("express");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(fileupload());
const knex = require("knex")({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./sqlite3/Node-starter.sqlite"
  }
});




// app.get("/", async (request, response) => {
//   response.send('/public/index.html');
// });

app.post("/public", async (request, response) => {
  if (request.files || Object.keys(request.files) == 0) {
    response.status(400).send("Upload failed!");
    return
  }
  const photograph = request.files.photograph;
  await knex.insert({
    name: photograph.name, 
    image: photograph.data //The actual binary buffer
  }).into("images");
  // photograph.mv("/public/uploads/", async (error) => {
  //   return error ? response.status(500).send(error) : response.send("Upload successful!");
  // });
  console.log(photograph);
  response.status(200).send("Upload successful!");
});

app.get("/image/:id", async (request, response) => {
  const id = request.params.id;
  const image = await knex("images").where({id: id}).first();
  if (image) {
    response.end(image.image);
  } else {
    response.end("Source not found: ")
  }
});

app.listen(port, 
  () => console.log(`Server listen on http://127.0.0.1:${port}`));