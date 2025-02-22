export enum CUSTOMER_TYPE {
  TUTOR = "tutor",
  STUDENT = "student",
}

export enum REGISTER_METHOD {
  EMAIL = "email",
  GOOGLE = "google",
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


