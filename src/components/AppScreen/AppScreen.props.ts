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
  header?: IHeader;
  flatList?: Omit<
    FlatListProps<number>,
    | 'renderItem'
    | 'refreshControl'
    | 'onEndReached'
    | 'showsVerticalScrollIndicator'
  > &
    IFlatListScreen;
};

type IView = {
  children(item: number): React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type AppScreenProps = IAppScreen & IView;
export type AppScreenHeaderProps = Pick<AppScreenProps, 'header' | 'type'>;
export type BodyScreenProps = IView;
export type SwitchScreenProps = Pick<AppScreenProps, 'type'> & IView;
export type FlatListScreenProps = Omit<AppScreenProps, 'type' | 'header'>;
