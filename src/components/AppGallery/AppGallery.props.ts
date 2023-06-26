import {ReactElement} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

type IGalleryStyle = {
  galleryStyle?: StyleProp<ViewStyle>;
  pageStyle?: StyleProp<ViewStyle>;
  doubleTapStyle?: StyleProp<ViewStyle>;
  indexViewStyle?: StyleProp<ViewStyle>;
};

type IDoubleTap<T> = {
  onDoubleTap?: (item: T) => void;
  DoubleTapElement?: React.ReactNode;
};

type IPaginationStyle = {
  paginationStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  pageWidth?: number;
};

export type IPagination = {
  scrollX: Animated.Value;
  size: number;
};

export type IGallery<T> = {
  onPress?: (item: T) => void;
  file: T[];
  children(data: T): ReactElement;
  showIndexCurrent?: boolean;
  showPagination?: boolean;
  ViewIndexElement?(indexCurrent: number, length: number): ReactElement;
};

export type RefAppGalleryProps = {
  scrollPrevious: (onCallback: () => void) => void;
  scrollNext: (onCallback: () => void) => void;
};

export type AppGalleryProps<T> = IGallery<T> &
  IGalleryStyle &
  IPaginationStyle &
  IDoubleTap<T>;
export type PaginationProps = IPagination & IPaginationStyle;
export type AppGalleryHookProps<T> = Required<
  Pick<AppGalleryProps<T>, 'file' | 'onPress' | 'onDoubleTap' | 'pageWidth'>
>;
