import { TAccountEntity } from "./entity";

export enum CUSTOMER_TYPE {
  TUTOR = "tutor",
  STUDENT = "student",
}

export enum REGISTER_METHOD {
  EMAIL = "email",
  GOOGLE = "google",
}
export enum GENDER {
  MALE = "male",
  FEMALE = "female",
}

export enum PROGRAM_METHOD {
  ONLINE = "online",
  OFFLINE = "offline",
  ONLINE_OFFLINE = "online/offline",
}

export enum ResponseStatus {
  Success = "success",
  BadRequest = "bad_request",
  NotFound = "not_found",
  Unauthorized = "unauthorized",
  Forbidden = "forbidden",
  InternalServerError = "internal_server_error",
}

export type BaseResponse<T = any> = {
  status: ResponseStatus;
  message: string;
  data: T;
};
export type BasePaginationParams = {
  page?: number;
  limit?: number;
};

export type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  createdBy?: TAccountEntity;
  updatedBy?: TAccountEntity;
};

export type DATA_THIRD_PARTY_LOGIN = {
  fullname: string;
  providerId: string;
  provider: REGISTER_METHOD;
  avatar?: string;
};

export enum PROGRAM_SUITABLE_LEARNER {
  PRIMARY_STUDENT = "primary_student",
  SECONDARY_STUDENT = "secondary_student",
  HIGHT_SCHOOL_STUDENT = "hight_school_student",
  UNIVERSITY_STUDENT = "university_student",
  WORKING_PEOPLE = "working_people",
}

export enum SCHOOL_STATUS {
  CURRENT = "CURRENT",
  GRADUATED = "GRADUATED",
}

export enum NOTIFICATION_TYPE {
  PROGRAM_REGISTER = "program_register",
  STANDARD = "STANDARD",
}

export enum REGISTERED_PROGRAM_STATUS {
  NEW = "NEW",
  TESTED = "TESTED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export enum REFRESH_TYPE {
  NOTIFICATION = "NOTIFICATION",
}
