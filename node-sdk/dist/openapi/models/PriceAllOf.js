"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAllOf = void 0;
class PriceAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceAllOf.attributeTypeMap;
    }
}
exports.PriceAllOf = PriceAllOf;
PriceAllOf.discriminator = undefined;
PriceAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string | Product",
        "format": ""
    },
    {
        "name": "base_price",
        "baseName": "base_price",
        "type": "PriceAllOfBasePrice",
        "format": ""
    },
    {
        "name": "billing_period_days",
        "baseName": "billing_period_days",
        "type": "number",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=PriceAllOf.js.map