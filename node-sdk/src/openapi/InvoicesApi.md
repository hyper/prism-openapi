# .InvoicesApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](InvoicesApi.md#create) | **POST** /invoices | Create Invoice
[**list**](InvoicesApi.md#list) | **GET** /invoices | List Invoices
[**pay**](InvoicesApi.md#pay) | **POST** /invoices/{id}/pay | Pay Invoice
[**retrieve**](InvoicesApi.md#retrieve) | **GET** /invoices/{id} | Retrieve Invoice By Id
[**update**](InvoicesApi.md#update) | **PATCH** /invoices/{id} | Update Invoice By Id


# **create**
> Invoice create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiCreateRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // Invoice (optional)
  invoice: null,
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | **Invoice**|  |
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Invoice**

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
> ListInvoicesResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiListRequest = {
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


### Return type

**ListInvoicesResponse**

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

# **pay**
> PaymentIntent pay()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiPayRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance.pay(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**PaymentIntent**

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
> Invoice retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiRetrieveRequest = {
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

**Invoice**

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
> Invoice update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoicesApi(configuration);

let body:.InvoicesApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // Invoice (optional)
  invoice: null,
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | **Invoice**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Invoice**

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


