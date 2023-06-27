import {Svgs} from '@assets';
import {IButton} from '@interfaces';
import {useTranslation} from 'react-i18next';

export const LoginFunctionHook = () => {
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
  return {
    t,
    listLoginSocial,
  };
};
