import {
  ANSWER_QUESTION_TYPE,
  CLASS_STATUS,
  CUSTOMER_TYPE,
  DAY_OF_WEEK,
  GENDER,
  LESSON_ACTIVITY_STATUS,
  POST_TYPE,
  PROGRAM_METHOD,
  PROGRAM_SUITABLE_LEARNER,
  QUESTION_TYPES,
  REGISTER_METHOD,
  REGISTERED_PROGRAM_STATUS,
  REQUEST_TUTOR_FORM_STATUS,
  SCHOOL_STATUS,
  SORT_TYPE,
  TEACHING_TIME_RANGE,
  TRANSACTION_STATUS,
  TRANSACTION_TYPE,
  WITHDRAW_REQUEST_STATUS,
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
    label: "Onl/Off(linh hoạt)",
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
    label: "Đã huỷ",
  },
};
export const OBJECT_SORT_TYPE = {
  [SORT_TYPE.ASC]: {
    value: SORT_TYPE.ASC,
    label: "Tăng dần",
  },
  [SORT_TYPE.DESC]: {
    value: SORT_TYPE.DESC,
    label: "Giảm dần",
  },
};

// export enum CLASS_STATUS {
//   HAPPENING = "HAPPENING",
//   PENDING = "PENDING",
//   FINISHED = "FINISHED",

// }

export const OBJECT_CLASS_STATUS = {
  [CLASS_STATUS.WAIT_FOR_ACCEPTING]: {
    value: CLASS_STATUS.WAIT_FOR_ACCEPTING,
    label: "Đợi học viên phản hồi",
  },
  [CLASS_STATUS.HAPPENING]: {
    value: CLASS_STATUS.HAPPENING,
    label: "Đang học",
  },
  [CLASS_STATUS.PENDING]: {
    value: CLASS_STATUS.PENDING,
    label: "Tạm ngưng",
  },
  [CLASS_STATUS.FINISHED]: {
    value: CLASS_STATUS.FINISHED,
    label: "Hoàn thành",
  },
  [CLASS_STATUS.CANCELED]: {
    value: CLASS_STATUS.CANCELED,
    label: "Đã huỷ",
  },
};

export const OBJECT_TEACHING_TIME_RANGE: Record<
  TEACHING_TIME_RANGE,
  { value: TEACHING_TIME_RANGE; label: string }
> = {
  [TEACHING_TIME_RANGE.RANGE_6_8]: {
    value: TEACHING_TIME_RANGE.RANGE_6_8,
    label: "6:00 - 8:00",
  },
  [TEACHING_TIME_RANGE.RANGE_8_10]: {
    value: TEACHING_TIME_RANGE.RANGE_8_10,
    label: "8:00 - 10:00",
  },
  [TEACHING_TIME_RANGE.RANGE_10_12]: {
    value: TEACHING_TIME_RANGE.RANGE_10_12,
    label: "10:00 - 12:00",
  },
  [TEACHING_TIME_RANGE.RANGE_14_16]: {
    value: TEACHING_TIME_RANGE.RANGE_14_16,
    label: "14:00 - 16:00",
  },
  [TEACHING_TIME_RANGE.RANGE_16_18]: {
    value: TEACHING_TIME_RANGE.RANGE_16_18,
    label: "16:00 - 18:00",
  },
  [TEACHING_TIME_RANGE.RANGE_18_20]: {
    value: TEACHING_TIME_RANGE.RANGE_18_20,
    label: "18:00 - 20:00",
  },
  [TEACHING_TIME_RANGE.RANGE_20_22]: {
    value: TEACHING_TIME_RANGE.RANGE_20_22,
    label: "20:00 - 22:00",
  },
};

export const OBJECT_DAY_OF_WEEK = {
  [DAY_OF_WEEK.MONDAY]: {
    value: DAY_OF_WEEK.MONDAY,
    label: "Thứ hai",
  },
  [DAY_OF_WEEK.TUESDAY]: {
    value: DAY_OF_WEEK.TUESDAY,
    label: "Thứ ba",
  },
  [DAY_OF_WEEK.WEDNESDAY]: {
    value: DAY_OF_WEEK.WEDNESDAY,
    label: "Thứ tư",
  },
  [DAY_OF_WEEK.THURSDAY]: {
    value: DAY_OF_WEEK.THURSDAY,
    label: "Thứ năm",
  },
  [DAY_OF_WEEK.FRIDAY]: {
    value: DAY_OF_WEEK.FRIDAY,
    label: "Thứ sáu",
  },
  [DAY_OF_WEEK.SATURDAY]: {
    value: DAY_OF_WEEK.SATURDAY,
    label: "Thứ bảy",
  },
  [DAY_OF_WEEK.SUNDAY]: {
    value: DAY_OF_WEEK.SUNDAY,
    label: "Chủ nhật",
  },
};
export const OBJECT_LESSON_ACTIVITY_STATUS = {
  [LESSON_ACTIVITY_STATUS.NEW]: {
    value: LESSON_ACTIVITY_STATUS.NEW,
    label: "Chưa học",
  },
  [LESSON_ACTIVITY_STATUS.COMPLETED]: {
    value: LESSON_ACTIVITY_STATUS.COMPLETED,
    label: "Đã học",
  },
  [LESSON_ACTIVITY_STATUS.CANCELED]: {
    value: LESSON_ACTIVITY_STATUS.CANCELED,
    label: "Đã huỷ",
  },
};

