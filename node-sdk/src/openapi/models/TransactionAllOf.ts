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
import { Invoice } from './Invoice';
import { HttpFile } from '../http/http';

export class TransactionAllOf {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'hash'?: string;
    'invoice': string | Invoice;
    'status': TransactionAllOfStatusEnum;
    'chain': TransactionAllOfChainEnum;
    'amount': number;
    'currency': TransactionAllOfCurrencyEnum;
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
            "type": "TransactionAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "TransactionAllOfChainEnum",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "TransactionAllOfCurrencyEnum",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TransactionAllOfStatusEnum = "pending" | "failed" | "succeeded" | "canceled" ;
export type TransactionAllOfChainEnum = "eth" | "sol" ;
export type TransactionAllOfCurrencyEnum = "eth" | "sol" ;

