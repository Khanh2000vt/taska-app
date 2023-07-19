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
  horizontal?: number;
  top?: number;
  bottom?: number;
};

type IView = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

type IHeaderScreen = {
  header?: IHeader;
  padding?: number;
};

export type AppScreenProps = IAppScreen & IView & IHeaderScreen;
export type AppScreenHeaderProps = IHeaderScreen;
export type BodyScreenProps = IView;
export type SwitchScreenProps = Omit<AppScreenProps, 'header'> & IView;
export type FlatListScreenProps = Omit<AppScreenProps, 'type' | 'header'>;
