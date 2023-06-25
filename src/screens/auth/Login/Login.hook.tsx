import {Svgs} from '@assets';
import {ASYNC_STORAGE, LANGUAGE} from '@constants';
import {IFormikLogin, ILoginSocial, IOption} from '@interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '@redux';
import i18next from 'i18next';
import {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

export const LoginFunctionHook = () => {
  const initialValues: IFormikLogin = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const refModal = useRef<any>(null);

  const {t} = useTranslation();

  // const listLoginSocial: ILoginSocial[] = [
  //   {
  //     id: 1,
  //     icon: Svgs.Facebook,
  //     onPress: () => {},
  //   },
  //   {
  //     id: 2,
  //     icon: Svgs.Google,
  //     onPress: () => {},
  //   },
  //   {
  //     id: 3,
  //     icon: Svgs.Apple,
  //     onPress: () => {},
  //   },
  // ];

  const listLanguage: IOption<LANGUAGE>[] = [
    {
      id: 1,
      label: 'English',
      value: LANGUAGE.EN,
      onPress: () => handleChangeLanguage(LANGUAGE.EN),
    },
    {
      id: 2,
      label: 'Việt Nam',
      value: LANGUAGE.VN,
      onPress: () => handleChangeLanguage(LANGUAGE.VN),
    },
  ];

  const handleChangeLanguage = async (language: LANGUAGE) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE.LANGUAGE, language);
      i18next.changeLanguage(language);
      refModal.current?.close();
    } catch (e) {}
  };

  const handleLogin = (values: IFormikLogin) => {
    console.log('test: ');
    dispatch(setUser({token: 'abc', user: {}}));
  };

  const handleRememberMe = (checked: boolean) => {
    setRememberMe(checked);
  };

  const handlePressLanguage = () => {
    refModal.current?.open();
  };

  return {
    initialValues,
    handleLogin,
    handleRememberMe,
    // listLoginSocial,
    rememberMe,
    listLanguage,
    refModal,
    handlePressLanguage,
    t,
  };
};
