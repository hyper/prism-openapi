"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceBody = void 0;
class CreateInvoiceBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateInvoiceBody.attributeTypeMap;
    }
}
exports.CreateInvoiceBody = CreateInvoiceBody;
CreateInvoiceBody.discriminator = undefined;
CreateInvoiceBody.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "string",
        "format": ""
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<InvoicesLineItems>",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
        "type": "number",
        "format": ""
    },
    {
        "name": "send_reminders",
        "baseName": "send_reminders",
        "type": "string",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=CreateInvoiceBody.js.map