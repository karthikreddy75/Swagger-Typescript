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
  ClientContactCreateDto,
  ClientContactResponseDto,
  ClientCreateDto,
  ClientResponseDto,
  ContactCreateBody,
  ContactResponseBody,
  ContactUpdateBody,
  CreatePreferenceDto,
  GetCodeValueReseponseDto,
  GetTemplatesDto,
  OrganisationCreateBody,
  OrganisationResponseBody,
  OrganisationTemplateResponseBody,
  OrganisationUpdateBody,
  PermissionDto,
  PostCodeValueDto,
  PostProjectBody,
  PostProjectStageBody,
  PostResourceDto,
  PostStageBody,
  PostTemplateBody,
  PreferenceDto,
  ProjectDto,
  PutCodeValueDto,
  PutProjectBody,
  PutResourceDto,
  PutStageBody,
  PutStageDto,
  PutTemplateDto,
  ResourceDto,
  StageDto,
  StageResponseBody,
  TemplateResponseBody,
  UpdateClientContactDto,
  UpdateClientDto,
  UpdatePreferenceDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Pms<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new preference for a user.
   *
   * @tags Preferences
   * @name NotificationPreferenceControllerCreatePreference
   * @summary Create a preference
   * @request POST:/pms/user/{userId}/preferences
   * @secure
   */
  notificationPreferenceControllerCreatePreference = (
    userId: string,
    data: CreatePreferenceDto,
    params: RequestParams = {},
  ) =>
    this.request<PreferenceDto, any>({
      path: `/pms/user/${userId}/preferences`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves All preference a user by userId.
   *
   * @tags Preferences
   * @name NotificationPreferenceControllerGetAllPreferenceOfUser
   * @summary Get a All preferences by userId
   * @request GET:/pms/user/{userId}/preferences
   * @secure
   */
  notificationPreferenceControllerGetAllPreferenceOfUser = (userId: string, params: RequestParams = {}) =>
    this.request<PreferenceDto[], any>({
      path: `/pms/user/${userId}/preferences`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a preference by its ID for a user.
   *
   * @tags Preferences
   * @name NotificationPreferenceControllerGetPreferenceById
   * @summary Get a preference by ID
   * @request GET:/pms/user/{userId}/preferences/{preferenceId}
   * @secure
   */
  notificationPreferenceControllerGetPreferenceById = (
    preferenceId: string,
    userId: string,
    params: RequestParams = {},
  ) =>
    this.request<PreferenceDto, any>({
      path: `/pms/user/${userId}/preferences/${preferenceId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing preference for a user.
   *
   * @tags Preferences
   * @name NotificationPreferenceControllerUpdatePreference
   * @summary Update a preference
   * @request PUT:/pms/user/{userId}/preferences/{preferenceId}
   * @secure
   */
  notificationPreferenceControllerUpdatePreference = (
    preferenceId: string,
    userId: string,
    data: UpdatePreferenceDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/pms/user/${userId}/preferences/${preferenceId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a preference by its ID for a user.
   *
   * @tags Preferences
   * @name NotificationPreferenceControllerDeletePreference
   * @summary Delete a preference
   * @request DELETE:/pms/user/{userId}/preferences/{preferenceId}
   * @secure
   */
  notificationPreferenceControllerDeletePreference = (
    preferenceId: string,
    userId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/pms/user/${userId}/preferences/${preferenceId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags CodeValues
   * @name CodeValueControllerPostUser
   * @request POST:/pms/codevalues
   * @secure
   */
  codeValueControllerPostUser = (data: PostCodeValueDto, params: RequestParams = {}) =>
    this.request<GetCodeValueReseponseDto, void>({
      path: `/pms/codevalues`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all codeValue.
   *
   * @tags CodeValues
   * @name CodeValueControllerGetOrganisations
   * @summary Gets all codeValue
   * @request GET:/pms/codevalues
   * @secure
   */
  codeValueControllerGetOrganisations = (params: RequestParams = {}) =>
    this.request<GetCodeValueReseponseDto[], void>({
      path: `/pms/codevalues`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing CodeValue.
   *
   * @tags CodeValues
   * @name CodeValueControllerPutOrganisation
   * @summary Update CodeValue
   * @request PUT:/pms/codevalues/{code}
   * @secure
   */
  codeValueControllerPutOrganisation = (code: string, data: PutCodeValueDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/codevalues/${code}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets a CodeValue.
   *
   * @tags CodeValues
   * @name CodeValueControllerGetOrganisationyId
   * @summary Gets a CodeValue
   * @request GET:/pms/codevalues/{code}
   * @secure
   */
  codeValueControllerGetOrganisationyId = (code: string, params: RequestParams = {}) =>
    this.request<GetCodeValueReseponseDto, void>({
      path: `/pms/codevalues/${code}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags CodeValues
   * @name CodeValueControllerSearchProject
   * @request GET:/pms/codevalues/search
   * @secure
   */
  codeValueControllerSearchProject = (
    query: {
      /** @example "NOTIFICATION" */
      TYPE: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCodeValueReseponseDto[], void>({
      path: `/pms/codevalues/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Projects
   * @name ProjectControllerSearchProject
   * @summary Search projects using query criteria
   * @request GET:/pms/projects/search
   * @secure
   */
  projectControllerSearchProject = (
    query?: {
      /** @example "12345678-1234-1234-1234-1234567890ab" */
      orgId?: string;
      /** @example "12345678-1234-1234-1234-1234567890ab" */
      clientId?: string;
      /** @example "2024-03-01" */
      startDate?: string;
      /** @example "2024-03-01" */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProjectDto[], void>({
      path: `/pms/projects/search`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Projects
   * @name ProjectControllerGetProject
   * @summary Retrieve project details by ID
   * @request GET:/pms/projects/{id}
   * @secure
   */
  projectControllerGetProject = (id: string, params: RequestParams = {}) =>
    this.request<ProjectDto, void>({
      path: `/pms/projects/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Projects
   * @name ProjectControllerPutProject
   * @summary Update a project by ID
   * @request PUT:/pms/projects/{id}
   * @secure
   */
  projectControllerPutProject = (id: string, data: PutProjectBody, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/projects/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Projects
   * @name ProjectControllerDeleteProject
   * @summary Delete a project by ID
   * @request DELETE:/pms/projects/{id}
   * @secure
   */
  projectControllerDeleteProject = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/projects/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Projects
   * @name ProjectControllerPostProject
   * @summary Create a new project
   * @request POST:/pms/projects
   * @secure
   */
  projectControllerPostProject = (data: PostProjectBody, params: RequestParams = {}) =>
    this.request<ProjectDto[], void>({
      path: `/pms/projects`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a specific stage by its ID for the given project ID.
   *
   * @tags Project Stages
   * @name StageControllerGetStage
   * @summary Get stage by ID
   * @request GET:/pms/projects/{projectId}/stages/{stageId}
   * @secure
   */
  stageControllerGetStage = (projectId: string, stageId: string, params: RequestParams = {}) =>
    this.request<StageDto, void>({
      path: `/pms/projects/${projectId}/stages/${stageId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates a specific stage by its ID for the given project ID with the provided data.
   *
   * @tags Project Stages
   * @name StageControllerPutStage
   * @summary Update stage by ID
   * @request PUT:/pms/projects/{projectId}/stages/{stageId}
   * @secure
   */
  stageControllerPutStage = (projectId: string, stageId: string, data: PutStageBody, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/projects/${projectId}/stages/${stageId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a specific stage by its ID for the given project ID.
   *
   * @tags Project Stages
   * @name StageControllerDeleteStage
   * @summary Delete stage by ID
   * @request DELETE:/pms/projects/{projectId}/stages/{stageId}
   * @secure
   */
  stageControllerDeleteStage = (projectId: string, stageId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/projects/${projectId}/stages/${stageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Creates a new stage for the given project ID with the provided data.
   *
   * @tags Project Stages
   * @name StageControllerPostStage
   * @summary Create a new stage
   * @request POST:/pms/projects/{projectId}/stages
   * @secure
   */
  stageControllerPostStage = (projectId: string, data: PostProjectStageBody, params: RequestParams = {}) =>
    this.request<StageDto, void>({
      path: `/pms/projects/${projectId}/stages`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new template.
   *
   * @tags Template
   * @name TemplateControllerPostTemplate
   * @summary Create a template
   * @request POST:/pms/templates
   * @secure
   */
  templateControllerPostTemplate = (data: PostTemplateBody, params: RequestParams = {}) =>
    this.request<TemplateResponseBody, void>({
      path: `/pms/templates`,
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
   * @tags Template
   * @name TemplateControllerGetTemplates
   * @request GET:/pms/templates
   * @secure
   */
  templateControllerGetTemplates = (
    query?: {
      /**
       * Organization ID
       * @example ""
       */
      organisationId?: string;
      /**
       * Include Stage Summary
       * @example false
       */
      includeStageSummary?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetTemplatesDto[], any>({
      path: `/pms/templates`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new template.
   *
   * @tags Template
   * @name TemplateControllerGetTemplateById
   * @summary Create a template
   * @request GET:/pms/templates/{id}
   * @secure
   */
  templateControllerGetTemplateById = (id: string, params: RequestParams = {}) =>
    this.request<TemplateResponseBody, void>({
      path: `/pms/templates/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing template.
   *
   * @tags Template
   * @name TemplateControllerPutTemplate
   * @summary Update template
   * @request PUT:/pms/templates/{id}
   * @secure
   */
  templateControllerPutTemplate = (id: string, data: PutTemplateDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/templates/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a specific template by its ID.
   *
   * @tags Template
   * @name TemplateControllerDeleteResource
   * @summary Delete template
   * @request DELETE:/pms/templates/{id}
   * @secure
   */
  templateControllerDeleteResource = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/templates/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Retrieves a specific stage by its ID.
   *
   * @tags Template Stages
   * @name StageControllerGetStageById
   * @summary Get stage by ID
   * @request GET:/pms/templates/{templateId}/stages/{stageId}
   * @secure
   */
  stageControllerGetStageById = (stageId: string, templateId: string, params: RequestParams = {}) =>
    this.request<StageResponseBody, void>({
      path: `/pms/templates/${templateId}/stages/${stageId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing stage.
   *
   * @tags Template Stages
   * @name StageControllerPutStage2
   * @summary Update a stage
   * @request PUT:/pms/templates/{templateId}/stages/{stageId}
   * @originalName stageControllerPutStage
   * @duplicate
   * @secure
   */
  stageControllerPutStage2 = (stageId: string, templateId: string, data: PutStageDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/templates/${templateId}/stages/${stageId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a specific stage by its ID.
   *
   * @tags Template Stages
   * @name StageControllerDeleteStage2
   * @summary Delete a stage
   * @request DELETE:/pms/templates/{templateId}/stages/{stageId}
   * @originalName stageControllerDeleteStage
   * @duplicate
   * @secure
   */
  stageControllerDeleteStage2 = (stageId: string, templateId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/templates/${templateId}/stages/${stageId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Retrieves all stages of a specific template.
   *
   * @tags Template Stages
   * @name StageControllerGetAllStagesOfTemplate
   * @summary Get all stages of a template
   * @request GET:/pms/templates/{templateId}/stages
   * @secure
   */
  stageControllerGetAllStagesOfTemplate = (templateId: string, params: RequestParams = {}) =>
    this.request<StageResponseBody[], void>({
      path: `/pms/templates/${templateId}/stages`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new stage.
   *
   * @tags Template Stages
   * @name StageControllerPostStage2
   * @summary Create a stage
   * @request POST:/pms/templates/{templateId}/stages
   * @originalName stageControllerPostStage
   * @duplicate
   * @secure
   */
  stageControllerPostStage2 = (templateId: string, data: PostStageBody, params: RequestParams = {}) =>
    this.request<StageResponseBody, void>({
      path: `/pms/templates/${templateId}/stages`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes all stages of a specific template using template ID.
   *
   * @tags Template Stages
   * @name StageControllerDeleteAllStagesOfTemplate
   * @summary Delete all stages of a template
   * @request DELETE:/pms/templates/{templateId}/stages
   * @secure
   */
  stageControllerDeleteAllStagesOfTemplate = (templateId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/templates/${templateId}/stages`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Project Resources
   * @name ResourceControllerGetResource
   * @summary Retrieve a specific resource within a project by its ID
   * @request GET:/pms/projects/{projectId}/resources/{id}
   * @secure
   */
  resourceControllerGetResource = (projectId: string, id: string, params: RequestParams = {}) =>
    this.request<ResourceDto, void>({
      path: `/pms/projects/${projectId}/resources/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Project Resources
   * @name ResourceControllerPutResource
   * @summary Update a specific resource within a project by its ID
   * @request PUT:/pms/projects/{projectId}/resources/{id}
   * @secure
   */
  resourceControllerPutResource = (projectId: string, id: string, data: PutResourceDto, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/projects/${projectId}/resources/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Project Resources
   * @name ResourceControllerDeleteResource
   * @summary Delete a specific resource within a project by its ID
   * @request DELETE:/pms/projects/{projectId}/resources/{id}
   * @secure
   */
  resourceControllerDeleteResource = (projectId: string, id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/projects/${projectId}/resources/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Project Resources
   * @name ResourceControllerPostResource
   * @summary Create a new resource within a specific project
   * @request POST:/pms/projects/{projectId}/resources
   * @secure
   */
  resourceControllerPostResource = (projectId: string, data: PostResourceDto, params: RequestParams = {}) =>
    this.request<ResourceDto, void>({
      path: `/pms/projects/${projectId}/resources`,
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
   * @tags Organisations
   * @name OrganisationControllerPostOrganisation
   * @summary Create a organisation
   * @request POST:/pms/organisations
   * @secure
   */
  organisationControllerPostOrganisation = (data: OrganisationCreateBody, params: RequestParams = {}) =>
    this.request<OrganisationResponseBody, void>({
      path: `/pms/organisations`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all Organisation.
   *
   * @tags Organisations
   * @name OrganisationControllerGetOrganisations
   * @summary Gets all Organisation
   * @request GET:/pms/organisations
   * @secure
   */
  organisationControllerGetOrganisations = (
    query?: {
      /** @example true */
      includeCount?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<OrganisationResponseBody, void>({
      path: `/pms/organisations`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing Organisation.
   *
   * @tags Organisations
   * @name OrganisationControllerPutOrganisation
   * @summary Update Organisation
   * @request PUT:/pms/organisations/{id}
   * @secure
   */
  organisationControllerPutOrganisation = (id: string, data: OrganisationUpdateBody, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/organisations/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Gets a Organisation.
   *
   * @tags Organisations
   * @name OrganisationControllerGetOrganisationyId
   * @summary Gets a Organisation
   * @request GET:/pms/organisations/{id}
   * @secure
   */
  organisationControllerGetOrganisationyId = (id: string, params: RequestParams = {}) =>
    this.request<OrganisationResponseBody, void>({
      path: `/pms/organisations/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specific organisation by its ID.
   *
   * @tags Organisations
   * @name OrganisationControllerDeleteOrganisation
   * @summary Delete organisation
   * @request DELETE:/pms/organisations/{id}
   * @secure
   */
  organisationControllerDeleteOrganisation = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/organisations/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Creates a new Contact.
   *
   * @tags Organisation Contact
   * @name ContactControllerPostContact
   * @summary Create a Contact
   * @request POST:/pms/organisation/{organisationId}/contacts
   * @secure
   */
  contactControllerPostContact = (organisationId: string, data: ContactCreateBody[], params: RequestParams = {}) =>
    this.request<ContactResponseBody[], void>({
      path: `/pms/organisation/${organisationId}/contacts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves all contacts of a specific organisation.
   *
   * @tags Organisation Contact
   * @name ContactControllerGetAllContactsOfOrganisation
   * @summary Get all contacts of a organisation
   * @request GET:/pms/organisation/{organisationId}/contacts
   * @secure
   */
  contactControllerGetAllContactsOfOrganisation = (organisationId: string, params: RequestParams = {}) =>
    this.request<ContactResponseBody[], void>({
      path: `/pms/organisation/${organisationId}/contacts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing contact.
   *
   * @tags Organisation Contact
   * @name ContactControllerPutContact
   * @summary Update a contact
   * @request PUT:/pms/organisation/{organisationId}/contacts/{contactId}
   * @secure
   */
  contactControllerPutContact = (
    contactId: string,
    organisationId: string,
    data: ContactUpdateBody,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/pms/organisation/${organisationId}/contacts/${contactId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Retrieves a specific contact by its ID.
   *
   * @tags Organisation Contact
   * @name ContactControllerGetContactById
   * @summary Get contact by ID
   * @request GET:/pms/organisation/{organisationId}/contacts/{contactId}
   * @secure
   */
  contactControllerGetContactById = (contactId: string, organisationId: string, params: RequestParams = {}) =>
    this.request<ContactResponseBody, void>({
      path: `/pms/organisation/${organisationId}/contacts/${contactId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a specific contact by its ID.
   *
   * @tags Organisation Contact
   * @name ContactControllerDeleteContact
   * @summary Delete a contact
   * @request DELETE:/pms/organisation/{organisationId}/contacts/{contactId}
   * @secure
   */
  contactControllerDeleteContact = (contactId: string, organisationId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/organisation/${organisationId}/contacts/${contactId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientControllerPostClient
   * @request POST:/pms/clients
   * @secure
   */
  clientControllerPostClient = (data: ClientCreateDto, params: RequestParams = {}) =>
    this.request<ClientResponseDto, void>({
      path: `/pms/clients`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all client.
   *
   * @tags Clients
   * @name ClientControllerGetClients
   * @summary Gets all client
   * @request GET:/pms/clients
   * @secure
   */
  clientControllerGetClients = (params: RequestParams = {}) =>
    this.request<ClientResponseDto[], void>({
      path: `/pms/clients`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientControllerPatchUser
   * @request PATCH:/pms/clients/{id}
   * @secure
   */
  clientControllerPatchUser = (id: string, data: UpdateClientDto, params: RequestParams = {}) =>
    this.request<UpdateClientDto, void>({
      path: `/pms/clients/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientControllerDeleteClient
   * @request DELETE:/pms/clients/{id}
   * @secure
   */
  clientControllerDeleteClient = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/clients/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Gets a Client.
   *
   * @tags Clients
   * @name ClientControllerGetOrganisationyId
   * @summary Gets a Client
   * @request GET:/pms/clients/{id}
   * @secure
   */
  clientControllerGetOrganisationyId = (id: string, params: RequestParams = {}) =>
    this.request<ClientResponseDto, void>({
      path: `/pms/clients/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Client Contact
   * @name ClientContactControllerPostClientContact
   * @request POST:/pms/client/{clientId}/contacts
   * @secure
   */
  clientContactControllerPostClientContact = (
    clientId: string,
    data: ClientContactCreateDto,
    params: RequestParams = {},
  ) =>
    this.request<ClientContactCreateDto[], void>({
      path: `/pms/client/${clientId}/contacts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets all client contacts based on client ID.
   *
   * @tags Client Contact
   * @name ClientContactControllerGetClientContactByClientId
   * @summary Gets all client contacts based on client ID.
   * @request GET:/pms/client/{clientId}/contacts
   * @secure
   */
  clientContactControllerGetClientContactByClientId = (clientId: string, params: RequestParams = {}) =>
    this.request<ClientContactResponseDto, void>({
      path: `/pms/client/${clientId}/contacts`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Client Contact
   * @name ClientContactControllerPutClientContact
   * @request PUT:/pms/client/{clientId}/contacts/{id}
   * @secure
   */
  clientContactControllerPutClientContact = (
    clientId: string,
    id: string,
    data: UpdateClientContactDto,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/pms/client/${clientId}/contacts/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Client Contact
   * @name ClientContactControllerDeleteClientContact
   * @request DELETE:/pms/client/{clientId}/contacts/{id}
   * @secure
   */
  clientContactControllerDeleteClientContact = (clientId: string, id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/pms/client/${clientId}/contacts/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Get client contact based on client ID.
   *
   * @tags Client Contact
   * @name ClientContactControllerGetClientContactById
   * @summary Get client contact based on client ID.
   * @request GET:/pms/client/contacts/{id}
   * @secure
   */
  clientContactControllerGetClientContactById = (id: string, params: RequestParams = {}) =>
    this.request<ClientContactResponseDto, void>({
      path: `/pms/client/contacts/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a Organisation.
   *
   * @tags Organisation Template
   * @name OrganisationTemplateControllerGetTemplatesByOrganisationId
   * @summary Retrieve all templates associated with a specific organisation.
   * @request GET:/pms/organisations/{organisationId}/templates
   * @secure
   */
  organisationTemplateControllerGetTemplatesByOrganisationId = (organisationId?: string, params: RequestParams = {}) =>
    this.request<OrganisationTemplateResponseBody[], void>({
      path: `/pms/organisations/${organisationId}/templates`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Organisation Template
   * @name OrganisationTemplateControllerPostOrganisationTemplate
   * @summary creates organisation templates entry.
   * @request POST:/pms/organisations/{organisationId}/templates
   * @secure
   */
  organisationTemplateControllerPostOrganisationTemplate = (
    organisationId: string,
    data: any[],
    params: RequestParams = {},
  ) =>
    this.request<OrganisationTemplateResponseBody[], void>({
      path: `/pms/organisations/${organisationId}/templates`,
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
   * @tags Organisation Template
   * @name OrganisationTemplateControllerDeleteOrganisationTemplate
   * @summary Delete organisation template
   * @request DELETE:/pms/organisations/{organisationId}/templates/{templateId}
   * @secure
   */
  organisationTemplateControllerDeleteOrganisationTemplate = (
    organisationId: string,
    templateId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/pms/organisations/${organisationId}/templates/${templateId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Organisation Template
   * @name OrganisationTemplateControllerPostBulkOrganisationsTemplate
   * @summary creates Bulk organisation template entry.
   * @request POST:/pms/templates/{templateId}/organisations
   * @secure
   */
  organisationTemplateControllerPostBulkOrganisationsTemplate = (
    data: any[],
    templateId?: string,
    params: RequestParams = {},
  ) =>
    this.request<OrganisationTemplateResponseBody[], void>({
      path: `/pms/templates/${templateId}/organisations`,
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
   * @tags Role permissions
   * @name RolesControllerGetPermissions
   * @summary Get permissions of a specific role
   * @request GET:/pms/roles/permissions
   * @secure
   */
  rolesControllerGetPermissions = (
    query: {
      /** @example "ORG_CLIENT" */
      role: "ORG_ADMIN" | "ORG_GENERAL" | "ORG_CLIENT" | "ORG_MANAGER" | "BEESTORK_ADMIN";
    },
    params: RequestParams = {},
  ) =>
    this.request<PermissionDto, void>({
      path: `/pms/roles/permissions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
