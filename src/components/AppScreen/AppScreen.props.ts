import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type IButtonHeader = {
  id: number;
  label?: string;
  onPress: () => void;
  Icon?: Element;
};

type IHeader = {
  title: string;
  arrayIconRight?: IButtonHeader[];
  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
};

type IAppScreen = {
  type?: 'view' | 'scroll-view' | 'flat-list';
  header?: IHeader;
};

type IView = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type AppScreenProps = IAppScreen & IView;
export type AppScreenHeaderProps = Pick<AppScreenProps, 'header' | 'type'>;
export type BodyScreenProps = IView;
export type SwitchScreenProps = Pick<AppScreenProps, 'type'> & IView;
