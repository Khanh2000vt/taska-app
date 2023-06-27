import {
  AppButton,
  AppScreen,
  AppText,
  LineView,
  Link,
  RowView,
} from '@components';
import {Colors, Fonts, FontSize, scaler, Spacing} from '@themes';
import React from 'react';
import {View} from 'react-native';
import {LoginFunctionHook} from './Login.hook';
import {styles} from './Login.style';

export const Login = () => {
  const {t, listLoginSocial, handleSignInPassword} = LoginFunctionHook();

  return (
    <AppScreen style={styles.container}>
      <View />
      <View>
        <AppText size={FontSize.Font48} font={Fonts.fontWeight700} center>
          {t('login.title')}
        </AppText>
        <View style={styles.viewButton}>
          {listLoginSocial.map(item => {
            return (
              <AppButton
                outline
                style={styles.button}
                labelStyle={styles.textButton}
                Icon={item.icon}
                label={t('login.continueWith', {social: item.label})}
                key={item.id}
              />
            );
          })}
        </View>
        <RowView gap={scaler(16)} mv={Spacing.height50} center>
          <LineView />
          <AppText size={FontSize.Font16} color={Colors.gray.gray40}>
            {t('login.or')}
          </AppText>
          <LineView />
        </RowView>

        <AppButton label={t('login.signIn')} onPress={handleSignInPassword} />
      </View>
      <RowView gap={Spacing.width8} center>
        <AppText>{t('login.notAccount')}</AppText>
        <Link>{t('login.signUp')}</Link>
      </RowView>
    </AppScreen>
  );
};
