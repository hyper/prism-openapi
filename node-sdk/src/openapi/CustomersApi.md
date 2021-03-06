# .CustomersApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](CustomersApi.md#create) | **POST** /customers | Create Customer
[**list**](CustomersApi.md#list) | **GET** /customers | List Customers
[**retrieve**](CustomersApi.md#retrieve) | **GET** /customers/{id} | Retrieve Customer By Id
[**update**](CustomersApi.md#update) | **PATCH** /customers/{id} | Update Customer By Id


# **create**
> Customer create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiCreateRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // CreateCustomerBody (optional)
  create_customer_body: {
    account: "account_example",
    billing_details: {
      address: {
        city: "city_example",
        country: "country_example",
        line1: "line1_example",
        line2: "line2_example",
        postal_code: "postal_code_example",
        state: "state_example",
      },
    },
    email: "email_example",
    name: "name_example",
    phone: "phone_example",
  },
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_customer_body** | **CreateCustomerBody**|  |
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Customer**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **list**
> ListCustomersResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiListRequest = {
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // string | Email of the customer. (optional)
  email: "email_example",
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | A limit on the number of objects to be returned between 1 and 100. | (optional) defaults to undefined
 **page** | [**number**] | Index of the page to be returned in a paginated response. | (optional) defaults to undefined
 **sort** | **any** | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined
 **email** | [**string**] | Email of the customer. | (optional) defaults to undefined


### Return type

**ListCustomersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieve**
> Customer retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiRetrieveRequest = {
  // string
  id: "id_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance.retrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Customer**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> Customer update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomersApi(configuration);

let body:.CustomersApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // UpdateCustomerBody (optional)
  update_customer_body: {
    billing_details: {
      address: {
        city: "city_example",
        country: "country_example",
        line1: "line1_example",
        line2: "line2_example",
        postal_code: "postal_code_example",
        state: "state_example",
      },
    },
    email: "email_example",
    name: "name_example",
    phone: "phone_example",
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_customer_body** | **UpdateCustomerBody**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Customer**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


