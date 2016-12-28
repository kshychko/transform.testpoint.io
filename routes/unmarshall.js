var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var files = fs.readdirSync("./resources/CoreInvoiceOriginal/xml/input/");

    res.render('unmarshall', { title: 'Express', xmlFiles: files });
});

module.exports = router;