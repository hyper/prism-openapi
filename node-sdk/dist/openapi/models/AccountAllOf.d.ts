import { Account } from './Account';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { AccountAllOfSettings } from './AccountAllOfSettings';
import { AccountAllOfTeam } from './AccountAllOfTeam';
import { PayoutWallet } from './PayoutWallet';
export declare class AccountAllOf {
    'application_fee_percent': number;
    'branding'?: AccountAllOfBranding;
    'connected_accounts'?: Array<Account>;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string | Account;
    'payout_wallets'?: Array<PayoutWallet>;
    'platform_account': boolean;
    'settings'?: AccountAllOfSettings;
    'team'?: Array<AccountAllOfTeam>;
    'verified'?: boolean;
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
