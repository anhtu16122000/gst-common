import {
  TAccountBankInfoEntity,
  TAccountEntity,
  TAnswerQuestionEntity,
  TBankEntity,
  TClassEntity,
  TClassNotificationEntity,
  TDistrictEntity,
  TDocumentsEntity,
  TEditorEntity,
  TFileEntity,
  TFileLessonEntity,
  TGroupQuestionEntity,
  THistoryLoginEntity,
  TInternalAccountEntity,
  TLessonEntity,
  TPostCommentEntity,
  TPostEntity,
  TProgramEntity,
  TProgramRatingEntity,
  TProposedLearningEntity,
  TProposedLearningLessonEntity,
  TProvinceEntity,
  TQuestionEntity,
  TQuestionTypeChoiceEntity,
  TQuestionTypeEssayEntity,
  TQuestionTypeWordArrangementEntity,
  TRegisteredProgramEntity,
  TSessionGroupQuestionEntity,
  TStudentEntity,
  TTransactionEntity,
  TTutorEntity,
  TWalletEntity,
  TWithdrawRequestEntity,
} from "./entity";
import {
  ANSWER_QUESTION_TYPE,
  CLASS_STATUS,
  CUSTOMER_TYPE,
  PROPOSED_LEARNING_PAYMENT_STATUS,
  REGISTER_METHOD,
  SESSION_GROUP_QUESTION,
} from "./type";

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
  classNotifications: (Omit<TClassNotificationEntity, "class"> & {
    file: TFileEntity | null;
    editor: TEditorEntity | null;
    groupQuestion:
      | (TGroupQuestionEntity & {
          totalQuestion: number;
          sessionGroupQuestionsLastCreatedAt: string | null;
          sessionGroupQuestionsStatus: SESSION_GROUP_QUESTION | null;
          sessionGroupQuestionId: string | null;
          sessionGroupQuestionsTotalQuestion: number | null;
          totalCorrectQuestion: number;
          totalWaitForGradeQuestion: number;
        })
      | null;
  })[];
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
  status: CLASS_STATUS;
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
  classNotifications: (Omit<TClassNotificationEntity, "class"> & {
    file: TFileEntity | null;
    editor: TEditorEntity | null;
    groupQuestion:
      | (TGroupQuestionEntity & {
          totalQuestion: number;
          sessionGroupQuestionsLastCreatedAt: string | null;
          sessionGroupQuestionsStatus: SESSION_GROUP_QUESTION | null;
          sessionGroupQuestionId: string | null;
          totalCorrectQuestion: number;
          totalWaitForGradeQuestion: number;
          sessionGroupQuestionTotalQuestion: number;
        })
      | null;
  })[];
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
  list: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    paymentStatus: PROPOSED_LEARNING_PAYMENT_STATUS;
    totalFee: number;
    totalLessons: number;
  }[];
  total: number;
};
export type TProposedLearningStudentListRes = {
  list: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    paymentStatus: PROPOSED_LEARNING_PAYMENT_STATUS;
    totalFee: number;
    totalLessons: number;
  }[];
  total: number;
};

export type TProposedLearningDetailRes = TProposedLearningEntity & {
  class: TClassEntity;
  transaction: TTransactionEntity | null;
  totalLessons: number;
  lessons: TLessonEntity[];
};
export type TProposedLearningStudentDetailRes = TProposedLearningEntity & {
  class: TClassEntity;
  transaction: TTransactionEntity | null;
  totalLessons: number;
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
  totalPaidFee: number;
  totalUnpaidFee: number;
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
    file: TFileEntity | null;
    groupQuestion: TGroupQuestionEntity | null;
    editor: TEditorEntity | null;
    totalQuestion: number;
  })[];
  total: number;
};

export type TDocumentProgramListRes = {
  id: string;
  name: string;
  totalFile: number;
  totalSize: number;
  totalEditor: number;
  totalGroupQuestion: number;
}[];

export type TDocumentChangeOrderRes = TDocumentsEntity[];

export type TGroupQuestionCreateRes = TGroupQuestionEntity;

export type TDocumentCreateGroupQuestionRes = TGroupQuestionEntity;
export type TLessonCreateGroupQuestionRes = TGroupQuestionEntity;

