import {
  TClassEntity,
  TClassNotificationEntity,
  TDocumentsEntity,
  TFileEntity,
  TFileLessonEntity,
  TLessonEntity,
  TProgramEntity,
  TProposedLearningEntity,
  TProposedLearningLessonEntity,
  TRegisteredProgramEntity,
} from "./entity";
import { CLASS_STATUS, CUSTOMER_TYPE, REGISTER_METHOD } from "./type";

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
  lessons: (TLessonEntity & {
    proposedLearningLesson: TProposedLearningLessonEntity;
  })[];
  total: number;
};

export type TClassMeDetailRes = Omit<TClassEntity, "tutor">;
export type TClassStudentDetailRes = Omit<TClassEntity, "student">;
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
  totalHourCompleted: number;
};
export type TCLassStudentStatisticRes = {
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
  totalHourCompleted: number;
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
  totalCancelled: number;
};
export type TClassStudentCountStatusRes = {
  total: number;
  totalFinish: number;
  totalHappening: number;
  totalPending: number;
  totalWaitingForAccepting: number;
  totalCancelled: number;
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
export type TClassStudentSelectOptionsRes = {
  id: string;
  name: string;
  tutor: {
    id: string;
    fullname: string;
    avatar: string;
  };
}[];

export type TClassUpdateRes = TClassEntity;

export type TTutorListStudentsRes = {
  students: {
    studentId: string;
    studentName: string;
    lastJoinedAt: string;
    studentAvatar: string | null;
    phoneNumber: string | null;
    classes: {
      classId: string;
      className: string;
      classStatus: CLASS_STATUS;
      classCreatedAt: string;
    }[];
  }[];
  total: number;
};

export type TProgramStudentCheckAllowRegister = {
  timeAllow: string | null;
  maxCreateAt: string | null;
  allow: boolean;
};

export type TClassStudentListRes = {
  classes: TClassEntity[];
  count: number;
};

export type TLessonStudentListRes = {
  lessons: TLessonEntity[];
  total: number;
};

export type TClassStudentChangeStatusRes = TClassEntity;

export type TLessonListUnconfirmedRes = TLessonEntity[];

export type TLessonConfirmRes = number;

export type TClassNotificationStudentListRes = {
  classNotifications: TClassNotificationEntity[];
  total: number;
};
export type TCompletedAndNotPaidLessonsRes = (TLessonEntity & {
  proposedLearningLesson: TProposedLearningLessonEntity & {
    proposedLearning: TProposedLearningEntity;
  };
})[];
export type TLessonStudentCompletedAndNotPaidLessonsRes = (TLessonEntity & {
  proposedLearningLesson: TProposedLearningLessonEntity & {
    proposedLearning: TProposedLearningEntity;
  };
})[];

export type TProposedLearningCreateRes = TProposedLearningEntity;

export type TProposedLearningListRes = {
  list: (TProposedLearningEntity & {
    hasPaid: boolean;
    totalLessons: number;
    totalTuition: number;
  })[];
  total: number;
};
export type TProposedLearningStudentListRes = {
  list: (TProposedLearningEntity & {
    hasPaid: boolean;
    totalLessons: number;
    totalTuition: number;
  })[];
  total: number;
};

export type TProposedLearningDetailRes = TProposedLearningEntity & {
  class: TClassEntity;
  hasPaid: boolean;
  totalLessons: number;
  totalTuition: number;
  lessons: TLessonEntity[];
};
export type TProposedLearningStudentDetailRes = TProposedLearningEntity & {
  class: TClassEntity;
  hasPaid: boolean;
  totalLessons: number;
  totalTuition: number;
  lessons: TLessonEntity[];
};

export type TProposedLearningEditRes = TProposedLearningEntity & {
  class: TClassEntity;
  proposedLearningLessons?: TProposedLearningLessonEntity[];
};

export type TClassStatisticGroupByMonthRes = {
  month: number;
  totalCompletedHours: number;
  totalCompleted: number;
  totalCompletedTuition: number;
}[];
export type TClassStudentStatisticGroupByMonthRes = {
  month: number;
  totalCompletedHours: number;
  totalCompleted: number;
  totalCompletedTuition: number;
}[];

export type TLessonDetailRes = TLessonEntity & {
  class: TClassEntity;
  proposedLearningLesson: TProposedLearningLessonEntity;
};
export type TLessonStudentDetailRes = TLessonEntity & {
  class: TClassEntity;
  proposedLearningLesson: TProposedLearningLessonEntity;
};

export type TFileLessonUploadRes = TFileLessonEntity & {
  lesson: TLessonEntity;
};

export type TFileLessonListRes = TFileLessonEntity[];

export type TFileLessonStudentListRes = TFileLessonEntity[];

export type TDocumentUploadRes = TDocumentsEntity & {
  file: TFileEntity;
};

export type TDocumentDeleteFileRes = TDocumentsEntity;

export type TDocumentListRes = {
  documents: (TDocumentsEntity & {
    program: TProgramEntity;
    file: TFileEntity;
  })[];
  total: number;
};

export type TDocumentProgramListRes = {
  id: string;
  name: string;
  totalFile: number;
  totalSize: number;
}[];

export type TDocumentChangeOrderRes = TDocumentsEntity[];
