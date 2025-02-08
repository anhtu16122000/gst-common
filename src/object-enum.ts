import { REGISTER_METHOD, CUSTOMER_TYPE } from "./type";

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
