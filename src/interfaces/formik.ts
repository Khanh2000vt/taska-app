export type IFormikSign = {
  email: string;
  password: string;
};

export type IFormikFillProfile = {
  avatar: null | object;
  name: string;
  user_name: string;
  date_of_birth: null | object;
  email: string;
  phone: string | null;
  type: null | string;
};
