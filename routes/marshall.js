var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var files = fs.readdirSync("./resources/CoreInvoiceOriginal/xml/output/");

    res.render('marshall', { title: 'Express', jsonFiles: files });
});

module.exports = router;
