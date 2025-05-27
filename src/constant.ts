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
};

export const REGISTER_PROGRAM_TIME = 12 * 60 * 60; // limit 12 hours per a registering program

export const AT_LEAST_ALLOW_RATING_PROGRAM_HOUR = 1;
export const AT_LEAST_ALLOW_RATING_PROGRAM_LESSONS = 1;
