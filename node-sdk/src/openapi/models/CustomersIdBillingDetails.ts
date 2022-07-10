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

import { CustomersIdBillingDetailsAddress } from './CustomersIdBillingDetailsAddress';
import { HttpFile } from '../http/http';

export class CustomersIdBillingDetails {
    'address'?: CustomersIdBillingDetailsAddress;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CustomersIdBillingDetailsAddress",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomersIdBillingDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

