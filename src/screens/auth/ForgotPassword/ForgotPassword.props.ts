import {EContactForgot} from '@constants';
import React from 'react';
import {SvgProps} from 'react-native-svg';

export type IContactForgot = {
  id: number;
  title: string;
  body: string;
  value: EContactForgot;
  icon: React.FC<SvgProps>;
  onPress: () => void;
};
export type ContactForgotProps = {
  item: IContactForgot;
  contact: EContactForgot;
};
