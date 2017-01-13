var express = require('express');
var UnMarshaller = require('../scripts/unmarshaller')
var fs = require('fs');
var router = express.Router();
var unmarshaller = new UnMarshaller('../resources/CoreInvoiceOriginal/');


router.post('/', function (req, res, next) {
    if(req.body.ublxml) {
        var result = unmarshaller.unmarshalString(req.body.ublxml, true);
        console.log(JSON.stringify(result));
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(result));
    } else {
        var err = new Error('The body parameter \'ublxml\' is required.');
        err.status = 422;
        next(err);
    }
});
module.exports = router;
