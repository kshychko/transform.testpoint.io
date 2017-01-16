var express = require('express');
var Marshaller = require('../scripts/marshaller')
var fs = require('fs');
var router = express.Router();
var marshallerInvoice = new Marshaller('../resources/CoreInvoiceOriginal/');
var marshallerResponse = new Marshaller('../resources/ResponseOriginal/');


router.post('/', function (req, res, next) {
    if(req.body.ubljson) {
        var result;
        var document = JSON.parse(req.body["ubljson"]);
        if(document["Invoice"]){
            var result = marshallerInvoice.marshalString(req.body.ubljson, true);
        } else if (document["ApplicationResponse"]) {
            var result = marshallerResponse.marshalString(req.body.ubljson, true);
        }

        if(result) {
            res.setHeader('content-type', 'application/xml');
            res.end(result);
        }
        else {
            var err = new Error('Unexpected document type received.');
            err.status = 422;
            next(err);
        }
    } else {
        var err = new Error('The body parameter \'ubljson\' is required.');
        err.status = 422;
        next(err);
    }
});
module.exports = router;
