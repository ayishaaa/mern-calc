var express = require('express')
var router = express.Router();

const myElement = {value: "Hello World!"};

router.get('/', function(req, res, next) {
  // Assuming your element is stored in a variable called `myElement`
  console.log(myElement);
  res.json(myElement);
  
});
// router.get('/', function(req, res, next) {
//   res.send('Express\nHello World!');
// });


module.exports = router;