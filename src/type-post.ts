import {
  ANSWER_QUESTION_TYPE,
  BasePaginationParams,
  CLASS_STATUS,
  DAY_OF_WEEK,
  POST_TYPE,
  PROGRAM_METHOD,
  QUESTION_TYPES,
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
  classId?: string;
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
  search?: string;
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
  classId?: string;
  fromDate: string;
  toDate: string;
} & BasePaginationParams;

export type TCLassStudentStatistic = {
  classId?: string;
  startTime?: string;
  endTime?: string;
};

export type TClassNotificationStudentList = {
  classId: string;
  search?: string;
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
export type TProposedLearningStudentList = {
  classId: string;
  title?: string;
} & BasePaginationParams;

export type TProposedLearningDetail = {
  id: string;
};
export type TProposedLearningStudentDetail = {
  id: string;
};

export type TClassStatisticGroupByMonth = {
  classId?: string;
  numberOfYear: number;
};
export type TClassStudentStatisticGroupByMonth = {
  classId?: string;
  numberOfYear: number;
};

export type TDocumentUpload = {
  file: any;
  programId: string;
  name: string;
};

export type TDocumentList = {
  search?: string;
  programId?: string;
} & BasePaginationParams;

export type TDocumentChangeOrder = {
  programId: string;
  documents: {
    documentId: string;
    order: number;
  }[];
};

export type TGroupQuestionCreate = {
  title: string;
  content: string;
  questions: {
    explain: {
      content: string;
      show: boolean;
    };
    content?: string;
    order: number;
    type: QUESTION_TYPES;
    wordArrangement?: {
      content: string;
      sortOrder: number;
      correctOrder: number;
    }[];
    choices?: {
      content: string;
      isCorrect: boolean;
    }[];
    essay?: { correctAnswer: string }[];
  }[];
};

export type TDocumentCreateGroupQuestion = {
  programId: string;
  groupQuestion: TGroupQuestionCreate;
};
export type TLessonCreateGroupQuestion = {
  lessonId: string;
  groupQuestion: TGroupQuestionCreate;
};

export type TGroupQuestionUpdate = {
  id: string;
} & Partial<TGroupQuestionCreate>;

export type TLessonImport = {
  lessonId: string;
  documentIds: string[];
};

export type TSubmitGroupQuestion = {
  questionId: string;
  choices?: {
    id: string;
  }[];
  wordArrangements?: {
    id: string;
    chosenOrder: number;
  }[];
  essay?: { essay?: string };
  speaking?: { audioId?: string | null };
}[];
export type TGroupQuestionStudentFinishDoing = {
  sessionGroupQuestionId: string;
  answers: TSubmitGroupQuestion;
};
export type TGroupQuestionStudentDraft = {
  sessionGroupQuestionId: string;
  answers: TSubmitGroupQuestion;
};

export type TDocumentCreateEditor = {
  programId: string;
  title: string;
  content: string;
};

export type TLessonCreateEditor = {
  lessonId: string;
} & Omit<TDocumentCreateEditor, "programId">;
export type TClassNotificationImport = {
  classId: string;
  documentIds: string[];
};
export type TClassNotificationAddGroupQuestion = {
  classId: string;
  groupQuestion: TGroupQuestionCreate;
};

export type TClassNotificationCreateEditor = {
  classId: string;
} & Omit<TDocumentCreateEditor, "programId">;
export type TClassNotificationUpload = {
  file: any;
  fileName: string;
};
export type TFileLessonUpload = {
  file: any;
  fileName: string;
};

export type TLessonAllDocuments = {
  search?: string;
  classId: string;
} & BasePaginationParams;
export type TLessonStudentAllDocuments = {
  search?: string;
  classId: string;
} & BasePaginationParams;

export type TClassStatisticGroupByClass = {
  numberOfYear: number;
  monthOfYear: number;
};
export type TClassStudentStatisticGroupByClass = {
  numberOfYear: number;
  monthOfYear: number;
};

export type TProgramRatingStudentCreateRating = {
  classId: string;
  score: number;
  comment: string;
  fileIds?: string[];
};

export type TProgramRatingStudentUpdateRating = {
  id: string;
} & Partial<Omit<TProgramRatingStudentCreateRating, "classId">>;

export type TProgramRatingUpload = {
  name: string;
  file: any;
};

export type TProgramRatingPublicList = {
  programId?: string;
  ownerProgramId?: string;
  score?: number;
} & BasePaginationParams;

export type TProgramRatingStudentHasRated = {
  programId?: string;
};

export type TProgramRatingStudentCanRate = {
  programId?: string;
};
export type TPostAllCreateDiscussion = {
  title: string;
  content?: string;
  fileIds?: string[];
};

export type TPostAllUpdateDiscussion = {
  id: string;
} & Partial<TPostAllCreateDiscussion>;

export type TPostAllUpload = {
  name: string;
  file: any;
};

export type TPostAllMyPost = {
  type?: POST_TYPE;
} & BasePaginationParams;

export type TPostAllComment = {
  content: string;
  postId: string;
};

export type TPostAllReplyComment = {
  content: string;
  commentId: string;
};

export type TPostAllRemoveUpvote = {
  postId: string;
};

export type TPostPublicListComment = {
  postId?: string;
  commentId?: string;
} & BasePaginationParams;
export type TPostPublicNewFeeds = {} & BasePaginationParams;

export type TPostAllCommentUpdate = {
  commentId: string;
  content: string;
};

export type TAccountFollow = {
  followerIds: string[];
};

export type TPostAllListPostByAccount = {
  accountId: string;
  type?: POST_TYPE;
} & BasePaginationParams;

export type TProgramPublicList = {
  search?: string;
  accountId?: string;
} & BasePaginationParams;

export type TProgramRatingPublicCountByScore = {
  programId?: string;
  ownerProgramId?: string;
};

export type TGroupQuestionSendFeedback = {
  content: string;
  answerQuestionId: string;
};

export type TGroupQuestionChangeAnswerQuestionType = {
  answerQuestionId: string;
  type: ANSWER_QUESTION_TYPE;
};

export type TProgramPublicLearnedProgram = {
  studentAccountId: string;
} & BasePaginationParams;

export type TClassSelectOptions = {
  status?: CLASS_STATUS;
};

export type TBankPublicList = {
  name?: string;
};

export type TAccountHashedPin = {
  hashedPin: string;
};

export type TAccountChangeHashedPin = {
  oldPin: string;
  newPin: string;
};

export type TAccountEnterOTPForgotHashedPin = {
  otp: string;
};

export type TChangeForgotHashedPin = {
  keyForgot: string;
  newHashedPin: string;
};

export type TAccountBankInfoCreate = {
  bankNumber: string;
  receiverName: string;
  bankId: string;
};

export type TAccountBankInfoUpdate = {
  id: string;
} & Partial<TAccountBankInfoCreate>;

export type TAccountVerifyPin = {
  pin: string;
};
