/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CreateResourceAuditDto, ResourceAudit, UpdateResourceAuditDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ResourceAudits<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Resource Audits
   * @name ResourceAuditControllerFindAll
   * @request GET:/resource-audits
   * @secure
   */
  resourceAuditControllerFindAll = (params: RequestParams = {}) =>
    this.request<ResourceAudit[], any>({
      path: `/resource-audits`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Resource Audits
   * @name ResourceAuditControllerCreate
   * @request POST:/resource-audits
   * @secure
   */
  resourceAuditControllerCreate = (data: CreateResourceAuditDto, params: RequestParams = {}) =>
    this.request<ResourceAudit, any>({
      path: `/resource-audits`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Resource Audits
   * @name ResourceAuditControllerFindById
   * @request GET:/resource-audits/{id}
   * @secure
   */
  resourceAuditControllerFindById = (id: string, params: RequestParams = {}) =>
    this.request<ResourceAudit, any>({
      path: `/resource-audits/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Resource Audits
   * @name ResourceAuditControllerUpdate
   * @request PUT:/resource-audits/{id}
   * @secure
   */
  resourceAuditControllerUpdate = (id: string, data: UpdateResourceAuditDto, params: RequestParams = {}) =>
    this.request<ResourceAudit, any>({
      path: `/resource-audits/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Resource Audits
   * @name ResourceAuditControllerDelete
   * @request DELETE:/resource-audits/{id}
   * @secure
   */
  resourceAuditControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/resource-audits/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
