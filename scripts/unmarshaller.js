/**
 * Created by Kseniya on 12/22/2016.
 */
var fs = require('fs');
var pd = require('pretty-data').pd;
pd.step = "    ";
var jsonix = require('jsonix').Jsonix;
var schemeIDs = JSON.parse(fs.readFileSync("./resources/rules.json").toString());

function unmarshaller(baseDir) {
    this.baseDir = baseDir;
    this.namespacePrefixes = {
        namespacePrefixes: {}/*,    mappingStyle : 'simplified'*/
    };

    var mapping = require(this.baseDir + 'mapping').mapping;
    var context = new jsonix.Context([mapping], this.namespacePrefixes);
    this.unmarshaller = context.createUnmarshaller();

    console.log(fs.readFileSync("./resources/rules.json"))
}

unmarshaller.prototype.unmarshall = function unmarshall(filename, callback) {
    console.log(filename);
    /*try {
     this.unmarshaller.unmarshalFile(filename, function (err, result) {
     if(err){
     console.log("err: " + err)
     }
     });
     } catch (e){
     console.error(123)
     }*/
    this.unmarshaller.unmarshalFile(filename, function (myElement) {
        var root = myElement.name.localPart;
        myElement[root] = myElement.value;
        delete myElement.name;
        delete myElement.value;

        cleanup(myElement);
        simplify(myElement);

        var file = filename + '.json';

        callback(myElement);
    });

};

unmarshaller.prototype.unmarshalString = function unmarshalString(document) {
    console.log(document)
    var myElement = this.unmarshaller.unmarshalString(document);
    var root = myElement.name.localPart;
    myElement[root] = myElement.value;
    delete myElement.name;
    delete myElement.value;

    cleanup(myElement);
    for (i in myElement)
        simplify(myElement, myElement[i].customizationID.value);
    return myElement;
};

unmarshaller.prototype.unmarshall = function unmarshall(filename, callback) {
    console.log(filename);
    /*try {
     this.unmarshaller.unmarshalFile(filename, function (err, result) {
     if(err){
     console.log("err: " + err)
     }
     });
     } catch (e){
     console.error(123)
     }*/
    this.unmarshaller.unmarshalFile(filename, function (myElement) {
        var root = myElement.name.localPart;
        myElement[root] = myElement.value;
        delete myElement.name;
        delete myElement.value;

        cleanup(myElement);
        for (i in myElement)
            simplify(myElement, myElement[i].customizationID.value);

        var file = filename + '.json';

        callback(myElement);
    });

};

function cleanup(o) {

    for (i in o) {

        if (!!o[i] && typeof(o[i]) == "object") {
            var obj = o[i];
            /*
             console.log(i, o[i])
             */
            if (obj.hasOwnProperty('TYPE_NAME')) {
                delete obj.TYPE_NAME;
            }

            if (obj.hasOwnProperty('currencyID')) {
                delete obj.currencyID;
            }

            cleanup(o[i]);

        }
    }
}


