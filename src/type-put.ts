import { REGISTERED_PROGRAM_STATUS } from "./type";
import { TLessonRequestSingle } from "./type-post";

export type TProgramRegisteredMeTutorEdit = {
  id: string;
  note?: string;
  status?: REGISTERED_PROGRAM_STATUS;
};

export type TLessonEdit = {
  id: string;
} & Omit<Partial<TLessonRequestSingle>, "classId">;
