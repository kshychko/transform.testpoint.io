/**
 * Created by Kseniya on 12/21/2016.
 */

var fs = require('fs');
var pd = require('pretty-data').pd;
pd.step = "    ";
var jsonix = require('jsonix').Jsonix;
var schemeIDs = JSON.parse(fs.readFileSync("./resources/rules.json").toString());

function marshaller(baseDir) {
    this.baseDir = baseDir;
    this.namespacePrefixes = {
        namespacePrefixes: {
            "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2": "n2",
            "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2": "cbc",
            "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2": "cac"
        }/*,    mappingStyle : 'simplified'*/
    };

    var mapping = require(this.baseDir + 'mapping').mapping;
    var context = new jsonix.Context([mapping], this.namespacePrefixes);
    this.Marshaller = context.createMarshaller();

    console.log(fs.readFileSync("./resources/rules.json"))
}

marshaller.prototype.marshall = function marshall(filename, callback, forceSimplify) {
    console.log(filename);

    try{
        var po = JSON.parse(fs.readFileSync(filename).toString());
    } catch (e){
        console.error(e);
        callback(undefined);
        return;
    }
    for (j in po) {
        po["n2:" + j] = po[j];
        delete po[j];
    }

    complify(po);

    var marshalled = this.Marshaller.marshalString(po);
    callback(marshalled);

};
function complify(o) {

    for (i in o) {
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
                                if(Array.isArray(copy)){
                                    o[i][index] = [];
                                } else {
                                    o[i][index] = {};
                                }
                                if (childElement) {
                                    if (isIdentifier) {
                                        var key = undefined;
                                        for (l in schemeIDs[it]["lists"]["values"]) {
                                            var code = schemeIDs[it]["lists"]["values"][l]

                                            if(Array.isArray(copy)){
                                                for(m in copy){
                                                    if(copy[m].hasOwnProperty(code)) {
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
                                                if(copy.hasOwnProperty(code)) {
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
                                    if(isIdentifier) {
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
                                                } else if(typeof(copy) == "string"){
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

module.exports = marshaller;
