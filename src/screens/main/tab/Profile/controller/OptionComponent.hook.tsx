import {logoutUser} from '@redux';
import {useTheme} from '@themes';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

export const OptionHook = () => {
  const {updateTheme, themeColor} = useTheme();
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return {data, dark, handleChangeTheme, themeColor, handleLogout};
};