export type TGroupQuestionDeleteGroupQuestion = TGroupQuestionEntity & {
  questions: TQuestionEntity &
    {
      choices: TQuestionTypeChoiceEntity[];
      essays: TQuestionTypeEssayEntity[];
      wordArrangements: TQuestionTypeWordArrangementEntity[];
    }[];
};
export type TGroupQuestionDetailRes = TGroupQuestionEntity & {
  questions: (TQuestionEntity & {
    choices: TQuestionTypeChoiceEntity[];
    essays: TQuestionTypeEssayEntity[];
    wordArrangements: TQuestionTypeWordArrangementEntity[];
  })[];
};

export type TGroupQuestionUpdateRes = TGroupQuestionEntity;

export type TLessonImportRes = TLessonEntity & {};
export type TLessonDocumentsRes = TLessonEntity & {
  fileLessons: TFileLessonEntity[];
  editors: TEditorEntity[];
  groupQuestions: (Pick<TGroupQuestionEntity, "id" | "title"> & {
    totalQuestion: number;
    sessionGroupQuestionsLastCreatedAt: string | null;
    sessionGroupQuestionsStatus: SESSION_GROUP_QUESTION | null;
    sessionGroupQuestionId: string | null;
    sessionGroupQuestionsCorrectQuestion: number | null;
    sessionGroupQuestionsTotalQuestion: number | null;
    sessionGroupQuestionsWaitForGradeQuestion: number;
  })[];
  totalQuestion: number;
};
export type TLessonStudentDocumentsRes = TLessonEntity & {
  fileLessons: TFileLessonEntity[];
  editors: TEditorEntity[];
  groupQuestions: (Pick<TGroupQuestionEntity, "id" | "title"> & {
    totalQuestion: number;
    sessionGroupQuestionsLastCreatedAt: string | null;
    sessionGroupQuestionsStatus: SESSION_GROUP_QUESTION | null;
    sessionGroupQuestionId: string | null;
    sessionGroupQuestionsCorrectQuestion: number;
    sessionGroupQuestionsTotalQuestion: number | null;
    sessionGroupQuestionsWaitForGradeQuestion: number;
  })[];
  totalQuestion: number;
};

export type TFileUpdateRes = TFileEntity;
export type TFileLessonUpdateRes = TFileLessonEntity;
export type TGroupQuestionStudentStartDoingRes = TSessionGroupQuestionEntity & {
  student: TAccountEntity;
  createdBy: TAccountEntity;
  groupQuestion: TGroupQuestionEntity;
};
export type TGroupQuestionStudentLessonFinishDoingRes =
  TSessionGroupQuestionEntity;

export type TGroupQuestionStudentResultRes = TSessionGroupQuestionEntity & {
  totalCorrectQuestion: number;
  totalWaitForGradeQuestion: number;
  groupQuestion: TGroupQuestionEntity & {
    questions: (TQuestionEntity & {
      answerType: ANSWER_QUESTION_TYPE;
      feedbackContent: string | null;
      commentContent: string | null;
      answerQuestionId: string;
      choices: (TQuestionTypeChoiceEntity & { isChosen: boolean })[];
      essays: TQuestionTypeEssayEntity[];
      wordArrangements: (TQuestionTypeWordArrangementEntity & {
        chosenOrder: number;
      })[];
      answers: TAnswerQuestionEntity[];
      answerText?: string;
      file?: TFileEntity;
    })[];
  };
};
export type TGroupQuestionResultRes = TSessionGroupQuestionEntity & {
  totalCorrectQuestion: number;
  totalWaitForGradeQuestion: number;
  sessionGroupQuestionsWaitForGradeQuestion: number;
  groupQuestion: TGroupQuestionEntity & {
    questions: (TQuestionEntity & {
      file: TFileEntity;
      commentContent: string | null;
      feedbackContent: string | null;
      answerType: ANSWER_QUESTION_TYPE;
      answerQuestionId: string;
      choices: (TQuestionTypeChoiceEntity & { isChosen: boolean })[];
      essays: TQuestionTypeEssayEntity[];
      wordArrangements: (TQuestionTypeWordArrangementEntity & {
        chosenOrder: number;
      })[];
      answers: TAnswerQuestionEntity[];
      answerText?: string;
    })[];
  };
};
export type TGroupQuestionStudentDraftRes = TSessionGroupQuestionEntity;

export type TDocumentCreateEditorRes = TDocumentsEntity & {
  editor: TEditorEntity;
  program: TProgramEntity;
};

export type TDocumentDeleteEditorRes = TDocumentsEntity & {
  editor: TEditorEntity;
};

export type TEditorUpdateRes = TEditorEntity;

export type TLessonCreateEditorRes = TEditorEntity & {
  lesson: TLessonEntity;
};

