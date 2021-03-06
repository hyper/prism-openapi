"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}
exports.Customer = Customer;
Customer.discriminator = undefined;
Customer.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "CustomersIdBillingDetails",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "phone",
        "baseName": "phone",
        "type": "string",
        "format": ""
    },
    {
        "name": "wallets",
        "baseName": "wallets",
        "type": "Array<Wallet>",
        "format": ""
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<PaymentIntent>",
        "format": ""
    },
    {
        "name": "last_payment",
        "baseName": "last_payment",
        "type": "string | PaymentIntent",
        "format": ""
    }
];
//# sourceMappingURL=Customer.js.map