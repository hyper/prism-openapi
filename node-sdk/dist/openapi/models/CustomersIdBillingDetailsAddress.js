"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersIdBillingDetailsAddress = void 0;
class CustomersIdBillingDetailsAddress {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomersIdBillingDetailsAddress.attributeTypeMap;
    }
}
exports.CustomersIdBillingDetailsAddress = CustomersIdBillingDetailsAddress;
CustomersIdBillingDetailsAddress.discriminator = undefined;
CustomersIdBillingDetailsAddress.attributeTypeMap = [
    {
        "name": "city",
        "baseName": "city",
        "type": "string",
        "format": ""
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string",
        "format": ""
    },
    {
        "name": "line1",
        "baseName": "line1",
        "type": "string",
        "format": ""
    },
    {
        "name": "line2",
        "baseName": "line2",
        "type": "string",
        "format": ""
    },
    {
        "name": "postal_code",
        "baseName": "postal_code",
        "type": "string",
        "format": ""
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CustomersIdBillingDetailsAddress.js.map