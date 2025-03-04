import {
  BaseEntity,
  CUSTOMER_TYPE,
  PROGRAM_SUITABLE_LEARNER,
  REGISTER_METHOD,
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
  fromTeachingHour: number;
  toTeachingHour: number;
} & BaseEntity;

export type AccountEntity = {
  id: string;
  fullname: string;
  avatar?: string | null;
  type?: CUSTOMER_TYPE | null;
  registerMethod: REGISTER_METHOD;
  password?: string; // Excluded in queries due to { select: false }
  username: string;
  keyForgot?: string | null; // Excluded in queries due to { select: false }
  providerId?: string | null;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: Date | null;
};
