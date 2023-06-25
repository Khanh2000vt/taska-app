import {colors} from '@themes';
import {FontSize, scaler} from '@utils';
import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {PropsInputOTP} from './type';
enum TypeEnum {
  PASSWORD = 'password',
  OTP = 'otp',
}
export const InputOTP = ({
  codeChar,
  index,
  onTextChange,
  onLayout,
  onKeyPress,
  type,
  focused,
}: PropsInputOTP) => {
  const refInput = useRef<TextInput>(null);
  return (
    <View pointerEvents="none">
      <TextInput
        ref={refInput}
        keyboardType="number-pad"
        maxLength={1}
        style={[
          styles.textInput,
          type === TypeEnum.PASSWORD && {color: colors.white},
          focused && styles.styleInputHighlight,
        ]}
        value={codeChar}
        onChangeText={text => onTextChange(text, index)}
        onLayout={() => onLayout(refInput, index)}
        autoFocus={index === 0}
        onKeyPress={({nativeEvent}) =>
          onKeyPress(nativeEvent.key, codeChar, index)
        }
        // caretHidden
      />
      {type === TypeEnum.PASSWORD && (
        <View style={[styles.circle, codeChar !== '' && styles.circleFilled]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: scaler(1),
    borderRadius: scaler(8),
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'bottom',
    textAlign: 'center',
    color: colors.black,
    borderColor: colors.purple.purple100,
    fontSize: FontSize.Font16,
    height: scaler(52),
    width: scaler(52),
  },
  circle: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  circleFilled: {
    backgroundColor: '#000',
  },
  styleInputHighlight: {
    backgroundColor: colors.purple.purple200,
  },
});
