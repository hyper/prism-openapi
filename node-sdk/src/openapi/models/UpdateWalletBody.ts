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

export class UpdateWalletBody {
    'chain'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateWalletBody.attributeTypeMap;
    }

    public constructor() {
    }
}

