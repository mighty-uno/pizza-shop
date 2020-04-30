const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { MONGODB, PORT } = require("./app/config/keys");

mongoose
  .connect(MONGODB.uri, MONGODB.options)
  .then((msg) => console.log("Database Connected"))
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

/*************ROUTES**************/
require("./app/routes")(app);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client/build")));
  //serve routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, function () {
  console.log(`Listening on port`, PORT);
});
