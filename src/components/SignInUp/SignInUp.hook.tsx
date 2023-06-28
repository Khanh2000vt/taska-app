import {Svgs} from '@assets';
import {EScreenSign} from '@constants';
import {IFormikSign, ILoginSocial, INavigateAuth} from '@interfaces';
import {AuthStackParamList, ROUTE_AUTH} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {setUser} from '@redux';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

export const SignInUpHook = (type: EScreenSign) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const navigation =
    useNavigation<
      INavigateAuth<
        ROUTE_AUTH.SIGN_IN_PASSWORD | ROUTE_AUTH.SIGN_UP,
        'navigation'
      >
    >();

  const initialValues: IFormikSign = {
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

  const handleLogin = (values: IFormikSign) => {
    console.log('test: ');
    dispatch(setUser({token: 'abc', user: {}}));
  };

  const handleRememberMe = (checked: boolean) => {
    setRememberMe(checked);
  };

  const handleForgot = () => {};

  const handleChangeSign = () => {
    navigation.replace(
      type === EScreenSign.SIGN_IN
        ? ROUTE_AUTH.SIGN_UP
        : ROUTE_AUTH.SIGN_IN_PASSWORD,
    );
  };

  return {
    t,
    initialValues,
    handleLogin,
    handleRememberMe,
    listLoginSocial,
    rememberMe,
    handleForgot,
    handleChangeSign,
  };
};
