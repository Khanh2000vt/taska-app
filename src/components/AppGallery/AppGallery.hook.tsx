import React, {useCallback, useMemo, useRef} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AppGalleryHookProps} from './AppGallery.props';

export const AppGalleryHook = ({
  file,
  pageWidth,
  onDoubleTap,
  onPress,
}: AppGalleryHookProps<unknown>) => {
  const scaleAnimation = useMemo(() => new Animated.Value(0), []);
  const [page, setPage] = React.useState(1);
  const scrollX = new Animated.Value(0);
  const refNumTap = useRef<number>(0);
  const timer: any = useRef(null);
  const refFlatList = useRef<FlatList>(null);
  const indexRef = useRef<number>(1);

  const startScaleView = useCallback(() => {
    Animated.sequence([
      Animated.spring(scaleAnimation, {
        toValue: 1,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnimation]);

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageNumber = Math.min(
      Math.max(Math.round(e.nativeEvent.contentOffset.x / pageWidth) + 1, 0),
      file?.length,
    );
    setPage(pageNumber);
    indexRef.current = pageNumber;
  };

  const onDoublePressTap = (item: any) => {
    refNumTap.current += 1;
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (refNumTap.current >= 2) {
      onDoubleTap(item);
      startScaleView();
      refNumTap.current = 0;
    }

    timer.current = setTimeout(() => {
      if (refNumTap.current === 1) {
        onPress(item);
        refNumTap.current = 0;
      }
    }, 300);
  };

  const onPressItem = (item: any) => {
    if (!onDoubleTap) {
      onPress(item);
    } else {
      onDoublePressTap(item);
    }
  };

  const scrollNext = (onCallback: () => void) => {
    if (indexRef.current === file?.length) {
      onCallback?.();
    } else {
      refFlatList?.current?.scrollToIndex({
        index: indexRef.current,
        animated: true,
      });
      indexRef.current += 1;
    }
  };

  const scrollPrevious = (onCallback: () => void) => {
    if (indexRef.current === 1) {
      onCallback?.();
    } else {
      refFlatList?.current?.scrollToIndex({
        index: indexRef.current - 2,
        animated: true,
      });
      indexRef.current -= 1;
    }
  };

  return {
    refFlatList,
    onScrollEnd,
    scrollX,
    onPressItem,
    scaleAnimation,
    scrollNext,
    scrollPrevious,
    page,
  };
};
