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
import { Subscription } from './Subscription';
import { HttpFile } from '../http/http';

export class SubscriptionPeriodAllOf {
    'account': string | Account;
    'platform_account'?: string | Account;
    'start': number;
    'end': number;
    'subscription': string | Subscription;
    'trial': boolean;

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
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": ""
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string | Subscription",
            "format": ""
        },
        {
            "name": "trial",
            "baseName": "trial",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPeriodAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

