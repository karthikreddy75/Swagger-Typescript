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

export interface SearchUser {
  /**
   * The unique identifier for the user
   * @example "12345678-1234-1234-1234-1234567890ab"
   */
  id: string;
  /**
   * The name of the user
   * @example "beestork"
   */
  name: string;
  /**
   * The email address of the user
   * @example "beestork@beesmail.com"
   */
  email: string;
  /**
   * The role name of the user (e.g., CLIENT, ADMIN, etc.)
   * @example "CLIENT"
   */
  roleName: string;
  /**
   * The profile image URL of the user
   * @example "https://picsum.photos/200"
   */
  profileImage: string;
  /**
   * The ID of the organisation to which the user belongs
   * @example "12345678-1234-1234-1234-1234567890ab"
   */
  organisationId: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  clientId?: string;
  /**
   * The current status of the user (e.g., ACTIVE, INACTIVE, etc.)
   * @example "ACTIVE"
   */
  status: string;
  /**
   * The date and time when the user was created
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  createdAt: string;
  /**
   * The date and time when the user was last updated
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  updatedAt: string;
  /**
   * The date and time when the user was last active
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  lastActiveTime: string;
  /**
   * Number of active project the user is linked to
   * @example "5"
   */
  activeProjectsCount: number;
}

export interface GetUserDto {
  /**
   * The unique identifier for the user
   * @example "12345678-1234-1234-1234-1234567890ab"
   */
  id: string;
  /**
   * The name of the user
   * @example "beestork"
   */
  name: string;
  /**
   * The email address of the user
   * @example "beestork@beesmail.com"
   */
  email: string;
  /**
   * The role name of the user (e.g., CLIENT, ADMIN, etc.)
   * @example "CLIENT"
   */
  roleName: string;
  /**
   * The profile image URL of the user
   * @example "https://picsum.photos/200"
   */
  profileImage: string;
  /**
   * The ID of the organisation to which the user belongs
   * @example "12345678-1234-1234-1234-1234567890ab"
   */
  organisationId: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  clientId?: string;
  /**
   * The current status of the user (e.g., ACTIVE, INACTIVE, etc.)
   * @example "ACTIVE"
   */
  status: string;
  /**
   * The date and time when the user was created
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  createdAt: string;
  /**
   * The date and time when the user was last updated
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  updatedAt: string;
  /**
   * The date and time when the user was last active
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  lastActiveTime: string;
}

export interface GetUsersDto {
  users: GetUserDto[];
  /** @example 1 */
  currentPage: number;
  /** @example 1000 */
  totalPages: number;
}

export interface PostUserDto {
  /** @example "beestork" */
  name: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  cognitoId: string;
  /** @example "beestork@beesmail.com" */
  email: string;
  /** @example "ORG_CLIENT" */
  roleName: "ORG_ADMIN" | "ORG_GENERAL" | "ORG_CLIENT" | "ORG_MANAGER" | "BEESTORK_ADMIN";
  file?: File;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  organisationId?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  clientId?: string;
  /** @example "c9a35380-6538-4b30-8cea-7f1650c6e627" */
  invitedBy: string;
  /** @example "2024-05-12T10:30:00.000Z" */
  lastActiveTime?: string;
}

export interface PatchUserDto {
  /** @example "beestorker" */
  name?: string;
  /** @example "ORG_CLIENT" */
  roleName?: "ORG_ADMIN" | "ORG_GENERAL" | "ORG_CLIENT" | "ORG_MANAGER" | "BEESTORK_ADMIN";
  file?: File;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  clientId?: string;
  /** @example "2024-05-12T10:30:00.000Z" */
  lastActiveTime?: string;
}

export interface UserInviteDto {
  /** @example "example@beestork.com" */
  email: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  projectId?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  organisationId: string;
  /** @example "ORG_GENERAL" */
  userRole: "ORG_ADMIN" | "ORG_GENERAL" | "ORG_CLIENT" | "ORG_MANAGER" | "BEESTORK_ADMIN";
}

export interface GetUsersByQueryDto {
  /** @example ["ORG_ADMIN","ORG_GENERAL"] */
  roles?: ("ORG_ADMIN" | "ORG_GENERAL" | "ORG_CLIENT" | "ORG_MANAGER" | "BEESTORK_ADMIN")[];
  /** @example "4e486542-1fde-4ff0-9a12-e618b90745ab" */
  orgId: string;
  /** @example "4e486542-1fde-4ff0-9a12-e618b90745ab" */
  projectId?: string;
}

