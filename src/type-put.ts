import { CLASS_STATUS, DAY_OF_WEEK, REGISTERED_PROGRAM_STATUS } from "./type";
import { TClassMeCreate, TLessonRequestSingle } from "./type-post";

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
