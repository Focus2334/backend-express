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

router.post('/', function(req, res, next) {
    users.items.push(req.body);
    res.status(201).json(req.body);
})

module.exports = router;
