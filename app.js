const express = require('express');
const bodyParser = require('body-parser');
const status = require('./status');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const reqStatus = req.query.status;
  if (reqStatus) {
    try {
      res
        .status(status)
        .send({ status: { msg: status[reqStatus], code: reqStatus } });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(400).send({ error: 'bad request' });
  }
});

app.post('/', (req, res) => {
  const reqStatus = req.query.status;
  if (reqStatus) {
    try {
      res.status(reqStatus || 200).send({
        status: { msg: status[reqStatus], code: reqStatus },
        ...req.body,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

module.exports = app;
