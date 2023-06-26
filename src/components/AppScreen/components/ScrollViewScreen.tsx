import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BodyScreenProps} from '../AppScreen.props';

export const ScrollViewScreen = ({style, children}: BodyScreenProps) => {
  return (
    <KeyboardAwareScrollView
      style={style}
      keyboardShouldPersistTaps="always"
      bounces={false}>
      <>{children(1)}</>
    </KeyboardAwareScrollView>
  );
};
