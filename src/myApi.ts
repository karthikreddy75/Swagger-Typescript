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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ProjectManagementService API
 * @version 1.0.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetHello
   * @request GET:/
   * @secure
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      secure: true,
      ...params,
    });

  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UserControllerSearchUser
     * @summary Search users based on email or organisation ID
     * @request GET:/users/search
     * @secure
     */
    userControllerSearchUser: (
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
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetUsers
     * @summary Get a paginated list of users
     * @request GET:/users
     * @secure
     */
    userControllerGetUsers: (
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
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerPostUser
     * @summary Create a new user with optional profile image upload
     * @request POST:/users
     * @secure
     */
    userControllerPostUser: (data: PostUserDto, params: RequestParams = {}) =>
      this.request<GetUserDto, void>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetUser
     * @summary Get user details by ID
     * @request GET:/users/{id}
     * @secure
     */
    userControllerGetUser: (id: string, params: RequestParams = {}) =>
      this.request<GetUserDto, void>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerPatchUser
     * @summary Update user details by ID with optional profile image upload
     * @request PATCH:/users/{id}
     * @secure
     */
    userControllerPatchUser: (id: string, data: PatchUserDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerDeleteUser
     * @summary Delete a user by ID
     * @request DELETE:/users/{id}
     * @secure
     */
    userControllerDeleteUser: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerInviteUser
     * @summary Invite a user
     * @request POST:/users/invite
     * @secure
     */
    userControllerInviteUser: (data: UserInviteDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/invite`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetUsersByQuery
     * @summary Get users based on query criteria
     * @request POST:/users/query
     * @secure
     */
    userControllerGetUsersByQuery: (data: GetUsersByQueryDto, params: RequestParams = {}) =>
      this.request<UserQueryResult[], any>({
        path: `/users/query`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerUserFeedback
     * @summary Submit feedback for a user by ID
     * @request POST:/users/{id}/feedback
     * @secure
     */
    userControllerUserFeedback: (id: string, data: UserFeedbackDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}/feedback`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerDeleteUserProject
     * @summary Remove user from a project
     * @request DELETE:/users/{userId}/projects/{projectId}
     * @secure
     */
    userControllerDeleteUserProject: (userId: string, projectId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${userId}/projects/${projectId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerLoginUser
     * @summary Get user authentication token
     * @request POST:/users/login
     * @secure
     */
    userControllerLoginUser: (data: UserLoginDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  pms = {
    /**
     * @description Creates a new preference for a user.
     *
     * @tags Preferences
     * @name NotificationPreferenceControllerCreatePreference
     * @summary Create a preference
     * @request POST:/pms/user/{userId}/preferences
     * @secure
     */
    notificationPreferenceControllerCreatePreference: (
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
      }),

    /**
     * @description Retrieves All preference a user by userId.
     *
     * @tags Preferences
     * @name NotificationPreferenceControllerGetAllPreferenceOfUser
     * @summary Get a All preferences by userId
     * @request GET:/pms/user/{userId}/preferences
     * @secure
     */
    notificationPreferenceControllerGetAllPreferenceOfUser: (userId: string, params: RequestParams = {}) =>
      this.request<PreferenceDto[], any>({
        path: `/pms/user/${userId}/preferences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a preference by its ID for a user.
     *
     * @tags Preferences
     * @name NotificationPreferenceControllerGetPreferenceById
     * @summary Get a preference by ID
     * @request GET:/pms/user/{userId}/preferences/{preferenceId}
     * @secure
     */
    notificationPreferenceControllerGetPreferenceById: (
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
      }),

    /**
     * @description Updates an existing preference for a user.
     *
     * @tags Preferences
     * @name NotificationPreferenceControllerUpdatePreference
     * @summary Update a preference
     * @request PUT:/pms/user/{userId}/preferences/{preferenceId}
     * @secure
     */
    notificationPreferenceControllerUpdatePreference: (
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
      }),

    /**
     * @description Deletes a preference by its ID for a user.
     *
     * @tags Preferences
     * @name NotificationPreferenceControllerDeletePreference
     * @summary Delete a preference
     * @request DELETE:/pms/user/{userId}/preferences/{preferenceId}
     * @secure
     */
    notificationPreferenceControllerDeletePreference: (
      preferenceId: string,
      userId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/pms/user/${userId}/preferences/${preferenceId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CodeValues
     * @name CodeValueControllerPostUser
     * @request POST:/pms/codevalues
     * @secure
     */
    codeValueControllerPostUser: (data: PostCodeValueDto, params: RequestParams = {}) =>
      this.request<GetCodeValueReseponseDto, void>({
        path: `/pms/codevalues`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets all codeValue.
     *
     * @tags CodeValues
     * @name CodeValueControllerGetOrganisations
     * @summary Gets all codeValue
     * @request GET:/pms/codevalues
     * @secure
     */
    codeValueControllerGetOrganisations: (params: RequestParams = {}) =>
      this.request<GetCodeValueReseponseDto[], void>({
        path: `/pms/codevalues`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing CodeValue.
     *
     * @tags CodeValues
     * @name CodeValueControllerPutOrganisation
     * @summary Update CodeValue
     * @request PUT:/pms/codevalues/{code}
     * @secure
     */
    codeValueControllerPutOrganisation: (code: string, data: PutCodeValueDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/codevalues/${code}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Gets a CodeValue.
     *
     * @tags CodeValues
     * @name CodeValueControllerGetOrganisationyId
     * @summary Gets a CodeValue
     * @request GET:/pms/codevalues/{code}
     * @secure
     */
    codeValueControllerGetOrganisationyId: (code: string, params: RequestParams = {}) =>
      this.request<GetCodeValueReseponseDto, void>({
        path: `/pms/codevalues/${code}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CodeValues
     * @name CodeValueControllerSearchProject
     * @request GET:/pms/codevalues/search
     * @secure
     */
    codeValueControllerSearchProject: (
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
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name ProjectControllerSearchProject
     * @summary Search projects using query criteria
     * @request GET:/pms/projects/search
     * @secure
     */
    projectControllerSearchProject: (
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
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name ProjectControllerGetProject
     * @summary Retrieve project details by ID
     * @request GET:/pms/projects/{id}
     * @secure
     */
    projectControllerGetProject: (id: string, params: RequestParams = {}) =>
      this.request<ProjectDto, void>({
        path: `/pms/projects/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name ProjectControllerPutProject
     * @summary Update a project by ID
     * @request PUT:/pms/projects/{id}
     * @secure
     */
    projectControllerPutProject: (id: string, data: PutProjectBody, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/projects/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name ProjectControllerDeleteProject
     * @summary Delete a project by ID
     * @request DELETE:/pms/projects/{id}
     * @secure
     */
    projectControllerDeleteProject: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/projects/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name ProjectControllerPostProject
     * @summary Create a new project
     * @request POST:/pms/projects
     * @secure
     */
    projectControllerPostProject: (data: PostProjectBody, params: RequestParams = {}) =>
      this.request<ProjectDto[], void>({
        path: `/pms/projects`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific stage by its ID for the given project ID.
     *
     * @tags Project Stages
     * @name StageControllerGetStage
     * @summary Get stage by ID
     * @request GET:/pms/projects/{projectId}/stages/{stageId}
     * @secure
     */
    stageControllerGetStage: (projectId: string, stageId: string, params: RequestParams = {}) =>
      this.request<StageDto, void>({
        path: `/pms/projects/${projectId}/stages/${stageId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a specific stage by its ID for the given project ID with the provided data.
     *
     * @tags Project Stages
     * @name StageControllerPutStage
     * @summary Update stage by ID
     * @request PUT:/pms/projects/{projectId}/stages/{stageId}
     * @secure
     */
    stageControllerPutStage: (projectId: string, stageId: string, data: PutStageBody, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/projects/${projectId}/stages/${stageId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes a specific stage by its ID for the given project ID.
     *
     * @tags Project Stages
     * @name StageControllerDeleteStage
     * @summary Delete stage by ID
     * @request DELETE:/pms/projects/{projectId}/stages/{stageId}
     * @secure
     */
    stageControllerDeleteStage: (projectId: string, stageId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/projects/${projectId}/stages/${stageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Creates a new stage for the given project ID with the provided data.
     *
     * @tags Project Stages
     * @name StageControllerPostStage
     * @summary Create a new stage
     * @request POST:/pms/projects/{projectId}/stages
     * @secure
     */
    stageControllerPostStage: (projectId: string, data: PostProjectStageBody, params: RequestParams = {}) =>
      this.request<StageDto, void>({
        path: `/pms/projects/${projectId}/stages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new template.
     *
     * @tags Template
     * @name TemplateControllerPostTemplate
     * @summary Create a template
     * @request POST:/pms/templates
     * @secure
     */
    templateControllerPostTemplate: (data: PostTemplateBody, params: RequestParams = {}) =>
      this.request<TemplateResponseBody, void>({
        path: `/pms/templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Template
     * @name TemplateControllerGetTemplates
     * @request GET:/pms/templates
     * @secure
     */
    templateControllerGetTemplates: (
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
      }),

    /**
     * @description Creates a new template.
     *
     * @tags Template
     * @name TemplateControllerGetTemplateById
     * @summary Create a template
     * @request GET:/pms/templates/{id}
     * @secure
     */
    templateControllerGetTemplateById: (id: string, params: RequestParams = {}) =>
      this.request<TemplateResponseBody, void>({
        path: `/pms/templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing template.
     *
     * @tags Template
     * @name TemplateControllerPutTemplate
     * @summary Update template
     * @request PUT:/pms/templates/{id}
     * @secure
     */
    templateControllerPutTemplate: (id: string, data: PutTemplateDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/templates/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes a specific template by its ID.
     *
     * @tags Template
     * @name TemplateControllerDeleteResource
     * @summary Delete template
     * @request DELETE:/pms/templates/{id}
     * @secure
     */
    templateControllerDeleteResource: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a specific stage by its ID.
     *
     * @tags Template Stages
     * @name StageControllerGetStageById
     * @summary Get stage by ID
     * @request GET:/pms/templates/{templateId}/stages/{stageId}
     * @secure
     */
    stageControllerGetStageById: (stageId: string, templateId: string, params: RequestParams = {}) =>
      this.request<StageResponseBody, void>({
        path: `/pms/templates/${templateId}/stages/${stageId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    stageControllerPutStage2: (stageId: string, templateId: string, data: PutStageDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/templates/${templateId}/stages/${stageId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

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
    stageControllerDeleteStage2: (stageId: string, templateId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/templates/${templateId}/stages/${stageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves all stages of a specific template.
     *
     * @tags Template Stages
     * @name StageControllerGetAllStagesOfTemplate
     * @summary Get all stages of a template
     * @request GET:/pms/templates/{templateId}/stages
     * @secure
     */
    stageControllerGetAllStagesOfTemplate: (templateId: string, params: RequestParams = {}) =>
      this.request<StageResponseBody[], void>({
        path: `/pms/templates/${templateId}/stages`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

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
    stageControllerPostStage2: (templateId: string, data: PostStageBody, params: RequestParams = {}) =>
      this.request<StageResponseBody, void>({
        path: `/pms/templates/${templateId}/stages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes all stages of a specific template using template ID.
     *
     * @tags Template Stages
     * @name StageControllerDeleteAllStagesOfTemplate
     * @summary Delete all stages of a template
     * @request DELETE:/pms/templates/{templateId}/stages
     * @secure
     */
    stageControllerDeleteAllStagesOfTemplate: (templateId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/templates/${templateId}/stages`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project Resources
     * @name ResourceControllerGetResource
     * @summary Retrieve a specific resource within a project by its ID
     * @request GET:/pms/projects/{projectId}/resources/{id}
     * @secure
     */
    resourceControllerGetResource: (projectId: string, id: string, params: RequestParams = {}) =>
      this.request<ResourceDto, void>({
        path: `/pms/projects/${projectId}/resources/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project Resources
     * @name ResourceControllerPutResource
     * @summary Update a specific resource within a project by its ID
     * @request PUT:/pms/projects/{projectId}/resources/{id}
     * @secure
     */
    resourceControllerPutResource: (projectId: string, id: string, data: PutResourceDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/projects/${projectId}/resources/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project Resources
     * @name ResourceControllerDeleteResource
     * @summary Delete a specific resource within a project by its ID
     * @request DELETE:/pms/projects/{projectId}/resources/{id}
     * @secure
     */
    resourceControllerDeleteResource: (projectId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/projects/${projectId}/resources/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project Resources
     * @name ResourceControllerPostResource
     * @summary Create a new resource within a specific project
     * @request POST:/pms/projects/{projectId}/resources
     * @secure
     */
    resourceControllerPostResource: (projectId: string, data: PostResourceDto, params: RequestParams = {}) =>
      this.request<ResourceDto, void>({
        path: `/pms/projects/${projectId}/resources`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Organisations
     * @name OrganisationControllerPostOrganisation
     * @summary Create a organisation
     * @request POST:/pms/organisations
     * @secure
     */
    organisationControllerPostOrganisation: (data: OrganisationCreateBody, params: RequestParams = {}) =>
      this.request<OrganisationResponseBody, void>({
        path: `/pms/organisations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets all Organisation.
     *
     * @tags Organisations
     * @name OrganisationControllerGetOrganisations
     * @summary Gets all Organisation
     * @request GET:/pms/organisations
     * @secure
     */
    organisationControllerGetOrganisations: (
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
      }),

    /**
     * @description Updates an existing Organisation.
     *
     * @tags Organisations
     * @name OrganisationControllerPutOrganisation
     * @summary Update Organisation
     * @request PUT:/pms/organisations/{id}
     * @secure
     */
    organisationControllerPutOrganisation: (id: string, data: OrganisationUpdateBody, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/organisations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Gets a Organisation.
     *
     * @tags Organisations
     * @name OrganisationControllerGetOrganisationyId
     * @summary Gets a Organisation
     * @request GET:/pms/organisations/{id}
     * @secure
     */
    organisationControllerGetOrganisationyId: (id: string, params: RequestParams = {}) =>
      this.request<OrganisationResponseBody, void>({
        path: `/pms/organisations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific organisation by its ID.
     *
     * @tags Organisations
     * @name OrganisationControllerDeleteOrganisation
     * @summary Delete organisation
     * @request DELETE:/pms/organisations/{id}
     * @secure
     */
    organisationControllerDeleteOrganisation: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/organisations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Creates a new Contact.
     *
     * @tags Organisation Contact
     * @name ContactControllerPostContact
     * @summary Create a Contact
     * @request POST:/pms/organisation/{organisationId}/contacts
     * @secure
     */
    contactControllerPostContact: (organisationId: string, data: ContactCreateBody[], params: RequestParams = {}) =>
      this.request<ContactResponseBody[], void>({
        path: `/pms/organisation/${organisationId}/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all contacts of a specific organisation.
     *
     * @tags Organisation Contact
     * @name ContactControllerGetAllContactsOfOrganisation
     * @summary Get all contacts of a organisation
     * @request GET:/pms/organisation/{organisationId}/contacts
     * @secure
     */
    contactControllerGetAllContactsOfOrganisation: (organisationId: string, params: RequestParams = {}) =>
      this.request<ContactResponseBody[], void>({
        path: `/pms/organisation/${organisationId}/contacts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing contact.
     *
     * @tags Organisation Contact
     * @name ContactControllerPutContact
     * @summary Update a contact
     * @request PUT:/pms/organisation/{organisationId}/contacts/{contactId}
     * @secure
     */
    contactControllerPutContact: (
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
      }),

    /**
     * @description Retrieves a specific contact by its ID.
     *
     * @tags Organisation Contact
     * @name ContactControllerGetContactById
     * @summary Get contact by ID
     * @request GET:/pms/organisation/{organisationId}/contacts/{contactId}
     * @secure
     */
    contactControllerGetContactById: (contactId: string, organisationId: string, params: RequestParams = {}) =>
      this.request<ContactResponseBody, void>({
        path: `/pms/organisation/${organisationId}/contacts/${contactId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific contact by its ID.
     *
     * @tags Organisation Contact
     * @name ContactControllerDeleteContact
     * @summary Delete a contact
     * @request DELETE:/pms/organisation/{organisationId}/contacts/{contactId}
     * @secure
     */
    contactControllerDeleteContact: (contactId: string, organisationId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/organisation/${organisationId}/contacts/${contactId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientControllerPostClient
     * @request POST:/pms/clients
     * @secure
     */
    clientControllerPostClient: (data: ClientCreateDto, params: RequestParams = {}) =>
      this.request<ClientResponseDto, void>({
        path: `/pms/clients`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets all client.
     *
     * @tags Clients
     * @name ClientControllerGetClients
     * @summary Gets all client
     * @request GET:/pms/clients
     * @secure
     */
    clientControllerGetClients: (params: RequestParams = {}) =>
      this.request<ClientResponseDto[], void>({
        path: `/pms/clients`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientControllerPatchUser
     * @request PATCH:/pms/clients/{id}
     * @secure
     */
    clientControllerPatchUser: (id: string, data: UpdateClientDto, params: RequestParams = {}) =>
      this.request<UpdateClientDto, void>({
        path: `/pms/clients/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name ClientControllerDeleteClient
     * @request DELETE:/pms/clients/{id}
     * @secure
     */
    clientControllerDeleteClient: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/clients/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Gets a Client.
     *
     * @tags Clients
     * @name ClientControllerGetOrganisationyId
     * @summary Gets a Client
     * @request GET:/pms/clients/{id}
     * @secure
     */
    clientControllerGetOrganisationyId: (id: string, params: RequestParams = {}) =>
      this.request<ClientResponseDto, void>({
        path: `/pms/clients/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Contact
     * @name ClientContactControllerPostClientContact
     * @request POST:/pms/client/{clientId}/contacts
     * @secure
     */
    clientContactControllerPostClientContact: (
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
      }),

    /**
     * @description Gets all client contacts based on client ID.
     *
     * @tags Client Contact
     * @name ClientContactControllerGetClientContactByClientId
     * @summary Gets all client contacts based on client ID.
     * @request GET:/pms/client/{clientId}/contacts
     * @secure
     */
    clientContactControllerGetClientContactByClientId: (clientId: string, params: RequestParams = {}) =>
      this.request<ClientContactResponseDto, void>({
        path: `/pms/client/${clientId}/contacts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client Contact
     * @name ClientContactControllerPutClientContact
     * @request PUT:/pms/client/{clientId}/contacts/{id}
     * @secure
     */
    clientContactControllerPutClientContact: (
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
      }),

    /**
     * No description
     *
     * @tags Client Contact
     * @name ClientContactControllerDeleteClientContact
     * @request DELETE:/pms/client/{clientId}/contacts/{id}
     * @secure
     */
    clientContactControllerDeleteClientContact: (clientId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/pms/client/${clientId}/contacts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get client contact based on client ID.
     *
     * @tags Client Contact
     * @name ClientContactControllerGetClientContactById
     * @summary Get client contact based on client ID.
     * @request GET:/pms/client/contacts/{id}
     * @secure
     */
    clientContactControllerGetClientContactById: (id: string, params: RequestParams = {}) =>
      this.request<ClientContactResponseDto, void>({
        path: `/pms/client/contacts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a Organisation.
     *
     * @tags Organisation Template
     * @name OrganisationTemplateControllerGetTemplatesByOrganisationId
     * @summary Retrieve all templates associated with a specific organisation.
     * @request GET:/pms/organisations/{organisationId}/templates
     * @secure
     */
    organisationTemplateControllerGetTemplatesByOrganisationId: (organisationId?: string, params: RequestParams = {}) =>
      this.request<OrganisationTemplateResponseBody[], void>({
        path: `/pms/organisations/${organisationId}/templates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Organisation Template
     * @name OrganisationTemplateControllerPostOrganisationTemplate
     * @summary creates organisation templates entry.
     * @request POST:/pms/organisations/{organisationId}/templates
     * @secure
     */
    organisationTemplateControllerPostOrganisationTemplate: (
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
      }),

    /**
     * No description
     *
     * @tags Organisation Template
     * @name OrganisationTemplateControllerDeleteOrganisationTemplate
     * @summary Delete organisation template
     * @request DELETE:/pms/organisations/{organisationId}/templates/{templateId}
     * @secure
     */
    organisationTemplateControllerDeleteOrganisationTemplate: (
      organisationId: string,
      templateId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/pms/organisations/${organisationId}/templates/${templateId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Organisation Template
     * @name OrganisationTemplateControllerPostBulkOrganisationsTemplate
     * @summary creates Bulk organisation template entry.
     * @request POST:/pms/templates/{templateId}/organisations
     * @secure
     */
    organisationTemplateControllerPostBulkOrganisationsTemplate: (
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
      }),

    /**
     * No description
     *
     * @tags Role permissions
     * @name RolesControllerGetPermissions
     * @summary Get permissions of a specific role
     * @request GET:/pms/roles/permissions
     * @secure
     */
    rolesControllerGetPermissions: (
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
      }),
  };
  resourceAudits = {
    /**
     * No description
     *
     * @tags Resource Audits
     * @name ResourceAuditControllerFindAll
     * @request GET:/resource-audits
     * @secure
     */
    resourceAuditControllerFindAll: (params: RequestParams = {}) =>
      this.request<ResourceAudit[], any>({
        path: `/resource-audits`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resource Audits
     * @name ResourceAuditControllerCreate
     * @request POST:/resource-audits
     * @secure
     */
    resourceAuditControllerCreate: (data: CreateResourceAuditDto, params: RequestParams = {}) =>
      this.request<ResourceAudit, any>({
        path: `/resource-audits`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resource Audits
     * @name ResourceAuditControllerFindById
     * @request GET:/resource-audits/{id}
     * @secure
     */
    resourceAuditControllerFindById: (id: string, params: RequestParams = {}) =>
      this.request<ResourceAudit, any>({
        path: `/resource-audits/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resource Audits
     * @name ResourceAuditControllerUpdate
     * @request PUT:/resource-audits/{id}
     * @secure
     */
    resourceAuditControllerUpdate: (id: string, data: UpdateResourceAuditDto, params: RequestParams = {}) =>
      this.request<ResourceAudit, any>({
        path: `/resource-audits/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Resource Audits
     * @name ResourceAuditControllerDelete
     * @request DELETE:/resource-audits/{id}
     * @secure
     */
    resourceAuditControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/resource-audits/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
