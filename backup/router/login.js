const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("sign in");
});

router.get('/logout', (req, res) => {
  res.send("sign out");
});

module.exports = router;
