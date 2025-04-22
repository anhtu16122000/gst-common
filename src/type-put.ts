import {
  CLASS_STATUS,
  CLASS_STATUS_STUDENT_EDIT,
  DAY_OF_WEEK,
  REGISTERED_PROGRAM_STATUS,
} from "./type";
import {
  TClassMeCreate,
  TLessonRequestSingle,
  TProposedLearningCreate,
} from "./type-post";

export type TProgramRegisteredMeTutorEdit = {
  id: string;
  note?: string;
  status?: REGISTERED_PROGRAM_STATUS;
};

export type TLessonEdit = {
  id: string;
} & Omit<Partial<TLessonRequestSingle>, "classId">;

export type ClassLearningTimeDTO = {
  startTime: string;
  endTime: string;
  dayOfWeek: DAY_OF_WEEK;
};

export type TClassUpdate = {
  status?: CLASS_STATUS;
} & Partial<Omit<TClassMeCreate, "studentId" | "registeredProgramId">>;

export type TClassStudentChangeStatus = {
  status: CLASS_STATUS_STUDENT_EDIT;
};

export type TLessonConfirm = {
  lessonIds: string[];
};

export type TProposedLearningEdit = {
  id: string;
} & Partial<Omit<TProposedLearningCreate, "classId">>;
