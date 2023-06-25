import {scaler} from '@theme';
import i18next from 'i18next';

import {LANGUAGE} from './enum';

export const ASYNC_STORAGE = {
  LANGUAGE: 'LANGUAGE',
};

export const listLanguage = [
  {id: 1, label: i18next.t('user:english'), value: LANGUAGE.EN},
  {id: 2, label: i18next.t('user:spain'), value: LANGUAGE.VN},
];

export const APP_SLICE = {
  ACCOUNT_SLICE: 'ACCOUNT_SLICE',
  APP_SLICE: 'APP_SLICE',
};

export const StorageConstant = {
  THEME: 'THEME',
};

export const WIDTH_REVIEW_MAX = scaler(61);

export const HEIGHT_ITEM_OPTION = scaler(50);
