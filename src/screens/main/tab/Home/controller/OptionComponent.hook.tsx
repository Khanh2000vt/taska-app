import {useTheme} from '@theme';
import React, {useState} from 'react';

export const OptionHook = () => {
  const {updateTheme, themeColor} = useTheme();
  const [dark, setDark] = useState<boolean>(false);
  const data = [
    {id: 1, label: 'Workspace', onPress: () => {}},
    {id: 2, label: 'Edit Profile', onPress: () => {}},
    {id: 3, label: 'Notifications', onPress: () => {}},
    {id: 4, label: 'Security', onPress: () => {}},
    {id: 5, label: 'Help', onPress: () => {}},
  ];

  const handleChangeTheme = (value: boolean) => {
    console.log('handleChangeTheme: ', value);
    updateTheme(!value);
    setDark(value);
  };
  return {data, dark, handleChangeTheme, themeColor};
};
