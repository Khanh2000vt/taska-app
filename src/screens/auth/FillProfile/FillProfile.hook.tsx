import {IFormikFillProfile} from '@interfaces';
import {useTranslation} from 'react-i18next';

export const FillProfileHook = () => {
  const {t} = useTranslation();

  const initValueFillProfile: IFormikFillProfile = {
    avatar: null,
    name: '',
    user_name: '',
    date_of_birth: null,
    email: '',
    phone: '',
    type: null,
  };
  return {t, initValueFillProfile};
};
