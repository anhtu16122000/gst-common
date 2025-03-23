import {
  CUSTOMER_TYPE,
  GENDER,
  PROGRAM_METHOD,
  PROGRAM_SUITABLE_LEARNER,
  REGISTER_METHOD,
  REGISTERED_PROGRAM_STATUS,
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

export const OBJ_SESSION_PER_WEEK = {
  [1]: {
    label: "1 buổi/tuần",
    value: 1,
  },
  [2]: {
    label: "2 buổi/tuần",
    value: 2,
  },
  [3]: {
    label: "3 buổi/tuần",
    value: 3,
  },
  [4]: {
    label: "4 buổi/tuần",
    value: 4,
  },
  [5]: {
    label: "5 buổi/tuần",
    value: 5,
  },
  [6]: {
    label: "6 buổi/tuần",
    value: 6,
  },
  [7]: {
    label: "7 buổi/tuần",
    value: 7,
  },
  [8]: {
    label: "8 buổi/tuần",
    value: 8,
  },
  [9]: {
    label: "9 buổi/tuần",
    value: 9,
  },
  [10]: {
    label: "8 buổi/tuần",
    value: 10,
  },
};
export const OBJECT_GENDER = {
  [GENDER.MALE]: {
    value: GENDER.MALE,
    label: "Nam",
  },
  [GENDER.FEMALE]: {
    value: GENDER.FEMALE,
    label: "Nữ",
  },
};
export const OBJECT_PROGRAM_METHOD = {
  [PROGRAM_METHOD.OFFLINE]: {
    value: PROGRAM_METHOD.OFFLINE,
    label: "Offline",
  },
  [PROGRAM_METHOD.ONLINE]: {
    value: PROGRAM_METHOD.ONLINE,
    label: "Online",
  },
  [PROGRAM_METHOD.ONLINE_OFFLINE]: {
    value: PROGRAM_METHOD.ONLINE_OFFLINE,
    label: "Online/Offline",
  },
};
export const OBJECT_REGISTERED_PROGRAM_STATUS = {
  [REGISTERED_PROGRAM_STATUS.NEW]: {
    value: REGISTERED_PROGRAM_STATUS.NEW,
    label: "Chưa xếp lớp",
  },
  [REGISTERED_PROGRAM_STATUS.TESTED]: {
    value: REGISTERED_PROGRAM_STATUS.TESTED,
    label: "Đã kiểm tra",
  },
  [REGISTERED_PROGRAM_STATUS.ACCEPTED]: {
    value: REGISTERED_PROGRAM_STATUS.ACCEPTED,
    label: "Đã xếp lớp",
  },
  [REGISTERED_PROGRAM_STATUS.REJECTED]: {
    value: REGISTERED_PROGRAM_STATUS.REJECTED,
    label: "Từ chối",
  },
};