export type TEditorDeleteRes = TEditorEntity;
export type TEditorDetailRes = TEditorEntity;
export type TEditorStudentDetailRes = TEditorEntity;

export type TClassNotificationImportRes = TClassNotificationEntity;
export type TClassNotificationAddGroupQuestionRes = TClassNotificationEntity;
export type TClassNotificationCreateEditorRes = TClassNotificationEntity;

export type TClassNotificationUploadRes = TClassNotificationEntity;

export type TFileDeleteRes = TFileEntity;

export type TLessonAllDocumentsRes = {
  lessons: (Omit<TLessonEntity, "class"> & {
    fileLessons: TFileLessonEntity[];
    editors: TEditorEntity[];
    groupQuestions: (TGroupQuestionEntity & {
      totalQuestion: number;
      sessionGroupQuestionsLastCreatedAt: string | null;
      sessionGroupQuestionsStatus: SESSION_GROUP_QUESTION | null;
      sessionGroupQuestionId: string | null;
      totalWaitForGradeQuestion: number;
      sessionGroupQuestionTotalQuestion: number;
      totalCorrectQuestion: number;
    })[];
  })[];
  total: number;
};
export type TLessonStudentAllDocumentsRes = {
  lessons: (Omit<TLessonEntity, "class"> & {
    fileLessons: TFileLessonEntity[];
    editors: TEditorEntity[];
    groupQuestions: (TGroupQuestionEntity & {
      totalQuestion: number;
      sessionGroupQuestionsLastCreatedAt: string | null;
      sessionGroupQuestionsStatus: SESSION_GROUP_QUESTION | null;
      sessionGroupQuestionId: string | null;
      totalWaitForGradeQuestion: number;
      sessionGroupQuestionTotalQuestion: number;
      totalCorrectQuestion: number;
    })[];
  })[];
  total: number;
};

export type TClassStatisticGroupByClassRes = {
  classId: string;
  className: string;
  totalCompletedHours: number;
  totalCompleted: number;
  totalCompletedTuition: number;
  totalPaidFee: number;
  totalUnpaidFee: number;
}[];
export type TClassStudentStatisticGroupByClassRes = {
  classId: string;
  className: string;
  totalCompletedHours: number;
  totalCompleted: number;
  totalCompletedTuition: number;
  totalPaidFee: number;
  totalUnpaidFee: number;
}[];

export type TProgramRatingStudentCreateRatingRes = TProgramRatingEntity;
export type TProgramRatingStudentUpdateRatingRes = TProgramRatingEntity;
export type TProgramRatingStudentDeleteRatingRes = TProgramRatingEntity;

export type TProgramRatingUploadRes = TFileEntity;

export type TProgramRatingPublicListRes = {
  programRatings: (TProgramRatingEntity & {
    files: TFileEntity[];
    createdBy: TAccountEntity;
    program: TProgramEntity;
    class: TClassEntity & {
      totalHourCompleted: number;
      totalLessonCompleted: number;
    };
  })[];
  total: number;
};

export type TProgramRatingPublicCountByScoreRes = {
  scoreTotal: number;
  averageScore: number;
  score1: number;
  score2: number;
  score3: number;
  score4: number;
  score5: number;
};

export type TProgramRatingStudentHasRatedRes = (TProgramRatingEntity & {
  files: TFileEntity[];
  class: TClassEntity & {
    totalHourCompleted: number;
    totalLessonCompleted: number;
  };
  program: TProgramEntity;
})[];

export type TProgramRatingStudentCanRateRes = (TClassEntity & {
  program: TProgramEntity;
})[];

export type TPostAllCreateDiscussionRes = TPostEntity;
export type TPostAllUpdateDiscussionRes = TPostEntity;

export type TPostAllUploadRes = TFileEntity;

export type TPostAllMyPostRes = {
  total: number;
  posts: (TPostEntity & {
    files: TFileEntity[];
    totalComments: number;
    totalUpvote: number;
    hasUpvoted: boolean;
  })[];
};

export type TPostAllCommentRes = TPostCommentEntity & {
  createdBy: TAccountEntity;
  post: TPostEntity;
};
export type TPostAllReplyCommentRes = TPostCommentEntity & {
  createdBy: TAccountEntity;
  parent: TPostCommentEntity;
};

export type TPostPublicListCommentRes = {
  comments: (TPostCommentEntity & {
    upvoteCount: number;
    replyCount: number;
    hasUpvoted: boolean;
    createdBy: TAccountEntity;
    updatedBy: TAccountEntity;
  })[];
  total: number;
};

