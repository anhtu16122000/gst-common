import { PROGRAM_SUITABLE_LEARNER } from "./type";

export type ProgramSuitableLearnerEntity = {
  suitableLeanerCode: PROGRAM_SUITABLE_LEARNER;
  program: ProgramEntity;
};

export type ProgramEntity = {
  thumbnail: string;
  name: string;
  shortDescription: string;
  detailDescription: string;
  suitableLearners: ProgramSuitableLearnerEntity[];
  fromPrice: number;
  toPrice: number;
  fromTeachingHour: number;
  toTeachingHour: number;
};
