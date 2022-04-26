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

import { Log } from './Log';
import { Set } from './Set';
import { HttpFile } from '../http/http';

export class InlineResponse2003 {
    'data': Set<Log>;
    'hasMore': string;
    'page': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Set<Log>",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "string",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2003.attributeTypeMap;
    }

    public constructor() {
    }
}

