/**
 * Created by Kseniya on 12/9/2016.
 */

var fs = require('fs');
var async = require('async');
var Ajv = require('ajv');


var pd = require('pretty-data').pd;
pd.step = "    ";

var jsonix = require('jsonix').Jsonix;

/*
 var basedir = '../resources/ResponseOriginal/';
 var namespacePrefixes = {
 namespacePrefixes: {
 }


 };*/
/*var basedir = '../resources/CoreInvoice/';
 var namespacePrefixes = {
 namespacePrefixes: {
 }
 };*/
var basedir = '../resources/CoreInvoiceOriginal/';
/*
var basedir = '../resources/ResponseOriginal/';
*/
var namespacePrefixes = {
    namespacePrefixes: {}/*,    mappingStyle : 'simplified'*/
};

var mapping = require(basedir + 'mapping').mapping;

var context = new jsonix.Context([mapping], namespacePrefixes);
var unmarshaller = context.createUnmarshaller();

var schemeIDs = JSON.parse(fs.readFileSync("../resources/rules.json").toString());

var forceSimplify = true;

fs.readdir(basedir + "xml/input/", function (err, items) {
    async.eachSeries(items, function (prime, callback) {
        console.log(prime);
        var filename = prime.substr(0, prime.lastIndexOf('.'));
        var unmarshalled = unmarshaller.unmarshalFile(basedir + '/xml/input/' + filename + '.xml',
            function (myElement) {
                var root = myElement.name.localPart;
                myElement[root] = myElement.value;
                delete myElement.name;
                delete myElement.value;

                cleanup(myElement);
                for(i in myElement)
                simplify(myElement, myElement[i].customizationID.value);

                console.log(filename);
                var file = basedir + '/xml/output/' + filename + '.json';

                fs.writeFile(file, pd.json(myElement), 'utf8');

                // Load JSON Schemas
                var XMLSchemaJsonSchema = JSON.parse(fs.readFileSync('../node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema').toString());
                var JsonixJsonSchema = JSON.parse(fs.readFileSync('../node_modules/jsonix/jsonschemas/Jsonix/Jsonix.jsonschema').toString());
                var jsonSchema = JSON.parse(fs.readFileSync(basedir + '/json/schema/schema.jsonschema').toString());

                var ajv = new Ajv();
                ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema');
                ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema');
                var validate = ajv.compile(jsonSchema);
                console.log('Validating.');
                var valid = validate(myElement);
                if (!valid) {
                    console.log('Validation failed.');
                    console.log('Validation errors:');
                    console.error(validate.errors);
                }

            });
        callback(); // Alternatively: callback(new Error());
    }, function (err) {
        if (err) {
            throw err;
        }
        console.log('Well done :-)!');
    });
});

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
                        for (skip in skipList){
                            if (skipList[skip] == k){
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
                if(contexts) {
                    for(context in contexts){
                        if(profileID.indexOf(contexts[context])!=-1){
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
                    if(isIdentifier) {
                        if(Array.isArray(o[i])) {
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

                                if(!keepIdentifier){
                                    delete o[i]["id"];
                                    o[i][key] = value;
                                } else {
                                    o[i]["id"] ={ };
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
                        if(childElement){
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