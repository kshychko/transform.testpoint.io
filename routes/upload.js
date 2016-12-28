var express = require('express');
var fs = require('fs');
var Busboy = require('busboy');
var UnMarshaller = require('../scripts/unmarshaller')
var Marshaller = require('../scripts/marshaller')
var router = express.Router();
var pd = require('pretty-data').pd;
pd.step = "    ";
var hl = require("highlight").Highlight;
/*
 /!* GET users listing. *!/
 router.get('/', function(req, res, next) {
 res.send('respond with a resource');
 });
 */

var unmarshaller = new UnMarshaller('../resources/CoreInvoiceOriginal/');
var marshaller = new Marshaller('../resources/CoreInvoiceOriginal/');

var syntaxHighlight = function syntaxHighlight(json) {
    if (typeof json != 'string') {
        console.log("json: " + json)
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

router.post('/', function (req, res) {
    var busboy = new Busboy({headers: req.headers});
    var files = 0, finished = false;
    var type = req.query.type;

    busboy.on('file', function (fieldname, file, filename) {
        if (filename == '') {
            switch (type) {
                case "xml":
                    var ff = fs.readdirSync("./resources/CoreInvoiceOriginal/xml/input/");
                    res.render('unmarshall', {errorMessage: "Please select a file", xmlFiles: ff});
                    return;
                case "json":
                    var ff = fs.readdirSync("./resources/CoreInvoiceOriginal/json/input/");
                    res.render('marshall', {errorMessage: "Please select a file", jsonFiles: ff});
                    return;
            }
        } else {
            console.log("Uploading: " + filename);
        }
        ++files;
        var fstream = fs.createWriteStream('./files/' + filename);
        fstream.on('finish', function () {
            if (--files === 0 && finished) {
                /*res.writeHead(200, { 'Connection': 'close' });*/
                switch (type) {
                    case "xml":
                        unmarshaller.unmarshall('./files/' + filename, function (result) {
                            if (result) {
                                fs.writeFileSync('./files/' + filename + '.json', pd.json(result), 'utf8');
                                res.render('render', {
                                    result: syntaxHighlight(result, null, 4),
                                    pathToFile: './files/' + filename + '.json'
                                });
                            } else {
                                var ff = fs.readdirSync("./resources/CoreInvoiceOriginal/xml/input/");
                                res.render('unmarshall', {
                                    errorMessage: "Please select a correct file",
                                    xmlFiles: ff
                                });
                                return;
                            }
                        }, true);
                        break;
                    case "json":
                        marshaller.marshall('./files/' + filename, function (result) {
                            console.log("result: " + result)
                            if (result) {
                                fs.writeFileSync('./files/' + filename + '.xml', pd.xml(result), 'utf8');
                                res.render('render', {
                                    result: syntaxHighlight(pd.xml(result), null, 4),
                                    panthToFile: './files/' + filename + '.xml'
                                });
                            } else {
                                var ff = fs.readdirSync("./resources/CoreInvoiceOriginal/json/input/");
                                res.render('marshall', {errorMessage: "Please select a correct file", jsonFiles: ff});
                                return;

                            }
                        }, true);
                        break;
                }
            }
        });
        file.pipe(fstream);
    });
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        console.log('Field [' + fieldname + ']: value: ' + val);
        switch (type) {
            case "xml":
                unmarshaller.unmarshall('./resources/CoreInvoiceOriginal/xml/input/' + val, function (result) {
                    console.log("result: " + result)
                    fs.writeFileSync('./resources/CoreInvoiceOriginal/xml/output/' + val + '.json', pd.json(result), 'utf8');
                    res.render('render', {
                        result: syntaxHighlight(result, null, 4),
                        pathToFile: './CoreInvoiceOriginal/xml/output/' + val + '.json'
                    });
                }, true);
                break;
            case "json":
                marshaller.marshall('./resources/CoreInvoiceOriginal/json/input/' + val, function (result) {
                    fs.writeFileSync('./resources/CoreInvoiceOriginal/json/output/' + val + '.xml', pd.xml(result), 'utf8');
                    res.render('render', {
                        result: hl(pd.xml(result)),
                        pathToFile: './CoreInvoiceOriginal/json/output/' + val + '.xml'
                    });
                }, true);
                break;
        }
    });
    busboy.on('finish', function () {
        finished = true;
    });
    return req.pipe(busboy);
});


module.exports = router;


