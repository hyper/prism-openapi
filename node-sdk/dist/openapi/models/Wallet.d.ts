import { Account } from './Account';
import { Customer } from './Customer';
export declare class Wallet {
    'created': Date;
    'id': string;
    'test': boolean;
    'account': string | Account;
    'address': string;
    'admin': boolean;
    'chain': WalletChainEnum;
    'customer': string | Customer;
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
export declare type WalletChainEnum = "eth" | "sol";
