import {useFieldFormik} from '@hooks';
import {Colors} from '@theme';
import {useState} from 'react';
import {ColorValue} from 'react-native';

export const AppInputFormikHook = (
  labelFormik: string,
  isShowError: boolean,
) => {
  const {value, setValue, error, touched} = useFieldFormik(labelFormik);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

  const showError = !!(error && touched && isShowError);
  const showBtnDelete = isFocus && !!value?.length;

  const getColorIcon = (): ColorValue | undefined => {
    if (isFocus) {
      return Colors.primary;
    }
    if (value?.length > 0) {
      return Colors.textColor;
    }
    return undefined;
  };
  return {
    value,
    setValue,
    showError,
    isFocus,
    show,
    error,
    showBtnDelete,
    setIsFocus,
    setShow,
    getColorIcon,
  };
};
