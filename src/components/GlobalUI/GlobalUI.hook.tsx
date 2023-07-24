import {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const FunctionHook = () => {
  const opacityValue = useRef(new Animated.Value(1)).current;

  const rotation = useSharedValue(0);

  return {};
};
