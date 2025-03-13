import {
  BaseEntity,
  CUSTOMER_TYPE,
  PROGRAM_METHOD,
  PROGRAM_SUITABLE_LEARNER,
  REGISTER_METHOD,
  SCHOOL_STATUS,
} from "./type";

export type ProgramSuitableLearnerEntity = {
  suitableLeanerCode: PROGRAM_SUITABLE_LEARNER;
  program: ProgramEntity;
} & BaseEntity;

export type ProgramEntity = {
  thumbnail: string;
  name: string;
  shortDescription: string;
  detailDescription: string;
  suitableLearners: ProgramSuitableLearnerEntity[];
  fromPrice: number;
  toPrice: number;
  account: AccountEntity;
  sessionPerWeek: number;
  method: PROGRAM_METHOD;
  durationPerSession: number;
} & BaseEntity;

export type AccountEntity = {
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
  tutor: TutorEntity | null;
  birthDay: string | null;
  hiddenBirthDay: boolean;
  phoneNumber: string | null;
  hiddenPhoneNumber: boolean;
};

export type AdministrativeRegionEntity = {
  id: number;
  name: string;
  nameEn: string;
  codeName?: string;
  codeNameEn?: string;
};

export type AdministrativeUnitEntity = {
  id: number;
  fullName?: string;
  fullNameEn?: string;
  shortName?: string;
  shortNameEn?: string;
  codeName?: string;
  codeNameEn?: string;
};

export type ProvinceEntity = {
  code: string;
  name: string;
  nameEn?: string;
  fullName: string;
  fullNameEn?: string;
  codeName?: string;
  administrativeRegion: AdministrativeRegionEntity;
  administrativeUnit: AdministrativeUnitEntity;
};

export type DistrictEntity = {
  code: string;
  name: string;
  nameEn?: string;
  fullName?: string;
  fullNameEn?: string;
  codeName?: string;
  province: ProvinceEntity;
  administrativeUnit: AdministrativeUnitEntity;
};

export type TutorEntity = {
  introduction?: string;
  shortVideoUrl?: string;
  schoolName?: string;
  schoolStatus?: SCHOOL_STATUS;
  hiddenSchool: boolean;
  district?: DistrictEntity;
  province?: ProvinceEntity;
  workAt?: string;
  hiddenWorkAt: boolean;
  account: AccountEntity;
} & BaseEntity;
