import {Svgs} from '@assets';
import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {Colors, FontSize, scaler, Spacing} from '@themes';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppInputFormikHook} from './AppInputFormik.hook';
import {styles} from './AppInputFormik.style';
import {PropsAppInputFormik} from './AppInputFormik.type';

export const AppInputFormik = (props: PropsAppInputFormik) => {
  const {
    label,
    styleContainer,
    style,
    require = true,
    labelFormik,
    password = false,
    email = false,
    IconLeft,
    onFocus = () => {},
    onBlur = () => {},
    isShowError = true,
    styleLabel,
    ...propsInput
  } = props;

  const {
    value,
    setValue,
    showError,
    isFocus,
    show,
    error,
    showBtnDelete,
    setIsFocus,
    setShow,
    getColorIcon,
  } = AppInputFormikHook(labelFormik, isShowError);

  return (
    <View
      style={[
        // {height: scaler(98)},
        styleContainer,
      ]}>
      {label && (
        <AppText style={[styles.label, styleLabel]}>
          {label}
          {require && <AppText style={{color: Colors.error}}>{` *`}</AppText>}
        </AppText>
      )}
      <View
        style={[
          styles.viewInput,
          showError && {
            backgroundColor: `${Colors.error}08`,
            borderColor: Colors.error,
          },
          isFocus && {
            backgroundColor: `${Colors.primary}08`,
            borderColor: Colors.primary,
          },
          showBtnDelete && {paddingRight: scaler(12)},
        ]}>
        {!!IconLeft && <IconLeft color={getColorIcon()} />}
        <TextInput
          keyboardType={email ? 'email-address' : undefined}
          {...propsInput}
          placeholder={isFocus ? '' : propsInput.placeholder}
          placeholderTextColor={Colors.gray.gray10}
          style={[
            styles.input,
            !!IconLeft && {paddingLeft: scaler(12)},
            showBtnDelete && {paddingRight: scaler(12)},
            style,
          ]}
          onChangeText={(text: string) => setValue(text)}
          value={value}
          secureTextEntry={password && show}
          onFocus={e => {
            setIsFocus(true);
            onFocus(e);
          }}
          onBlur={e => {
            setIsFocus(false);
            onBlur(e);
          }}
        />
        {showBtnDelete && (
          <AppTouchable style={styles.btnDelete} onPress={() => setValue('')}>
            <View style={styles.viewIconDelete}>
              <Svgs.Close size={scaler(12)} color={Colors.white} />
            </View>
          </AppTouchable>
        )}
        {password && (
          <AppTouchable
            style={[
              styles.btnEye,
              !showBtnDelete && {paddingRight: scaler(20)},
            ]}
            onPress={() => setShow(!show)}>
            {show ? (
              <Svgs.EyeSlash color={getColorIcon()} />
            ) : (
              <Svgs.Eye color={getColorIcon()} />
            )}
          </AppTouchable>
        )}
      </View>

      {showError && (
        <View style={styles.viewError}>
          <AppText
            numberOfLines={1}
            color={Colors.error}
            size={FontSize.Font10}>
            {error}
          </AppText>
        </View>
      )}
    </View>
  );
};
