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
  data?: T;
};
