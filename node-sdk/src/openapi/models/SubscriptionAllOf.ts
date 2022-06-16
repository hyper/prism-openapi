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
import { Payment } from './Payment';
import { Price } from './Price';
import { SubscriptionAllOfLineItems } from './SubscriptionAllOfLineItems';
import { HttpFile } from '../http/http';

export class SubscriptionAllOf {
    'account': string | Account;
    'platform_account'?: string | Account;
    'price': string | Price;
    'customer': string | Customer;
    'latest_invoice'?: Invoice;
    'status': SubscriptionAllOfStatusEnum;
    'pause_collection': boolean;
    'canceled_at'?: number;
    'invoices'?: Array<Invoice>;
    'payments'?: Array<Payment>;
    'trial_period_duration'?: number;
    'line_items'?: SubscriptionAllOfLineItems;
    'current_period_start': number;
    'current_period_end': number;
    'cancel_at_period_end': boolean;

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
            "name": "price",
            "baseName": "price",
            "type": "string | Price",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "latest_invoice",
            "baseName": "latest_invoice",
            "type": "Invoice",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SubscriptionAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "pause_collection",
            "baseName": "pause_collection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canceled_at",
            "baseName": "canceled_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "invoices",
            "baseName": "invoices",
            "type": "Array<Invoice>",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<Payment>",
            "format": ""
        },
        {
            "name": "trial_period_duration",
            "baseName": "trial_period_duration",
            "type": "number",
            "format": ""
        },
        {
            "name": "line_items",
            "baseName": "line_items",
            "type": "SubscriptionAllOfLineItems",
            "format": ""
        },
        {
            "name": "current_period_start",
            "baseName": "current_period_start",
            "type": "number",
            "format": ""
        },
        {
            "name": "current_period_end",
            "baseName": "current_period_end",
            "type": "number",
            "format": ""
        },
        {
            "name": "cancel_at_period_end",
            "baseName": "cancel_at_period_end",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SubscriptionAllOfStatusEnum = "active" | "canceled" | "trialing" | "past_due" ;

