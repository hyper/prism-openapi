# .PricesApi

All URIs are relative to *http://localhost:7070/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**_delete**](PricesApi.md#_delete) | **DELETE** /prices/{id} | Delete Price
[**create**](PricesApi.md#create) | **POST** /prices | Create Price
[**list**](PricesApi.md#list) | **GET** /prices | List Prices
[**retrieve**](PricesApi.md#retrieve) | **GET** /prices/{id} | Retrieve Price
[**update**](PricesApi.md#update) | **PATCH** /prices/{id} | Update Price


# **_delete**
> void _delete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiDeleteRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
};

apiInstance._delete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **create**
> Price create()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiCreateRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // Price (optional)
  price: null,
};

apiInstance.create(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price** | **Price**|  |
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Price**

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
> ListPricesResponse list()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiListRequest = {
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
  // number | A limit on the number of objects to be returned between 1 and 100. (optional)
  limit: 3.14,
  // number | Index of the page to be returned in a paginated response. (optional)
  page: 3.14,
  // any | Specifies whether documents are sorted in an ascending or descending order. (optional)
  sort: null,
};

apiInstance.list(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined
 **limit** | [**number**] | A limit on the number of objects to be returned between 1 and 100. | (optional) defaults to undefined
 **page** | [**number**] | Index of the page to be returned in a paginated response. | (optional) defaults to undefined
 **sort** | **any** | Specifies whether documents are sorted in an ascending or descending order. | (optional) defaults to undefined


### Return type

**ListPricesResponse**

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
> Price retrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiRetrieveRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // string | Specifies which fields to populate in the response. (optional)
  expand: "expand_example",
};

apiInstance.retrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined
 **expand** | [**string**] | Specifies which fields to populate in the response. | (optional) defaults to undefined


### Return type

**Price**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **update**
> Price update()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PricesApi(configuration);

let body:.PricesApiUpdateRequest = {
  // string
  id: "id_example",
  // string | The ID of the connected Pluto account you are making a request on behalf on. (optional)
  pluto_account: "Pluto-Account_example",
  // UpdatePriceBody (optional)
  update_price_body: {
    application_fee_percent: 3.14,
  },
};

apiInstance.update(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_price_body** | **UpdatePriceBody**|  |
 **id** | [**string**] |  | defaults to undefined
 **pluto_account** | [**string**] | The ID of the connected Pluto account you are making a request on behalf on. | (optional) defaults to undefined


### Return type

**Price**

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


