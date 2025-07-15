import {
  BaseEntity,
  BaseInternalEntity,
  CLASS_STATUS,
  CUSTOMER_TYPE,
  DAY_OF_WEEK,
  INTERNAL_ROLE,
  LESSON_ACTIVITY_STATUS,
  NOTIFICATION_STATUS,
  NOTIFICATION_TYPE,
  POST_TYPE,
  PROGRAM_METHOD,
  PROGRAM_SUITABLE_LEARNER,
  PROPOSED_LEARNING_PAYMENT_STATUS,
  QUESTION_TYPES,
  REGISTER_METHOD,
  REGISTERED_PROGRAM_STATUS,
  SCHOOL_STATUS,
  SESSION_GROUP_QUESTION,
  TRANSACTION_GATEWAY,
  TRANSACTION_STATUS,
  TRANSACTION_TYPE,
  WITHDRAW_REQUEST_STATUS,
} from "./type";

export type TProgramSuitableLearnerEntity = {
  suitableLeanerCode: PROGRAM_SUITABLE_LEARNER;
  program: TProgramEntity;
} & BaseEntity;

export type TProgramEntity = {
  thumbnail: string;
  name: string;
  shortDescription: string;
  detailDescription: string;
  suitableLearners: TProgramSuitableLearnerEntity[];
  fromPrice: number;
  toPrice: number;
  account: TAccountEntity;
  sessionPerWeek: number;
  method: PROGRAM_METHOD;
  durationPerSession: number;
} & BaseEntity;

export type TStudentEntity = {
  district: TDistrictEntity | null | null;
  province: TProvinceEntity | null | null;
  birthDay: Date | null | null;
  hiddenBirthDay: boolean;
  phoneNumber: string | null | null;
  hiddenPhoneNumber: boolean;
  account: TAccountEntity;
  totalHourLearning: number;
  introduction: string | null;
} & BaseEntity;

export type TAccountEntity = {
  id: string;
  fullname: string;
  avatar: string | null;
  type: CUSTOMER_TYPE | null;
  registerMethod: REGISTER_METHOD;
  password: string | null; // Excluded in queries due to { select: false }
  username: string;
  keyForgot: string | null; // Excluded in queries due to { select: false }
  providerId: string | null;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
  tutor: TTutorEntity | null | null;
  student: TStudentEntity | null | null;
  birthDay: string | null;
  hiddenBirthDay: boolean;
  phoneNumber: string | null;
  hiddenPhoneNumber: boolean;
  hashedPin: string | null;
};

export type TAdministrativeRegionEntity = {
  id: number;
  name: string;
  nameEn: string;
  codeName: string | null;
  codeNameEn: string | null;
};

export type TAdministrativeUnitEntity = {
  id: number;
  fullName: string | null;
  fullNameEn: string | null;
  shortName: string | null;
  shortNameEn: string | null;
  codeName: string | null;
  codeNameEn: string | null;
};

export type TProvinceEntity = {
  code: string;
  name: string;
  nameEn: string | null;
  fullName: string;
  fullNameEn: string | null;
  codeName: string | null;
  administrativeRegion: TAdministrativeRegionEntity;
  administrativeUnit: TAdministrativeUnitEntity;
};

export type TDistrictEntity = {
  code: string;
  name: string;
  nameEn: string | null;
  fullName: string | null;
  fullNameEn: string | null;
  codeName: string | null;
  province: TProvinceEntity;
  administrativeUnit: TAdministrativeUnitEntity;
};

export type TTutorEntity = {
  totalTeachingHours: number;
  totalSessions: number;
  introduction: string | null;
  shortVideoUrl: string | null;
  schoolName: string | null;
  schoolStatus: SCHOOL_STATUS | null;
  hiddenSchool: boolean;
  district: TDistrictEntity | null;
  province: TProvinceEntity | null;
  workAt: string | null;
  birthDay: string | null;
  hiddenBirthDay: boolean | null;
  phoneNumber: string | null;
  hiddenPhoneNumber: boolean | null;
  hiddenWorkAt: boolean;
  account: TAccountEntity;
} & BaseEntity;

export type TStudent = {
  account: TAccountEntity;
  district: TDistrictEntity | null | null;
  province: TProvinceEntity | null | null;
  birthDay: string | null | null;
  hiddenBirthDay: boolean;
  phoneNumber: string | null | null;
  hiddenPhoneNumber: boolean;
} & BaseEntity;

export type TNotificationEntity = {
  title: string | null;
  link: string | null;
  content: string | null;
  type: NOTIFICATION_TYPE;
  sender: TAccountEntity | null;
  status: NOTIFICATION_STATUS;
  receiver: TAccountEntity | null;
} & BaseEntity;

