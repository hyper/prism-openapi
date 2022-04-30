import { Configuration, Customer, CustomersApiRetrieveRequest, CustomersApiCreateRequest, Fee, FeesApiCreateRequest, FeesApiRetrieveRequest, InvoicesApiCreateRequest, Invoice, InvoicesApiRetrieveRequest, InvoicesApiListRequest, LogsApiRetrieveRequest, ListProductsResponse, LogsApiListRequest, FeesApiListRequest, CustomersApiListRequest, Log, PaymentsApiRetrieveRequest, Payment, PaymentsApiListRequest, ProductsApiCreateRequest, ProductsApiRetrieveRequest, Product, ProductsApiListRequest, WalletsApiCreateRequest, WalletsApiRetrieveRequest, WalletsApiListRequest, WebhooksApiCreateRequest, WebhooksApiRetrieveRequest, WebhooksApiListRequest, Wallet, ListCustomersResponse, ListInvoicesResponse, ListLogsResponse, ListWebhooksResponse, ListWalletsResponse, ListFeesResponse, ListPaymentsResponse, WalletsApiUpdateRequest, WebhooksApiUpdateRequest, CustomersApiUpdateRequest, InvoicesApiUpdateRequest, ProductsApiUpdateRequest, TransfersApiCreateRequest, Transfer, TransfersApiRetrieveRequest, TransfersApiListRequest, ListTransfersResponse, PayoutWalletsApiCreateRequest, PayoutWallet, PayoutWalletsApiRetrieveRequest, PayoutWalletsApiUpdateRequest, PayoutWalletsApiListRequest, InvoicesApiPollRequest, AccountsApiRetrieveRequest, AccountsApiCreateRequest, Account, ListAccountsResponse, AccountsApiListRequest, AccountsApiUpdateRequest } from './openapi/index';
import { ListPayoutWalletsResponse } from './openapi/models/ListPayoutWalletsResponse';
export * from './openapi/models/all';
export * from './openapi/apis/exception';
export interface PrismOptions {
    env?: string;
}
export declare class Prism {
    readonly accounts: AccountsApiLayer;
    readonly customers: CustomersApiLayer;
    readonly fees: FeesApiLayer;
    readonly invoices: InvoicesApiLayer;
    readonly logs: LogsApiLayer;
    readonly payments: PaymentsApiLayer;
    readonly payoutWallets: PayoutWalletsApiLayer;
    readonly products: ProductsApiLayer;
    readonly transfers: TransfersApiLayer;
    readonly wallets: WalletsApiLayer;
    readonly webhooks: WebhooksApiLayer;
    constructor(token: string, options?: PrismOptions);
}
declare class AccountsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: AccountsApiCreateRequest['create_account_body'], options?: {
        prismAccount: string;
    }): Promise<Account>;
    retrieve(id: string, params?: Omit<AccountsApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Account>;
    update(id: string, data: AccountsApiUpdateRequest['update_account_body'], options?: {
        prismAccount: string;
    }): Promise<Account>;
    list(params?: Omit<AccountsApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListAccountsResponse>;
}
declare class CustomersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: CustomersApiCreateRequest['create_customer_body'], options?: {
        prismAccount: string;
    }): Promise<Customer>;
    retrieve(id: string, params?: Omit<CustomersApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Customer>;
    update(id: string, data: CustomersApiUpdateRequest['update_customer_body'], options?: {
        prismAccount: string;
    }): Promise<Customer>;
    list(params?: Omit<CustomersApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListCustomersResponse>;
}
declare class FeesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: FeesApiCreateRequest['create_fee_body'], options?: {
        prismAccount: string;
    }): Promise<Fee>;
    retrieve(id: string, params?: Omit<FeesApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Fee>;
    list(params?: Omit<FeesApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListFeesResponse>;
}
declare class InvoicesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: InvoicesApiCreateRequest['create_invoice_body'], options?: {
        prismAccount: string;
    }): Promise<Invoice>;
    retrieve(id: string, params?: Omit<InvoicesApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Invoice>;
    update(id: string, data: InvoicesApiUpdateRequest['update_invoice_body'], options?: {
        prismAccount: string;
    }): Promise<Invoice>;
    list(params?: Omit<InvoicesApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListInvoicesResponse>;
    poll(id: string, params?: Omit<InvoicesApiPollRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<void>;
}
declare class LogsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<LogsApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Log>;
    list(params?: Omit<LogsApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListLogsResponse>;
}
declare class PaymentsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<PaymentsApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Payment>;
    list(params?: Omit<PaymentsApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListPaymentsResponse>;
}
declare class ProductsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: ProductsApiCreateRequest['create_product_body'], options?: {
        prismAccount: string;
    }): Promise<Product>;
    retrieve(id: string, params?: Omit<ProductsApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Product>;
    update(id: string, data: ProductsApiUpdateRequest['update_product_body'], options?: {
        prismAccount: string;
    }): Promise<Product>;
    list(params?: Omit<ProductsApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListProductsResponse>;
}
declare class PayoutWalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PayoutWalletsApiCreateRequest['create_payout_wallet_body'], options?: {
        prismAccount: string;
    }): Promise<PayoutWallet>;
    retrieve(id: string, params?: Omit<PayoutWalletsApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<PayoutWallet>;
    update(id: string, data: PayoutWalletsApiUpdateRequest['update_payout_wallet_body'], options?: {
        prismAccount: string;
    }): Promise<PayoutWallet>;
    list(params?: Omit<PayoutWalletsApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListPayoutWalletsResponse>;
}
declare class TransfersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: TransfersApiCreateRequest['create_transfer_body'], options?: {
        prismAccount: string;
    }): Promise<Transfer>;
    retrieve(id: string, params?: Omit<TransfersApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Transfer>;
    list(params?: Omit<TransfersApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListTransfersResponse>;
}
declare class WalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WalletsApiCreateRequest['create_wallet_body'], options?: {
        prismAccount: string;
    }): Promise<Wallet>;
    retrieve(id: string, params?: Omit<WalletsApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Wallet>;
    update(id: string, data: WalletsApiUpdateRequest['update_wallet_body'], options?: {
        prismAccount: string;
    }): Promise<Wallet>;
    list(params?: Omit<WalletsApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListWalletsResponse>;
}
declare class WebhooksApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WebhooksApiCreateRequest['create_webhook_body'], options?: {
        prismAccount: string;
    }): Promise<Customer>;
    retrieve(id: string, params?: Omit<WebhooksApiRetrieveRequest, 'prism_account' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Customer>;
    update(id: string, data: WebhooksApiUpdateRequest['update_webhook_body'], options?: {
        prismAccount: string;
    }): Promise<Customer>;
    list(params?: Omit<WebhooksApiListRequest, 'prism_account'>, options?: {
        prismAccount: string;
    }): Promise<ListWebhooksResponse>;
}
