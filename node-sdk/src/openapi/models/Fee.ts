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

import { HttpFile } from '../http/http';

export class Fee {
    'id': string;
    'account'?: string;
    'amount'?: number;
    'created': Date;
    'currency'?: string;
    'description'?: string;
    'internal'?: boolean;
    'invoice'?: string;
    'percent'?: number;
    'usdAmount'?: number;
    'wallet'?: string;

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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "internal",
            "baseName": "internal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string",
            "format": ""
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
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
        return Fee.attributeTypeMap;
    }

    public constructor() {
    }
}
