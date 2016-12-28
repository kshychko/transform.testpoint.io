var express = require('express');
var marshaller = require('../scripts/marshaller');
var router = express.Router();

/*
/!* GET users listing. *!/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/


var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    var iMarshaller = new marshaller('../resources/CoreInvoiceOriginal/', true)
    iMarshaller.unmarshal();
    /*var schemeIDs = JSON.parse(fs.readFileSync("/resources/rules.json").toString());*/
    next()
}

router.use(requestTime)

router.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText);
})

module.exports = router;


