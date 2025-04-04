import {
  TClassEntity,
  TLessonEntity,
  TProgramEntity,
  TRegisteredProgramEntity,
} from "./entity";
import { CUSTOMER_TYPE, REGISTER_METHOD } from "./type";

export type AccountSignInResponse = {
  accessToken: string;
  account: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    fullname: string;
    type: CUSTOMER_TYPE;
    registerMethod: REGISTER_METHOD;
    username: string;
    avatar: string | null;
    providerId: string;
  };
  refreshId: string;
  expiredRefresh: string;
};

export type AccountPostMeResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  fullname: string;
  type: CUSTOMER_TYPE;
  registerMethod: REGISTER_METHOD;
  username: string;
  avatar: string | null;
  providerId: string;
};

export type TRegisteredProgramCreateRes = TRegisteredProgramEntity;

export type TRegisteredProgramListSentMeRes = {
  registeredPrograms: TRegisteredProgramEntity[];
  total: number;
};

export type TProgramRegisteredMeTutorEditRes = TRegisteredProgramEntity;
export type TClassMeCreateRes = TClassEntity;

export type TProgramOptionsMeRes = {
  programs: Pick<TProgramEntity, "id" | "name">[];
  count: number;
};

export type TLessonRequestRes = TLessonEntity[];
export type TLesson = {
  startTime: string;
  endTime: string;
  classId: string;
  className: string;
};

export type TLessonRequestFailedOverlappedData = {
  type: TLessonRequestResFailType;
  conflicts: Record<
    string,
    {
      newLesson: Omit<TLesson, "classId" | "className">;
      conflictingLessons: TLesson[];
    }
  >;
};

enum TLessonRequestResFailType {
  OVERLAPPED = "OVERLAPPED",
}

export type TLessonListMeTutorRes = {
  lessons: TLessonEntity[];
  total: number;
};

export type TClassMeDetailRes = Omit<TClassEntity, "tutor">;
export type TLessonPrepareRes = {
  id: string;
  startTime: string;
  endTime: string;
  overlapItems: {
    id: string;
    startTime: string;
    endTime: string;
    classId: string;
    className: string;
  }[];
}[];
