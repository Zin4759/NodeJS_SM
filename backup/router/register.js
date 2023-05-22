const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send("register");
});

router.get('/done', (req, res) => {
  res.send("register end");
});

module.exprots = router;
