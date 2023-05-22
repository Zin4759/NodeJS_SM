var express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("routing test");
});

app.listen(3000, (req, res) => {
  console.log("server ins run..");
});
