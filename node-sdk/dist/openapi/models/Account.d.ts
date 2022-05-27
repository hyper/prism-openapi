import { AccountAllOfBranding } from './AccountAllOfBranding';
import { AccountsSettings } from './AccountsSettings';
import { PayoutWallet } from './PayoutWallet';
export declare class Account {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'branding'?: AccountAllOfBranding;
    'connected_accounts'?: Account;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string | Account;
    'payout_wallets'?: Array<PayoutWallet>;
    'platform_account': string;
    'settings'?: AccountsSettings;
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
