import { CLASS_STATUS, PROGRAM_DETAIL_TABS } from "./type";

export const OTP_RESEND_TIME = 20; // seconds

export const URL_CLASS_DETAIL = "/class-detail";

export const COMMON_ROUTES = {
  classList: "/class",
  registeredProgram: "/registered-program",
  studentClassList: "/student-class",
  classDetail: (id: string) => {
    return `${URL_CLASS_DETAIL}/${id}`;
  },
  programDetail: (id: string, tab: PROGRAM_DETAIL_TABS) => {
    if (tab) return `/program-detail/${id}?tab=${tab}`;
    return `/program-detail/${id}`;
  },
  classDetailReport: (classId: string, reportId: string) => {
    return `${URL_CLASS_DETAIL}/${classId}/report/${reportId}`;
  },
};

export const REGISTER_PROGRAM_TIME = 12 * 60 * 60; // limit 12 hours per a registering program

export const AT_LEAST_ALLOW_RATING_PROGRAM_HOUR = 1;
export const AT_LEAST_ALLOW_RATING_PROGRAM_LESSONS = 1;

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "image/bmp",
  "image/x-icon",
  "image/vnd.microsoft.icon",
  "image/heic",
  "image/heif",
  "image/avif",
];
export const ACCEPTED_VIDEO_TYPES = [
  "video/mp4",
  "video/ogg",
  "video/webm",
  "video/x-matroska",
  "video/quicktime",
];

export const ACCEPTED_AUDIO_TYPES = [
  "audio/mpeg",
  "audio/ogg",
  "audio/wav",
  "audio/webm",
];

export const CLASS_STATUS_ORDER = [
  CLASS_STATUS.HAPPENING,
  CLASS_STATUS.WAIT_FOR_ACCEPTING,
  CLASS_STATUS.PENDING,
  CLASS_STATUS.FINISHED,
  CLASS_STATUS.CANCELED,
];

export const TRANSACTION_FEE = 175; // VND
export const LESSON_FEE_RATE = 7 / 100; // 7%

export const HASHED_PIN_LENGTH = 5;
