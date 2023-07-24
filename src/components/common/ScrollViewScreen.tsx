import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
export const ScrollViewScreen = ({
  children,
  style,
  contentContainerStyle,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={contentContainerStyle}
      style={[style]}>
      <>{children}</>
    </KeyboardAwareScrollView>
  );
};
