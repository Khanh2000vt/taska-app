export type IFormikSign = {
  email: string;
  password: string;
};

export type IFormikFillProfile = {
  avatar: null | object;
  name: string;
  user_name: string;
  date_of_birth: undefined | Date;
  email: string;
  phone: string | null;
  countryPhone: any;
  type: null | string;
};
