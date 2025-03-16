import {
  BaseEntity,
  CUSTOMER_TYPE,
  PROGRAM_METHOD,
  PROGRAM_SUITABLE_LEARNER,
  REGISTER_METHOD,
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
  district?: TDistrictEntity | null;
  province?: TProvinceEntity | null;
  birthDay?: Date | null;
  hiddenBirthDay: boolean;
  phoneNumber?: string | null;
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
  tutor?: TTutorEntity | null;
  student?: TStudentEntity | null;
  birthDay: string | null;
  hiddenBirthDay: boolean;
  phoneNumber: string | null;
  hiddenPhoneNumber: boolean;
};

export type TAdministrativeRegionEntity = {
  id: number;
  name: string;
  nameEn: string;
  codeName?: string;
  codeNameEn?: string;
};

export type TAdministrativeUnitEntity = {
  id: number;
  fullName?: string;
  fullNameEn?: string;
  shortName?: string;
  shortNameEn?: string;
  codeName?: string;
  codeNameEn?: string;
};

export type TProvinceEntity = {
  code: string;
  name: string;
  nameEn?: string;
  fullName: string;
  fullNameEn?: string;
  codeName?: string;
  administrativeRegion: TAdministrativeRegionEntity;
  administrativeUnit: TAdministrativeUnitEntity;
};

export type TDistrictEntity = {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  province: TProvinceEntity;
  administrativeUnit: TAdministrativeUnitEntity;
};

export type TTutorEntity = {
  introduction?: string;
  shortVideoUrl?: string;
  schoolName?: string;
  schoolStatus?: SCHOOL_STATUS;
  hiddenSchool: boolean;
  district?: TDistrictEntity;
  province?: TProvinceEntity;
  workAt?: string;
  birthDay?: string;
  hiddenBirthDay?: boolean;
  phoneNumber?: string;
  hiddenPhoneNumber?: boolean;
  hiddenWorkAt: boolean;
  account: TAccountEntity;
} & BaseEntity;

export type TStudent = {
  account: TAccountEntity;
  district?: TDistrictEntity | null;
  province?: TProvinceEntity | null;
  birthDay?: string | null;
  hiddenBirthDay: boolean;
  phoneNumber?: string | null;
  hiddenPhoneNumber: boolean;
} & BaseEntity;
