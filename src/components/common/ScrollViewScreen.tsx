import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export const ScrollViewScreen = ({children, style}: Props) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={[style]}>
      <>{children}</>
    </KeyboardAwareScrollView>
  );
};
