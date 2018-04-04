const express = require("express");
const app = express();

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

app.listen(3000, () => console.log("Example app listening on port 3000!"));
