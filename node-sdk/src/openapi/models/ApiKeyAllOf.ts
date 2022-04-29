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
import { HttpFile } from '../http/http';

export class ApiKeyAllOf {
    'account': string | Account;
    'admin': boolean;
    'key': string;
    'type': ApiKeyAllOfTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApiKeyAllOfTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiKeyAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiKeyAllOfTypeEnum = "publishable" | "secret" | "restricted" ;

