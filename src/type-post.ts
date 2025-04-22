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
export type TLessonRequestDTO = {
  startTime: string;
  endTime: string;
  note?: string;
  fee: number;
};

export type TLessonRequest = {
  classId: string;
  lessons: TLessonRequestDTO[];
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
  fee: number;
  numberOfLesson?: number;
  startDate?: string;
  classLearningTimes?: {
    startTime: string;
    endTime: string;
    dayOfWeek: DAY_OF_WEEK;
  }[];
};

export type TLessonRequestSingle = { classId: string } & TLessonRequestDTO;

export type TExtendLessonTimesDTO = {
  startTime: string;
  endTime: string;
};
export type TLessonCheckOverlap = {
  exceptedLessonId?: string;
  startTime: string;
  endTime: string;
  extendLessonTimes?: TExtendLessonTimesDTO[];
};

export type TCLassStatistic = {
  classId: string;
  startTime?: string;
  endTime?: string;
};

export type TClassNotificationCreate = {
  classId: string;
  description: string;
};
export type TClassNotificationUpdate = {
  id: string;
} & Omit<TClassNotificationCreate, "classId">;

export type TClassNotificationList = {
  classId: string;
} & BasePaginationParams;

export type TTutorListStudents = {
  fullname?: string;
  createdAtSort?: SORT_TYPE;
} & BasePaginationParams;

export type TClassStudentList = {
  status?: CLASS_STATUS;
  name?: string;
} & BasePaginationParams;

export type TLessonStudentList = {
  classId: string;
  fromDate: string;
  toDate: string;
} & BasePaginationParams;

export type TCLassStudentStatistic = {
  classId: string;
  startTime?: string;
  endTime?: string;
};

export type TClassNotificationStudentList = {
  classId: string;
} & BasePaginationParams;

export type TClassCountStatus = {
  name?: string;
};

export type TRegisteredProgramCountStatus = {
  studentName?: string;
};

export type TClassStudentCountStatus = {
  name?: string;
};

export type TProposedLearningCreate = {
  classId: string;
  title: string;
  description?: string;
  proposedLessonIds: string[];
};

export type TProposedLearningList = {
  classId: string;
  title?: string;
} & BasePaginationParams;

export type TProposedLearningDetail = {
  id: string;
};
