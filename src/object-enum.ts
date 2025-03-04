import {
  CUSTOMER_TYPE,
  PROGRAM_SUITABLE_LEARNER,
  REGISTER_METHOD,
  SCHOOL_STATUS,
} from "./type";

export const OBJECT_REGISTER_METHOD = {
  [REGISTER_METHOD.EMAIL]: {
    value: REGISTER_METHOD.EMAIL,
    label: "Email",
  },
  [REGISTER_METHOD.GOOGLE]: {
    value: REGISTER_METHOD.GOOGLE,
    label: "Google",
  },
};

export const OBJECT_CUSTOMER_TYPE = {
  [CUSTOMER_TYPE.STUDENT]: {
    value: CUSTOMER_TYPE.STUDENT,
    label: "Học viên",
  },
  [CUSTOMER_TYPE.TUTOR]: {
    value: CUSTOMER_TYPE.TUTOR,
    label: "Gia sư",
  },
};

export const OBJECT_PROGRAM_SUITABLE_LEARNER = {
  [PROGRAM_SUITABLE_LEARNER.PRIMARY_STUDENT]: {
    value: PROGRAM_SUITABLE_LEARNER.PRIMARY_STUDENT,
    label: "Học sinh tiểu học",
  },
  [PROGRAM_SUITABLE_LEARNER.SECONDARY_STUDENT]: {
    value: PROGRAM_SUITABLE_LEARNER.SECONDARY_STUDENT,
    label: "Học sinh trung học cơ sở",
  },
  [PROGRAM_SUITABLE_LEARNER.HIGHT_SCHOOL_STUDENT]: {
    value: PROGRAM_SUITABLE_LEARNER.HIGHT_SCHOOL_STUDENT,
    label: "Học sinh trung học phổ thông",
  },
  [PROGRAM_SUITABLE_LEARNER.UNIVERSITY_STUDENT]: {
    value: PROGRAM_SUITABLE_LEARNER.UNIVERSITY_STUDENT,
    label: "Sinh viên",
  },
  [PROGRAM_SUITABLE_LEARNER.WORKING_PEOPLE]: {
    value: PROGRAM_SUITABLE_LEARNER.WORKING_PEOPLE,
    label: "Người đi làm",
  },
};

export const OBJECT_SCHOOL_STATUS = {
  [SCHOOL_STATUS.CURRENT]: {
    value: SCHOOL_STATUS.CURRENT,
    label: "Đang học",
  },
  [SCHOOL_STATUS.GRADUATED]: {
    value: SCHOOL_STATUS.GRADUATED,
    label: "Đã tốt nghiệp",
  },
};
