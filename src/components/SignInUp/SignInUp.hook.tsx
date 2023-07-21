import {Svgs} from '@assets';
import {EScreenSign} from '@constants';
import {IFormikSign, ILoginSocial, INavigateAuth} from '@interfaces';
import {AuthStackParamList, ROUTE_AUTH} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {loginSuccess, setUser} from '@redux';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

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

  const handleSign = async (values: IFormikSign) => {
    if (type === EScreenSign.SIGN_IN) {
      try {
        await auth().signInWithEmailAndPassword(values.email, values.password);
        dispatch(loginSuccess());
      } catch (error) {
        //@ts-ignore
        if (error?.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        //@ts-ignore
        if (error?.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.log('error: ', error);
      }
    } else {
      try {
        await auth().createUserWithEmailAndPassword(
          values.email,
          values.password,
        );
        navigation.navigate(ROUTE_AUTH.FILL_PROFILE);
      } catch (error) {
        //@ts-ignore
        if (error?.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        //@ts-ignore
        if (error?.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.log('error: ', error);
      }
    }
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
    handleSign,
    handleRememberMe,
    listLoginSocial,
    rememberMe,
    handleForgot,
    handleChangeSign,
  };
};
