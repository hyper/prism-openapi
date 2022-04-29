"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./Account"), exports);
__exportStar(require("./AccountAllOf"), exports);
__exportStar(require("./AccountAllOfBranding"), exports);
__exportStar(require("./ApiKey"), exports);
__exportStar(require("./ApiKeyAllOf"), exports);
__exportStar(require("./CreateCustomerBody"), exports);
__exportStar(require("./CreateFeeBody"), exports);
__exportStar(require("./CreateInvoiceBody"), exports);
__exportStar(require("./CreatePayoutWalletBody"), exports);
__exportStar(require("./CreateProductBody"), exports);
__exportStar(require("./CreateTransferBody"), exports);
__exportStar(require("./CreateWalletBody"), exports);
__exportStar(require("./CreateWebhookBody"), exports);
__exportStar(require("./Customer"), exports);
__exportStar(require("./CustomerAllOf"), exports);
__exportStar(require("./CustomersBillingDetails"), exports);
__exportStar(require("./CustomersBillingDetailsAddress"), exports);
__exportStar(require("./CustomersIdBillingDetails"), exports);
__exportStar(require("./CustomersIdBillingDetailsAddress"), exports);
__exportStar(require("./Fee"), exports);
__exportStar(require("./FeeAllOf"), exports);
__exportStar(require("./Invoice"), exports);
__exportStar(require("./InvoiceAllOf"), exports);
__exportStar(require("./ListCustomersResponse"), exports);
__exportStar(require("./ListFeesResponse"), exports);
__exportStar(require("./ListInvoicesResponse"), exports);
__exportStar(require("./ListLogsResponse"), exports);
__exportStar(require("./ListPaymentsResponse"), exports);
__exportStar(require("./ListPayoutWalletsResponse"), exports);
__exportStar(require("./ListProductsResponse"), exports);
__exportStar(require("./ListTransfersResponse"), exports);
__exportStar(require("./ListWalletsResponse"), exports);
__exportStar(require("./ListWebhooksResponse"), exports);
__exportStar(require("./Log"), exports);
__exportStar(require("./LogAllOf"), exports);
__exportStar(require("./Model"), exports);
__exportStar(require("./Payment"), exports);
__exportStar(require("./PaymentAllOf"), exports);
__exportStar(require("./PayoutWallet"), exports);
__exportStar(require("./PayoutWalletAllOf"), exports);
__exportStar(require("./Product"), exports);
__exportStar(require("./ProductAllOf"), exports);
__exportStar(require("./Transaction"), exports);
__exportStar(require("./TransactionAllOf"), exports);
__exportStar(require("./Transfer"), exports);
__exportStar(require("./TransferAllOf"), exports);
__exportStar(require("./UpdateCustomerBody"), exports);
__exportStar(require("./UpdateInvoiceBody"), exports);
__exportStar(require("./UpdatePayoutWalletBody"), exports);
__exportStar(require("./UpdateProductBody"), exports);
__exportStar(require("./UpdateWalletBody"), exports);
__exportStar(require("./UpdateWebhookBody"), exports);
__exportStar(require("./Wallet"), exports);
__exportStar(require("./WalletAllOf"), exports);
__exportStar(require("./Webhook"), exports);
__exportStar(require("./WebhookAllOf"), exports);
const Account_1 = require("./Account");
const AccountAllOf_1 = require("./AccountAllOf");
const AccountAllOfBranding_1 = require("./AccountAllOfBranding");
const ApiKey_1 = require("./ApiKey");
const ApiKeyAllOf_1 = require("./ApiKeyAllOf");
const CreateCustomerBody_1 = require("./CreateCustomerBody");
const CreateFeeBody_1 = require("./CreateFeeBody");
const CreateInvoiceBody_1 = require("./CreateInvoiceBody");
const CreatePayoutWalletBody_1 = require("./CreatePayoutWalletBody");
const CreateProductBody_1 = require("./CreateProductBody");
const CreateTransferBody_1 = require("./CreateTransferBody");
const CreateWalletBody_1 = require("./CreateWalletBody");
const CreateWebhookBody_1 = require("./CreateWebhookBody");
const Customer_1 = require("./Customer");
const CustomerAllOf_1 = require("./CustomerAllOf");
const CustomersBillingDetails_1 = require("./CustomersBillingDetails");
const CustomersBillingDetailsAddress_1 = require("./CustomersBillingDetailsAddress");
const CustomersIdBillingDetails_1 = require("./CustomersIdBillingDetails");
const CustomersIdBillingDetailsAddress_1 = require("./CustomersIdBillingDetailsAddress");
const Fee_1 = require("./Fee");
const FeeAllOf_1 = require("./FeeAllOf");
const Invoice_1 = require("./Invoice");
const InvoiceAllOf_1 = require("./InvoiceAllOf");
const ListCustomersResponse_1 = require("./ListCustomersResponse");
const ListFeesResponse_1 = require("./ListFeesResponse");
const ListInvoicesResponse_1 = require("./ListInvoicesResponse");
const ListLogsResponse_1 = require("./ListLogsResponse");
const ListPaymentsResponse_1 = require("./ListPaymentsResponse");
const ListPayoutWalletsResponse_1 = require("./ListPayoutWalletsResponse");
const ListProductsResponse_1 = require("./ListProductsResponse");
const ListTransfersResponse_1 = require("./ListTransfersResponse");
const ListWalletsResponse_1 = require("./ListWalletsResponse");
const ListWebhooksResponse_1 = require("./ListWebhooksResponse");
const Log_1 = require("./Log");
const LogAllOf_1 = require("./LogAllOf");
const Model_1 = require("./Model");
const Payment_1 = require("./Payment");
const PaymentAllOf_1 = require("./PaymentAllOf");
const PayoutWallet_1 = require("./PayoutWallet");
const PayoutWalletAllOf_1 = require("./PayoutWalletAllOf");
const Product_1 = require("./Product");
const ProductAllOf_1 = require("./ProductAllOf");
const Transaction_1 = require("./Transaction");
const TransactionAllOf_1 = require("./TransactionAllOf");
const Transfer_1 = require("./Transfer");
const TransferAllOf_1 = require("./TransferAllOf");
const UpdateCustomerBody_1 = require("./UpdateCustomerBody");
const UpdateInvoiceBody_1 = require("./UpdateInvoiceBody");
const UpdatePayoutWalletBody_1 = require("./UpdatePayoutWalletBody");
const UpdateProductBody_1 = require("./UpdateProductBody");
const UpdateWalletBody_1 = require("./UpdateWalletBody");
const UpdateWebhookBody_1 = require("./UpdateWebhookBody");
const Wallet_1 = require("./Wallet");
const WalletAllOf_1 = require("./WalletAllOf");
const Webhook_1 = require("./Webhook");
const WebhookAllOf_1 = require("./WebhookAllOf");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([
    "ApiKeyTypeEnum",
    "ApiKeyAllOfTypeEnum",
    "InvoiceChainEnum",
    "InvoiceCurrencyEnum",
    "InvoiceStatusEnum",
    "InvoiceAllOfChainEnum",
    "InvoiceAllOfCurrencyEnum",
    "InvoiceAllOfStatusEnum",
    "LogMethodEnum",
    "LogAllOfMethodEnum",
    "PaymentStatusEnum",
    "PaymentAllOfStatusEnum",
    "PayoutWalletChainEnum",
    "PayoutWalletAllOfChainEnum",
    "ProductCurrencyEnum",
    "ProductAllOfCurrencyEnum",
    "TransactionChainEnum",
    "TransactionCurrencyEnum",
    "TransactionStatusEnum",
    "TransactionAllOfChainEnum",
    "TransactionAllOfCurrencyEnum",
    "TransactionAllOfStatusEnum",
    "WalletChainEnum",
    "WalletAllOfChainEnum",
]);
let typeMap = {
    "Account": Account_1.Account,
    "AccountAllOf": AccountAllOf_1.AccountAllOf,
    "AccountAllOfBranding": AccountAllOfBranding_1.AccountAllOfBranding,
    "ApiKey": ApiKey_1.ApiKey,
    "ApiKeyAllOf": ApiKeyAllOf_1.ApiKeyAllOf,
    "CreateCustomerBody": CreateCustomerBody_1.CreateCustomerBody,
    "CreateFeeBody": CreateFeeBody_1.CreateFeeBody,
    "CreateInvoiceBody": CreateInvoiceBody_1.CreateInvoiceBody,
    "CreatePayoutWalletBody": CreatePayoutWalletBody_1.CreatePayoutWalletBody,
    "CreateProductBody": CreateProductBody_1.CreateProductBody,
    "CreateTransferBody": CreateTransferBody_1.CreateTransferBody,
    "CreateWalletBody": CreateWalletBody_1.CreateWalletBody,
    "CreateWebhookBody": CreateWebhookBody_1.CreateWebhookBody,
    "Customer": Customer_1.Customer,
    "CustomerAllOf": CustomerAllOf_1.CustomerAllOf,
    "CustomersBillingDetails": CustomersBillingDetails_1.CustomersBillingDetails,
    "CustomersBillingDetailsAddress": CustomersBillingDetailsAddress_1.CustomersBillingDetailsAddress,
    "CustomersIdBillingDetails": CustomersIdBillingDetails_1.CustomersIdBillingDetails,
    "CustomersIdBillingDetailsAddress": CustomersIdBillingDetailsAddress_1.CustomersIdBillingDetailsAddress,
    "Fee": Fee_1.Fee,
    "FeeAllOf": FeeAllOf_1.FeeAllOf,
    "Invoice": Invoice_1.Invoice,
    "InvoiceAllOf": InvoiceAllOf_1.InvoiceAllOf,
    "ListCustomersResponse": ListCustomersResponse_1.ListCustomersResponse,
    "ListFeesResponse": ListFeesResponse_1.ListFeesResponse,
    "ListInvoicesResponse": ListInvoicesResponse_1.ListInvoicesResponse,
    "ListLogsResponse": ListLogsResponse_1.ListLogsResponse,
    "ListPaymentsResponse": ListPaymentsResponse_1.ListPaymentsResponse,
    "ListPayoutWalletsResponse": ListPayoutWalletsResponse_1.ListPayoutWalletsResponse,
    "ListProductsResponse": ListProductsResponse_1.ListProductsResponse,
    "ListTransfersResponse": ListTransfersResponse_1.ListTransfersResponse,
    "ListWalletsResponse": ListWalletsResponse_1.ListWalletsResponse,
    "ListWebhooksResponse": ListWebhooksResponse_1.ListWebhooksResponse,
    "Log": Log_1.Log,
    "LogAllOf": LogAllOf_1.LogAllOf,
    "Model": Model_1.Model,
    "Payment": Payment_1.Payment,
    "PaymentAllOf": PaymentAllOf_1.PaymentAllOf,
    "PayoutWallet": PayoutWallet_1.PayoutWallet,
    "PayoutWalletAllOf": PayoutWalletAllOf_1.PayoutWalletAllOf,
    "Product": Product_1.Product,
    "ProductAllOf": ProductAllOf_1.ProductAllOf,
    "Transaction": Transaction_1.Transaction,
    "TransactionAllOf": TransactionAllOf_1.TransactionAllOf,
    "Transfer": Transfer_1.Transfer,
    "TransferAllOf": TransferAllOf_1.TransferAllOf,
    "UpdateCustomerBody": UpdateCustomerBody_1.UpdateCustomerBody,
    "UpdateInvoiceBody": UpdateInvoiceBody_1.UpdateInvoiceBody,
    "UpdatePayoutWalletBody": UpdatePayoutWalletBody_1.UpdatePayoutWalletBody,
    "UpdateProductBody": UpdateProductBody_1.UpdateProductBody,
    "UpdateWalletBody": UpdateWalletBody_1.UpdateWalletBody,
    "UpdateWebhookBody": UpdateWebhookBody_1.UpdateWebhookBody,
    "Wallet": Wallet_1.Wallet,
    "WalletAllOf": WalletAllOf_1.WalletAllOf,
    "Webhook": Webhook_1.Webhook,
    "WebhookAllOf": WebhookAllOf_1.WebhookAllOf,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map