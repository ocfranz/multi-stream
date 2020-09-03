const express = require( "express");
const http = require( "http");
const path = require( "path");
const bodyParser= require( "body-parser");
const dotenv = require( "dotenv");

dotenv.config();

const app = express();

app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
