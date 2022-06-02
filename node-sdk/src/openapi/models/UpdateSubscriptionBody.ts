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

export class UpdateSubscriptionBody {
    'pause_collection'?: boolean;
    'cancel_at'?: number;
    'canceled_at'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pause_collection",
            "baseName": "pause_collection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cancel_at",
            "baseName": "cancel_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "canceled_at",
            "baseName": "canceled_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateSubscriptionBody.attributeTypeMap;
    }

    public constructor() {
    }
}

