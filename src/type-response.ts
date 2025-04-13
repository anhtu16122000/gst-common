import {
  TClassEntity,
  TClassNotificationEntity,
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
  fee: number;
  overlapItems: {
    id: string;
    startTime: string;
    endTime: string;
    classId: string;
    className: string;
  }[];
}[];
export type TLessonCheckOverlapRes = {
  overlapLessons: TLessonEntity[];
  extendOverlapLessons: { startTime: string; endTime: string }[];
};

export type TLessonRequestSingleRes = TLessonEntity;
export type TLessonEditRes = TLessonEntity;

export type TDeletableLessonsRes = {
  deletableLessons: Omit<TLessonEntity, "class">[];
  total: number;
};

export type TDeleteDeletableLessonsRes = {
  deletedCount: number;
};

export type TCLassStatisticRes = {
  total: number;
  totalCompleted: number;
  totalNew: number;
  totalCancelled: number;
  totalConfirmed: number;
  totalPaid: number;
  totalUnconfirmed: number;
  totalUnpaid: number;
  totalFee: number;
  totalCompletedFee: number;
  totalNewFee: number;
  totalCancelledFee: number;
  totalConfirmedFee: number;
  totalPaidFee: number;
  totalUnconfirmedFee: number;
  totalUnpaidFee: number;
};

export type TClassNotificationCreateRes = TClassNotificationEntity;
export type TClassNotificationUpdateRes = TClassNotificationEntity;
export type TClassNotificationListRes = {
  classNotifications: Omit<TClassNotificationEntity, "class">[];
  total: number;
};

export type TClassMeListRes = {
  classes: Omit<TClassEntity, "registeredProgram" | "learningTimes">[];
  total: number;
};

export type TClassCountStatusRes = {
  total: number;
  totalFinish: number;
  totalHappening: number;
  totalPending: number;
  totalWaitingForAccepting: number;
};
export type TRegisteredProgramCountStatusRes = {
  total: number;
  totalAccepted: number;
  totalRejected: number;
  totalNew: number;
  totalTested: number;
};

export type TClassSelectOptionsRes = {
  id: string;
  name: string;
  student: {
    id: string;
    fullname: string;
    avatar: string;
  };
}[];
