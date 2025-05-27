import {
  CLASS_STATUS,
  CLASS_STATUS_STUDENT_EDIT,
  DAY_OF_WEEK,
  LESSON_ACTIVITY_STATUS,
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
  status?: LESSON_ACTIVITY_STATUS;
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

export type TFileUpdate = {
  name: string;
  id: string;
};
export type TFileLessonUpdate = {
  name: string;
  id: string;
};

export type TEditorUpdate = {
  id: string;
  title?: string;
  content?: string;
};
