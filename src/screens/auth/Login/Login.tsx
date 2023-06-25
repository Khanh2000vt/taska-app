import {Svgs} from '@assets';
import {
  AppButton,
  AppCheckBox,
  AppInputFormik,
  AppModal,
  AppText,
  AppTouchable,
  Block,
  ItemOption,
  LineView,
  RowView,
} from '@components';
import {Colors, dimensions, Fonts, FontSize, scaler, Spacing} from '@themes';
import {SignInSchema} from '@validates';
import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginFunctionHook} from './Login.hook';
import {styles} from './Login.style';

export const Login = () => {
  const {
    initialValues,
    handleLogin,
    handleRememberMe,
    listLoginSocial,
    rememberMe,
    listLanguage,
    refModal,
    handlePressLanguage,
    t,
  } = LoginFunctionHook();

  return (
    <Block block color={Colors.white}>
      <SafeAreaView edges={['top', 'bottom']}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scroll}
          bounces={false}>
          <AppTouchable style={styles.btnLNG} onPress={handlePressLanguage}>
            <AppText>LNG</AppText>
          </AppTouchable>
          <AppText size={FontSize.Font48} font={Fonts.fontWeight700}>
            {t('auth.login.title')}
          </AppText>
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={SignInSchema}>
            {({handleSubmit, values}) => (
              <>
                <View style={styles.viewLogin}>
                  <AppInputFormik
                    labelFormik="email"
                    placeholder={t('common.email') as string}
                    IconLeft={Svgs.EmailInput}
                  />
                  <AppInputFormik
                    labelFormik="password"
                    placeholder={t('common.password') as string}
                    IconLeft={Svgs.LockInput}
                    password
                  />
                  <AppCheckBox
                    checked={rememberMe}
                    onChangeValue={handleRememberMe}
                    label={t('auth.login.remember')}
                    style={{justifyContent: 'center'}}
                  />
                  <AppButton
                    label={t('auth.login.signIn')}
                    onPress={handleSubmit}
                    disabled={!(!!values.email && !!values.password)}
                  />
                  <AppTouchable>
                    <AppText
                      style={{textAlign: 'center'}}
                      size={FontSize.Font16}
                      color={Colors.primary}>
                      {t('auth.login.forgot')}
                    </AppText>
                  </AppTouchable>
                </View>
                <View style={styles.viewLine}>
                  <RowView gap={Spacing.width16} center>
                    <LineView style={styles.line} />
                    <AppText size={FontSize.Font18} color={Colors.gray.gray40}>
                      {t('auth.login.continueOther')}
                    </AppText>
                    <LineView style={styles.line} />
                  </RowView>
                  <RowView gap={Spacing.width20} center>
                    {listLoginSocial.map(item => {
                      return (
                        <AppTouchable key={item.id} style={styles.buttonSocial}>
                          <item.icon />
                        </AppTouchable>
                      );
                    })}
                  </RowView>
                </View>
                <RowView gap={Spacing.width8} center mt={scaler(100)}>
                  <AppText>{t('auth.login.notAccount')}</AppText>
                  <AppTouchable>
                    <AppText color={Colors.primary}>
                      {t('auth.login.signUp')}
                    </AppText>
                  </AppTouchable>
                </RowView>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <AppModal
        ref={refModal}
        modalSize={{height: scaler(200), width: dimensions.width}}
        position="bottom">
        {listLanguage.map(option => {
          return (
            <ItemOption
              label={option.label}
              onPress={option.onPress}
              key={option.id}
            />
          );
        })}
      </AppModal>
    </Block>
  );
};
