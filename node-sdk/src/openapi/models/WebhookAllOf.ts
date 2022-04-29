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
import { HttpFile } from '../http/http';

export class WebhookAllOf {
    'account': string | Account;
    'endpoint_url': string;
    'event_types': Array<string>;
    'secret': string;
    'created': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "endpoint_url",
            "baseName": "endpoint_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "event_types",
            "baseName": "event_types",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return WebhookAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