export interface UserQueryResult {
  /**
   * Email address of the user
   * @example "user@example.com"
   */
  emailAddress: string;
  /**
   * User ID
   * @example "4e486542-1fde-4ff0-9a12-e618b90745ab"
   */
  userId: string;
  /**
   * Name of the user
   * @example "Test test"
   */
  name: string;
}

export interface UserFeedbackDto {
  /** @example "sample feedback from user" */
  description: string;
}

export interface UserLoginDto {
  /** @example "beestork@example.com" */
  email: string;
  /** @format password */
  password: string;
}

export interface CreatePreferenceDto {
  /**
   * Type of notification
   * @example "email"
   */
  notificationType: string;
  /** Channel for notification */
  notificationChannel: "WEB" | "EMAIL";
  /**
   * Value of notification
   * @example true
   */
  notificationValue: boolean;
}

export interface PreferenceDto {
  /**
   * Type of notification
   * @example "email"
   */
  notificationType: string;
  /** Channel for notification */
  notificationChannel: "WEB" | "EMAIL";
  /**
   * Value of notification
   * @example true
   */
  notificationValue: boolean;
  /**
   * Unique identifier of the preference
   * @example "123"
   */
  id: string;
  /**
   * User ID
   * @example "user123"
   */
  userId: string;
  /**
   * Date of creation
   * @format date-time
   */
  createdAt: string;
  /**
   * Date of last update
   * @format date-time
   */
  updatedAt: string;
}

export interface UpdatePreferenceDto {
  /**
   * Type of notification
   * @example "email"
   */
  notificationType: string;
  /** Channel for notification */
  notificationChannel: "WEB" | "EMAIL";
  /**
   * Value of notification
   * @example true
   */
  notificationValue: boolean;
}

export type ResourceAudit = object;

export enum Resource {
  PROJECT = "PROJECT",
  STAGE = "STAGE",
  CLIENT = "CLIENT",
  USER = "USER",
}

export enum Code {
  PROJECT_STARTED = "PROJECT_STARTED",
  STAGE_STARTED = "STAGE_STARTED",
  PROJECT_INVITATION = "PROJECT_INVITATION",
  PROJECT_COMPLETE = "PROJECT_COMPLETE",
  PROJECT_REMOVED = "PROJECT_REMOVED",
  PROJECT_FILE_CREATED = "PROJECT_FILE_CREATED",
  USER_REMOVED_FROM_PROJECT = "USER_REMOVED_FROM_PROJECT",
  STAGE_DATES_MODIFIED = "STAGE_DATES_MODIFIED",
  STAGE_COMPLETED = "STAGE_COMPLETED",
  STAGE_PAST_DUE = "STAGE_PAST_DUE",
  STAGE_CLOSE_END_DATE = "STAGE_CLOSE_END_DATE",
}

export interface CreateResourceAuditDto {
  /** @example "PROJECT" */
  resource: Resource;
  /** @example "PROJECT_STARTED" */
  code: Code;
  /** @example {"stageId":"123","projectId":"456","orgId":"789","userId":"101","clientId":"111","fileId":"222","linkId":"333"} */
  extras: object;
  /** @example "User ID" */
  updatedBy: string;
}

export interface UpdateResourceAuditDto {
  /** @example "Updated Resource Name" */
  name?: string;
  /** @example "Updated Resource Description" */
  description?: string;
  /** @example "STAGE" */
  resource?: Resource;
  /** @example "STAGE_STARTED" */
  code?: Code;
  /** @example {"stageId":"123","projectId":"456","orgId":"789","userId":"101","clientId":"111","fileId":"222","linkId":"333"} */
  extras?: object;
}

export interface PostCodeValueDto {
  /** @example "STAGE_UPDATE_REMINDERS" */
  code: string;
  /** @example "Stage update reminders" */
  description: string;
  /** @example "USER_ROLE" */
  type: "NOTIFICATION" | "USER_ROLE";
  /** @example "PROJECT" */
  subtype: "PROJECT" | "STAGE";
}

export interface GetCodeValueReseponseDto {
  /** @example "STAGE_UPDATE_REMINDERS" */
  code: string;
  /** @example "Stage update reminders" */
  description: string;
  /** @example "USER_ROLE" */
  type: string;
  /** @example "PROJECT" */
  subtype: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  updatedAt: string;
}

export interface PutCodeValueDto {
  /** @example "Stage update reminders" */
  description: string;
  /** @example "USER_ROLE" */
  type: string;
  /** @example "PROJECT" */
  subtype: string;
}

