import {
  BasePaginationParams,
  PROGRAM_METHOD,
  REGISTERED_PROGRAM_STATUS,
  SORT_TYPE,
} from "./type";

export type TRegisteredProgramCreatePost = {
  studentNote?: string;
  studentPhoneNumber?: string;
  studentProgramMethodDesired?: PROGRAM_METHOD;
  studentProvinceCode?: string;
  studentDistrictCode?: string;
  addressStudent?: string;
  studentInterestedProgramId: string;
};

export type TRegisteredProgramListSentMeDTO = {
  status?: REGISTERED_PROGRAM_STATUS;
  sortCreatedAt?: SORT_TYPE;
  programId?: string;
  studentName?: string;
} & BasePaginationParams;

export type TClassMeCreate = {
  name: string;
  programId: string;
  registeredProgramId: string;
  studentId: string;
  note?: string;
};

export type TProgramOptionsMe = {} & BasePaginationParams;
