const express = require('express');
const router = express.Router();

const users = { items: [
  {
    "id": 1,
    "name": "Александра"
 },
 {
  "id": 2,
  "name": "Данила"
}
]}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users.items);
});

module.exports = router;
