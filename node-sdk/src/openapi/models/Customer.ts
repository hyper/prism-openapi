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
import { CustomerAllOf } from './CustomerAllOf';
import { CustomerAllOfBillingDetails } from './CustomerAllOfBillingDetails';
import { Model } from './Model';
import { HttpFile } from '../http/http';

export class Customer {
    'created': Date;
    'id': string;
    'test': boolean;
    'account'?: string | Account;
    'billing_details'?: CustomerAllOfBillingDetails;
    'email'?: string;
    'name'?: string;
    'phone'?: string;

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
            "name": "billing_details",
            "baseName": "billing_details",
            "type": "CustomerAllOfBillingDetails",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }

    public constructor() {
    }
}

