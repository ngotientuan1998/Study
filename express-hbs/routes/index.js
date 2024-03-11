var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //xử lí dữ liệu và đẩy data về view
  res.render('index', { title: 'Express' });
});

module.exports = router;
