var mapping_Module_Factory = function () {
    var mapping = {
        name: 'mapping',
        defaultElementNamespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.3.2#',
        typeInfos: [{
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
            localName: 'CityNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CityNameType'
            },
            baseTypeInfo: '.NameType'
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
            localName: 'InvoicedQuantityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'InvoicedQuantityType'
            },
            baseTypeInfo: '.QuantityType'
        }, {
            localName: 'ElectronicMailType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ElectronicMailType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'AccountingCostType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AccountingCostType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'TaxableAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxableAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'ExtensionReasonType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionReasonType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'CountrySubentityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CountrySubentityType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'TaxInclusiveAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxInclusiveAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'TaxExemptionReasonType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxExemptionReasonType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'BuyerReferenceType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'BuyerReferenceType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'InstructionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'InstructionIDType'
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
            localName: 'DocumentTypeCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'DocumentTypeCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'SoundType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'SoundType'
            },
            baseTypeInfo: '.BinaryObjectType'
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
            localName: 'EndDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'EndDateType'
            },
            baseTypeInfo: '.DateType'
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
            localName: 'PriceAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PriceAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'BaseQuantityType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'BaseQuantityType'
            },
            baseTypeInfo: '.QuantityType'
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
            localName: 'ProfileExecutionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ProfileExecutionIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'DueDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DueDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'LineType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'LineType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'CopyIndicatorType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CopyIndicatorType'
            },
            baseTypeInfo: '.IndicatorType'
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
            localName: 'NoteType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'NoteType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'PaymentMeansCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PaymentMeansCodeType'
            },
            baseTypeInfo: '.PaymentMeansCodeType'
        }, {
            localName: 'CurrencyCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'CurrencyCodeType'
            },
            baseTypeInfo: '.CodeType'
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
            localName: 'CompanyIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CompanyIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'AllowanceChargeReasonType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AllowanceChargeReasonType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'NameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'NameType'
            },
            baseTypeInfo: '.NameType'
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
            localName: 'PictureType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'PictureType'
            },
            baseTypeInfo: '.BinaryObjectType'
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
            localName: 'TaxExclusiveAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxExclusiveAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'IssueDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IssueDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'CustomizationIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'CustomizationIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'OCSPRefsType',
            propertyInfos: [{
                name: 'ocspRef',
                required: true,
                collection: true,
                elementName: 'OCSPRef',
                typeInfo: '.OCSPRefType'
            }]
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
            localName: 'UBLVersionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'UBLVersionIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
        }, {
            localName: 'DocumentationReferencesType',
            propertyInfos: [{
                name: 'documentationReference',
                required: true,
                collection: true,
                elementName: 'DocumentationReference'
            }]
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
            localName: 'TaxAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'IDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'ApplicationResponseType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2',
                localPart: 'ApplicationResponseType'
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
                typeInfo: '.CustomizationIDType'
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
                name: 'issueDate',
                required: true,
                elementName: {
                    localPart: 'IssueDate',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IssueDateType'
            }, {
                name: 'issueTime',
                elementName: {
                    localPart: 'IssueTime',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
                },
                typeInfo: '.IssueTimeType'
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
                name: 'senderParty',
                required: true,
                elementName: {
                    localPart: 'SenderParty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyType'
            }, {
                name: 'receiverParty',
                required: true,
                elementName: {
                    localPart: 'ReceiverParty',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.PartyType'
            }, {
                name: 'documentResponse',
                minOccurs: 0,
                collection: true,
                elementName: {
                    localPart: 'DocumentResponse',
                    namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
                },
                typeInfo: '.DocumentResponseType'
            }]
        }, {
            localName: 'TimeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'TimeType'
            },
            propertyInfos: [{
                name: 'value',
/*
                typeInfo: 'Time',
*/
                type: 'value'
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
            localName: 'VideoType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'VideoType'
            },
            baseTypeInfo: '.BinaryObjectType'
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
            localName: 'ItemClassificationCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ItemClassificationCodeType'
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
            localName: 'ReferencedSignatureIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2',
                localPart: 'ReferencedSignatureIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'ExtensionReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
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
            localName: 'DateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'DateType'
            },
            propertyInfos: [{
                name: 'value',
/*
                typeInfo: 'Date',
*/
                type: 'value'
            }]
        }, {
            localName: 'PostalZoneType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PostalZoneType'
            },
            baseTypeInfo: '.TextType'
        }, {
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
            localName: 'CRLValuesType',
            propertyInfos: [{
                name: 'encapsulatedCRLValue',
                required: true,
                collection: true,
                elementName: 'EncapsulatedCRLValue',
                typeInfo: '.EncapsulatedPKIDataType'
            }]
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
            localName: 'CRLRefsType',
            propertyInfos: [{
                name: 'crlRef',
                required: true,
                collection: true,
                elementName: 'CRLRef',
                typeInfo: '.CRLRefType'
            }]
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
            localName: 'PercentType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'PercentType'
            },
            baseTypeInfo: '.NumericType'
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
            localName: 'OCSPValuesType',
            propertyInfos: [{
                name: 'encapsulatedOCSPValue',
                required: true,
                collection: true,
                elementName: 'EncapsulatedOCSPValue',
                typeInfo: '.EncapsulatedPKIDataType'
            }]
        }, {
            localName: 'ExtensionVersionIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionVersionIDType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'IssueTimeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IssueTimeType'
            },
            baseTypeInfo: '.TimeType'
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
            localName: 'StartDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'StartDateType'
            },
            baseTypeInfo: '.DateType'
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
            localName: 'ExtensionAgencyURIType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionAgencyURIType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'DescriptionType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DescriptionType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'SigPolicyQualifiersListType',
            propertyInfos: [{
                name: 'sigPolicyQualifier',
                required: true,
                collection: true,
                elementName: 'SigPolicyQualifier',
                typeInfo: '.AnyType'
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
            localName: 'LineExtensionAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'LineExtensionAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'OtherCertStatusValuesType',
            propertyInfos: [{
                name: 'otherValue',
                required: true,
                collection: true,
                elementName: 'OtherValue',
                typeInfo: '.AnyType'
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
            localName: 'StatusReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'StatusReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
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
            localName: 'ActualDeliveryDateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ActualDeliveryDateType'
            },
            baseTypeInfo: '.DateType'
        }, {
            localName: 'ProfileIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ProfileIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'LineIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'LineIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'AdditionalInformationType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AdditionalInformationType'
            },
            baseTypeInfo: '.TextType'
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
                typeInfo: 'Decimal',
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
            localName: 'ResponseCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ResponseCodeType'
            },
            baseTypeInfo: '.CodeType'
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
            localName: 'ValueType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ValueType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'AllowanceChargeReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'AllowanceChargeReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'SalesOrderIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'SalesOrderIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'AllowanceChargeReasonCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AllowanceChargeReasonCodeType'
            },
            baseTypeInfo: '.CodeType'
        }, {
            localName: 'ExtensionAgencyIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionAgencyIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'AmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
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
            localName: 'ChargeTotalAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ChargeTotalAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'OtherTimeStampType',
            baseTypeInfo: '.GenericTimeStampType'
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
            localName: 'PercentType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PercentType'
            },
            baseTypeInfo: '.NumericType'
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
            localName: 'ValueType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'ValueType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'PayableAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'PayableAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'EmbeddedDocumentBinaryObjectType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'EmbeddedDocumentBinaryObjectType'
            },
            baseTypeInfo: '.BinaryObjectType'
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
            localName: 'ChargeIndicatorType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'ChargeIndicatorType'
            },
            baseTypeInfo: '.IndicatorType'
        }, {
            localName: 'DocumentCurrencyCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DocumentCurrencyCodeType'
            },
            baseTypeInfo: '.CurrencyCodeType'
        }, {
            localName: 'URIType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'URIType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'IdentificationCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'IdentificationCodeType'
            },
            baseTypeInfo: '.CountryIdentificationCodeType'
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
            localName: 'MultiplierFactorNumericType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'MultiplierFactorNumericType'
            },
            baseTypeInfo: '.NumericType'
        }, {
            localName: 'BaseAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'BaseAmountType'
            },
            baseTypeInfo: '.AmountType'
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
            localName: 'EndpointIDType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'EndpointIDType'
            },
            baseTypeInfo: '.IdentifierType'
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
            localName: 'DocumentTypeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'DocumentTypeType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'TelephoneType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TelephoneType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'ExtensionAgencyNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionAgencyNameType'
            },
            baseTypeInfo: '.TextType'
        }, {
            localName: 'ExtensionURIType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
                localPart: 'ExtensionURIType'
            },
            baseTypeInfo: '.IdentifierType'
        }, {
            localName: 'AllowanceTotalAmountType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'AllowanceTotalAmountType'
            },
            baseTypeInfo: '.AmountType'
        }, {
            localName: 'PaymentMeansCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'PaymentMeansCodeType'
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
            localName: 'NameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'NameType'
            },
            baseTypeInfo: '.TextType'
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
            localName: 'GraphicType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'GraphicType'
            },
            baseTypeInfo: '.BinaryObjectType'
        }, {
            localName: 'RegistrationNameType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'RegistrationNameType'
            },
            baseTypeInfo: '.NameType'
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
            localName: 'RateType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2',
                localPart: 'RateType'
            },
            baseTypeInfo: '.NumericType'
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
            localName: 'CountryIdentificationCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2',
                localPart: 'CountryIdentificationCodeType'
            },
            baseTypeInfo: '.CodeType'
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
            localName: 'XAdESTimeStampType',
            baseTypeInfo: '.GenericTimeStampType'
        }, {
            localName: 'TaxLevelCodeType',
            typeName: {
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
                localPart: 'TaxLevelCodeType'
            },
            baseTypeInfo: '.CodeType'
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
            type: 'enumInfo',
            localName: 'QualifierType',
            values: ['OIDAsURI', 'OIDAsURN']
        }],
        elementInfos: [{
            elementName: {
                localPart: 'CountrySubentity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CountrySubentityType'
        }, {
            elementName: 'CertificateValues',
            typeInfo: '.CertificateValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: 'ReferenceInfo',
            typeInfo: '.ReferenceInfoType'
        }, {
            elementName: {
                localPart: 'DocumentCurrencyCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DocumentCurrencyCodeType'
        }, {
            elementName: {
                localPart: 'DocumentType',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DocumentTypeType'
        }, {
            elementName: {
                localPart: 'DigestMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.DigestMethodType'
        }, {
            elementName: {
                localPart: 'LineID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.LineIDType'
        }, {
            elementName: {
                localPart: 'TaxAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxAmountType'
        }, {
            elementName: 'SignedDataObjectProperties',
            typeInfo: '.SignedDataObjectPropertiesType'
        }, {
            elementName: {
                localPart: 'RegistrationName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.RegistrationNameType'
        }, {
            elementName: {
                localPart: 'OrderReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.OrderReferenceType'
        }, {
            elementName: {
                localPart: 'UBLDocumentSignatures',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2'
            },
            typeInfo: '.UBLDocumentSignaturesType'
        }, {
            elementName: {
                localPart: 'SignatureInformation',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2'
            },
            typeInfo: '.SignatureInformationType'
        }, {
            elementName: {
                localPart: 'LineReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.LineReferenceType'
        }, {
            elementName: {
                localPart: 'TaxTotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxTotalType'
        }, {
            elementName: {
                localPart: 'Telephone',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TelephoneType'
        }, {
            elementName: {
                localPart: 'SenderParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: 'QualifyingPropertiesReference',
            typeInfo: '.QualifyingPropertiesReferenceType'
        }, {
            elementName: {
                localPart: 'XPath',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            scope: '.TransformType'
        }, {
            elementName: {
                localPart: 'Amount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AmountType'
        }, {
            elementName: {
                localPart: 'AdditionalItemProperty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemPropertyType'
        }, {
            elementName: {
                localPart: 'DocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'PayeeParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'IssueDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IssueDateType'
        }, {
            elementName: {
                localPart: 'ExtensionReasonCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionReasonCodeType'
        }, {
            elementName: 'SignatureTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'TaxCategory',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxCategoryType'
        }, {
            elementName: {
                localPart: 'DespatchDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'InvoiceLine',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.InvoiceLineType'
        }, {
            elementName: 'AttributeCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType'
        }, {
            elementName: {
                localPart: 'RSAKeyValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.RSAKeyValueType'
        }, {
            elementName: {
                localPart: 'DeliveryParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'FinancialInstitutionBranch',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.BranchType'
        }, {
            elementName: {
                localPart: 'PGPData',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.PGPDataType'
        }, {
            elementName: 'RevocationValues',
            typeInfo: '.RevocationValuesType'
        }, {
            elementName: {
                localPart: 'RetrievalMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.RetrievalMethodType'
        }, {
            elementName: {
                localPart: 'Name',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.NameType'
        }, {
            elementName: {
                localPart: 'IssueTime',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IssueTimeType'
        }, {
            elementName: 'SignerRole',
            typeInfo: '.SignerRoleType'
        }, {
            elementName: 'CounterSignature',
            typeInfo: '.CounterSignatureType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'ResponseCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ResponseCodeType'
        }, {
            elementName: {
                localPart: 'SignatureProperties',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'PaymentMeansCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PaymentMeansCodeType'
        }, {
            elementName: 'CompleteRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'TaxSubtotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxSubtotalType'
        }, {
            elementName: {
                localPart: 'CopyIndicator',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CopyIndicatorType'
        }, {
            elementName: {
                localPart: 'UBLExtension',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.UBLExtensionType'
        }, {
            elementName: {
                localPart: 'DSAKeyValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.DSAKeyValueType'
        }, {
            elementName: 'CounterSignature',
            typeInfo: '.CounterSignatureType'
        }, {
            elementName: {
                localPart: 'ItemProperty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemPropertyType'
        }, {
            elementName: {
                localPart: 'InvoicePeriod',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PeriodType'
        }, {
            elementName: {
                localPart: 'SupplierParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.SupplierPartyType'
        }, {
            elementName: 'SignatureTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'MultiplierFactorNumeric',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.MultiplierFactorNumericType'
        }, {
            elementName: 'SPURI'
        }, {
            elementName: {
                localPart: 'KeyInfo',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.KeyInfoType'
        }, {
            elementName: {
                localPart: 'Transform',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformType'
        }, {
            elementName: {
                localPart: 'DueDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DueDateType'
        }, {
            elementName: {
                localPart: 'CompanyID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CompanyIDType'
        }, {
            elementName: 'RefsOnlyTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'ItemIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemIdentificationType'
        }, {
            elementName: {
                localPart: 'Percent',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PercentType'
        }, {
            elementName: 'SignedProperties',
            typeInfo: '.SignedPropertiesType'
        }, {
            elementName: 'AttributeRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType'
        }, {
            elementName: {
                localPart: 'DeliveryAddress',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressType'
        }, {
            elementName: {
                localPart: 'StandardItemIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemIdentificationType'
        }, {
            elementName: {
                localPart: 'MgmtData',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            }
        }, {
            elementName: {
                localPart: 'AccountingSupplierParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.SupplierPartyType'
        }, {
            elementName: {
                localPart: 'PostalZone',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PostalZoneType'
        }, {
            elementName: 'AttrAuthoritiesCertValues',
            typeInfo: '.CertificateValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'EndDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.EndDateType'
        }, {
            elementName: {
                localPart: 'InstructionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.InstructionIDType'
        }, {
            elementName: 'AllDataObjectsTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'TaxableAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxableAmountType'
        }, {
            elementName: {
                localPart: 'SellersItemIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemIdentificationType'
        }, {
            elementName: 'ArchiveTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'Contact',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ContactType'
        }, {
            elementName: {
                localPart: 'InvoiceTypeCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.InvoiceTypeCodeType'
        }, {
            elementName: 'IndividualDataObjectsTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: 'AttributeRevocationValues',
            typeInfo: '.RevocationValuesType'
        }, {
            elementName: {
                localPart: 'ExtensionVersionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionVersionIDType'
        }, {
            elementName: {
                localPart: 'PartyTaxScheme',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyTaxSchemeType'
        }, {
            elementName: {
                localPart: 'PostalAddress',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressType'
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
                localPart: 'ProfileID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ProfileIDType'
        }, {
            elementName: 'XAdESTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'Branch',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.BranchType'
        }, {
            elementName: {
                localPart: 'KeyName',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            }
        }, {
            elementName: {
                localPart: 'AllowanceChargeReasonCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AllowanceChargeReasonCodeType'
        }, {
            elementName: {
                localPart: 'HMACOutputLength',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Integer',
            scope: '.SignatureMethodType'
        }, {
            elementName: {
                localPart: 'BuyerContact',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ContactType'
        }, {
            elementName: {
                localPart: 'CityName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CityNameType'
        }, {
            elementName: {
                localPart: 'PayeeFinancialAccount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.FinancialAccountType'
        }, {
            elementName: 'AttributeRevocationValues',
            typeInfo: '.RevocationValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'LegalMonetaryTotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.MonetaryTotalType'
        }, {
            elementName: 'SigningTime',
            typeInfo: 'DateTime'
        }, {
            elementName: {
                localPart: 'ElectronicMail',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ElectronicMailType'
        }, {
            elementName: {
                localPart: 'Country',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CountryType'
        }, {
            elementName: {
                localPart: 'ChargeTotalAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ChargeTotalAmountType'
        }, {
            elementName: 'RevocationValues',
            typeInfo: '.RevocationValuesType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'DocumentResponse',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentResponseType'
        }, {
            elementName: 'CommitmentTypeIndication',
            typeInfo: '.CommitmentTypeIndicationType'
        }, {
            elementName: 'AttributeRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'AccountingCost',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AccountingCostType'
        }, {
            elementName: 'CompleteCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType'
        }, {
            elementName: {
                localPart: 'EmbeddedDocumentBinaryObject',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.EmbeddedDocumentBinaryObjectType'
        }, {
            elementName: {
                localPart: 'CanonicalizationMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.CanonicalizationMethodType'
        }, {
            elementName: {
                localPart: 'KeyValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.KeyValueType'
        }, {
            elementName: {
                localPart: 'StatusReasonCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.StatusReasonCodeType'
        }, {
            elementName: {
                localPart: 'TaxExemptionReason',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxExemptionReasonType'
        }, {
            elementName: {
                localPart: 'Value',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ValueType'
        }, {
            elementName: {
                localPart: 'TimeStampValidationData',
                namespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.4.1#'
            },
            typeInfo: '.ValidationDataType'
        }, {
            elementName: {
                localPart: 'X509Data',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.X509DataType'
        }, {
            elementName: 'OtherTimeStamp',
            typeInfo: '.OtherTimeStampType'
        }, {
            elementName: {
                localPart: 'ExtensionAgencyURI',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionAgencyURIType'
        }, {
            elementName: {
                localPart: 'SignatureMethod',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureMethodType'
        }, {
            elementName: {
                localPart: 'AddressLine',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressLineType'
        }, {
            elementName: {
                localPart: 'TaxScheme',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.TaxSchemeType'
        }, {
            elementName: {
                localPart: 'ProfileExecutionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ProfileExecutionIDType'
        }, {
            elementName: {
                localPart: 'UBLVersionID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.UBLVersionIDType'
        }, {
            elementName: {
                localPart: 'AdditionalInformation',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AdditionalInformationType'
        }, {
            elementName: {
                localPart: 'X509IssuerSerial',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.X509IssuerSerialType',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'Manifest',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ManifestType'
        }, {
            elementName: 'CompleteCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'SalesOrderID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.SalesOrderIDType'
        }, {
            elementName: {
                localPart: 'ExtensionURI',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionURIType'
        }, {
            elementName: 'DataObjectFormat',
            typeInfo: '.DataObjectFormatType'
        }, {
            elementName: {
                localPart: 'LineResponse',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.LineResponseType'
        }, {
            elementName: {
                localPart: 'PaymentMeans',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PaymentMeansType'
        }, {
            elementName: {
                localPart: 'PriceAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PriceAmountType'
        }, {
            elementName: {
                localPart: 'FinancialAccount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.FinancialAccountType'
        }, {
            elementName: 'SPUserNotice',
            typeInfo: '.SPUserNoticeType'
        }, {
            elementName: {
                localPart: 'Transforms',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.TransformsType'
        }, {
            elementName: {
                localPart: 'PartyLegalEntity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyLegalEntityType'
        }, {
            elementName: {
                localPart: 'Description',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.DescriptionType'
        }, {
            elementName: {
                localPart: 'Object',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ObjectType'
        }, {
            elementName: {
                localPart: 'TaxLevelCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxLevelCodeType'
        }, {
            elementName: 'SignedSignatureProperties',
            typeInfo: '.SignedSignaturePropertiesType'
        }, {
            elementName: 'SigAndRefsTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'ID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IDType'
        }, {
            elementName: {
                localPart: 'X509CRL',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.X509DataType'
        }, {
            elementName: 'AttrAuthoritiesCertValues',
            typeInfo: '.CertificateValuesType'
        }, {
            elementName: {
                localPart: 'SellerContact',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ContactType'
        }, {
            elementName: 'CertificateValues',
            typeInfo: '.CertificateValuesType'
        }, {
            elementName: {
                localPart: 'AdditionalDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: {
                localPart: 'SignedInfo',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignedInfoType'
        }, {
            elementName: 'SigAndRefsTimeStamp',
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'ArchiveTimeStampV2',
                namespaceURI: 'http:\/\/uri.etsi.org\/01903\/v1.4.1#'
            },
            typeInfo: '.XAdESTimeStampType'
        }, {
            elementName: {
                localPart: 'Line',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.LineType'
        }, {
            elementName: {
                localPart: 'CommodityClassification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CommodityClassificationType'
        }, {
            elementName: {
                localPart: 'ApplicationResponse',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2'
            },
            typeInfo: '.ApplicationResponseType'
        }, {
            elementName: {
                localPart: 'CustomerParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CustomerPartyType'
        }, {
            elementName: {
                localPart: 'PayableAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.PayableAmountType'
        }, {
            elementName: 'Any',
            typeInfo: '.AnyType'
        }, {
            elementName: {
                localPart: 'ActualDeliveryDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ActualDeliveryDateType'
        }, {
            elementName: {
                localPart: 'DigestValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary'
        }, {
            elementName: {
                localPart: 'ReceiverParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: 'QualifyingProperties',
            typeInfo: '.QualifyingPropertiesType'
        }, {
            elementName: {
                localPart: 'LineExtensionAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.LineExtensionAmountType'
        }, {
            elementName: {
                localPart: 'CustomizationID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.CustomizationIDType'
        }, {
            elementName: {
                localPart: 'TaxExclusiveAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxExclusiveAmountType'
        }, {
            elementName: {
                localPart: 'X509SKI',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'Period',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PeriodType'
        }, {
            elementName: {
                localPart: 'BaseAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.BaseAmountType'
        }, {
            elementName: {
                localPart: 'Address',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AddressType'
        }, {
            elementName: {
                localPart: 'ExtensionReason',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionReasonType'
        }, {
            elementName: {
                localPart: 'Signature',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureType'
        }, {
            elementName: 'SignaturePolicyIdentifier',
            typeInfo: '.SignaturePolicyIdentifierType'
        }, {
            elementName: {
                localPart: 'Attachment',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AttachmentType'
        }, {
            elementName: {
                localPart: 'InvoicedQuantity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.InvoicedQuantityType'
        }, {
            elementName: {
                localPart: 'PartyIdentification',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyIdentificationType'
        }, {
            elementName: {
                localPart: 'PGPKeyID',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.PGPDataType'
        }, {
            elementName: {
                localPart: 'PayerFinancialAccount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.FinancialAccountType'
        }, {
            elementName: {
                localPart: 'BuyerReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.BuyerReferenceType'
        }, {
            elementName: {
                localPart: 'SPKIData',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SPKIDataType'
        }, {
            elementName: {
                localPart: 'IdentificationCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.IdentificationCodeType'
        }, {
            elementName: 'UnsignedSignatureProperties',
            typeInfo: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'MonetaryTotal',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.MonetaryTotalType'
        }, {
            elementName: {
                localPart: 'AllowanceChargeReason',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AllowanceChargeReasonType'
        }, {
            elementName: {
                localPart: 'PGPKeyPacket',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.PGPDataType'
        }, {
            elementName: {
                localPart: 'URI',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.URIType'
        }, {
            elementName: {
                localPart: 'ItemClassificationCode',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ItemClassificationCodeType'
        }, {
            elementName: {
                localPart: 'Status',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.StatusType'
        }, {
            elementName: {
                localPart: 'Delivery',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DeliveryType'
        }, {
            elementName: {
                localPart: 'ExtensionContent',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionContentType'
        }, {
            elementName: {
                localPart: 'ExternalReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ExternalReferenceType'
        }, {
            elementName: 'SignatureProductionPlace',
            typeInfo: '.SignatureProductionPlaceType'
        }, {
            elementName: {
                localPart: 'ExtensionAgencyID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionAgencyIDType'
        }, {
            elementName: {
                localPart: 'BaseQuantity',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.BaseQuantityType'
        }, {
            elementName: {
                localPart: 'ChargeIndicator',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.ChargeIndicatorType'
        }, {
            elementName: {
                localPart: 'ExtensionAgencyName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.ExtensionAgencyNameType'
        }, {
            elementName: {
                localPart: 'SPKISexp',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.SPKIDataType'
        }, {
            elementName: 'SigningCertificate',
            typeInfo: '.CertIDListType'
        }, {
            elementName: 'AttributeCertificateRefs',
            typeInfo: '.CompleteCertificateRefsType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'Reference',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.ReferenceType'
        }, {
            elementName: {
                localPart: 'Item',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ItemType'
        }, {
            elementName: 'UnsignedProperties',
            typeInfo: '.UnsignedPropertiesType'
        }, {
            elementName: {
                localPart: 'X509Certificate',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: 'Base64Binary',
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'StartDate',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.StartDateType'
        }, {
            elementName: {
                localPart: 'PartyName',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyNameType'
        }, {
            elementName: {
                localPart: 'UBLExtensions',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2'
            },
            typeInfo: '.UBLExtensionsType'
        }, {
            elementName: {
                localPart: 'ReferencedSignatureID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2'
            },
            typeInfo: '.ReferencedSignatureIDType'
        }, {
            elementName: 'Include',
            typeInfo: '.IncludeType'
        }, {
            elementName: {
                localPart: 'TaxInclusiveAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.TaxInclusiveAmountType'
        }, {
            elementName: {
                localPart: 'Note',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.NoteType'
        }, {
            elementName: 'CompleteRevocationRefs',
            typeInfo: '.CompleteRevocationRefsType'
        }, {
            elementName: 'RefsOnlyTimeStamp',
            typeInfo: '.XAdESTimeStampType',
            scope: '.UnsignedSignaturePropertiesType'
        }, {
            elementName: {
                localPart: 'X509SubjectName',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            scope: '.X509DataType'
        }, {
            elementName: {
                localPart: 'ContractDocumentReference',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.DocumentReferenceType'
        }, {
            elementName: 'ObjectIdentifier',
            typeInfo: '.ObjectIdentifierType'
        }, {
            elementName: {
                localPart: 'SignatureProperty',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignaturePropertyType'
        }, {
            elementName: {
                localPart: 'Response',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.ResponseType'
        }, {
            elementName: {
                localPart: 'EndpointID',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.EndpointIDType'
        }, {
            elementName: {
                localPart: 'AllowanceTotalAmount',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2'
            },
            typeInfo: '.AllowanceTotalAmountType'
        }, {
            elementName: 'EncapsulatedPKIData',
            typeInfo: '.EncapsulatedPKIDataType'
        }, {
            elementName: 'UnsignedDataObjectProperties',
            typeInfo: '.UnsignedDataObjectPropertiesType'
        }, {
            elementName: {
                localPart: 'AccountingCustomerParty',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.CustomerPartyType'
        }, {
            elementName: {
                localPart: 'AllowanceCharge',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.AllowanceChargeType'
        }, {
            elementName: {
                localPart: 'Party',
                namespaceURI: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2'
            },
            typeInfo: '.PartyType'
        }, {
            elementName: {
                localPart: 'SignatureValue',
                namespaceURI: 'http:\/\/www.w3.org\/2000\/09\/xmldsig#'
            },
            typeInfo: '.SignatureValueType'
        }, {
            elementName: 'ArchiveTimeStamp',
            typeInfo: '.XAdESTimeStampType'
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