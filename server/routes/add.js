var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 + num2;
  
  console.log(`Adding ${num1} and ${num2} to get ${result}`);

  res.json({ result: result });
});

module.exports = router;
