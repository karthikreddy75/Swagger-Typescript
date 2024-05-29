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

import {
  GetUserDto,
  GetUsersByQueryDto,
  GetUsersDto,
  PatchUserDto,
  PostUserDto,
  SearchUser,
  UserFeedbackDto,
  UserInviteDto,
  UserLoginDto,
  UserQueryResult,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerSearchUser
   * @summary Search users based on email or organisation ID
   * @request GET:/users/search
   * @secure
   */
  userControllerSearchUser = (
    query?: {
      /** @example "beestork@beesmail.com" */
      email?: string;
      /** @example "12345678-1234-1234-1234-1234567890ab" */
      organisationId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchUser[], void>({
      path: `/users/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerGetUsers
   * @summary Get a paginated list of users
   * @request GET:/users
   * @secure
   */
  userControllerGetUsers = (
    query: {
      /** @example 10 */
      size: number;
      /** @example 1 */
      page: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUsersDto, void>({
      path: `/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerPostUser
   * @summary Create a new user with optional profile image upload
   * @request POST:/users
   * @secure
   */
  userControllerPostUser = (data: PostUserDto, params: RequestParams = {}) =>
    this.request<GetUserDto, void>({
      path: `/users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerGetUser
   * @summary Get user details by ID
   * @request GET:/users/{id}
   * @secure
   */
  userControllerGetUser = (id: string, params: RequestParams = {}) =>
    this.request<GetUserDto, void>({
      path: `/users/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerPatchUser
   * @summary Update user details by ID with optional profile image upload
   * @request PATCH:/users/{id}
   * @secure
   */
  userControllerPatchUser = (id: string, data: PatchUserDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/users/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerDeleteUser
   * @summary Delete a user by ID
   * @request DELETE:/users/{id}
   * @secure
   */
  userControllerDeleteUser = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/users/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerInviteUser
   * @summary Invite a user
   * @request POST:/users/invite
   * @secure
   */
  userControllerInviteUser = (data: UserInviteDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/invite`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerGetUsersByQuery
   * @summary Get users based on query criteria
   * @request POST:/users/query
   * @secure
   */
  userControllerGetUsersByQuery = (data: GetUsersByQueryDto, params: RequestParams = {}) =>
    this.request<UserQueryResult[], any>({
      path: `/users/query`,
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
   * @tags Users
   * @name UserControllerUserFeedback
   * @summary Submit feedback for a user by ID
   * @request POST:/users/{id}/feedback
   * @secure
   */
  userControllerUserFeedback = (id: string, data: UserFeedbackDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/${id}/feedback`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerDeleteUserProject
   * @summary Remove user from a project
   * @request DELETE:/users/{userId}/projects/{projectId}
   * @secure
   */
  userControllerDeleteUserProject = (userId: string, projectId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/users/${userId}/projects/${projectId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UserControllerLoginUser
   * @summary Get user authentication token
   * @request POST:/users/login
   * @secure
   */
  userControllerLoginUser = (data: UserLoginDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
}
