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
import { HttpFile } from '../http/http';

export class WalletAllOf {
    'account': string | Account;
    'address': string;
    'admin': boolean;
    'chain': WalletAllOfChainEnum;
    'customer': string | Customer;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "WalletAllOfChainEnum",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type WalletAllOfChainEnum = "eth" | "sol" ;

