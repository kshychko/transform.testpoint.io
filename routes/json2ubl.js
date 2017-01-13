var express = require('express');
var Marshaller = require('../scripts/marshaller')
var fs = require('fs');
var router = express.Router();
var marshaller = new Marshaller('../resources/CoreInvoiceOriginal/');


router.post('/', function (req, res, next) {
    if(req.body.ubljson) {
        var result = marshaller.marshalString(req.body.ubljson, true);
        console.log(JSON.stringify(result));
        res.setHeader('content-type', 'application/xml');
        res.end(result);
    } else {
        var err = new Error('The body parameter \'ubljson\' is required.');
        err.status = 422;
        next(err);
    }
});
module.exports = router;
