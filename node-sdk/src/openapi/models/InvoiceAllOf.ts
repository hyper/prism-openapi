/**
 * Prism
 * The API for Prism
 *
 * OpenAPI spec version: 1.0
 * Contact: support@prism.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { Payment } from './Payment';
import { Product } from './Product';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class InvoiceAllOf {
    'account': string | Account;
    'amount': number;
    'chain': InvoiceAllOfChainEnum;
    'currency': InvoiceAllOfCurrencyEnum;
    'customer': string | Customer;
    'due'?: Date;
    'fees': Array<Fee>;
    'number': string;
    'payments'?: Array<Payment>;
    'product'?: string | Product;
    'status': InvoiceAllOfStatusEnum;
    'transaction'?: string;
    'transfers': Array<Transfer>;
    'wallet': string | Wallet;
    'application_fee_percent'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
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
            "name": "chain",
            "baseName": "chain",
            "type": "InvoiceAllOfChainEnum",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "InvoiceAllOfCurrencyEnum",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "Array<Fee>",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<Payment>",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string | Product",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string",
            "format": ""
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<Transfer>",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet",
            "format": ""
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InvoiceAllOfChainEnum = "eth" | "sol" ;
export type InvoiceAllOfCurrencyEnum = "eth" | "sol" ;
export type InvoiceAllOfStatusEnum = "open" | "paid" | "unpaid" | "void" ;

