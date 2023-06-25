import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ENUM_LANGUAGE} from '@translations';
import {ASYNC_STORAGE} from '@constants';

function AppChangeLanguage() {
  return (lang: ENUM_LANGUAGE) => {
    i18next.changeLanguage(lang);
    AsyncStorage.setItem(ASYNC_STORAGE.LANGUAGE, lang);
  };
}

export {AppChangeLanguage};
