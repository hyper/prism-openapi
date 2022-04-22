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

import { InlineResponse20010RequestBody } from './InlineResponse20010RequestBody';
import { InlineResponse20010RequestHeaders } from './InlineResponse20010RequestHeaders';
import { HttpFile } from '../http/http';

export class InlineResponse20010Request {
    'apiKey': string;
    'body': InlineResponse20010RequestBody;
    'headers': InlineResponse20010RequestHeaders;
    'ip': string;
    'method': string;
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKey",
            "baseName": "api_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "InlineResponse20010RequestBody",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "InlineResponse20010RequestHeaders",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20010Request.attributeTypeMap;
    }

    public constructor() {
    }
}

