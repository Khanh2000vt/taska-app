import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BodyScreenProps} from '../AppScreen.props';

export const ScrollViewScreen = ({children}: BodyScreenProps) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      bounces={false}
      style={{flex: 1}}>
      <>{children}</>
    </KeyboardAwareScrollView>
  );
};