export const OBJECT_QUESTION_TYPES = {
  [QUESTION_TYPES.CHOICES]: {
    value: QUESTION_TYPES.CHOICES,
    label: "Trắc nghiệm",
  },
  [QUESTION_TYPES.ESSAY]: {
    value: QUESTION_TYPES.ESSAY,
    label: "Điền từ",
  },
  [QUESTION_TYPES.WORD_ARRANGEMENT]: {
    value: QUESTION_TYPES.WORD_ARRANGEMENT,
    label: "Sắp xếp từ",
  },
  [QUESTION_TYPES.SPEAKING]: {
    value: QUESTION_TYPES.SPEAKING,
    label: "Nói",
  },
  [QUESTION_TYPES.WRITING]: {
    value: QUESTION_TYPES.WRITING,
    label: "Viết",
  },
  [QUESTION_TYPES.TEXT]: {
    value: QUESTION_TYPES.TEXT,
    label: "Tiêu đề",
  },
};

export const OBJECT_RATING = {
  1: {
    value: 1,
    label: "Chưa tốt",
  },
  2: {
    value: 2,
    label: "Bình thường",
  },
  3: {
    value: 3,
    label: "Khá tốt",
  },
  4: {
    value: 4,
    label: "Tốt",
  },
  5: {
    value: 5,
    label: "Xuất xắc",
  },
};

export const OBJECT_POST_TYPE = {
  [POST_TYPE.DOCUMENT_SHARE]: {
    value: POST_TYPE.DOCUMENT_SHARE,
    label: "Chia sẻ tài liệu",
  },
  [POST_TYPE.DISCUSSION]: {
    value: POST_TYPE.DISCUSSION,
    label: "Thảo luận/Bài viết",
  },
};

export const OBJECT_ANSWER_QUESTION_TYPE = {
  [ANSWER_QUESTION_TYPE.RIGHT]: {
    value: ANSWER_QUESTION_TYPE.RIGHT,
    label: "Đúng",
  },
  [ANSWER_QUESTION_TYPE.WRONG]: {
    value: ANSWER_QUESTION_TYPE.WRONG,
    label: "Sai",
  },
  [ANSWER_QUESTION_TYPE.WAIT_FOR_GRADE]: {
    value: ANSWER_QUESTION_TYPE.WAIT_FOR_GRADE,
    label: "Chờ chấm",
  },
};

export const OBJECT_TRANSACTION_TYPE = {
  [TRANSACTION_TYPE.DEPOSIT]: {
    value: TRANSACTION_TYPE.DEPOSIT,
    label: "Nộp tiền",
  },
  [TRANSACTION_TYPE.WITHDRAW]: {
    value: TRANSACTION_TYPE.WITHDRAW,
    label: "Rút tiền",
  },
  [TRANSACTION_TYPE.LESSON_FEE]: {
    value: TRANSACTION_TYPE.LESSON_FEE,
    label: "Học phí",
  },
};

export const OBJECT_TRANSACTION_STATUS = {
  [TRANSACTION_STATUS.PENDING]: {
    value: TRANSACTION_STATUS.PENDING,
    label: "Chờ thanh toán",
  },
  [TRANSACTION_STATUS.SUCCESS]: {
    value: TRANSACTION_STATUS.SUCCESS,
    label: "Thành công",
  },
  [TRANSACTION_STATUS.FAILED]: {
    value: TRANSACTION_STATUS.FAILED,
    label: "Thất bại",
  },
};

export const OBJECT_WITHDRAW_REQUEST_STATUS = {
  [WITHDRAW_REQUEST_STATUS.PENDING]: {
    value: WITHDRAW_REQUEST_STATUS.PENDING,
    label: "Đợi xử lý",
  },
  [WITHDRAW_REQUEST_STATUS.APPROVED]: {
    value: WITHDRAW_REQUEST_STATUS.APPROVED,
    label: "Đã xử lý",
  },
  [WITHDRAW_REQUEST_STATUS.REJECTED]: {
    value: WITHDRAW_REQUEST_STATUS.REJECTED,
    label: "Từ chối",
  },
  [WITHDRAW_REQUEST_STATUS.COMBINED]: {
    value: WITHDRAW_REQUEST_STATUS.COMBINED,
    label: "Gộp",
  },
  [WITHDRAW_REQUEST_STATUS.CANCELLED]: {
    value: WITHDRAW_REQUEST_STATUS.CANCELLED,
    label: "Đã huỷ",
  },
};

export const OBJECT_REQUEST_TUTOR_FORM_STATUS = {
  [REQUEST_TUTOR_FORM_STATUS.PENDING]: {
    value: REQUEST_TUTOR_FORM_STATUS.PENDING,
    label: "Đang tìm gia sư",
  },
  [REQUEST_TUTOR_FORM_STATUS.PROCESS]: {
    value: REQUEST_TUTOR_FORM_STATUS.PROCESS,
    label: "Gia sư đang liên hệ",
  },
  [REQUEST_TUTOR_FORM_STATUS.FINISHED]: {
    value: REQUEST_TUTOR_FORM_STATUS.FINISHED,
    label: "Đã hoàn thành",
  },
  [REQUEST_TUTOR_FORM_STATUS.CANCELED]: {
    value: REQUEST_TUTOR_FORM_STATUS.CANCELED,
    label: "Đã huỷ",
  },
};
