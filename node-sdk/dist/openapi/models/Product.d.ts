import { Account } from './Account';
export declare class Product {
    'created': Date;
    'id': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'baseCurrency'?: string;
    'chain'?: string;
    'currency': ProductCurrencyEnum;
    'name': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare type ProductCurrencyEnum = "succeeded" | "failed";