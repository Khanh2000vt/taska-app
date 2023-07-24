import {Svgs} from '@assets';
import React, {useEffect, useImperativeHandle, useState} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {FunctionHook} from './GlobalUI.hook';
import {styles} from './GlobalUI.style';
export const GlobalUI = React.forwardRef((_, ref) => {
  // const {isLoading, opacityValue, showLoading, hideLoading} = FunctionHook();
  const [isLoading, setLoading] = useState(false);
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const showLoading = () => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
    );
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      showLoading,
      hideLoading,
    }),
    [],
  );

  useEffect(() => {
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, {borderRadius: 0}]}>
        <Animated.View style={[styles.background, animatedStyle]}>
          <Svgs.Loading />
        </Animated.View>
      </View>
    );
  } else {
    return null;
  }
});

export default GlobalUI;
