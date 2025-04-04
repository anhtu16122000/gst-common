import {
  BasePaginationParams,
  CLASS_STATUS,
  DAY_OF_WEEK,
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
  feePerLesson?: number;
  programId: string;
  registeredProgramId: string;
  studentId: string;
  note?: string;
  classLearningTime?: {
    startTime: string;
    endTime: string;
    dayOfWeek: DAY_OF_WEEK;
  }[];
};

export type TProgramOptionsMe = {} & BasePaginationParams;

export type TClassMeList = {
  status?: CLASS_STATUS;
  programId?: string;
  name?: string;
} & BasePaginationParams;

export type TLessonRequest = {
  classId: string;
  lessons: { startTime: string; endTime: string; note?: string; fee: number }[];
};

export type TLessonListMeTutor = {
  fromDate: string;
  toDate: string;
  classId?: string;
} & BasePaginationParams;

export type TClassMeDetail = {
  id: string;
};

export type TLessonPrepare = {
  rangeDate?: {
    startTime: string;
    endTime: string;
  };
  numberOfLesson?: number;
  startDate?: string;
  classLearningTimes?: {
    startTime: string;
    endTime: string;
    dayOfWeek: DAY_OF_WEEK;
  }[];
};
