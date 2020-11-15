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


import { ExternalIdMediaType } from './external-id-media-type';

/**
 * Represents the external id information for serialization to the client.
 * @export
 * @interface ExternalIdInfo
 */
export interface ExternalIdInfo {
    /**
     * Gets or sets the display name of the external id provider (IE: IMDB, MusicBrainz, etc).
     * @type {string}
     * @memberof ExternalIdInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the unique key for this id. This key should be unique across all providers.
     * @type {string}
     * @memberof ExternalIdInfo
     */
    Key?: string | null;
    /**
     * 
     * @type {ExternalIdMediaType}
     * @memberof ExternalIdInfo
     */
    Type?: ExternalIdMediaType;
    /**
     * Gets or sets the URL format string.
     * @type {string}
     * @memberof ExternalIdInfo
     */
    UrlFormatString?: string | null;
}


