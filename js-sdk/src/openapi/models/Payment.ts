/**
 * Crypto
 * The API for Hyper's Crypto payments processor
 *
 * OpenAPI spec version: 1.0
 * Contact: support@hyper.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Payment {
    'id': string;
    'account': string;
    'amount'?: number;
    'created': Date;
    'currency'?: string;
    'customer'?: string;
    'errorMessage'?: string;
    'exchangeRate'?: number;
    'invoice'?: string;
    'status'?: PaymentStatusEnum;
    'usdAmount'?: number;
    'wallet': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currency",
            "baseName": "currency",
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
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchangeRate",
            "baseName": "exchange_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentStatusEnum",
            "format": ""
        },
        {
            "name": "usdAmount",
            "baseName": "usd_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PaymentStatusEnum = "succeeded" | "failed" ;

