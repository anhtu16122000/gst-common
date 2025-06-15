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
  createdBy: TAccountEntity | null;
  updatedBy: TAccountEntity | null;
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

export enum NOTIFICATION_STATUS {
  UNREAD = "UNREAD",
  READ = "READ",
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

export enum SORT_TYPE {
  ASC = "ASC",
  DESC = "DESC",
}

export enum CLASS_STATUS {
  WAIT_FOR_ACCEPTING = "WAIT_FOR_ACCEPTING",
  HAPPENING = "HAPPENING",
  PENDING = "PENDING",
  FINISHED = "FINISHED",
  CANCELED = "CANCELED",
}

export enum CLASS_STATUS_TUTOR_EDIT {
  HAPPENING = CLASS_STATUS.HAPPENING,
  PENDING = CLASS_STATUS.PENDING,
  FINISHED = CLASS_STATUS.FINISHED,
}
export enum CLASS_STATUS_STUDENT_EDIT {
  CANCELED = CLASS_STATUS.CANCELED,
  HAPPENING = CLASS_STATUS.HAPPENING,
}

export enum LESSON_ACTIVITY_STATUS {
  NEW = "NEW",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
}

export enum DAY_OF_WEEK {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export enum QUESTION_TYPES {
  CHOICES = "CHOICES",
  ESSAY = "ESSAY",
  WORD_ARRANGEMENT = "WORD_ARRANGEMENT",
  SPEAKING = "SPEAKING",
  TEXT = "TEXT",
}
export enum SESSION_GROUP_QUESTION {
  IN_PROCESS = "IN_PROCESS",
  FINISHED = "FINISHED",
}

export enum PROGRAM_DETAIL_TABS {
  INTRODUCTION = "INTRODUCTION",
  RATING = "RATING",
}

export enum POST_TYPE {
  DOCUMENT_SHARE = "DOCUMENT_SHARE",
  DISCUSSION = "DISCUSSION",
}
export enum ANSWER_QUESTION_TYPE {
  WAIT_FOR_GRADE = "WAIT_FOR_GRADE",
  RIGHT = "CORRECT",
  WRONG = "INCORRECT",
}
