import {Svgs} from '@assets';
import {IFormikLogin, ILoginSocial} from '@interfaces';
import {setUser} from '@redux';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

export const SignInUpHook = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const initialValues: IFormikLogin = {
    email: '',
    password: '',
  };

  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const listLoginSocial: ILoginSocial[] = [
    {
      id: 1,
      icon: Svgs.Facebook,
      onPress: () => {},
    },
    {
      id: 2,
      icon: Svgs.Google,
      onPress: () => {},
    },
    {
      id: 3,
      icon: Svgs.Apple,
      onPress: () => {},
    },
  ];

  // const handleChangeLanguage = async (language: LANGUAGE) => {
  //   try {
  //     await AsyncStorage.setItem(ASYNC_STORAGE.LANGUAGE, language);
  //     i18next.changeLanguage(language);
  //     refModal.current?.close();
  //   } catch (e) {}
  // };

  const handleLogin = (values: IFormikLogin) => {
    console.log('test: ');
    dispatch(setUser({token: 'abc', user: {}}));
  };

  const handleRememberMe = (checked: boolean) => {
    setRememberMe(checked);
  };

  return {
    initialValues,
    handleLogin,
    handleRememberMe,
    listLoginSocial,
    rememberMe,
    t,
  };
};
