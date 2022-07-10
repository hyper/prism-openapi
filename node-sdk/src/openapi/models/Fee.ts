/**
 * Pluto
 * The API for Pluto
 *
 * OpenAPI spec version: 1.0
 * Contact: support@pluto.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './Account';
import { FeeAllOf } from './FeeAllOf';
import { Model } from './Model';
import { PaymentIntent } from './PaymentIntent';
import { PayoutWallet } from './PayoutWallet';
import { HttpFile } from '../http/http';

export class Fee {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'description'?: string;
    'internal': boolean;
    'payment_intent': string | PaymentIntent;
    'percent': number;
    'platform_account'?: string | Account;
    'wallet': string | PayoutWallet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
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
            "name": "payment_intent",
            "baseName": "payment_intent",
            "type": "string | PaymentIntent",
            "format": ""
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | PayoutWallet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Fee.attributeTypeMap;
    }

    public constructor() {
    }
}