export interface ProjectDto {
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  id: string;
  /** @example "project1" */
  name: string;
  /** @example "project1" */
  organisationId: string;
  /** @example "project1" */
  clientId: string;
  /** @example "project1" */
  templateId: string;
  startDate: string;
  endDate: string;
  status: "STARTED" | "IN_PROGRESS" | "COMPLETED";
  description: string;
  comments: string;
  projectLead: string;
  /**
   * Supported values are M, T, W, TH, F, S, SU
   * @example ["M","T","W","TH","F"]
   */
  workingDays: "M" | "T" | "W" | "TH" | "F" | "S" | "SU";
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  updatedAt: string;
}

export interface PostProjectBody {
  /** @example "project1" */
  name: string;
  /** @example "2ef2e824-18de-4d2c-8050-f6215870204e" */
  organisationId: string;
  /** @example "02102cb7-a36c-433c-a6ab-1293279da123" */
  clientId?: string;
  /** @example "35555e02-1fea-4502-a628-3df989bc72d1" */
  templateId: string;
  /** @example "2024-03-01" */
  startDate: string;
  /** @example "description for project" */
  description?: string;
  /** @example "comments for project" */
  comments?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  projectLead?: string;
  /**
   * Supported values are M, T, W, TH, F, S, SU
   * @example ["M","T","W","TH","F"]
   */
  workingDays?: "M" | "T" | "W" | "TH" | "F" | "S" | "SU";
}

export interface PutProjectBody {
  /** @example "project1" */
  name?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  orgId?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  clientId?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  templateId?: string;
  /** @example "2024-03-01" */
  startDate?: string;
  status?: "STARTED" | "IN_PROGRESS" | "COMPLETED";
  /** @example "description for project" */
  description?: string;
  /** @example "comments for project" */
  comments?: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  projectLead?: string;
  /**
   * Supported values are M, T, W, TH, F, S, SU
   * @example ["M","T","W","TH","F"]
   */
  workingDays?: "M" | "T" | "W" | "TH" | "F" | "S" | "SU";
}

export interface StageDto {
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  id: string;
  /** @example "name of the stage" */
  name: string;
  /** @example "STARTED" */
  status: enum;
  /** @example "2024-03-01" */
  startDate: string;
  /** @example "2024-09-01" */
  endDate: string;
  /** @example "description for the stage" */
  description: string;
  /** @example "comments for the stage" */
  comments: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  projectId: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  updatedAt: string;
}

export interface PostProjectStageBody {
  /** @example "name of the stage" */
  name: string;
  /** @example "2024-03-01" */
  startDate: string;
  /** @example "2024-09-01" */
  endDate: string;
  /** @example "description for the stage" */
  description?: string;
  /** @example "comments for the stage" */
  comments?: string;
}

export interface PutStageBody {
  /** @example "name of the stage" */
  name?: string;
  /**
   * Supported values are  [STARTED, IN_PROGRESS, COMPLETED]
   * @example "STARTED"
   */
  status?: "STARTED" | "IN_PROGRESS" | "COMPLETED";
  /** @example "2024-03-01" */
  startDate?: string;
  /** @example "2024-09-01" */
  endDate?: string;
  /** @example "description for the stage" */
  description?: string;
  /** @example "comments for the stage" */
  comments?: string;
  /** @example true */
  notify_updates?: boolean;
  /** @example "additional content for email notification" */
  notify_update_comments?: string;
}

export interface PostTemplateBody {
  /**
   * The name of the template
   * @example "Template Name"
   */
  name: string;
  /**
   * The description of the template
   * @example "Template Description"
   */
  description: string;
}

export interface TemplateResponseBody {
  /** The name of the template */
  name: string;
  /**
   * The unique identifier of the template
   * @example "f8a617d4-6405-4d19-9b25-6dae56e43957"
   */
  id: string;
  /** The description of the template */
  description: string;
  /**
   * The timestamp when the template was created
   * @format date-time
   */
  createdAt: string;
  /**
   * The timestamp when the template was last updated
   * @format date-time
   */
  updatedAt: string;
  /** The status of the template */
  status: "PENDING" | "READY_TO_USE";
  /**
   * startDay
   * @example "1"
   */
  startDay: number;
  /**
   * startDay
   * @example "19"
   */
  endDay: number;
}

/** The updated status of the template */
export enum TemplateStatus {
  PENDING = "PENDING",
  READY_TO_USE = "READY_TO_USE",
}

export interface PutTemplateDto {
  /**
   * The updated name of the template
   * @example "Updated Template Name"
   */
  name?: string;
  /**
   * The updated description of the template
   * @example "Updated Template Description"
   */
  description?: string;
  /**
   * The updated status of the template
   * @example "ACTIVE"
   */
  status?: TemplateStatus;
}

