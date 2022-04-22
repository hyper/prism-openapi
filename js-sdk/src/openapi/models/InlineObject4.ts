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

export class InlineObject4 {
    'account': string;
    'address': string;
    'chain': string;
    'customer': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
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
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject4.attributeTypeMap;
    }

    public constructor() {
    }
}

