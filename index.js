const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const status = req.query.status;
  if (status) {
    try {
      res.status(status).send({ status: status });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(400).send({ error: "bad request" });
  }
});

app.post("/", (req, res) => {
  const status = req.query.status;
  if (status) {
    try {
      res.status(status || 200).send({ status, ...req.body });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(400).send({ error: "bad request" });
  }
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
