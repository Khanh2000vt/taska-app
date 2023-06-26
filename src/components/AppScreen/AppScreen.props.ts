import React from 'react';
import {FlatListProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

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

type IFlatListScreen = {
  onRefresh: () => void;
  onLoadMore: () => void;
};

type IAppScreen = {
  type?: 'view' | 'scroll-view' | 'flat-list';

  flatList?: Omit<
    FlatListProps<number>,
    | 'renderItem'
    | 'refreshControl'
    | 'onEndReached'
    | 'showsVerticalScrollIndicator'
    | 'data'
  > &
    IFlatListScreen;
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
export type AppScreenHeaderProps = Pick<AppScreenProps, 'type'> & IHeaderScreen;
export type BodyScreenProps = IView;
export type SwitchScreenProps = Omit<AppScreenProps, 'header'> & IView;
export type FlatListScreenProps = Omit<AppScreenProps, 'type' | 'header'>;
