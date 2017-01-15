/**
 * Created by Kseniya on 12/9/2016.
 */
var fs = require('fs');

var pd = require('pretty-data').pd;
pd.step = "    ";

var jsonix = require('./jsonix').Jsonix;
var schemeIDs = JSON.parse(fs.readFileSync("../resources/rules.json").toString());

/*
 var basedir = '../resources/CoreInvoice/';
 var namespacePrefixes = {
 namespacePrefixes: {
 "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2-ausdigital": ""
 }
 };
 */

var basedir = '../resources/CoreInvoiceOriginal/';
var namespacePrefixes = {
    namespacePrefixes: {
        "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2": "n2",
        "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2": "cbc",
        "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2": "cac"
    }
};


/*var basedir = '../resources/ResponseOriginal/';
 var namespacePrefixes = {
 namespacePrefixes: {
 "urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2": "n2",
 "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2": "cbc",
 "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2": "cac"
 }
 };*/


var mapping = require(basedir + 'mapping').mapping;

var context = new jsonix.Context([mapping], namespacePrefixes);
var marshaller = context.createMarshaller();

fs.readdir(basedir + "json/input/", function (err, items) {

    for (var i = 0; i < items.length; i++) {
        var filename = items[i].substr(0, items[i].lastIndexOf('.'));
        try {
            var po = JSON.parse(fs.readFileSync(basedir + "json/input/" + filename + ".json").toString());
        } catch (e) {
            alert(e);
        }
        for (j in po) {
            po["n2:" + j] = po[j];
            delete po[j];
        }
        addCurrencyID(po);
        complify(po);
        /*        console.log(filename);
         console.log(JSON.stringify(po));*/
        var marshalled = marshaller.marshalString(po);
        fs.writeFileSync(basedir + "json/output/" + filename + ".xml", pd.xml(marshalled), 'utf8');
    }
});


function addCurrencyID(o) {
    for (i in o) {
        console.log(i, typeof(o[i]))
        if (!!o[i] && typeof(o[i]) == "object") {
            addCurrencyID(o[i])
        } else if (!!o[i] && typeof(o[i]) == "number") {
            var obj = o[i];
            if (i.indexOf("Amount") != -1) {
                o[i] = {"value": obj, "currencyID": "AUD"};
            }
            else addCurrencyID(o[i])
        }
    }
}

function complify(o) {

    for (i in o) {
//todo: handle objects correctly when expected string
        if (!!o[i] && typeof(o[i]) == "object") {
            var obj = o[i];
            for (it in schemeIDs) {
                var type = schemeIDs[it].type;
                var isIdentifier = schemeIDs[it].isIdentifier;
                var childElement = schemeIDs[it].childElement;
                var valueProperty = schemeIDs[it].attributeValueName;
                var pathMatchFound = false;
                switch (type) {
                    case "path":
                        for (j in schemeIDs[it].path) {
                            var index = schemeIDs[it].path[j];
                            if (o[i].hasOwnProperty(index)) {
                                /*console.log(index, o[i][index]);*/
                                var copy = o[i][index];
                                delete o[i][index];
                                var valueAttributeName = schemeIDs[it].attributeValueName;
                                if (Array.isArray(copy)) {
                                    o[i][index] = [];
                                } else {
                                    o[i][index] = {};
                                }
                                if (childElement) {
                                    if (isIdentifier) {
                                        var key = undefined;
                                        for (l in schemeIDs[it]["lists"]["values"]) {
                                            var code = schemeIDs[it]["lists"]["values"][l]

                                            if (Array.isArray(copy)) {
                                                for (m in copy) {
                                                    if (copy[m].hasOwnProperty(code)) {
                                                        o[i][index][m] = {}
                                                        o[i][index][m][childElement] = {}
                                                        o[i][index][m][childElement][valueAttributeName] = l;
                                                        o[i][index][m][childElement]["value"] = copy[m][code];

                                                        for (k in schemeIDs[it].lists.currentList) {
                                                            o[i][index][m][childElement][k] = schemeIDs[it].lists.currentList[k];
                                                        }
                                                    }
                                                }
                                            } else {
                                                o[i][index][childElement] = {}
                                                if (copy.hasOwnProperty(code)) {
                                                    o[i][index][childElement][valueAttributeName] = l;
                                                    o[i][index][childElement]["value"] = copy[code];
                                                    for (k in schemeIDs[it].lists.currentList) {
                                                        o[i][index][childElement][k] = schemeIDs[it].lists.currentList[k];
                                                    }
                                                }
                                            }

                                        }
                                    } else {
                                        o[i][index][childElement] = {};
                                        o[i][index][childElement][valueAttributeName] = copy;
                                        for (k in schemeIDs[it].lists.currentList) {
                                            o[i][index][childElement][k] = schemeIDs[it].lists.currentList[k];
                                        }
                                    }
                                } else {
                                    if (isIdentifier) {
                                        if (schemeIDs[it]["lists"]["values"] == null) {
                                            o[i][index][valueProperty] = copy;
                                        } else {
                                            for (l in schemeIDs[it]["lists"]["values"]) {
                                                var code = schemeIDs[it]["lists"]["values"][l]

                                                if (Array.isArray(copy)) {
                                                    for (m in copy) {
                                                        if (copy[m].hasOwnProperty(code)) {
                                                            o[i][index] = {}
                                                            o[i][index][valueAttributeName] = l;
                                                            o[i][index]["value"] = copy[m][code];
                                                            for (k in schemeIDs[it].lists.currentList) {
                                                                o[i][index][k] = schemeIDs[it].lists.currentList[k];
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    o[i][index] = {}
                                                    if (copy.hasOwnProperty(code)) {
                                                        o[i][index][valueAttributeName] = l;
                                                        o[i][index]["value"] = copy[code];
                                                        for (k in schemeIDs[it].lists.currentList) {
                                                            o[i][index][k] = schemeIDs[it].lists.currentList[k];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        if (schemeIDs[it]["lists"]["values"] == null) {
                                            o[i][index][valueProperty] = copy;
                                        } else {
                                            for (l in schemeIDs[it]["lists"]["values"]) {
                                                var code = schemeIDs[it]["lists"]["values"][l]

                                                if (Array.isArray(copy)) {
                                                    for (m in copy) {
                                                        if (copy[m].hasOwnProperty(code)) {
                                                            o[i][index] = {}
                                                            o[i][index][valueAttributeName] = l;
                                                            o[i][index]["value"] = copy[m][code];
                                                            for (k in schemeIDs[it].lists.currentList) {
                                                                o[i][index][k] = schemeIDs[it].lists.currentList[k];
                                                            }
                                                        }
                                                    }
                                                } else if (typeof(copy) == "string") {
                                                    o[i][index] = {}
                                                    o[i][index][valueAttributeName] = copy;
                                                    for (k in schemeIDs[it].lists.currentList) {
                                                        o[i][index][k] = schemeIDs[it].lists.currentList[k];
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                pathMatchFound = true;
                            }
                        }
                }
                if (!pathMatchFound)
                    continue;
            }
            complify(o[i]);
        }
    }
}



