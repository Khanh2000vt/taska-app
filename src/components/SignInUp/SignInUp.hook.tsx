import {Svgs} from '@assets';
import {GlobalService} from '@components/GlobalUI';
import {EScreenSign} from '@constants';
import {IFormikSign, ILoginSocial, INavigateAuth} from '@interfaces';
import {ROUTE_AUTH} from '@navigation';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {loginSuccess} from '@redux';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';
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
    email: __DEV__ ? 'khanh0511vt@gmail.com' : '',
    password: __DEV__ ? 'khanh2000vt@gmail.com' : '',
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
        GlobalService.showLoading();
        await auth().signInWithEmailAndPassword(values.email, values.password);
        dispatch(loginSuccess());
      } catch (error) {
        //@ts-ignore
        if (error?.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        //@ts-ignore
        if (error?.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        //@ts-ignore
        if (error?.code === 'auth/user-not-found') {
          Alert.alert('Email or password is incorrect!');
        }
        console.log('error: ', error);
      } finally {
        GlobalService.hideLoading();
      }
    } else {
      try {
        GlobalService.showLoading();
        await auth().createUserWithEmailAndPassword(
          values.email,
          values.password,
        );
        navigation.navigate(ROUTE_AUTH.FILL_PROFILE);
      } catch (error) {
        //@ts-ignore
        if (error?.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        //@ts-ignore
        if (error?.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
      } finally {
        GlobalService.hideLoading();
      }
    }
  };

  const handleRememberMe = (checked: boolean) => {
    setRememberMe(checked);
  };

  const handleForgot = () => {
    navigation.navigate(ROUTE_AUTH.FORGOT_PASSWORD);
  };

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
