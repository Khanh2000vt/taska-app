import {LANGUAGE, THEME} from '@constants';

export interface IAccount {
  token: string;
  user: any;
  login: boolean;
}

export interface IApp {
  themeValue: THEME;
  language: LANGUAGE;
}
