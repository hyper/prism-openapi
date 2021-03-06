"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceAllOfLineItems = void 0;
class InvoiceAllOfLineItems {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoiceAllOfLineItems.attributeTypeMap;
    }
}
exports.InvoiceAllOfLineItems = InvoiceAllOfLineItems;
InvoiceAllOfLineItems.discriminator = undefined;
InvoiceAllOfLineItems.attributeTypeMap = [
    {
        "name": "price",
        "baseName": "price",
        "type": "string | Price",
        "format": ""
    },
    {
        "name": "price_data",
        "baseName": "price_data",
        "type": "any",
        "format": ""
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=InvoiceAllOfLineItems.js.map