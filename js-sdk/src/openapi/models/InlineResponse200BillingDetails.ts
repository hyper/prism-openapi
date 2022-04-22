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

import { InlineResponse200BillingDetailsAddress } from './InlineResponse200BillingDetailsAddress';
import { HttpFile } from '../http/http';

export class InlineResponse200BillingDetails {
    'address': InlineResponse200BillingDetailsAddress;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "InlineResponse200BillingDetailsAddress",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200BillingDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

