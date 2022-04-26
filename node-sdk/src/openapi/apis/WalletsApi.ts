// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile } from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { canConsumeForm, isCodeInRange } from '../util';
import { SecurityAuthentication } from '../auth/auth';

import { InlineObject4 } from '../models/InlineObject4';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { Wallet } from '../models/Wallet';

/**
 * no description
 */
export class WalletsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Delete Wallet By Id
   * @param walletId
   * @param prismAccount
   */
  public async _delete(
    walletId: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'walletId' is not null or undefined
    if (walletId === null || walletId === undefined) {
      throw new RequiredError('WalletsApi', '_delete', 'walletId');
    }

    // Path Params
    const localVarPath = '/wallets/{walletId}'.replace(
      '{' + 'walletId' + '}',
      encodeURIComponent(String(walletId))
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Create Wallet
   * @param prismAccount
   * @param inlineObject4
   */
  public async create(
    prismAccount?: string,
    inlineObject4?: InlineObject4,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/wallets';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType(['application/json']);
    requestContext.setHeaderParam('Content-Type', contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(inlineObject4, 'InlineObject4', ''),
      contentType
    );
    requestContext.setBody(serializedBody);

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * List Wallets
   * @param limit A limit on the number of objects to be returned between 1 and 100.
   * @param page Index of the page to be returned in a paginated response.
   * @param sort Specifies whether documents are sorted in an ascending or descending order.
   * @param expand Specifies which fields to populate in the response.
   * @param prismAccount
   */
  public async list(
    limit?: number,
    page?: number,
    sort?: any,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/wallets';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam('limit', ObjectSerializer.serialize(limit, 'number', ''));
    }

    // Query Params
    if (page !== undefined) {
      requestContext.setQueryParam('page', ObjectSerializer.serialize(page, 'number', ''));
    }

    // Query Params
    if (sort !== undefined) {
      requestContext.setQueryParam('sort', ObjectSerializer.serialize(sort, 'any', ''));
    }

    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer.serialize(expand, 'string', ''));
    }

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Retrieve Wallet By Id
   * @param walletId
   * @param expand Specifies which fields to populate in the response.
   * @param prismAccount
   */
  public async retrieve(
    walletId: string,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'walletId' is not null or undefined
    if (walletId === null || walletId === undefined) {
      throw new RequiredError('WalletsApi', 'retrieve', 'walletId');
    }

    // Path Params
    const localVarPath = '/wallets/{walletId}'.replace(
      '{' + 'walletId' + '}',
      encodeURIComponent(String(walletId))
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Query Params
    if (expand !== undefined) {
      requestContext.setQueryParam('expand', ObjectSerializer.serialize(expand, 'string', ''));
    }

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update Wallet By Id
   * @param walletId
   * @param prismAccount
   */
  public async update(
    walletId: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'walletId' is not null or undefined
    if (walletId === null || walletId === undefined) {
      throw new RequiredError('WalletsApi', 'update', 'walletId');
    }

    // Path Params
    const localVarPath = '/wallets/{walletId}'.replace(
      '{' + 'walletId' + '}',
      encodeURIComponent(String(walletId))
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    // Header Params
    requestContext.setHeaderParam(
      'Prism-Account',
      ObjectSerializer.serialize(prismAccount, 'string', '')
    );

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default || this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class WalletsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to _delete
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async _delete(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Not Found',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'void',
        ''
      ) as void;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to create
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async create(response: ResponseContext): Promise<Wallet> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Wallet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Wallet',
        ''
      ) as Wallet;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Bad Request',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Wallet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Wallet',
        ''
      ) as Wallet;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to list
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async list(response: ResponseContext): Promise<InlineResponse2006> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: InlineResponse2006 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2006',
        ''
      ) as InlineResponse2006;
      return body;
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Not Found',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: InlineResponse2006 = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'InlineResponse2006',
        ''
      ) as InlineResponse2006;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to retrieve
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async retrieve(response: ResponseContext): Promise<Wallet> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Wallet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Wallet',
        ''
      ) as Wallet;
      return body;
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Not Found',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Wallet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Wallet',
        ''
      ) as Wallet;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to update
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async update(response: ResponseContext): Promise<Wallet> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers['content-type']);
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: Wallet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Wallet',
        ''
      ) as Wallet;
      return body;
    }
    if (isCodeInRange('400', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Bad Request',
        undefined,
        response.headers
      );
    }
    if (isCodeInRange('404', response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        'Not Found',
        undefined,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Wallet = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'Wallet',
        ''
      ) as Wallet;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }
}
