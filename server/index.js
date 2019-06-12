const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./../db/index.js");

app.use(cors());
app.use(bodyParser());

app.use("/", express.static(__dirname + "/../client/dist"));
app.use("/bundle.js", express.static(__dirname + "/../client/dist/bundle.js"));

app.post("/api/login", (req, res) => {
  let userCredentials = req.body;

  db.getUser(userCredentials, (err, docs) => {
    if (err) {
      console.log(`error in db query: ${err}`);
      res.sendStatus(500);
    } else {
      const response =
        docs.length > 0
          ? "login successful"
          : "no user found with those credentials.";

      res.statusCode = docs.length > 0 ? 200 : 400;
      res.json(response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
