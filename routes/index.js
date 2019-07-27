var express = require('express');
var router = express.Router();
const mongo = require('../db/mongo');
/* GET home page. */
router.get('/', async function(req, res, next) {

  let data = await mongo();
  console.log("data->", data)
  res.json({status: 'success', data: data});
});

module.exports = router;
