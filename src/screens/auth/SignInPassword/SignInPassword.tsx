import {Svgs} from '@assets';
import {
  AppButton,
  AppCheckBox,
  AppInputFormik,
  AppModal,
  AppScreen,
  AppText,
  AppTouchable,
  ColumnView,
  ItemOption,
  LineView,
  Link,
  RowView,
} from '@components';
import {Colors, dimensions, Fonts, FontSize, scaler, Spacing} from '@themes';
import {SignInSchema} from '@validates';
import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {SignInPasswordHook} from './SignInPassword.hook';
import {styles} from './SignInPassword.style';

export const SignInPassword = () => {
  const {
    initialValues,
    handleLogin,
    handleRememberMe,
    listLoginSocial,
    rememberMe,
    t,
  } = SignInPasswordHook();

  return (
    <AppScreen style={styles.container}>
      <View style={styles.body}>
        <AppText size={FontSize.Font48} font={Fonts.fontWeight700}>
          {t('signIn.title')}
        </AppText>
        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          validationSchema={SignInSchema}>
          {({handleSubmit, values}) => (
            <>
              <ColumnView gap={Spacing.height24} mt={Spacing.height54}>
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
                  label={t('signIn.remember')}
                  style={styles.checkbox}
                />
                <AppButton
                  label={t('signIn.signIn')}
                  onPress={handleSubmit}
                  disabled={!(!!values.email && !!values.password)}
                  shadow
                />
                <Link
                  text={{
                    center: true,
                    size: FontSize.Font16,
                  }}>
                  {t('login.forgot')}
                </Link>
              </ColumnView>
            </>
          )}
        </Formik>
      </View>
      <View>
        <RowView gap={Spacing.width16} center mv={Spacing.height30}>
          <LineView />
          <AppText size={FontSize.Font18} color={Colors.gray.gray40}>
            {t('signIn.continueOther')}
          </AppText>
          <LineView />
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

        <RowView gap={Spacing.width8} center mt={scaler(52)}>
          <AppText>{t('login.notAccount')}</AppText>
          <AppTouchable>
            <AppText color={Colors.primary}>{t('login.signUp')}</AppText>
          </AppTouchable>
        </RowView>
      </View>
    </AppScreen>
  );
};
