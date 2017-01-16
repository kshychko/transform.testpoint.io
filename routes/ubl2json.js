var express = require('express');
var UnMarshaller = require('../scripts/unmarshaller')
var fs = require('fs');
var router = express.Router();
var unmarshallerInvoice = new UnMarshaller('../resources/CoreInvoiceOriginal/');
var unmarshallerResponse = new UnMarshaller('../resources/ResponseOriginal/');
var parseString = require('xml2js').parseString;


router.post('/', function (req, res, next) {
    if(req.body.ublxml) {
        var ns;
        parseString(req.body.ublxml, function (err, result) {
            for(i in result) {
                if(i.indexOf(":") != -1) {
                    var prefix = i.substring(0, i.indexOf(":"));
                    ns = result[i]['$']['xmlns:' + prefix];
                }/*
                TODO: documents without ns are failed to be un-marshalled
                else {
                    ns = result[i]['$']['xmlns:xsi'];
                }*/
            }
        });
        var result;
        if(ns == "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"){
            result = unmarshallerInvoice.unmarshalString(req.body.ublxml, true);
        } else if (ns == "urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2") {
            result = unmarshallerResponse.unmarshalString(req.body.ublxml, true);
        }
        if(result) {
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(result));
        }
        else {
            var err = new Error('Unexpected document type received.');
            err.status = 422;
            next(err);
        }

    } else {
        var err = new Error('The body parameter \'ublxml\' is required.');
        err.status = 422;
        next(err);
    }
});
module.exports = router;
