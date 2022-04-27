import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Wallet } from './Wallet';
export declare class Payment {
    'created': Date;
    'id': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'currency': string;
    'customer': string | Customer;
    'errorMessage'?: string;
    'exchangeRate': number;
    'invoice': string | Invoice;
    'status': PaymentStatusEnum;
    'usdAmount': number;
    'wallet': string | Wallet;
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
export declare type PaymentStatusEnum = "succeeded" | "failed";
