import { Account } from './Account';
import { Invoice } from './Invoice';
import { PaymentIntent } from './PaymentIntent';
import { PayoutWallet } from './PayoutWallet';
export declare class Transfer {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'description'?: string;
    'invoice': string | Invoice;
    'percent': number;
    'payment_intent': string | PaymentIntent;
    'wallet': string | PayoutWallet;
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
