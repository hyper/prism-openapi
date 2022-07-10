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

import { CustomersBillingDetails } from './CustomersBillingDetails';
import { HttpFile } from '../http/http';

export class CreateCustomerBody {
    'account': string;
    'billing_details'?: CustomersBillingDetails;
    'email'?: string;
    'name'?: string;
    'phone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "billing_details",
            "baseName": "billing_details",
            "type": "CustomersBillingDetails",
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
        return CreateCustomerBody.attributeTypeMap;
    }

    public constructor() {
    }
}

