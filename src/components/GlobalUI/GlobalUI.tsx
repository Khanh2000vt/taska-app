import {Svgs} from '@assets';
import React, {useImperativeHandle} from 'react';
import {Animated, View} from 'react-native';
import {FunctionHook} from './GlobalUI.hook';
import {styles} from './GlobalUI.style';
export const GlobalUI = React.forwardRef((_, ref) => {
  const {isLoading, opacityValue, showLoading, hideLoading} = FunctionHook();

  useImperativeHandle(
    ref,
    () => ({
      showLoading,
      hideLoading,
    }),
    [],
  );

  if (isLoading) {
    return (
      <View style={[styles.container, {borderRadius: 0}]}>
        <Animated.View style={[styles.background, {opacity: opacityValue}]}>
          {/* <Svgs.Zap /> */}
          {/* <ActivityIndicator /> */}
        </Animated.View>
      </View>
    );
  } else {
    return null;
  }
});

export default GlobalUI;