export type Stage = object;

export interface GetTemplatesDto {
  /**
   * The unique identifier of the template
   * @example "f8a617d4-6405-4d19-9b25-6dae56e43957"
   */
  id: string;
  /** @example "name" */
  name: string;
  /** @example "template description" */
  description: string;
  /** @example "1" */
  startDay: number;
  /** @example "10" */
  endDay: number;
  stages: Stage[];
  /** @example 12 */
  duration: number;
  /** @example "2024-03-01" */
  createdAt: string;
  /** @example "2024-03-01" */
  updatedAt: string;
}

export interface StageResponseBody {
  /** The name of the Stage */
  name: string;
  /**
   * The unique identifier of the Stage
   * @example "f8a617d4-6405-4d19-9b25-6dae56e43957"
   */
  id: string;
  /** The description of the Stage */
  description: string;
  /**
   * The timestamp when the Stage was created
   * @format date-time
   */
  createdAt: string;
  /**
   * The timestamp when the Stage was last updated
   * @format date-time
   */
  updatedAt: string;
  /**
   * The startDay of the stage
   * @example "1"
   */
  startDay: number;
  /**
   * The updated duration of the Stage
   * @example "24"
   */
  duration: number;
  /**
   * The startDay of the stage
   * @example "25"
   */
  endDay: number;
}

export interface PostStageBody {
  /**
   * The name of the Stage
   * @example "Stage Name"
   */
  name: string;
  /** @example "f8a617d4-6405-4d19-9b25-6dae56e43957" */
  templateId: string;
  /**
   * The startDay of the stage
   * @example "1"
   */
  startDay?: number;
  /**
   * The duration of the Stage
   * @example "10"
   */
  duration: number;
  /**
   * The description of the Stage
   * @example "Stage Description"
   */
  description: string;
}

export interface PutStageDto {
  /**
   * The updated name of the Stage
   * @example "Updated Stage Name"
   */
  name?: string;
  /**
   * The updated duration of the Stage
   * @example "10"
   */
  duration?: number;
  /**
   * The startDay of the stage
   * @example "1"
   */
  startDay?: number;
  /**
   * The updated description of the Stage
   * @example "Updated Stage Description"
   */
  description?: string;
}

export interface ResourceDto {
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  id: string;
  /** @example "file1.txt" */
  fileName: string;
  /** @example "files_bucket/resources" */
  fileLocation: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  projectId: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2024-03-20 07:03:25.664471"
   */
  updatedAt: string;
}

export interface PostResourceDto {
  /** @example "file1.txt" */
  fileName?: string;
  /** @example "https://example.com/file1.txt" */
  url?: string;
  file?: File;
  /** @example "FILE" */
  type: "LINK" | "FILE";
  /** @example "1024KB" */
  size?: string;
}

export interface PutResourceDto {
  /** @example "file1.txt" */
  fileName?: string;
  /** @example "https://example.com/file1.txt" */
  url?: string;
  file?: File;
  /** @example "FILE" */
  type: "LINK" | "FILE";
  /** @example "1024KB" */
  size?: string;
}

export interface ContactCreateBody {
  /**
   * The name of the Contact
   * @example "Contact Name"
   */
  name: string;
  /**
   * email of the contact
   * @example "muhammad.adeeb@techwondoe.com"
   */
  email: string;
  /**
   * number of the contact
   * @example 9660417219
   */
  mobileNumber: string;
  /**
   * The role of the contact
   * @example "ORG_ADMIN"
   */
  role: "ORG_ADMIN" | "ORG_GENERAL" | "ORG_CLIENT" | "ORG_MANAGER" | "BEESTORK_ADMIN";
}

export interface OrganisationCreateBody {
  /** @example "Organisation Name" */
  name: string;
  /** @example "100-200" */
  numOfEmployees: string;
  /** @example "Marketing" */
  industry: string;
  logo?: File;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  createdBy: string;
  /** @example [{"name":"John","email":"john.doe@gmail.com","mobileNumber":"1234567890","role":"ORG_ADMIN"}] */
  contacts?: ContactCreateBody;
}

export interface OrganisationResponseBody {
  /**
   * The unique identifier of the organisation
   * @example "f8a617d4-6405-4d19-9b25-6dae56e43957"
   */
  id: string;
  /** The name of the organisation */
  name: string;
  /** The Number of employees of the organisation */
  numOfEmployees: string;
  /** The Industry of the organisation */
  industry: string;
  /** Logo of the organisation */
  logo: string;
  /**
   * The timestamp when the template was created
   * @format date-time
   */
  createdAt: string;
  /**
   * The timestamp when the template was last updated
   * @format date-time
   */
  updatedAt: string;
}

