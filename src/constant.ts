import { PROGRAM_DETAIL_TABS } from "./type";

export const OTP_RESEND_TIME = 20; // seconds
export const COMMON_ROUTES = {
  classList: "/class",
  registeredProgram: "/registered-program",
  studentClassList: "/student-class",
  classDetail: (id: string) => {
    return `/class-detail/${id}`;
  },
  studentClassDetail: (id: string) => {
    return `/student-class-detail/${id}`;
  },
  programDetail: (id: string, tab: PROGRAM_DETAIL_TABS) => {
    if (tab) return `/program-detail/${id}?tab=${tab}`;
    return `/program-detail/${id}`;
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
