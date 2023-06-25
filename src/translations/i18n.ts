// import {store} from '@redux/store';
import {store} from '@redux/store';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, vi} from './locales';

const state = store.getState();

const language = state.appSlice.language;
// const language = 'en';
type languageDetectorType = {
  type:
    | 'backend'
    | 'logger'
    | 'languageDetector'
    | 'postProcessor'
    | 'i18nFormat'
    | 'formatter'
    | '3rdParty';
  async: boolean;
  detect: (cb: (value: string) => void) => void;
  init: () => void;
  cacheUserLanguage: () => void;
};

const languageDetector: languageDetectorType = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (value: string) => void) => cb(language),
  init: () => {},
  cacheUserLanguage: () => {},
};

const initI18n = () => {
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      lng: language,
      debug: true,
      resources: {
        en: {translation: en},
        vi: {translation: vi},
      },
      react: {
        useSuspense: false,
      },
    });
};

const trans = (string: string, params?: any): any => {
  return i18next.t(string, params);
};

const changeAppLanguage = (language: string): any => {
  i18next.changeLanguage(language);
};

const loadLocaleLanguage = () => {
  const lng = store?.getState()?.appSlice?.language;
  i18next.changeLanguage(lng);
};

export {initI18n, trans, changeAppLanguage, loadLocaleLanguage};
