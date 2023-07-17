import {ListCountry} from '@constants';
import {IFormikFillProfile} from '@interfaces';
import {useTranslation} from 'react-i18next';

export const FillProfileHook = () => {
  const {t} = useTranslation();

  const initValueFillProfile: IFormikFillProfile = {
    avatar: null,
    name: '',
    user_name: '',
    date_of_birth: undefined,
    email: 'khanh2000vt@gmail.com',
    phone: '',
    countryPhone: ListCountry[0],
    type: null,
  };
  return {t, initValueFillProfile};
};