function simplify(o, profileID) {

    for (i in o) {

        if (!!o[i] && typeof(o[i]) == "object") {
            var obj = o[i];
            /*
             console.log(i, o[i])
             */
            for (k in obj) {
                if (!!obj[k] && typeof(obj[k]) == "object") {
                    var obj2 = obj[k];

                    if (obj2.hasOwnProperty('value')) {
                        var skipList = ["baseQuantity", "invoicedQuantity"];//TODO: move to configuration

                        var skipFound = false;
                        for (skip in skipList) {
                            if (skipList[skip] == k) {
                                skipFound = true;
                            }
                        }

                        // no attributes, only value
                        if (!skipFound && Object.keys(obj[k]).length < 2) {
                            /*console.log(k, obj[k], obj2.value)*/

                            obj[k] = obj2.value
                        }
                    }
                    /* else for(j in obj2){//TODO: check if needed
                     if(obj2[j].hasOwnProperty('value')){
                     if(Object.keys(obj2[j]).length <2 ) {
                     obj2[j] = obj2[j].value
                     }
                     }
                     }*/
                }
            }

            for (it in schemeIDs) {

                var contexts = schemeIDs[it].contexts;
                var contextMatch = false;
                if (contexts) {
                    for (context in contexts) {
                        if (profileID.indexOf(contexts[context]) != -1) {
                            contextMatch = true;
                            break;
                        }
                    }

                } else contextMatch = true;
                var type = schemeIDs[it].type;
                var isIdentifier = schemeIDs[it].isIdentifier;
                var keepIdentifier = schemeIDs[it].keepIdentifier;
                var childElement = schemeIDs[it].childElement;
                var valueProperty = schemeIDs[it].attributeValueName;
                var pathMatchFound = false;
                switch (type) {
                    case "path":
                        if (schemeIDs[it].path.indexOf(i) !== -1) {
                            /*console.log(i, schemeIDs[it].path.indexOf(i));*/
                            pathMatchFound = true;
                        }
                        break;
                }
                if (!pathMatchFound)
                    continue;
                var deprecatedMatchFound = false;

                var deprecatedLists = schemeIDs[it].lists.deprecatedLists;
                for (j in deprecatedLists) {
                    var deprecatedList = deprecatedLists[j];
                    for (l in deprecatedList) {
                        if (o[i].hasOwnProperty(l) && o[i][l] == deprecatedList[l]) {
                            /*console.log(j, o[i][l], deprecatedList[l]);*/
                            deprecatedMatchFound = true;
                            break;
                        }
                    }
                }
                var mismatchFound = false;
                if (!deprecatedMatchFound) {
                    var list = schemeIDs[it].lists.currentList;
                    for (j in list) {
                        if (o[i].hasOwnProperty(j) && o[i][j] !== list[j]) {
                            /*console.log(j, o[i][j]);*/
                            mismatchFound = true;
                            break;
                        }
                    }
                }
                /*console.log(i + ", deprecatedMatchFound: " + deprecatedMatchFound + ", mismatchFound: " + mismatchFound);*/
                if (!deprecatedMatchFound && !mismatchFound) {
                    if (isIdentifier) {
                        if (Array.isArray(o[i])) {
                            for (j in o[i]) {
                                if (o[i][j]["id"]) {
                                    /*console.log(valueProperty, o[i][j]["id"][valueProperty], schemeIDs[it]["lists"]["values"][o[i][j]["id"][valueProperty]]);*/
                                    o[i][j][schemeIDs[it]["lists"]["values"][o[i][j]["id"][valueProperty]]] = o[i][j]["id"]["value"];
                                    delete o[i][j]["id"];
                                } else {
                                    console.log(o[i][j], valueProperty)
                                    var key = schemeIDs[it]["lists"]["values"][o[i][j][valueProperty]];
                                    var value = o[i][j]["value"];
                                    /*
                                     console.log(i, key, value)
                                     */
                                    o[i][j] = {};
                                    o[i][j][key] = value;
                                }
                            }
                        } else {
                            /*if(childElement){
                             console.log(i, o[i][childElement])
                             }*/

                            if (o[i]["id"]) {
                                var key = schemeIDs[it]["lists"]["values"][o[i]["id"][valueProperty]];
                                var value = o[i]["id"]["value"];
                                console.log(i, key, value, o[i])

                                if (!keepIdentifier) {
                                    delete o[i]["id"];
                                    o[i][key] = value;
                                } else {
                                    o[i]["id"] = {};
                                    o[i]["id"][key] = value;
                                }
                            } else {
                                var key = schemeIDs[it]["lists"]["values"][o[i][valueProperty]];
                                var value = o[i]["value"];
                                o[i] = {};
                                o[i][key] = value;
                            }
                        }
                    } else {
                        if (childElement) {
                            /*
                             console.log(i, childElement, valueProperty, o[i])
                             */
                            o[i] = o[i][childElement][valueProperty];
                        } else {
                            o[i] = o[i][valueProperty];
                        }

                    }
                }
            }
            simplify(o[i], profileID);
        }
    }
}

module.exports = unmarshaller;