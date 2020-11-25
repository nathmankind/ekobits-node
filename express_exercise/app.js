const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  return res.json("start with /items");
});

const userRoutes = require("./routes");

app.use(bodyParser.json());

app.use(userRoutes);

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}

app.listen(3100, () => {
  console.log("Server is listening on port 3100");
});
