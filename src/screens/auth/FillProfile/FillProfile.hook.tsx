import {AppBottomSheetModalRef} from '@components';
import {ListCountry} from '@constants';
import {IFormikFillProfile} from '@interfaces';
import {loginSuccess} from '@redux';
import {FormikProps} from 'formik';
import {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

export const FillProfileHook = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const refFormik = useRef<FormikProps<IFormikFillProfile>>(null);
  const refSheetModal = useRef<AppBottomSheetModalRef>(null);

  const initValueFillProfile: IFormikFillProfile = {
    avatar: null,
    name: '',
    user_name: '',
    date_of_birth: undefined,
    email: 'khanh2000vt@gmail.com',
    phone: '',
    countryPhone: ListCountry[0],
    type: 'User',
  };

  const handleDatePicker = (date: Date) => {
    try {
      refFormik.current?.setFieldValue('date_of_birth', date);
    } catch (e) {
      console.log('error: ', e);
    } finally {
      setOpen(false);
    }
  };

  const handleSubmit = (values: any) => {
    console.log('values: ', values);
    dispatch(loginSuccess());
  };

  const getInputFillFull = () => {
    const values: IFormikFillProfile = !!refFormik.current?.values
      ? refFormik.current?.values
      : initValueFillProfile;

    return (
      values?.name?.trim()?.length > 0 &&
      values?.user_name?.trim()?.length > 0 &&
      values?.phone?.trim()?.length &&
      !!values?.date_of_birth
    );
  };

  return {
    t,
    initValueFillProfile,
    open,
    refSheetModal,
    refFormik,
    handleDatePicker,
    handleSubmit,
    setOpen,
    getInputFillFull,
  };
};
