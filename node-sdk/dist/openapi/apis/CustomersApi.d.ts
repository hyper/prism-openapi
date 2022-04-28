import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Customer } from '../models/Customer';
import { CustomerData } from '../models/CustomerData';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
export declare class CustomersApiRequestFactory extends BaseAPIRequestFactory {
    create(prism_account?: string, customer_data?: CustomerData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, customer?: Customer, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomersApiResponseProcessor {
    create(response: ResponseContext): Promise<Customer>;
    list(response: ResponseContext): Promise<ListCustomersResponse>;
    retrieve(response: ResponseContext): Promise<Customer>;
    update(response: ResponseContext): Promise<Customer>;
}
