import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BodyScreenProps} from '../AppScreen.props';

export const ScrollViewScreen = ({children, style}: BodyScreenProps) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={[{flex: 1}, style]}>
      <>{children}</>
    </KeyboardAwareScrollView>
  );
};
