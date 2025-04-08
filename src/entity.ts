import {
  BaseEntity,
  CLASS_STATUS,
  CUSTOMER_TYPE,
  DAY_OF_WEEK,
  LESSON_ACTIVITY_STATUS,
  NOTIFICATION_STATUS,
  NOTIFICATION_TYPE,
  PROGRAM_METHOD,
  PROGRAM_SUITABLE_LEARNER,
  REGISTER_METHOD,
  REGISTERED_PROGRAM_STATUS,
  SCHOOL_STATUS,
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
  content: string | null;
  type: NOTIFICATION_TYPE;
  sender: TAccountEntity | null;
  status: NOTIFICATION_STATUS;
  receiver: TAccountEntity | null;
} & BaseEntity;

export type TRegisteredProgramEntity = {
  status: REGISTERED_PROGRAM_STATUS;
  note: string | null;
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
