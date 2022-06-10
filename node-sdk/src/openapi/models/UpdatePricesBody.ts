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

import { HttpFile } from '../http/http';

export class UpdatePricesBody {
    'billing_period_duration'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "billing_period_duration",
            "baseName": "billing_period_duration",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdatePricesBody.attributeTypeMap;
    }

    public constructor() {
    }
}

