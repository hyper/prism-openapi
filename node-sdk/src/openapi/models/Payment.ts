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
import { Invoice } from './Invoice';
import { Model } from './Model';
import { PaymentAllOf } from './PaymentAllOf';
import { Subscription } from './Subscription';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class Payment {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'currency': string;
    'customer': string | Customer;
    'error_message'?: string;
    'exchange_rate': number;
    'invoice': string | Invoice;
    'status': PaymentStatusEnum;
    'usd_amount': number;
    'wallet': string | Wallet | any;
    'subscription'?: string | Subscription;

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
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
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
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "error_message",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchange_rate",
            "baseName": "exchange_rate",
            "type": "number",
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
            "type": "PaymentStatusEnum",
            "format": ""
        },
        {
            "name": "usd_amount",
            "baseName": "usd_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet | any",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string | Subscription",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PaymentStatusEnum = "succeeded" | "failed" ;