export interface OrganisationUpdateBody {
  /**
   * The name of the organisation
   * @example "Organisation Name"
   */
  name?: string;
  /** @example "5-100" */
  numOfEmployees?: string;
  /** @example "Marketing" */
  industry?: string;
  /** @example "logo URL" */
  logo?: string;
  createdBy?: string;
}

export interface ContactResponseBody {
  /**
   * The unique identifier of the Contact
   * @example "f8a617d4-6405-4d19-9b25-6dae56e43957"
   */
  id: string;
  /**
   * The timestamp when the Contact was created
   * @format date-time
   */
  createdAt: string;
  /**
   * The timestamp when the Contact was last updated
   * @format date-time
   */
  updatedAt: string;
  /**
   * The name of the Contact
   * @example "Contact Name"
   */
  name: string;
  /**
   * The name of the Org
   * @example "f8a617d4-6405-4d19-9b25-6dae56e43957"
   */
  organisationId: string;
  /**
   * email of the contact
   * @example "muhammad.adeeb@techwondoe.com"
   */
  email: string;
  /**
   * number of the contact
   * @example "9660417219"
   */
  mobileNumber: string;
  /**
   * The role of the contact
   * @example "Marketing"
   */
  role: string;
}

export interface ContactUpdateBody {
  /**
   * The name of the Contact
   * @example "Contact Name"
   */
  name: string;
  /**
   * email of the contact
   * @example "muhammad.adeeb@techwondoe.com"
   */
  email: string;
  /**
   * number of the contact
   * @example 9660417219
   */
  mobileNumber: string;
  /**
   * The role of the contact
   * @example "ORG_MANAGER"
   */
  role: string;
}

export interface PostClientContactCreateDto {
  /** @example "Adeeb" */
  firstName: string;
  /** @example "Shah" */
  lastName: string;
  /** @example "abc1@gmail.com" */
  email: string;
  /**
   * @default false
   * @example false
   */
  isPrimary?: boolean;
}

export interface ClientCreateDto {
  /** @example "client1" */
  name: string;
  logo?: File;
  /** @example "[{ "firstName": "Adeeb", "lastName": "Shah", "email": "abc1@gmail.com", "isPrimary": true }]" */
  contacts?: PostClientContactCreateDto;
}

export interface ClientResponseDto {
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  id: string;
  /** @example "12345678-1234-1234-1234-1234567890ab" */
  createdBy: string;
  /** @example [] */
  clientContacts: string[];
  /** @example "client1" */
  name: string;
  /** @example "https://picsum.photos/200" */
  logo: string;
  /** @example [] */
  projects: string[];
}

export interface UpdateClientDto {
  /** @example "client1" */
  name: string;
  logo?: File;
}

export interface ClientContactCreateDto {
  /** @example "Adeeb" */
  firstName: string;
  /** @example "Shah" */
  lastName: string;
  /** @example "abc1@gmail.com" */
  email: string;
  /**
   * @default false
   * @example false
   */
  isPrimary?: boolean;
}

export interface UpdateClientContactDto {
  /** @example "Adeeb" */
  firstName?: string;
  /** @example "Shah" */
  lastName?: string;
  /** @example "abc1@gmail.com" */
  email?: string;
  /** @example false */
  isPrimary?: boolean;
}

export interface ClientContactResponseDto {
  /** @example "Adeeb" */
  id: string;
  /** @example "Adeeb" */
  firstName: string;
  /** @example "Shah" */
  lastName: string;
  /** @example "adsbs1@gmail.com" */
  email: string;
  /** @example false */
  isPrimary: boolean;
}

export interface OrganisationTemplateResponseBody {
  /** @example "f8a617d4-6405-4d19-9b25-6dae56e43957" */
  id: string;
  /** @example "f8a617d4-6405-4d19-9b25-6dae56e43957" */
  templateId: string;
  /** @example "f8a617d4-6405-4d19-9b25-6dae56e43957" */
  organisationId: string;
}

export interface PermissionDto {
  /** @example "ORGANISATION" */
  resourceType: "PROJECT" | "MEMBER" | "CLIENT" | "TEMPLATE" | "STAGE" | "MASTER" | "ORGANISATION";
  /** @example "view" */
  type: string;
  /** @example false */
  owned: boolean;
}
