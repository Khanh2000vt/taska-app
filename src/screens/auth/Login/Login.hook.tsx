import {Svgs} from '@assets';
import {IButton, INavigateAuth} from '@interfaces';
import {ROUTE_AUTH} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

export const LoginFunctionHook = () => {
  const navigation =
    useNavigation<INavigateAuth<ROUTE_AUTH.LOGIN, 'navigation'>>();

  const {t} = useTranslation();
  const listLoginSocial: IButton[] = [
    {
      id: 1,
      label: 'Facebook',
      onPress: () => {},
      icon: Svgs.Facebook,
    },
    {
      id: 2,
      label: 'Google',
      onPress: () => {},
      icon: Svgs.Google,
    },
    {
      id: 3,
      label: 'Apple',
      onPress: () => {},
      icon: Svgs.Apple,
    },
  ];

  const handleSignInPassword = () => {
    navigation.navigate(ROUTE_AUTH.SIGN_IN_PASSWORD);
  };

  const handleSignUp = () => {
    navigation.navigate(ROUTE_AUTH.SIGN_UP);
  };
  return {
    t,
    listLoginSocial,
    handleSignInPassword,
    handleSignUp,
  };
};
