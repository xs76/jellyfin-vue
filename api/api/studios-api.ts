/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseItemDto } from '../models';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
/**
 * StudiosApi - axios parameter creator
 * @export
 */
export const StudiosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudio: async (name: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getStudio.');
            }
            const localVarPath = `/Studios/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {string} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {string} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudios: async (startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: string, includeItemTypes?: string, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Studios`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['searchTerm'] = searchTerm;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (excludeItemTypes !== undefined) {
                localVarQueryParameter['excludeItemTypes'] = excludeItemTypes;
            }

            if (includeItemTypes !== undefined) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (nameStartsWithOrGreater !== undefined) {
                localVarQueryParameter['nameStartsWithOrGreater'] = nameStartsWithOrGreater;
            }

            if (nameStartsWith !== undefined) {
                localVarQueryParameter['nameStartsWith'] = nameStartsWith;
            }

            if (nameLessThan !== undefined) {
                localVarQueryParameter['nameLessThan'] = nameLessThan;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableTotalRecordCount !== undefined) {
                localVarQueryParameter['enableTotalRecordCount'] = enableTotalRecordCount;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StudiosApi - functional programming interface
 * @export
 */
export const StudiosApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudio(name: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await StudiosApiAxiosParamCreator(configuration).getStudio(name, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {string} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {string} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: string, includeItemTypes?: string, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await StudiosApiAxiosParamCreator(configuration).getStudios(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StudiosApi - factory interface
 * @export
 */
export const StudiosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Gets a studio by name.
         * @param {string} name Studio name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudio(name: string, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return StudiosApiFp(configuration).getStudio(name, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all studios from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] Optional. Search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {string} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {string} [includeItemTypes] Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStudios(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: string, includeItemTypes?: string, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return StudiosApiFp(configuration).getStudios(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, enableUserData, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getStudio operation in StudiosApi.
 * @export
 * @interface StudiosApiGetStudioRequest
 */
export interface StudiosApiGetStudioRequest {
    /**
     * Studio name.
     * @type {string}
     * @memberof StudiosApiGetStudio
     */
    readonly name: string

    /**
     * Optional. Filter by user id, and attach user data.
     * @type {string}
     * @memberof StudiosApiGetStudio
     */
    readonly userId?: string
}

/**
 * Request parameters for getStudios operation in StudiosApi.
 * @export
 * @interface StudiosApiGetStudiosRequest
 */
export interface StudiosApiGetStudiosRequest {
    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof StudiosApiGetStudios
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof StudiosApiGetStudios
     */
    readonly limit?: number

    /**
     * Optional. Search term.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly searchTerm?: string

    /**
     * Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly parentId?: string

    /**
     * Optional. Specify additional fields of information to return in the output.
     * @type {Array<ItemFields>}
     * @memberof StudiosApiGetStudios
     */
    readonly fields?: Array<ItemFields>

    /**
     * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly excludeItemTypes?: string

    /**
     * Optional. If specified, results will be filtered based on item type. This allows multiple, comma delimited.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly includeItemTypes?: string

    /**
     * Optional filter by items that are marked as favorite, or not.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly isFavorite?: boolean

    /**
     * Optional, include user data.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly enableUserData?: boolean

    /**
     * Optional, the max number of images to return, per image type.
     * @type {number}
     * @memberof StudiosApiGetStudios
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof StudiosApiGetStudios
     */
    readonly enableImageTypes?: Array<ImageType>

    /**
     * User id.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly userId?: string

    /**
     * Optional filter by items whose name is sorted equally or greater than a given input string.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly nameStartsWithOrGreater?: string

    /**
     * Optional filter by items whose name is sorted equally than a given input string.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly nameStartsWith?: string

    /**
     * Optional filter by items whose name is equally or lesser than a given input string.
     * @type {string}
     * @memberof StudiosApiGetStudios
     */
    readonly nameLessThan?: string

    /**
     * Optional, include image information in output.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly enableImages?: boolean

    /**
     * Total record count.
     * @type {boolean}
     * @memberof StudiosApiGetStudios
     */
    readonly enableTotalRecordCount?: boolean
}

/**
 * StudiosApi - object-oriented interface
 * @export
 * @class StudiosApi
 * @extends {BaseAPI}
 */
export class StudiosApi extends BaseAPI {
    /**
     * 
     * @summary Gets a studio by name.
     * @param {StudiosApiGetStudioRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApi
     */
    public getStudio(requestParameters: StudiosApiGetStudioRequest, options?: any) {
        return StudiosApiFp(this.configuration).getStudio(requestParameters.name, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all studios from a given item, folder, or the entire library.
     * @param {StudiosApiGetStudiosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudiosApi
     */
    public getStudios(requestParameters: StudiosApiGetStudiosRequest = {}, options?: any) {
        return StudiosApiFp(this.configuration).getStudios(requestParameters.startIndex, requestParameters.limit, requestParameters.searchTerm, requestParameters.parentId, requestParameters.fields, requestParameters.excludeItemTypes, requestParameters.includeItemTypes, requestParameters.isFavorite, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, requestParameters.userId, requestParameters.nameStartsWithOrGreater, requestParameters.nameStartsWith, requestParameters.nameLessThan, requestParameters.enableImages, requestParameters.enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}