export type TRegisteredProgramEntity = {
  status: REGISTERED_PROGRAM_STATUS;
  note: string | null;
  viaZalo: boolean;
  studentNote: string | null;
  studentPhoneNumber: string;
  studentProgramMethodDesired: PROGRAM_METHOD | null;
  studentProvince: TProvinceEntity | null;
  studentDistrict: TDistrictEntity | null;
  addressStudent: string | null;
  studentInterestedProgram: TProgramEntity;
  registeredStudent: TAccountEntity;
  class: TClassEntity | null;
} & BaseEntity;

export type TClassEntity = {
  name: string;
  feePerLesson: number | null;
  note: string | null;
  status: CLASS_STATUS;
  program: TProgramEntity;
  registeredProgram: TRegisteredProgramEntity | null;
  student: TAccountEntity | null;
  tutor: TAccountEntity;
  learningTimes: TClassLearningTimeEntity[];
} & BaseEntity;

export type TLessonEntity = {
  startTime: string;
  endTime: string;
  status: LESSON_ACTIVITY_STATUS | null;
  note: string;
  hasApproved: boolean;
  hasPaid: boolean;
  fee: number;
  class: TClassEntity;
} & BaseEntity;

export type TClassLearningTimeEntity = {
  dayOfWeek: DAY_OF_WEEK;
  startTime: string;
  endTime: string;
  class: TClassEntity;
} & BaseEntity;

export type TClassNotificationEntity = {
  description: string;
} & BaseEntity;

export type TProposedLearningLessonEntity = {
  proposedLearningLesson: TProposedLearningEntity;
  lesson: TLessonEntity;
} & BaseEntity;

export type TProposedLearningEntity = {
  class: TClassEntity;
  title: string;
  paymentStatus: PROPOSED_LEARNING_PAYMENT_STATUS;
  description: string | null;
} & BaseEntity;

export type TFileLessonEntity = {
  url: string;
  name: string;
  size: number;
} & BaseEntity;
export type TDocumentsEntity = {
  order: number;
} & BaseEntity;

export type TFileEntity = {
  url: string;
  name: string;
  size: number;
} & BaseEntity;

export type TGroupQuestionEntity = {
  title: string;
  content: string;
} & BaseEntity;
export type TQuestionEntity = {
  content: string;
  order: number;
  type: QUESTION_TYPES;
  explainContent: string;
  showExplain: boolean;
} & BaseEntity;

export type TQuestionTypeChoiceEntity = {
  content: string;
  isCorrect: boolean;
} & BaseEntity;
export type TQuestionTypeEssayEntity = {
  correctAnswer: string;
} & BaseEntity;
export type TQuestionTypeWordArrangementEntity = {
  content: string;
  sortOrder: number;
  correctOrder: number;
} & BaseEntity;

export type TSessionGroupQuestionEntity = {
  finishedAt: string;
  totalQuestion: number;
  correctQuestion: number;
  status: SESSION_GROUP_QUESTION;
} & BaseEntity;

export type TAnswerQuestionEntity = {
  answerText: string;
  commentContent: string | null;
  feedbackContent: string | null;
} & BaseEntity;

export type TAnswerChoiceEntity = {} & BaseEntity;

export type TAnswerWordArrangementEntity = {
  chosenOrder: number;
} & BaseEntity;
export type TEditorEntity = {
  title: string;
  content: string;
} & BaseEntity;

export type TProgramRatingEntity = {
  score: number;
  comment: string;
} & BaseEntity;

export type TPostEntity = {
  title: string;
  content?: string;
  type: POST_TYPE;
} & BaseEntity;

export type TPostCommentEntity = {
  content: string;
} & BaseEntity;

export type TBankEntity = {
  name: string;
  shortName: string;
  code: string;
  bin: string;
  logo: string;
  transferSupported: number;
  lookupSupported: number;
  support: number;
  isTransfer: number;
  swiftCode: string | null;
} & BaseEntity;

export type TAccountBankInfoEntity = {
  bankNumber: string;
  receiverName: string;
} & BaseEntity;

export type TTransactionEntity = {
  type: TRANSACTION_TYPE;
  code: string;
  amount: number;
  amountReceive: number;
  fee: number;
  serviceFee: number;
  status: TRANSACTION_STATUS;
  gateway: TRANSACTION_GATEWAY;
  gatewayTransactionId: string;
  gatewayData: Record<string, any>;
  completedAt: string;
} & BaseEntity;

export type TWalletEntity = {
  balance: number;
  lockedBalance: number;
} & BaseEntity;

export type TWithdrawRequestEntity = {
  amount: number;
  status: WITHDRAW_REQUEST_STATUS;
  rejectReason: string;
  completedAt: string;
} & BaseEntity;

export type TInternalAccountEntity = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phone: string;
  isActive: boolean;
  role: INTERNAL_ROLE;
} & BaseInternalEntity;

export type THistoryLoginEntity = {
  device: string;
  id: string;
  os: string;
  browser: string;
  location: string;
  expiredRefresh: string;
};
