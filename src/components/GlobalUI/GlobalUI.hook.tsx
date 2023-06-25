import {useRef, useState} from 'react';
import {Animated} from 'react-native';

export const FunctionHook = () => {
  const [isLoading, setLoading] = useState(false);
  const opacityValue = useRef(new Animated.Value(1)).current;
  const animation = Animated.loop(
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  );

  const showLoading = () => {
    animation.start();
    setLoading(true);
  };

  const hideLoading = () => {
    animation.reset();
    setLoading(false);
  };
  return {isLoading, opacityValue, showLoading, hideLoading};
};
