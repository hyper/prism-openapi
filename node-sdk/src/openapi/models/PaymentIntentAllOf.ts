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
import { Fee } from './Fee';
import { Invoice } from './Invoice';
import { Transfer } from './Transfer';
import { HttpFile } from '../http/http';

export class PaymentIntentAllOf {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'hash'?: string;
    'invoice': string | Invoice;
    'status': PaymentIntentAllOfStatusEnum;
    'chain': PaymentIntentAllOfChainEnum;
    'currency': PaymentIntentAllOfCurrencyEnum;
    'amount': number;
    'subscription'?: string;
    'price'?: string;
    'line_items'?: string;
    'customer': string;
    'wallet'?: string;
    'usd_amount'?: string;
    'exchange_rate'?: string;
    'application_fee_percent'?: number;
    'last_payment_error'?: string;
    'fees'?: Array<Fee>;
    'transfers'?: Array<Transfer>;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string | Invoice",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentIntentAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "PaymentIntentAllOfChainEnum",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PaymentIntentAllOfCurrencyEnum",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
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
            "name": "line_items",
            "baseName": "line_items",
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
            "name": "wallet",
            "baseName": "wallet",
            "type": "string",
            "format": ""
        },
        {
            "name": "usd_amount",
            "baseName": "usd_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchange_rate",
            "baseName": "exchange_rate",
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
            "name": "last_payment_error",
            "baseName": "last_payment_error",
            "type": "string",
            "format": ""
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "Array<Fee>",
            "format": ""
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<Transfer>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PaymentIntentAllOfStatusEnum = "pending" | "failed" | "succeeded" | "canceled" ;
export type PaymentIntentAllOfChainEnum = "eth" | "sol" ;
export type PaymentIntentAllOfCurrencyEnum = "eth" | "sol" ;
