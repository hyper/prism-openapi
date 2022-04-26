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

import { CustomersBillingDetailsAddress } from './CustomersBillingDetailsAddress';
import { HttpFile } from '../http/http';

export class CustomersBillingDetails {
  'address': CustomersBillingDetailsAddress;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'address',
      baseName: 'address',
      type: 'CustomersBillingDetailsAddress',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return CustomersBillingDetails.attributeTypeMap;
  }

  public constructor() {}
}
