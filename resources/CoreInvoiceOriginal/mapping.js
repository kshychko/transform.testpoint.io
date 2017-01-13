var mapping_Module_Factory = function () {
    var mapping = {
        name: 'mapping',
        defaultElementNamespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.3.2#',
        typeInfos: [{
            localName: 'ValueType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'ValueType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'OCSPIdentifierType',
            propertyInfos: [{
                name: 'responderID',
                required: true,
                elementName: 'ResponderID',
                typeInfo: '.ResponderIDType'
            }, {
                name: 'producedAt',
                required: true,
                elementName: 'ProducedAt',
                typeInfo: 'DateTime'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ProfileExecutionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ProfileExecutionIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'PayableAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PayableAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'DateTimeType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'DateTimeType'
            },
            propertyInfos: [{
                name: 'value',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'AmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'InvoiceTypeCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'InvoiceTypeCodeType'
            },
            baseTypeInfo: '.DocumentTypeCodeType'
        }, {
            localName: 'AmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'AmountType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal2',
                type: 'value'
            }, {
                name: 'currencyID',
                required: true,
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'currencyID'
                },
                type: 'attribute'
            }, {
                name: 'currencyCodeListVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'currencyCodeListVersionID'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'SignedSignaturePropertiesType',
            propertyInfos: [{
                name: 'signingTime',
                elementName: 'SigningTime',
                typeInfo: 'DateTime'
            }, {
                name: 'signingCertificate',
                elementName: 'SigningCertificate',
                typeInfo: '.CertIDListType'
            }, {
                name: 'signaturePolicyIdentifier',
                elementName: 'SignaturePolicyIdentifier',
                typeInfo: '.SignaturePolicyIdentifierType'
            }, {
                name: 'signatureProductionPlace',
                elementName: 'SignatureProductionPlace',
                typeInfo: '.SignatureProductionPlaceType'
            }, {
                name: 'signerRole',
                elementName: 'SignerRole',
                typeInfo: '.SignerRoleType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'SigPolicyQualifiersListType',
            propertyInfos: [{
                name: 'sigPolicyQualifier',
                required: true,
                collection: true,
                elementName: 'SigPolicyQualifier',
                typeInfo: '.AnyType'
            }]
        }, {
            localName: 'DocumentResponseType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'DocumentResponseType'
            },
            propertyInfos: [{
                name: 'response',
                required: true,
                elementName: {
                    localPart: 'Response',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ResponseType'
            }, {
                name: 'documentReference',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'DocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }, {
                name: 'lineResponse',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'LineResponse',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.LineResponseType'
            }]
        }, {
            localName: 'KeyInfoType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'KeyInfoType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                elementTypeInfos: [{
                    elementName: {
                        localPart: 'KeyValue',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.KeyValueType'
                }, {
                    elementName: {
                        localPart: 'SPKIData',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.SPKIDataType'
                }, {
                    elementName: {
                        localPart: 'MgmtData',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    }
                }, {
                    elementName: {
                        localPart: 'PGPData',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.PGPDataType'
                }, {
                    elementName: {
                        localPart: 'KeyName',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    }
                }, {
                    elementName: {
                        localPart: 'X509Data',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.X509DataType'
                }, {
                    elementName: {
                        localPart: 'RetrievalMethod',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.RetrievalMethodType'
                }],
                type: 'elementRefs'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'BinaryObjectType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'BinaryObjectType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Base64Binary',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }, {
                name: 'mimeCode',
                required: true,
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'mimeCode'
                },
                type: 'attribute'
            }, {
                name: 'encodingCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'encodingCode'
                },
                type: 'attribute'
            }, {
                name: 'characterSetCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'characterSetCode'
                },
                type: 'attribute'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'uri'
                },
                type: 'attribute'
            }, {
                name: 'filename',
                attributeName: {
                    localPart: 'filename'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'PartyTaxSchemeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PartyTaxSchemeType'
            },
            propertyInfos: [{
                name: 'companyID',
                elementName: {
                    localPart: 'CompanyID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.CompanyIDType'
            }, {
                name: 'taxLevelCode',
                elementName: {
                    localPart: 'TaxLevelCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxLevelCodeType'
            }, {
                name: 'taxScheme',
                required: true,
                elementName: {
                    localPart: 'TaxScheme',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxSchemeType'
            }]
        }, {
            localName: 'NameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'NameType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'DigestMethodType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'DigestMethodType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                type: 'anyElement'
            }, {
                name: 'algorithm',
                required: true,
                attributeName: {
                    localPart: 'Algorithm'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'TaxExclusiveAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxExclusiveAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'BinaryObjectType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'BinaryObjectType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Base64Binary',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }, {
                name: 'mimeCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'mimeCode'
                },
                type: 'attribute'
            }, {
                name: 'encodingCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'encodingCode'
                },
                type: 'attribute'
            }, {
                name: 'characterSetCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'characterSetCode'
                },
                type: 'attribute'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'uri'
                },
                type: 'attribute'
            }, {
                name: 'filename',
                attributeName: {
                    localPart: 'filename'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'IntegerListType',
            propertyInfos: [{
                name: '_int',
                minOccurs: 0,
                collection: true,
                elementName: 'int',
                typeInfo: 'Integer'
            }]
        }, {
            localName: 'RegistrationNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'RegistrationNameType'
            },
            baseTypeInfo: '.NameType'
        }, {
            localName: 'DocumentationReferencesType',
            propertyInfos: [{
                name: 'documentationReference',
                required: true,
                collection: true,
                elementName: 'DocumentationReference'
            }]
        }, {
            localName: 'InvoiceLineType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'InvoiceLineType'
            },
            propertyInfos: [{
                name: 'id',
                required: true,
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'note',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Note',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NoteType'
            }, {
                name: 'invoicedQuantity',
                elementName: {
                    localPart: 'InvoicedQuantity',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.InvoicedQuantityType'
            }, {
                name: 'lineExtensionAmount',
                required: true,
                elementName: {
                    localPart: 'LineExtensionAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.LineExtensionAmountType'
            }, {
                name: 'accountingCost',
                elementName: {
                    localPart: 'AccountingCost',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.AccountingCostType'
            }, {
                name: 'invoicePeriod',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'InvoicePeriod',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PeriodType'
            }, {
                name: 'documentReference',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'DocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }, {
                name: 'allowanceCharge',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AllowanceCharge',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.AllowanceChargeType'
            }, {
                name: 'taxTotal',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'TaxTotal',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxTotalType'
            }, {
                name: 'item',
                required: true,
                elementName: {
                    localPart: 'Item',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ItemType'
            }, {
                name: 'price',
                elementName: {
                    localPart: 'Price',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PriceType'
            }]
        }, {
            localName: 'SignaturePolicyIdType',
            propertyInfos: [{
                name: 'sigPolicyId',
                required: true,
                elementName: 'SigPolicyId',
                typeInfo: '.ObjectIdentifierType'
            }, {
                name: 'transforms',
                elementName: {
                    localPart: 'Transforms',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.TransformsType'
            }, {
                name: 'sigPolicyHash',
                required: true,
                elementName: 'SigPolicyHash',
                typeInfo: '.DigestAlgAndValueType'
            }, {
                name: 'sigPolicyQualifiers',
                elementName: 'SigPolicyQualifiers',
                typeInfo: '.SigPolicyQualifiersListType'
            }]
        }, {
            localName: 'EncapsulatedPKIDataType',
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Base64Binary',
                type: 'value'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }, {
                name: 'encoding',
                attributeName: {
                    localPart: 'Encoding'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'MeasureType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'MeasureType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal',
                type: 'value'
            }, {
                name: 'unitCode',
                required: true,
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCode'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCodeListVersionID'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'TaxLevelCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxLevelCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'X509IssuerSerialType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'X509IssuerSerialType'
            },
            propertyInfos: [{
                name: 'x509IssuerName',
                required: true,
                elementName: {
                    localPart: 'X509IssuerName',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                }
            }, {
                name: 'x509SerialNumber',
                required: true,
                elementName: {
                    localPart: 'X509SerialNumber',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Integer'
            }]
        }, {
            localName: 'SalesOrderIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'SalesOrderIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'SignatureMethodType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SignatureMethodType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                allowDom: false,
                elementName: {
                    localPart: 'HMACOutputLength',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Integer',
                type: 'elementRef'
            }, {
                name: 'algorithm',
                required: true,
                attributeName: {
                    localPart: 'Algorithm'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'DataObjectFormatType',
            propertyInfos: [{
                name: 'description',
                elementName: 'Description'
            }, {
                name: 'objectIdentifier',
                elementName: 'ObjectIdentifier',
                typeInfo: '.ObjectIdentifierType'
            }, {
                name: 'mimeType',
                elementName: 'MimeType'
            }, {
                name: 'encoding',
                elementName: 'Encoding'
            }, {
                name: 'objectReference',
                required: true,
                attributeName: {
                    localPart: 'ObjectReference'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CompanyIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CompanyIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'AllowanceChargeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'AllowanceChargeType'
            },
            propertyInfos: [{
                name: 'chargeIndicator',
                required: true,
                elementName: {
                    localPart: 'ChargeIndicator',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ChargeIndicatorType'
            }, {
                name: 'allowanceChargeReasonCode',
                elementName: {
                    localPart: 'AllowanceChargeReasonCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.AllowanceChargeReasonCodeType'
            }, {
                name: 'allowanceChargeReason',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AllowanceChargeReason',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.AllowanceChargeReasonType'
            }, {
                name: 'multiplierFactorNumeric',
                elementName: {
                    localPart: 'MultiplierFactorNumeric',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.MultiplierFactorNumericType'
            }, {
                name: 'amount',
                required: true,
                elementName: {
                    localPart: 'Amount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.AmountType'
            }, {
                name: 'baseAmount',
                elementName: {
                    localPart: 'BaseAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.BaseAmountType'
            }, {
                name: 'taxCategory',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'TaxCategory',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxCategoryType'
            }, {
                name: 'taxTotal',
                elementName: {
                    localPart: 'TaxTotal',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxTotalType'
            }]
        }, {
            localName: 'DSAKeyValueType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'DSAKeyValueType'
            },
            propertyInfos: [{
                name: 'p',
                required: true,
                elementName: {
                    localPart: 'P',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'q',
                required: true,
                elementName: {
                    localPart: 'Q',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'g',
                elementName: {
                    localPart: 'G',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'y',
                required: true,
                elementName: {
                    localPart: 'Y',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'j',
                elementName: {
                    localPart: 'J',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'seed',
                required: true,
                elementName: {
                    localPart: 'Seed',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'pgenCounter',
                required: true,
                elementName: {
                    localPart: 'PgenCounter',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }]
        }, {
            localName: 'QualifyingPropertiesType',
            propertyInfos: [{
                name: 'signedProperties',
                elementName: 'SignedProperties',
                typeInfo: '.SignedPropertiesType'
            }, {
                name: 'unsignedProperties',
                elementName: 'UnsignedProperties',
                typeInfo: '.UnsignedPropertiesType'
            }, {
                name: 'target',
                required: true,
                attributeName: {
                    localPart: 'Target'
                },
                type: 'attribute'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'LineResponseType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'LineResponseType'
            },
            propertyInfos: [{
                name: 'lineReference',
                required: true,
                elementName: {
                    localPart: 'LineReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.LineReferenceType'
            }, {
                name: 'response',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'Response',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ResponseType'
            }]
        }, {
            localName: 'OCSPRefsType',
            propertyInfos: [{
                name: 'ocspRef',
                required: true,
                collection: true,
                elementName: 'OCSPRef',
                typeInfo: '.OCSPRefType'
            }]
        }, {
            localName: 'ReferencedSignatureIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2',
                localPart: 'ReferencedSignatureIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'CertIDType',
            propertyInfos: [{
                name: 'certDigest',
                required: true,
                elementName: 'CertDigest',
                typeInfo: '.DigestAlgAndValueType'
            }, {
                name: 'issuerSerial',
                required: true,
                elementName: 'IssuerSerial',
                typeInfo: '.X509IssuerSerialType'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'PictureType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'PictureType'
            },
            baseTypeInfo: '.BinaryObjectType'
        }, {
            localName: 'InvoicedQuantityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'InvoicedQuantityType'
            },
            baseTypeInfo: '.QuantityType'
        }, {
            localName: 'SPUserNoticeType',
            propertyInfos: [{
                name: 'noticeRef',
                elementName: 'NoticeRef',
                typeInfo: '.NoticeReferenceType'
            }, {
                name: 'explicitText',
                elementName: 'ExplicitText'
            }]
        }, {
            localName: 'SPKIDataType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SPKIDataType'
            },
            propertyInfos: [{
                name: 'spkiSexpAndAny',
                required: true,
                collection: true,
                mixed: false,
                elementName: {
                    localPart: 'SPKISexp',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary',
                type: 'elementRef'
            }]
        }, {
            localName: 'TimeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'TimeType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Time',
                type: 'value'
            }]
        }, {
            localName: 'DocumentCurrencyCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DocumentCurrencyCodeType'
            },
            baseTypeInfo: '.CurrencyCodeType'
        }, {
            localName: 'ItemPropertyType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'ItemPropertyType'
            },
            propertyInfos: [{
                name: 'name',
                required: true,
                elementName: {
                    localPart: 'Name',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NameType'
            }, {
                name: 'value',
                elementName: {
                    localPart: 'Value',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ValueType'
            }]
        }, {
            localName: 'ExtensionContentType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionContentType'
            },
            propertyInfos: [{
                name: 'any',
                required: true,
                mixed: false,
                type: 'anyElement'
            }]
        }, {
            localName: 'AllowanceChargeReasonType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AllowanceChargeReasonType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'UBLDocumentSignaturesType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2',
                localPart: 'UBLDocumentSignaturesType'
            },
            propertyInfos: [{
                name: 'signatureInformation',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'SignatureInformation',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2'
                },
                typeInfo: '.SignatureInformationType'
            }]
        }, {
            localName: 'UnsignedPropertiesType',
            propertyInfos: [{
                name: 'unsignedSignatureProperties',
                elementName: 'UnsignedSignatureProperties',
                typeInfo: '.UnsignedSignaturePropertiesType'
            }, {
                name: 'unsignedDataObjectProperties',
                elementName: 'UnsignedDataObjectProperties',
                typeInfo: '.UnsignedDataObjectPropertiesType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ItemIdentificationType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'ItemIdentificationType'
            },
            propertyInfos: [{
                name: 'id',
                required: true,
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }]
        }, {
            localName: 'IndicatorType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'IndicatorType'
            },
            propertyInfos: [{
                name: 'value',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'TextType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'TextType'
            },
            propertyInfos: [{
                name: 'value',
                type: 'value'
            }, {
                name: 'languageID',
                typeInfo: 'Language',
                attributeName: {
                    localPart: 'languageID'
                },
                type: 'attribute'
            }, {
                name: 'languageLocaleID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'languageLocaleID'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'PaymentMeansCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'PaymentMeansCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'VideoType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'VideoType'
            },
            baseTypeInfo: '.BinaryObjectType'
        }, {
            localName: 'UBLVersionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'UBLVersionIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'AdditionalInformationType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AdditionalInformationType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'SignaturePolicyIdentifierType',
            propertyInfos: [{
                name: 'signaturePolicyId',
                required: true,
                elementName: 'SignaturePolicyId',
                typeInfo: '.SignaturePolicyIdType'
            }, {
                name: 'signaturePolicyImplied',
                required: true,
                elementName: 'SignaturePolicyImplied',
                typeInfo: 'AnyType'
            }]
        }, {
            localName: 'TaxTotalType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'TaxTotalType'
            },
            propertyInfos: [{
                name: 'taxAmount',
                required: true,
                elementName: {
                    localPart: 'TaxAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxAmountType'
            }, {
                name: 'taxSubtotal',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'TaxSubtotal',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxSubtotalType'
            }]
        }, {
            localName: 'ActualDeliveryDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ActualDeliveryDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'BaseAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'BaseAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'ExtensionAgencyIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionAgencyIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'TaxExemptionReasonType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxExemptionReasonType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'TextType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'TextType'
            },
            propertyInfos: [{
                name: 'value',
                type: 'value'
            }, {
                name: 'languageID',
                typeInfo: 'Language',
                attributeName: {
                    localPart: 'languageID'
                },
                type: 'attribute'
            }, {
                name: 'languageLocaleID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'languageLocaleID'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'DocumentTypeCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'DocumentTypeCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'AttachmentType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'AttachmentType'
            },
            propertyInfos: [{
                name: 'embeddedDocumentBinaryObject',
                elementName: {
                    localPart: 'EmbeddedDocumentBinaryObject',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.EmbeddedDocumentBinaryObjectType'
            }, {
                name: 'externalReference',
                elementName: {
                    localPart: 'ExternalReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ExternalReferenceType'
            }]
        }, {
            localName: 'RateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'RateType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'CRLRefType',
            propertyInfos: [{
                name: 'digestAlgAndValue',
                required: true,
                elementName: 'DigestAlgAndValue',
                typeInfo: '.DigestAlgAndValueType'
            }, {
                name: 'crlIdentifier',
                elementName: 'CRLIdentifier',
                typeInfo: '.CRLIdentifierType'
            }]
        }, {
            localName: 'DocumentReferenceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'DocumentReferenceType'
            },
            propertyInfos: [{
                name: 'id',
                required: true,
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'documentType',
                elementName: {
                    localPart: 'DocumentType',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.DocumentTypeType'
            }, {
                name: 'attachment',
                elementName: {
                    localPart: 'Attachment',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.AttachmentType'
            }]
        }, {
            localName: 'PaymentMeansType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PaymentMeansType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'paymentMeansCode',
                required: true,
                elementName: {
                    localPart: 'PaymentMeansCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.PaymentMeansCodeType'
            }, {
                name: 'instructionID',
                elementName: {
                    localPart: 'InstructionID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.InstructionIDType'
            }, {
                name: 'payerFinancialAccount',
                elementName: {
                    localPart: 'PayerFinancialAccount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.FinancialAccountType'
            }, {
                name: 'payeeFinancialAccount',
                elementName: {
                    localPart: 'PayeeFinancialAccount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.FinancialAccountType'
            }]
        }, {
            localName: 'NoticeReferenceType',
            propertyInfos: [{
                name: 'organization',
                required: true,
                elementName: 'Organization'
            }, {
                name: 'noticeNumbers',
                required: true,
                elementName: 'NoticeNumbers',
                typeInfo: '.IntegerListType'
            }]
        }, {
            localName: 'NameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'NameType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'ReferenceType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'ReferenceType'
            },
            propertyInfos: [{
                name: 'transforms',
                elementName: {
                    localPart: 'Transforms',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.TransformsType'
            }, {
                name: 'digestMethod',
                required: true,
                elementName: {
                    localPart: 'DigestMethod',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.DigestMethodType'
            }, {
                name: 'digestValue',
                required: true,
                elementName: {
                    localPart: 'DigestValue',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }, {
                name: 'type',
                attributeName: {
                    localPart: 'Type'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ChargeIndicatorType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ChargeIndicatorType'
            },
            baseTypeInfo: '.IndicatorType'
        }, {
            localName: 'DescriptionType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DescriptionType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'UnsignedDataObjectPropertiesType',
            propertyInfos: [{
                name: 'unsignedDataObjectProperty',
                required: true,
                collection: true,
                elementName: 'UnsignedDataObjectProperty',
                typeInfo: '.AnyType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'InvoiceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2',
                localPart: 'InvoiceType'
            },
            propertyInfos: [{
                name: 'ublExtensions',
                elementName: {
                    localPart: 'UBLExtensions',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.UBLExtensionsType'
            }, {
                name: 'ublVersionID',
                elementName: {
                    localPart: 'UBLVersionID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.UBLVersionIDType'
            }, {
                name: 'customizationID',
                elementName: {
                    localPart: 'CustomizationID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IdentifierType'
            }, {
                name: 'profileID',
                elementName: {
                    localPart: 'ProfileID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ProfileIDType'
            }, {
                name: 'profileExecutionID',
                elementName: {
                    localPart: 'ProfileExecutionID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ProfileExecutionIDType'
            }, {
                name: 'id',
                required: true,
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'copyIndicator',
                elementName: {
                    localPart: 'CopyIndicator',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.CopyIndicatorType'
            }, {
                name: 'issueDate',
                required: true,
                elementName: {
                    localPart: 'IssueDate',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IssueDateType'
            }, {
                name: 'dueDate',
                elementName: {
                    localPart: 'DueDate',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.DueDateType'
            }, {
                name: 'invoiceTypeCode',
                required: true,
                elementName: {
                    localPart: 'InvoiceTypeCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.InvoiceTypeCodeType'
            }, {
                name: 'note',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Note',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NoteType'
            }, {
                name: 'documentCurrencyCode',
                elementName: {
                    localPart: 'DocumentCurrencyCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.DocumentCurrencyCodeType'
            }, {
                name: 'buyerReference',
                elementName: {
                    localPart: 'BuyerReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.BuyerReferenceType'
            }, {
                name: 'invoicePeriod',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'InvoicePeriod',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PeriodType'
            }, {
                name: 'orderReference',
                elementName: {
                    localPart: 'OrderReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.OrderReferenceType'
            }, {
                name: 'despatchDocumentReference',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'DespatchDocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }, {
                name: 'receiptDocumentReference',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'ReceiptDocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }, {
                name: 'contractDocumentReference',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'ContractDocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }, {
                name: 'additionalDocumentReference',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AdditionalDocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }, {
                name: 'accountingSupplierParty',
                required: true,
                elementName: {
                    localPart: 'AccountingSupplierParty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.SupplierPartyType'
            }, {
                name: 'accountingCustomerParty',
                required: true,
                elementName: {
                    localPart: 'AccountingCustomerParty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.CustomerPartyType'
            }, {
                name: 'payeeParty',
                elementName: {
                    localPart: 'PayeeParty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyType'
            }, {
                name: 'delivery',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Delivery',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DeliveryType'
            }, {
                name: 'paymentMeans',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'PaymentMeans',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PaymentMeansType'
            }, {
                name: 'allowanceCharge',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AllowanceCharge',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.AllowanceChargeType'
            }, {
                name: 'taxTotal',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'TaxTotal',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxTotalType'
            }, {
                name: 'legalMonetaryTotal',
                required: true,
                elementName: {
                    localPart: 'LegalMonetaryTotal',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.MonetaryTotalType'
            }, {
                name: 'invoiceLine',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'InvoiceLine',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.InvoiceLineType'
            }]
        }, {
            localName: 'TaxInclusiveAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxInclusiveAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'OrderReferenceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'OrderReferenceType'
            },
            propertyInfos: [{
                name: 'id',
                required: true,
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'salesOrderID',
                elementName: {
                    localPart: 'SalesOrderID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.SalesOrderIDType'
            }]
        }, {
            localName: 'CustomerPartyType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'CustomerPartyType'
            },
            propertyInfos: [{
                name: 'party',
                elementName: {
                    localPart: 'Party',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyType'
            }, {
                name: 'buyerContact',
                elementName: {
                    localPart: 'BuyerContact',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ContactType'
            }]
        }, {
            localName: 'OtherTimeStampType',
            baseTypeInfo: '.GenericTimeStampType'
        }, {
            localName: 'LineExtensionAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'LineExtensionAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'ItemClassificationCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ItemClassificationCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'NumericType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'NumericType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'QuantityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'QuantityType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal',
                type: 'value'
            }, {
                name: 'unitCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCode'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCodeListID'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListAgencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCodeListAgencyID'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListAgencyName',
                attributeName: {
                    localPart: 'unitCodeListAgencyName'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'SignedPropertiesType',
            propertyInfos: [{
                name: 'signedSignatureProperties',
                elementName: 'SignedSignatureProperties',
                typeInfo: '.SignedSignaturePropertiesType'
            }, {
                name: 'signedDataObjectProperties',
                elementName: 'SignedDataObjectProperties',
                typeInfo: '.SignedDataObjectPropertiesType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'AllowanceChargeReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AllowanceChargeReasonCodeType'
            },
            baseTypeInfo: '.AllowanceChargeReasonCodeType'
        }, {
            localName: 'StatusType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'StatusType'
            },
            propertyInfos: [{
                name: 'statusReasonCode',
                elementName: {
                    localPart: 'StatusReasonCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.StatusReasonCodeType'
            }]
        }, {
            localName: 'CompleteCertificateRefsType',
            propertyInfos: [{
                name: 'certRefs',
                required: true,
                elementName: 'CertRefs',
                typeInfo: '.CertIDListType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'DateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'DateType'
            },
            propertyInfos: [{
                name: 'value',
                /*typeInfo: 'Date',*/
                type: 'value'
            }]
        }, {
            localName: 'SignedDataObjectPropertiesType',
            propertyInfos: [{
                name: 'dataObjectFormat',
                minOccurs: 0,
                collection: true,
                elementName: 'DataObjectFormat',
                typeInfo: '.DataObjectFormatType'
            }, {
                name: 'commitmentTypeIndication',
                minOccurs: 0,
                collection: true,
                elementName: 'CommitmentTypeIndication',
                typeInfo: '.CommitmentTypeIndicationType'
            }, {
                name: 'allDataObjectsTimeStamp',
                minOccurs: 0,
                collection: true,
                elementName: 'AllDataObjectsTimeStamp',
                typeInfo: '.XAdESTimeStampType'
            }, {
                name: 'individualDataObjectsTimeStamp',
                minOccurs: 0,
                collection: true,
                elementName: 'IndividualDataObjectsTimeStamp',
                typeInfo: '.XAdESTimeStampType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ChargeTotalAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ChargeTotalAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'GenericTimeStampType',
            propertyInfos: [{
                name: 'include',
                minOccurs: 0,
                collection: true,
                elementName: 'Include',
                typeInfo: '.IncludeType'
            }, {
                name: 'referenceInfo',
                required: true,
                collection: true,
                elementName: 'ReferenceInfo',
                typeInfo: '.ReferenceInfoType'
            }, {
                name: 'canonicalizationMethod',
                elementName: {
                    localPart: 'CanonicalizationMethod',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.CanonicalizationMethodType'
            }, {
                name: 'encapsulatedTimeStampOrXMLTimeStamp',
                required: true,
                collection: true,
                elementTypeInfos: [{
                    elementName: 'EncapsulatedTimeStamp',
                    typeInfo: '.EncapsulatedPKIDataType'
                }, {
                    elementName: 'XMLTimeStamp',
                    typeInfo: '.AnyType'
                }],
                type: 'elements'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'BuyerReferenceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'BuyerReferenceType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'CodeType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'CodeType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'NormalizedString',
                type: 'value'
            }, {
                name: 'listID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'listID'
                },
                type: 'attribute'
            }, {
                name: 'listAgencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'listAgencyID'
                },
                type: 'attribute'
            }, {
                name: 'listAgencyName',
                attributeName: {
                    localPart: 'listAgencyName'
                },
                type: 'attribute'
            }, {
                name: 'listName',
                attributeName: {
                    localPart: 'listName'
                },
                type: 'attribute'
            }, {
                name: 'listVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'listVersionID'
                },
                type: 'attribute'
            }, {
                name: 'name',
                attributeName: {
                    localPart: 'name'
                },
                type: 'attribute'
            }, {
                name: 'languageID',
                typeInfo: 'Language',
                attributeName: {
                    localPart: 'languageID'
                },
                type: 'attribute'
            }, {
                name: 'listURI',
                attributeName: {
                    localPart: 'listURI'
                },
                type: 'attribute'
            }, {
                name: 'listSchemeURI',
                attributeName: {
                    localPart: 'listSchemeURI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ExternalReferenceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'ExternalReferenceType'
            },
            propertyInfos: [{
                name: 'uri',
                elementName: {
                    localPart: 'URI',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.URIType'
            }]
        }, {
            localName: 'QualifyingPropertiesReferenceType',
            propertyInfos: [{
                name: 'uri',
                required: true,
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CRLValuesType',
            propertyInfos: [{
                name: 'encapsulatedCRLValue',
                required: true,
                collection: true,
                elementName: 'EncapsulatedCRLValue',
                typeInfo: '.EncapsulatedPKIDataType'
            }]
        }, {
            localName: 'ProfileIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ProfileIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'NumericType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'NumericType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'DigestAlgAndValueType',
            propertyInfos: [{
                name: 'digestMethod',
                required: true,
                elementName: {
                    localPart: 'DigestMethod',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.DigestMethodType'
            }, {
                name: 'digestValue',
                required: true,
                elementName: {
                    localPart: 'DigestValue',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }]
        }, {
            localName: 'MonetaryTotalType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'MonetaryTotalType'
            },
            propertyInfos: [{
                name: 'lineExtensionAmount',
                elementName: {
                    localPart: 'LineExtensionAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.LineExtensionAmountType'
            }, {
                name: 'taxExclusiveAmount',
                elementName: {
                    localPart: 'TaxExclusiveAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxExclusiveAmountType'
            }, {
                name: 'taxInclusiveAmount',
                elementName: {
                    localPart: 'TaxInclusiveAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxInclusiveAmountType'
            }, {
                name: 'allowanceTotalAmount',
                elementName: {
                    localPart: 'AllowanceTotalAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.AllowanceTotalAmountType'
            }, {
                name: 'chargeTotalAmount',
                elementName: {
                    localPart: 'ChargeTotalAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ChargeTotalAmountType'
            }, {
                name: 'payableAmount',
                required: true,
                elementName: {
                    localPart: 'PayableAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.PayableAmountType'
            }]
        }, {
            localName: 'XAdESTimeStampType',
            baseTypeInfo: '.GenericTimeStampType'
        }, {
            localName: 'URIType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'URIType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'KeyValueType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'KeyValueType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                elementTypeInfos: [{
                    elementName: {
                        localPart: 'RSAKeyValue',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.RSAKeyValueType'
                }, {
                    elementName: {
                        localPart: 'DSAKeyValue',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.DSAKeyValueType'
                }],
                type: 'elementRefs'
            }]
        }, {
            localName: 'SignerRoleType',
            propertyInfos: [{
                name: 'claimedRoles',
                elementName: 'ClaimedRoles',
                typeInfo: '.ClaimedRolesListType'
            }, {
                name: 'certifiedRoles',
                elementName: 'CertifiedRoles',
                typeInfo: '.CertifiedRolesListType'
            }]
        }, {
            localName: 'SignaturePropertyType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SignaturePropertyType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                type: 'anyElement'
            }, {
                name: 'target',
                required: true,
                attributeName: {
                    localPart: 'Target'
                },
                type: 'attribute'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'IndicatorType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'IndicatorType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Boolean',
                type: 'value'
            }]
        }, {
            localName: 'CRLRefsType',
            propertyInfos: [{
                name: 'crlRef',
                required: true,
                collection: true,
                elementName: 'CRLRef',
                typeInfo: '.CRLRefType'
            }]
        }, {
            localName: 'PaymentMeansCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PaymentMeansCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'OtherCertStatusRefsType',
            propertyInfos: [{
                name: 'otherRef',
                required: true,
                collection: true,
                elementName: 'OtherRef',
                typeInfo: '.AnyType'
            }]
        }, {
            localName: 'AddressType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'AddressType'
            },
            propertyInfos: [{
                name: 'cityName',
                elementName: {
                    localPart: 'CityName',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.CityNameType'
            }, {
                name: 'postalZone',
                elementName: {
                    localPart: 'PostalZone',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.PostalZoneType'
            }, {
                name: 'countrySubentity',
                elementName: {
                    localPart: 'CountrySubentity',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.CountrySubentityType'
            }, {
                name: 'addressLine',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AddressLine',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.AddressLineType'
            }, {
                name: 'country',
                elementName: {
                    localPart: 'Country',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.CountryType'
            }]
        }, {
            localName: 'ObjectType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'ObjectType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                type: 'anyElement'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }, {
                name: 'mimeType',
                attributeName: {
                    localPart: 'MimeType'
                },
                type: 'attribute'
            }, {
                name: 'encoding',
                attributeName: {
                    localPart: 'Encoding'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ValidationDataType',
            typeName: {
                namespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.4.1#',
                localPart: 'ValidationDataType'
            },
            propertyInfos: [{
                name: 'certificateValues',
                elementName: 'CertificateValues',
                typeInfo: '.CertificateValuesType'
            }, {
                name: 'revocationValues',
                elementName: 'RevocationValues',
                typeInfo: '.RevocationValuesType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }, {
                name: 'ur',
                attributeName: {
                    localPart: 'UR'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'TaxCategoryType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'TaxCategoryType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'percent',
                elementName: {
                    localPart: 'Percent',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.PercentType'
            }, {
                name: 'taxExemptionReason',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'TaxExemptionReason',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxExemptionReasonType'
            }, {
                name: 'taxScheme',
                required: true,
                elementName: {
                    localPart: 'TaxScheme',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxSchemeType'
            }]
        }, {
            localName: 'RetrievalMethodType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'RetrievalMethodType'
            },
            propertyInfos: [{
                name: 'transforms',
                elementName: {
                    localPart: 'Transforms',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.TransformsType'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }, {
                name: 'type',
                attributeName: {
                    localPart: 'Type'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CommitmentTypeQualifiersListType',
            propertyInfos: [{
                name: 'commitmentTypeQualifier',
                minOccurs: 0,
                collection: true,
                elementName: 'CommitmentTypeQualifier',
                typeInfo: '.AnyType'
            }]
        }, {
            localName: 'ExtensionVersionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionVersionIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'CompleteRevocationRefsType',
            propertyInfos: [{
                name: 'crlRefs',
                elementName: 'CRLRefs',
                typeInfo: '.CRLRefsType'
            }, {
                name: 'ocspRefs',
                elementName: 'OCSPRefs',
                typeInfo: '.OCSPRefsType'
            }, {
                name: 'otherRefs',
                elementName: 'OtherRefs',
                typeInfo: '.OtherCertStatusRefsType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'GraphicType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'GraphicType'
            },
            baseTypeInfo: '.BinaryObjectType'
        }, {
            localName: 'ReferenceInfoType',
            propertyInfos: [{
                name: 'digestMethod',
                required: true,
                elementName: {
                    localPart: 'DigestMethod',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.DigestMethodType'
            }, {
                name: 'digestValue',
                required: true,
                elementName: {
                    localPart: 'DigestValue',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CertifiedRolesListType',
            propertyInfos: [{
                name: 'certifiedRole',
                required: true,
                collection: true,
                elementName: 'CertifiedRole',
                typeInfo: '.EncapsulatedPKIDataType'
            }]
        }, {
            localName: 'RevocationValuesType',
            propertyInfos: [{
                name: 'crlValues',
                elementName: 'CRLValues',
                typeInfo: '.CRLValuesType'
            }, {
                name: 'ocspValues',
                elementName: 'OCSPValues',
                typeInfo: '.OCSPValuesType'
            }, {
                name: 'otherValues',
                elementName: 'OtherValues',
                typeInfo: '.OtherCertStatusValuesType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'PeriodType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PeriodType'
            },
            propertyInfos: [{
                name: 'startDate',
                elementName: {
                    localPart: 'StartDate',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.StartDateType'
            }, {
                name: 'endDate',
                elementName: {
                    localPart: 'EndDate',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.EndDateType'
            }]
        }, {
            localName: 'TaxSubtotalType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'TaxSubtotalType'
            },
            propertyInfos: [{
                name: 'taxableAmount',
                elementName: {
                    localPart: 'TaxableAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxableAmountType'
            }, {
                name: 'taxAmount',
                required: true,
                elementName: {
                    localPart: 'TaxAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TaxAmountType'
            }, {
                name: 'taxCategory',
                required: true,
                elementName: {
                    localPart: 'TaxCategory',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.TaxCategoryType'
            }]
        }, {
            localName: 'OCSPRefType',
            propertyInfos: [{
                name: 'ocspIdentifier',
                required: true,
                elementName: 'OCSPIdentifier',
                typeInfo: '.OCSPIdentifierType'
            }, {
                name: 'digestAlgAndValue',
                elementName: 'DigestAlgAndValue',
                typeInfo: '.DigestAlgAndValueType'
            }]
        }, {
            localName: 'AccountingCostType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AccountingCostType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'AllowanceTotalAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AllowanceTotalAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'IncludeType',
            propertyInfos: [{
                name: 'uri',
                required: true,
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }, {
                name: 'referencedData',
                typeInfo: 'Boolean',
                attributeName: {
                    localPart: 'referencedData'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CountryIdentificationCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'CountryIdentificationCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'ContactType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'ContactType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'telephone',
                elementName: {
                    localPart: 'Telephone',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.TelephoneType'
            }, {
                name: 'electronicMail',
                elementName: {
                    localPart: 'ElectronicMail',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ElectronicMailType'
            }]
        }, {
            localName: 'PartyNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PartyNameType'
            },
            propertyInfos: [{
                name: 'name',
                required: true,
                elementName: {
                    localPart: 'Name',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NameType'
            }]
        }, {
            localName: 'BaseQuantityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'BaseQuantityType'
            },
            baseTypeInfo: '.QuantityType'
        }, {
            localName: 'CommodityClassificationType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'CommodityClassificationType'
            },
            propertyInfos: [{
                name: 'itemClassificationCode',
                elementName: {
                    localPart: 'ItemClassificationCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ItemClassificationCodeType'
            }]
        }, {
            localName: 'SignatureInformationType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2',
                localPart: 'SignatureInformationType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'referencedSignatureID',
                elementName: {
                    localPart: 'ReferencedSignatureID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2'
                },
                typeInfo: '.ReferencedSignatureIDType'
            }, {
                name: 'signature',
                elementName: {
                    localPart: 'Signature',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SignatureType'
            }]
        }, {
            localName: 'TaxAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'ElectronicMailType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ElectronicMailType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'PriceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PriceType'
            },
            propertyInfos: [{
                name: 'priceAmount',
                required: true,
                elementName: {
                    localPart: 'PriceAmount',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.PriceAmountType'
            }, {
                name: 'baseQuantity',
                elementName: {
                    localPart: 'BaseQuantity',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.BaseQuantityType'
            }]
        }, {
            localName: 'EndpointIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'EndpointIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'ManifestType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'ManifestType'
            },
            propertyInfos: [{
                name: 'reference',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'Reference',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.ReferenceType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'UBLExtensionType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'UBLExtensionType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'name',
                elementName: {
                    localPart: 'Name',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NameType'
            }, {
                name: 'extensionAgencyID',
                elementName: {
                    localPart: 'ExtensionAgencyID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionAgencyIDType'
            }, {
                name: 'extensionAgencyName',
                elementName: {
                    localPart: 'ExtensionAgencyName',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionAgencyNameType'
            }, {
                name: 'extensionVersionID',
                elementName: {
                    localPart: 'ExtensionVersionID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionVersionIDType'
            }, {
                name: 'extensionAgencyURI',
                elementName: {
                    localPart: 'ExtensionAgencyURI',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionAgencyURIType'
            }, {
                name: 'extensionURI',
                elementName: {
                    localPart: 'ExtensionURI',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionURIType'
            }, {
                name: 'extensionReasonCode',
                elementName: {
                    localPart: 'ExtensionReasonCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionReasonCodeType'
            }, {
                name: 'extensionReason',
                elementName: {
                    localPart: 'ExtensionReason',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionReasonType'
            }, {
                name: 'extensionContent',
                required: true,
                elementName: {
                    localPart: 'ExtensionContent',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.ExtensionContentType'
            }]
        }, {
            localName: 'DeliveryType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'DeliveryType'
            },
            propertyInfos: [{
                name: 'actualDeliveryDate',
                elementName: {
                    localPart: 'ActualDeliveryDate',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ActualDeliveryDateType'
            }, {
                name: 'deliveryAddress',
                elementName: {
                    localPart: 'DeliveryAddress',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.AddressType'
            }, {
                name: 'deliveryParty',
                elementName: {
                    localPart: 'DeliveryParty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyType'
            }]
        }, {
            localName: 'QuantityType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'QuantityType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal',
                type: 'value'
            }, {
                name: 'unitCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCode'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCodeListID'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListAgencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCodeListAgencyID'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListAgencyName',
                attributeName: {
                    localPart: 'unitCodeListAgencyName'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'BranchType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'BranchType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'name',
                elementName: {
                    localPart: 'Name',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NameType'
            }]
        }, {
            localName: 'DocumentTypeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DocumentTypeType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'ResponseCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ResponseCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'CodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'CodeType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'NormalizedString',
                type: 'value'
            }, {
                name: 'listID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'listID'
                },
                type: 'attribute'
            }, {
                name: 'listAgencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'listAgencyID'
                },
                type: 'attribute'
            }, {
                name: 'listAgencyName',
                attributeName: {
                    localPart: 'listAgencyName'
                },
                type: 'attribute'
            }, {
                name: 'listName',
                attributeName: {
                    localPart: 'listName'
                },
                type: 'attribute'
            }, {
                name: 'listVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'listVersionID'
                },
                type: 'attribute'
            }, {
                name: 'name',
                attributeName: {
                    localPart: 'name'
                },
                type: 'attribute'
            }, {
                name: 'languageID',
                typeInfo: 'Language',
                attributeName: {
                    localPart: 'languageID'
                },
                type: 'attribute'
            }, {
                name: 'listURI',
                attributeName: {
                    localPart: 'listURI'
                },
                type: 'attribute'
            }, {
                name: 'listSchemeURI',
                attributeName: {
                    localPart: 'listSchemeURI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'MultiplierFactorNumericType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'MultiplierFactorNumericType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'CertIDListType',
            propertyInfos: [{
                name: 'cert',
                required: true,
                collection: true,
                elementName: 'Cert',
                typeInfo: '.CertIDType'
            }]
        }, {
            localName: 'TransformsType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'TransformsType'
            },
            propertyInfos: [{
                name: 'transform',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'Transform',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.TransformType'
            }]
        }, {
            localName: 'CopyIndicatorType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CopyIndicatorType'
            },
            baseTypeInfo: '.IndicatorType'
        }, {
            localName: 'AllowanceChargeReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'AllowanceChargeReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'IDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'PostalZoneType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PostalZoneType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'InstructionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'InstructionIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'SignedInfoType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SignedInfoType'
            },
            propertyInfos: [{
                name: 'canonicalizationMethod',
                required: true,
                elementName: {
                    localPart: 'CanonicalizationMethod',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.CanonicalizationMethodType'
            }, {
                name: 'signatureMethod',
                required: true,
                elementName: {
                    localPart: 'SignatureMethod',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SignatureMethodType'
            }, {
                name: 'reference',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'Reference',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.ReferenceType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'UBLExtensionsType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'UBLExtensionsType'
            },
            propertyInfos: [{
                name: 'ublExtension',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'UBLExtension',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
                },
                typeInfo: '.UBLExtensionType'
            }]
        }, {
            localName: 'ObjectIdentifierType',
            propertyInfos: [{
                name: 'identifier',
                required: true,
                elementName: 'Identifier',
                typeInfo: '.IdentifierType'
            }, {
                name: 'description',
                elementName: 'Description'
            }, {
                name: 'documentationReferences',
                elementName: 'DocumentationReferences',
                typeInfo: '.DocumentationReferencesType'
            }]
        }, {
            localName: 'IdentificationCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IdentificationCodeType'
            },
            baseTypeInfo: '.CountryIdentificationCodeType'
        }, {
            localName: 'FinancialAccountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'FinancialAccountType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }, {
                name: 'financialInstitutionBranch',
                elementName: {
                    localPart: 'FinancialInstitutionBranch',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.BranchType'
            }]
        }, {
            localName: 'CurrencyCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'CurrencyCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'IdentifierType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'IdentifierType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'NormalizedString',
                type: 'value'
            }, {
                name: 'schemeID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'schemeID'
                },
                type: 'attribute'
            }, {
                name: 'schemeName',
                attributeName: {
                    localPart: 'schemeName'
                },
                type: 'attribute'
            }, {
                name: 'schemeAgencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'schemeAgencyID'
                },
                type: 'attribute'
            }, {
                name: 'schemeAgencyName',
                attributeName: {
                    localPart: 'schemeAgencyName'
                },
                type: 'attribute'
            }, {
                name: 'schemeVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'schemeVersionID'
                },
                type: 'attribute'
            }, {
                name: 'schemeDataURI',
                attributeName: {
                    localPart: 'schemeDataURI'
                },
                type: 'attribute'
            }, {
                name: 'schemeURI',
                attributeName: {
                    localPart: 'schemeURI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CanonicalizationMethodType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'CanonicalizationMethodType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                allowDom: false,
                type: 'anyElement'
            }, {
                name: 'algorithm',
                required: true,
                attributeName: {
                    localPart: 'Algorithm'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'IdentifierType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'IdentifierType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'NormalizedString',
                type: 'value'
            }, {
                name: 'schemeID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'schemeID'
                },
                type: 'attribute'
            }, {
                name: 'schemeName',
                attributeName: {
                    localPart: 'schemeName'
                },
                type: 'attribute'
            }, {
                name: 'schemeAgencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'schemeAgencyID'
                },
                type: 'attribute'
            }, {
                name: 'schemeAgencyName',
                attributeName: {
                    localPart: 'schemeAgencyName'
                },
                type: 'attribute'
            }, {
                name: 'schemeVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'schemeVersionID'
                },
                type: 'attribute'
            }, {
                name: 'schemeDataURI',
                attributeName: {
                    localPart: 'schemeDataURI'
                },
                type: 'attribute'
            }, {
                name: 'schemeURI',
                attributeName: {
                    localPart: 'schemeURI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ExtensionReasonType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionReasonType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'OCSPValuesType',
            propertyInfos: [{
                name: 'encapsulatedOCSPValue',
                required: true,
                collection: true,
                elementName: 'EncapsulatedOCSPValue',
                typeInfo: '.EncapsulatedPKIDataType'
            }]
        }, {
            localName: 'ExtensionAgencyNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionAgencyNameType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'PercentType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'PercentType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'ExtensionAgencyURIType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionAgencyURIType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'ExtensionURIType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionURIType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'PartyType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PartyType'
            },
            propertyInfos: [{
                name: 'endpointID',
                elementName: {
                    localPart: 'EndpointID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.EndpointIDType'
            }, {
                name: 'partyIdentification',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'PartyIdentification',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyIdentificationType'
            }, {
                name: 'partyName',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'PartyName',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyNameType'
            }, {
                name: 'postalAddress',
                elementName: {
                    localPart: 'PostalAddress',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.AddressType'
            }, {
                name: 'partyTaxScheme',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'PartyTaxScheme',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyTaxSchemeType'
            }, {
                name: 'partyLegalEntity',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'PartyLegalEntity',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyLegalEntityType'
            }]
        }, {
            localName: 'AddressLineType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'AddressLineType'
            },
            propertyInfos: [{
                name: 'line',
                required: true,
                elementName: {
                    localPart: 'Line',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.LineType'
            }]
        }, {
            localName: 'EmbeddedDocumentBinaryObjectType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'EmbeddedDocumentBinaryObjectType'
            },
            baseTypeInfo: '.BinaryObjectType'
        }, {
            localName: 'TelephoneType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TelephoneType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'TransformType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'TransformType'
            },
            propertyInfos: [{
                name: 'content',
                collection: true,
                elementName: {
                    localPart: 'XPath',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                type: 'elementRef'
            }, {
                name: 'algorithm',
                required: true,
                attributeName: {
                    localPart: 'Algorithm'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'X509DataType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'X509DataType'
            },
            propertyInfos: [{
                name: 'x509IssuerSerialOrX509SKIOrX509SubjectName',
                required: true,
                collection: true,
                mixed: false,
                elementTypeInfos: [{
                    elementName: {
                        localPart: 'X509SubjectName',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    }
                }, {
                    elementName: {
                        localPart: 'X509SKI',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: 'Base64Binary'
                }, {
                    elementName: {
                        localPart: 'X509IssuerSerial',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: '.X509IssuerSerialType'
                }, {
                    elementName: {
                        localPart: 'X509Certificate',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: 'Base64Binary'
                }, {
                    elementName: {
                        localPart: 'X509CRL',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: 'Base64Binary'
                }],
                type: 'elementRefs'
            }]
        }, {
            localName: 'PGPDataType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'PGPDataType'
            },
            propertyInfos: [{
                name: 'content',
                required: true,
                collection: true,
                mixed: false,
                elementTypeInfos: [{
                    elementName: {
                        localPart: 'PGPKeyID',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: 'Base64Binary'
                }, {
                    elementName: {
                        localPart: 'PGPKeyPacket',
                        namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                    },
                    typeInfo: 'Base64Binary'
                }],
                type: 'elementRefs'
            }]
        }, {
            localName: 'SignatureType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SignatureType'
            },
            propertyInfos: [{
                name: 'signedInfo',
                required: true,
                elementName: {
                    localPart: 'SignedInfo',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SignedInfoType'
            }, {
                name: 'signatureValue',
                required: true,
                elementName: {
                    localPart: 'SignatureValue',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SignatureValueType'
            }, {
                name: 'keyInfo',
                elementName: {
                    localPart: 'KeyInfo',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.KeyInfoType'
            }, {
                name: 'object',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Object',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.ObjectType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ResponderIDType',
            propertyInfos: [{
                name: 'byName',
                required: true,
                elementName: 'ByName'
            }, {
                name: 'byKey',
                required: true,
                elementName: 'ByKey',
                typeInfo: 'Base64Binary'
            }]
        }, {
            localName: 'TaxSchemeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'TaxSchemeType'
            },
            propertyInfos: [{
                name: 'id',
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }]
        }, {
            localName: 'SignatureProductionPlaceType',
            propertyInfos: [{
                name: 'city',
                elementName: 'City'
            }, {
                name: 'stateOrProvince',
                elementName: 'StateOrProvince'
            }, {
                name: 'postalCode',
                elementName: 'PostalCode'
            }, {
                name: 'countryName',
                elementName: 'CountryName'
            }]
        }, {
            localName: 'PercentType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PercentType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'ClaimedRolesListType',
            propertyInfos: [{
                name: 'claimedRole',
                required: true,
                collection: true,
                elementName: 'ClaimedRole',
                typeInfo: '.AnyType'
            }]
        }, {
            localName: 'MeasureType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'MeasureType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal',
                type: 'value'
            }, {
                name: 'unitCode',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCode'
                },
                type: 'attribute'
            }, {
                name: 'unitCodeListVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'unitCodeListVersionID'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'TaxableAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxableAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'StartDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'StartDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'IssueTimeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IssueTimeType'
            },
            baseTypeInfo: '.TimeType'
        }, {
            localName: 'EndDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'EndDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'StatusReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'StatusReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'ResponseType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'ResponseType'
            },
            propertyInfos: [{
                name: 'responseCode',
                elementName: {
                    localPart: 'ResponseCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.ResponseCodeType'
            }, {
                name: 'description',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Description',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.DescriptionType'
            }, {
                name: 'status',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Status',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.StatusType'
            }]
        }, {
            localName: 'OtherCertStatusValuesType',
            propertyInfos: [{
                name: 'otherValue',
                required: true,
                collection: true,
                elementName: 'OtherValue',
                typeInfo: '.AnyType'
            }]
        }, {
            localName: 'DueDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DueDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'AnyType',
            propertyInfos: [{
                name: 'otherAttributes',
                type: 'anyAttribute'
            }, {
                name: 'content',
                collection: true,
                type: 'anyElement'
            }]
        }, {
            localName: 'NoteType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'NoteType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'ValueType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ValueType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'PartyIdentificationType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PartyIdentificationType'
            },
            propertyInfos: [{
                name: 'id',
                required: true,
                elementName: {
                    localPart: 'ID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IDType'
            }]
        }, {
            localName: 'CityNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CityNameType'
            },
            baseTypeInfo: '.NameType'
        }, {
            localName: 'DateTimeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'DateTimeType'
            },
            propertyInfos: [{
                name: 'value',
                type: 'value'
            }, {
                name: 'format',
                attributeName: {
                    localPart: 'format'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'IssueDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IssueDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'PartyLegalEntityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'PartyLegalEntityType'
            },
            propertyInfos: [{
                name: 'registrationName',
                elementName: {
                    localPart: 'RegistrationName',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.RegistrationNameType'
            }, {
                name: 'companyID',
                elementName: {
                    localPart: 'CompanyID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.CompanyIDType'
            }]
        }, {
            localName: 'SupplierPartyType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'SupplierPartyType'
            },
            propertyInfos: [{
                name: 'party',
                elementName: {
                    localPart: 'Party',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyType'
            }, {
                name: 'sellerContact',
                elementName: {
                    localPart: 'SellerContact',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ContactType'
            }]
        }, {
            localName: 'CountrySubentityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CountrySubentityType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'UnsignedSignaturePropertiesType',
            propertyInfos: [{
                name: 'counterSignatureOrSignatureTimeStampOrCompleteCertificateRefs',
                required: true,
                collection: true,
                mixed: false,
                allowDom: false,
                elementTypeInfos: [{
                    elementName: 'CompleteCertificateRefs',
                    typeInfo: '.CompleteCertificateRefsType'
                }, {
                    elementName: 'CounterSignature',
                    typeInfo: '.CounterSignatureType'
                }, {
                    elementName: 'SignatureTimeStamp',
                    typeInfo: '.XAdESTimeStampType'
                }, {
                    elementName: 'ArchiveTimeStamp',
                    typeInfo: '.XAdESTimeStampType'
                }, {
                    elementName: 'CompleteRevocationRefs',
                    typeInfo: '.CompleteRevocationRefsType'
                }, {
                    elementName: 'RevocationValues',
                    typeInfo: '.RevocationValuesType'
                }, {
                    elementName: 'RefsOnlyTimeStamp',
                    typeInfo: '.XAdESTimeStampType'
                }, {
                    elementName: 'CertificateValues',
                    typeInfo: '.CertificateValuesType'
                }, {
                    elementName: 'AttrAuthoritiesCertValues',
                    typeInfo: '.CertificateValuesType'
                }, {
                    elementName: 'AttributeCertificateRefs',
                    typeInfo: '.CompleteCertificateRefsType'
                }, {
                    elementName: 'AttributeRevocationRefs',
                    typeInfo: '.CompleteRevocationRefsType'
                }, {
                    elementName: 'SigAndRefsTimeStamp',
                    typeInfo: '.XAdESTimeStampType'
                }, {
                    elementName: 'AttributeRevocationValues',
                    typeInfo: '.RevocationValuesType'
                }],
                type: 'elementRefs'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'RSAKeyValueType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'RSAKeyValueType'
            },
            propertyInfos: [{
                name: 'modulus',
                required: true,
                elementName: {
                    localPart: 'Modulus',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }, {
                name: 'exponent',
                required: true,
                elementName: {
                    localPart: 'Exponent',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: 'Base64Binary'
            }]
        }, {
            localName: 'CounterSignatureType',
            propertyInfos: [{
                name: 'signature',
                required: true,
                elementName: {
                    localPart: 'Signature',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SignatureType'
            }]
        }, {
            localName: 'CRLIdentifierType',
            propertyInfos: [{
                name: 'issuer',
                required: true,
                elementName: 'Issuer'
            }, {
                name: 'issueTime',
                required: true,
                elementName: 'IssueTime',
                typeInfo: 'DateTime'
            }, {
                name: 'number',
                elementName: 'Number',
                typeInfo: 'Integer'
            }, {
                name: 'uri',
                attributeName: {
                    localPart: 'URI'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'LineReferenceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'LineReferenceType'
            },
            propertyInfos: [{
                name: 'lineID',
                required: true,
                elementName: {
                    localPart: 'LineID',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.LineIDType'
            }, {
                name: 'documentReference',
                elementName: {
                    localPart: 'DocumentReference',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentReferenceType'
            }]
        }, {
            localName: 'ItemType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'ItemType'
            },
            propertyInfos: [{
                name: 'description',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'Description',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.DescriptionType'
            }, {
                name: 'name',
                elementName: {
                    localPart: 'Name',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.NameType'
            }, {
                name: 'additionalInformation',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AdditionalInformation',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.AdditionalInformationType'
            }, {
                name: 'sellersItemIdentification',
                elementName: {
                    localPart: 'SellersItemIdentification',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ItemIdentificationType'
            }, {
                name: 'standardItemIdentification',
                elementName: {
                    localPart: 'StandardItemIdentification',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ItemIdentificationType'
            }, {
                name: 'commodityClassification',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'CommodityClassification',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.CommodityClassificationType'
            }, {
                name: 'additionalItemProperty',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'AdditionalItemProperty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.ItemPropertyType'
            }]
        }, {
            localName: 'CertificateValuesType',
            propertyInfos: [{
                name: 'encapsulatedX509CertificateOrOtherCertificate',
                minOccurs: 0,
                collection: true,
                elementTypeInfos: [{
                    elementName: 'EncapsulatedX509Certificate',
                    typeInfo: '.EncapsulatedPKIDataType'
                }, {
                    elementName: 'OtherCertificate',
                    typeInfo: '.AnyType'
                }],
                type: 'elements'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'ExtensionReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'AmountType',
            typeName: {
                namespaceURI: 'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
                localPart: 'AmountType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Decimal2',
                type: 'value'
            }, {
                name: 'currencyID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'currencyID'
                },
                type: 'attribute'
            }, {
                name: 'currencyCodeListVersionID',
                typeInfo: 'NormalizedString',
                attributeName: {
                    localPart: 'currencyCodeListVersionID'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CountryType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
                localPart: 'CountryType'
            },
            propertyInfos: [{
                name: 'identificationCode',
                elementName: {
                    localPart: 'IdentificationCode',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IdentificationCodeType'
            }]
        }, /*{
            localName: 'IdentifierType',
            propertyInfos: [{
                name: 'value',
                type: 'value'
            }, {
                name: 'qualifier',
                attributeName: {
                    localPart: 'Qualifier'
                },
                type: 'attribute'
            }]
        },*/ {
            localName: 'SignaturePropertiesType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SignaturePropertiesType'
            },
            propertyInfos: [{
                name: 'signatureProperty',
                required: true,
                collection: true,
                elementName: {
                    localPart: 'SignatureProperty',
                    namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
                },
                typeInfo: '.SignaturePropertyType'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'CommitmentTypeIndicationType',
            propertyInfos: [{
                name: 'commitmentTypeId',
                required: true,
                elementName: 'CommitmentTypeId',
                typeInfo: '.ObjectIdentifierType'
            }, {
                name: 'objectReference',
                required: true,
                collection: true,
                elementName: 'ObjectReference'
            }, {
                name: 'allSignedDataObjects',
                required: true,
                elementName: 'AllSignedDataObjects',
                typeInfo: 'AnyType'
            }, {
                name: 'commitmentTypeQualifiers',
                elementName: 'CommitmentTypeQualifiers',
                typeInfo: '.CommitmentTypeQualifiersListType'
            }]
        }, {
            localName: 'PriceAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PriceAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'CustomizationIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CustomizationIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'LineType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'LineType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'SignatureValueType',
            typeName: {
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#',
                localPart: 'SignatureValueType'
            },
            propertyInfos: [{
                name: 'value',
                typeInfo: 'Base64Binary',
                type: 'value'
            }, {
                name: 'id',
                typeInfo: 'ID',
                attributeName: {
                    localPart: 'Id'
                },
                type: 'attribute'
            }]
        }, {
            localName: 'LineIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'LineIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'SoundType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'SoundType'
            },
            baseTypeInfo: '.BinaryObjectType'
        }, {
            type: 'enumInfo',
            localName: 'QualifierType',
            values: ['OIDAsURI', 'OIDAsURN']
        }],
        elementInfos: [{
            elementName: {
                localPart: 'PaymentMeans',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PaymentMeansType'
        }, {
            elementName: 'SignaturePolicyIdentifier',
            typeInfo: '.SignaturePolicyIdentifierType'
        }, {
            elementName: {
                localPart: 'ExtensionVersionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionVersionIDType'
        }, {
            elementName: {
                localPart: 'Price',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PriceType'
        }, {
            elementName: {
                localPart: 'ReceiptDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'StatusReasonCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.StatusReasonCodeType'
        }, {
            elementName: {
                localPart: 'AllowanceChargeReason',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AllowanceChargeReasonType'
        }, {
            elementName: 'SignatureTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'DocumentType',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DocumentTypeType'
        }, {
            elementName: {
                localPart: 'CanonicalizationMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.CanonicalizationMethodType'
        }, {
            elementName: {
                localPart: 'CopyIndicator',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CopyIndicatorType'
        }, {
            elementName: {
                localPart: 'AccountingSupplierParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.SupplierPartyType'
        }, {
            elementName: {
                localPart: 'PayableAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PayableAmountType'
        }, {
            elementName: {
                localPart: 'X509IssuerSerial',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.X509IssuerSerialType',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'PaymentMeansCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PaymentMeansCodeType'
        }, {
            elementName: {
                localPart: 'Item',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemType'
        }, {
            elementName: {
                localPart: 'ID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IDType'
        }, {
            elementName: {
                localPart: 'DocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'Transforms',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformsType'
        }, {
            elementName: 'AttributeCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType'
        }, {
            elementName: {
                localPart: 'OrderReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.OrderReferenceType'
        }, {
            elementName: {
                localPart: 'Branch',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.BranchType'
        }, {
            elementName: {
                localPart: 'TaxSubtotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxSubtotalType'
        }, {
            elementName: {
                localPart: 'MultiplierFactorNumeric',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.MultiplierFactorNumericType'
        }, {
            elementName: 'SignedSignatureProperties',
            typeInfo: '.SignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'FinancialInstitutionBranch',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.BranchType'
        }, {
            elementName: {
                localPart: 'DSAKeyValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.DSAKeyValueType'
        }, {
            elementName: {
                localPart: 'ExtensionAgencyURI',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionAgencyURIType'
        }, {
            elementName: 'CompleteRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'X509SubjectName',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'UBLVersionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.UBLVersionIDType'
        }, {
            elementName: 'Include',
            typeInfo: '.IncludeType'
        }, {
            elementName: {
                localPart: 'TaxableAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxableAmountType'
        }, {
            elementName: {
                localPart: 'XPath',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            scope: '.TransformType'
        }, {
            elementName: {
                localPart: 'AllowanceTotalAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AllowanceTotalAmountType'
        }, {
            elementName: {
                localPart: 'TaxTotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxTotalType'
        }, {
            elementName: 'AttrAuthoritiesCertValues',
            typeInfo: '.CertificateValuesType'
        }, {
            elementName: {
                localPart: 'PGPData',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.PGPDataType'
        }, {
            elementName: 'UnsignedProperties',
            typeInfo: '.UnsignedPropertiesType'
        }, {
            elementName: 'AttributeRevocationValues',
            typeInfo: '.RevocationValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'CountrySubentity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CountrySubentityType'
        }, {
            elementName: {
                localPart: 'UBLExtension',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.UBLExtensionType'
        }, {
            elementName: {
                localPart: 'BaseQuantity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.BaseQuantityType'
        }, {
            elementName: 'UnsignedSignatureProperties',
            typeInfo: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'X509Certificate',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'InvoicePeriod',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PeriodType'
        }, {
            elementName: {
                localPart: 'PayerFinancialAccount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.FinancialAccountType'
        }, {
            elementName: {
                localPart: 'IssueDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IssueDateType'
        }, {
            elementName: {
                localPart: 'ExtensionAgencyName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionAgencyNameType'
        }, {
            elementName: {
                localPart: 'MgmtData',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            }
        }, {
            elementName: {
                localPart: 'FinancialAccount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.FinancialAccountType'
        }, {
            elementName: {
                localPart: 'Manifest',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ManifestType'
        }, {
            elementName: 'RevocationValues',
            typeInfo: '.RevocationValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'AllowanceChargeReasonCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AllowanceChargeReasonCodeType'
        }, {
            elementName: {
                localPart: 'KeyInfo',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.KeyInfoType'
        }, {
            elementName: {
                localPart: 'TaxExclusiveAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxExclusiveAmountType'
        }, {
            elementName: {
                localPart: 'StartDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.StartDateType'
        }, {
            elementName: {
                localPart: 'ReceiverParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'PayeeParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'SPKISexp',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.SPKIDataType'
        }, {
            elementName: 'ObjectIdentifier',
            typeInfo: '.ObjectIdentifierType'
        }, {
            elementName: {
                localPart: 'BuyerReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.BuyerReferenceType'
        }, {
            elementName: {
                localPart: 'Signature',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureType'
        }, {
            elementName: {
                localPart: 'RSAKeyValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.RSAKeyValueType'
        }, {
            elementName: 'CounterSignature',
            typeInfo: '.CounterSignatureType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'DocumentResponse',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentResponseType'
        }, {
            elementName: {
                localPart: 'TaxInclusiveAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxInclusiveAmountType'
        }, {
            elementName: {
                localPart: 'ChargeIndicator',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ChargeIndicatorType'
        }, {
            elementName: 'SPUserNotice',
            typeInfo: '.SPUserNoticeType'
        }, {
            elementName: {
                localPart: 'SellersItemIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemIdentificationType'
        }, {
            elementName: {
                localPart: 'SupplierParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.SupplierPartyType'
        }, {
            elementName: 'AttributeRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'ArchiveTimeStampV2',
                namespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.4.1#'
            },
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'SPKIData',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SPKIDataType'
        }, {
            elementName: {
                localPart: 'EndpointID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.EndpointIDType'
        }, {
            elementName: {
                localPart: 'DespatchDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: 'DataObjectFormat',
            typeInfo: '.DataObjectFormatType'
        }, {
            elementName: 'RevocationValues',
            typeInfo: '.RevocationValuesType'
        }, {
            elementName: {
                localPart: 'TaxCategory',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxCategoryType'
        }, {
            elementName: {
                localPart: 'Object',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ObjectType'
        }, {
            elementName: 'XAdESTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'Note',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.NoteType'
        }, {
            elementName: {
                localPart: 'AllowanceCharge',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AllowanceChargeType'
        }, {
            elementName: {
                localPart: 'PGPKeyPacket',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.PGPDataType'
        }, {
            elementName: {
                localPart: 'ContractDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'Country',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CountryType'
        }, {
            elementName: {
                localPart: 'CustomerParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CustomerPartyType'
        }, {
            elementName: {
                localPart: 'CompanyID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CompanyIDType'
        }, {
            elementName: {
                localPart: 'UBLDocumentSignatures',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2'
            },
            typeInfo: '.UBLDocumentSignaturesType'
        }, {
            elementName: {
                localPart: 'TaxExemptionReason',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxExemptionReasonType'
        }, {
            elementName: {
                localPart: 'LineResponse',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.LineResponseType'
        }, {
            elementName: 'AttributeRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType'
        }, {
            elementName: 'AttrAuthoritiesCertValues',
            typeInfo: '.CertificateValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'PayeeFinancialAccount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.FinancialAccountType'
        }, {
            elementName: 'ArchiveTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'Attachment',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AttachmentType'
        }, {
            elementName: 'CounterSignature',
            typeInfo: '.CounterSignatureType'
        }, {
            elementName: {
                localPart: 'Transform',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformType'
        }, {
            elementName: {
                localPart: 'Response',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ResponseType'
        }, {
            elementName: {
                localPart: 'PartyTaxScheme',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyTaxSchemeType'
        }, {
            elementName: 'SPURI'
        }, {
            elementName: {
                localPart: 'RetrievalMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.RetrievalMethodType'
        }, {
            elementName: 'QualifyingPropertiesReference',
            typeInfo: '.QualifyingPropertiesReferenceType'
        }, {
            elementName: {
                localPart: 'ItemIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemIdentificationType'
        }, {
            elementName: {
                localPart: 'SignatureProperties',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'SellerContact',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ContactType'
        }, {
            elementName: {
                localPart: 'ProfileID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ProfileIDType'
        }, {
            elementName: {
                localPart: 'HMACOutputLength',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Integer',
            scope: '.SignatureMethodType'
        }, {
            elementName: {
                localPart: 'TaxLevelCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxLevelCodeType'
        }, {
            elementName: {
                localPart: 'DocumentCurrencyCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DocumentCurrencyCodeType'
        }, {
            elementName: {
                localPart: 'ElectronicMail',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ElectronicMailType'
        }, {
            elementName: {
                localPart: 'InvoiceTypeCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.InvoiceTypeCodeType'
        }, {
            elementName: 'CertificateValues',
            typeInfo: '.CertificateValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: 'QualifyingProperties',
            typeInfo: '.QualifyingPropertiesType'
        }, {
            elementName: {
                localPart: 'PGPKeyID',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.PGPDataType'
        }, {
            elementName: {
                localPart: 'Telephone',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TelephoneType'
        }, {
            elementName: {
                localPart: 'SignatureInformation',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2'
            },
            typeInfo: '.SignatureInformationType'
        }, {
            elementName: {
                localPart: 'Line',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.LineType'
        }, {
            elementName: {
                localPart: 'RegistrationName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.RegistrationNameType'
        }, {
            elementName: {
                localPart: 'InvoiceLine',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.InvoiceLineType'
        }, {
            elementName: 'RefsOnlyTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'CityName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CityNameType'
        }, {
            elementName: {
                localPart: 'IdentificationCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IdentificationCodeType'
        }, {
            elementName: {
                localPart: 'LegalMonetaryTotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.MonetaryTotalType'
        }, {
            elementName: 'AllDataObjectsTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'UBLExtensions',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.UBLExtensionsType'
        }, {
            elementName: 'SignedDataObjectProperties',
            typeInfo: '.SignedDataObjectPropertiesType'
        }, {
            elementName: {
                localPart: 'CustomizationID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CustomizationIDType'
        }, {
            elementName: {
                localPart: 'X509SKI',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'Name',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.NameType'
        }, {
            elementName: {
                localPart: 'KeyValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.KeyValueType'
        }, {
            elementName: {
                localPart: 'Invoice',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2'
            },
            typeInfo: '.InvoiceType'
        }, {
            elementName: {
                localPart: 'CommodityClassification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CommodityClassificationType'
        }, {
            elementName: {
                localPart: 'ChargeTotalAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ChargeTotalAmountType'
        }, {
            elementName: {
                localPart: 'KeyName',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            }
        }, {
            elementName: {
                localPart: 'SalesOrderID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.SalesOrderIDType'
        }, {
            elementName: {
                localPart: 'Address',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressType'
        }, {
            elementName: {
                localPart: 'PostalAddress',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressType'
        }, {
            elementName: {
                localPart: 'Value',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ValueType'
        }, {
            elementName: {
                localPart: 'EndDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.EndDateType'
        }, {
            elementName: {
                localPart: 'SignedInfo',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignedInfoType'
        }, {
            elementName: 'SigningTime',
            typeInfo: 'DateTime'
        }, {
            elementName: {
                localPart: 'StandardItemIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemIdentificationType'
        }, {
            elementName: 'CompleteRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType'
        }, {
            elementName: 'ReferenceInfo',
            typeInfo: '.ReferenceInfoType'
        }, {
            elementName: {
                localPart: 'DeliveryParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: 'EncapsulatedPKIData',
            typeInfo: '.EncapsulatedPKIDataType'
        }, {
            elementName: 'CertificateValues',
            typeInfo: '.CertificateValuesType'
        }, {
            elementName: 'SigAndRefsTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'ProfileExecutionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ProfileExecutionIDType'
        }, {
            elementName: 'Any',
            typeInfo: '.AnyType'
        }, {
            elementName: 'SignedProperties',
            typeInfo: '.SignedPropertiesType'
        }, {
            elementName: {
                localPart: 'ActualDeliveryDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ActualDeliveryDateType'
        }, {
            elementName: {
                localPart: 'BaseAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.BaseAmountType'
        }, {
            elementName: {
                localPart: 'ExtensionContent',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionContentType'
        }, {
            elementName: {
                localPart: 'ItemProperty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemPropertyType'
        }, {
            elementName: {
                localPart: 'TaxAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxAmountType'
        }, {
            elementName: {
                localPart: 'Delivery',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DeliveryType'
        }, {
            elementName: {
                localPart: 'ReferencedSignatureID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2'
            },
            typeInfo: '.ReferencedSignatureIDType'
        }, {
            elementName: {
                localPart: 'AdditionalInformation',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AdditionalInformationType'
        }, {
            elementName: {
                localPart: 'Period',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PeriodType'
        }, {
            elementName: 'SigAndRefsTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'DueDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DueDateType'
        }, {
            elementName: 'IndividualDataObjectsTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'Contact',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ContactType'
        }, {
            elementName: 'AttributeRevocationValues',
            typeInfo: '.RevocationValuesType'
        }, {
            elementName: {
                localPart: 'Party',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'LineID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.LineIDType'
        }, {
            elementName: {
                localPart: 'PostalZone',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PostalZoneType'
        }, {
            elementName: {
                localPart: 'DigestValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
        }, {
            elementName: {
                localPart: 'TaxScheme',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxSchemeType'
        }, {
            elementName: {
                localPart: 'AdditionalItemProperty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemPropertyType'
        }, {
            elementName: 'SignatureProductionPlace',
            typeInfo: '.SignatureProductionPlaceType'
        }, {
            elementName: {
                localPart: 'BuyerContact',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ContactType'
        }, {
            elementName: {
                localPart: 'X509CRL',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'PartyLegalEntity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyLegalEntityType'
        }, {
            elementName: {
                localPart: 'URI',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.URIType'
        }, {
            elementName: {
                localPart: 'Status',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.StatusType'
        }, {
            elementName: {
                localPart: 'SignatureMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureMethodType'
        }, {
            elementName: {
                localPart: 'AccountingCustomerParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CustomerPartyType'
        }, {
            elementName: {
                localPart: 'LineReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.LineReferenceType'
        }, {
            elementName: 'SignerRole',
            typeInfo: '.SignerRoleType'
        }, {
            elementName: {
                localPart: 'InstructionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.InstructionIDType'
        }, {
            elementName: {
                localPart: 'AccountingCost',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AccountingCostType'
        }, {
            elementName: {
                localPart: 'ExternalReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ExternalReferenceType'
        }, {
            elementName: {
                localPart: 'LineExtensionAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.LineExtensionAmountType'
        }, {
            elementName: {
                localPart: 'X509Data',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.X509DataType'
        }, {
            elementName: {
                localPart: 'IssueTime',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IssueTimeType'
        }, {
            elementName: 'CompleteCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'PartyIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyIdentificationType'
        }, {
            elementName: {
                localPart: 'PartyName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyNameType'
        }, {
            elementName: {
                localPart: 'ItemClassificationCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ItemClassificationCodeType'
        }, {
            elementName: {
                localPart: 'TimeStampValidationData',
                namespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.4.1#'
            },
            typeInfo: '.ValidationDataType'
        }, {
            elementName: 'CommitmentTypeIndication',
            typeInfo: '.CommitmentTypeIndicationType'
        }, {
            elementName: {
                localPart: 'DigestMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.DigestMethodType'
        }, {
            elementName: 'UnsignedDataObjectProperties',
            typeInfo: '.UnsignedDataObjectPropertiesType'
        }, {
            elementName: {
                localPart: 'ResponseCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ResponseCodeType'
        }, {
            elementName: {
                localPart: 'SignatureValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureValueType'
        }, {
            elementName: 'CompleteCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType'
        }, {
            elementName: {
                localPart: 'Description',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DescriptionType'
        }, {
            elementName: {
                localPart: 'AddressLine',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressLineType'
        }, {
            elementName: {
                localPart: 'InvoicedQuantity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.InvoicedQuantityType'
        }, {
            elementName: {
                localPart: 'Percent',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PercentType'
        }, {
            elementName: {
                localPart: 'ExtensionURI',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionURIType'
        }, {
            elementName: 'RefsOnlyTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: 'ArchiveTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: 'AttributeCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'EmbeddedDocumentBinaryObject',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.EmbeddedDocumentBinaryObjectType'
        }, {
            elementName: {
                localPart: 'Amount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AmountType'
        }, {
            elementName: {
                localPart: 'SignatureProperty',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignaturePropertyType'
        }, {
            elementName: 'SigningCertificate',
            typeInfo: '.CertIDListType'
        }, {
            elementName: 'SignatureTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'ExtensionReason',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionReasonType'
        }, {
            elementName: {
                localPart: 'ExtensionAgencyID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionAgencyIDType'
        }, {
            elementName: {
                localPart: 'DeliveryAddress',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressType'
        }, {
            elementName: {
                localPart: 'SenderParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'MonetaryTotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.MonetaryTotalType'
        }, {
            elementName: {
                localPart: 'ExtensionReasonCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionReasonCodeType'
        }, {
            elementName: {
                localPart: 'Reference',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ReferenceType'
        }, {
            elementName: {
                localPart: 'AdditionalDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'PriceAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PriceAmountType'
        }, {
            elementName: 'OtherTimeStamp',
            typeInfo: '.OtherTimeStampType'
        }]
    };
    return {
        mapping: mapping
    };
};
if (typeof define === 'function' && define.amd) {
    define([], mapping_Module_Factory);
}
else {
    var mapping_Module = mapping_Module_Factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.mapping = mapping_Module.mapping;
    }
    else {
        var mapping = mapping_Module.mapping;
    }
}