export type TPostPublicNewFeedsRes = {
  posts: (TPostEntity & {
    totalUpvote: number;
    totalComments: number;
    hasUpvoted: boolean;
    files: TFileEntity[];
    createdBy: TAccountEntity;
    updatedBy: TAccountEntity;
  })[];
  total: number;
};

export type TPostAllCommentUpdateRes = TPostCommentEntity & {
  updatedBy: TAccountEntity;
};

export type TPostAllCommentDeleteRes = TPostCommentEntity;

export type TAccountPublicPreviewRes = Omit<TAccountEntity, "student"> & {
  student:
    | (TStudentEntity & {
        totalProgram: number;
      })
    | null;
  hasFollowed: boolean;
  totalFollower: number;
  isMe: boolean;
};

export type TAccountPublicListFollowerRes = TAccountEntity & {
  followers: TAccountEntity[];
};

export type TAccountPublicListFollowingRes = TAccountEntity & {
  following: TAccountEntity[];
};

export type TAccountPublicDetailRes = Omit<TAccountEntity, "student"> & {
  student:
    | (TStudentEntity & {
        totalProgram: number;
      })
    | null;
  hasFollowed: boolean;
  totalFollower: number;
  isMe: boolean;
};
export type TPostAllListPostByAccountRes = {
  posts: (TPostEntity & {
    createdBy: TAccountEntity;
    files: TFileEntity[];
    hasUpvoted: boolean;
    totalUpvote: number;
    totalComment: number;
  })[];
  total: number;
};

export type TProgramPublicListRes = {
  programs: (TProgramEntity & {
    averageRating: number;
    totalRating: number;
  })[];
  total: number;
};

export type TFileUploadCommonRes = TFileEntity & {
  createdBy: TAccountEntity;
};
export type TGroupQuestionSendFeedbackRes = TAnswerQuestionEntity;
export type TGroupQuestionSendCommentRes = TAnswerQuestionEntity;
export type TGroupQuestionChangeAnswerQuestionTypeRes = TAnswerQuestionEntity;

export type TProgramPublicLearnedProgramRes = {
  programs: (TProgramEntity & {
    account: TAccountEntity;
    totalCompletedHours: number;
    totalCompletedLessons: number;
    classes: TClassEntity[];
    latestClass: TClassEntity;
  })[];
  total: number;
};

export type TBankPublicListRes = TBankEntity[];

export type TAccountForgotHashedPinRes = {
  remainingSeconds: number;
};

export type TAccountEnterOTPForgotHashedPinRes = {
  keyForgot: string;
};

export type TAccountBankInfoCreateRes = TAccountBankInfoEntity & {
  account: TAccountEntity;
  bank: TBankEntity;
};

export type TAccountBankInfoUpdateRes = TAccountBankInfoEntity & {
  account: TAccountEntity;
  bank: TBankEntity;
};

export type TAccountBankInfoCurrentRes = TAccountBankInfoEntity & {
  account: TAccountEntity;
  bank: TBankEntity;
};

export type TWalletInfoRes = TWalletEntity;

export type TWithdrawRequestAddRes = TWalletEntity;

export type TWithdrawRequestListRes = {
  list: (TWithdrawRequestEntity & {
    transaction: TTransactionEntity;
  })[];
  total: number;
};
export type TTransactionAllListRes = {
  list: TTransactionEntity[];
  total: number;
};
export type TInternalAccountNewRes = TInternalAccountEntity;
export type TInternalAccountListRes = {
  accounts: TInternalAccountEntity[];
  total: number;
};

export type TInternalAccountLoginRes = {
  accessToken: string;
  account: TInternalAccountEntity;
  refreshId: string;
  expiredRefresh: Date;
  newHistoryLogin: THistoryLoginEntity;
};

export type TWithDrawRequestInternalListRes = {
  list: (TWithdrawRequestEntity & {
    account: TAccountEntity;
    transaction: TTransactionEntity;
  })[];
  total: number;
};

export type TWithDrawRequestInternalGetOrCreateTransactionRes = {
  transaction?: TTransactionEntity;
  bankInfo?: TAccountBankInfoEntity & {
    bank: TBankEntity;
  };
};
export type TWithdrawRequestCancelRes = TWithdrawRequestEntity;
export type TWithdrawRequestCurrentWithdrawRes = TWithdrawRequestEntity;

export type TTutorPublicListRes = {
  tutors: (TTutorEntity & {
    account: TAccountEntity;
    province: TProvinceEntity;
    district: TDistrictEntity;
  })[];
  total: number;
};
