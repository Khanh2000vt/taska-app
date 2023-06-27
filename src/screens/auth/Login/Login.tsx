import {Svgs} from '@assets';
import {
  AppButton,
  AppScreen,
  AppText,
  AppTouchable,
  LineView,
  RowView,
} from '@components';
import {IButton} from '@interfaces';
import {Colors, Fonts, FontSize, scaler, Spacing} from '@themes';
import React from 'react';
import {Text, View} from 'react-native';
import {LoginFunctionHook} from './Login.hook';
import {styles} from './Login.style';

export const Login = () => {
  const {t} = LoginFunctionHook();

  const listLoginSocial: IButton[] = [
    {
      id: 1,
      label: 'Facebook',
      onPress: () => {},
      icon: Svgs.Facebook,
    },
    {
      id: 2,
      label: 'Google',
      onPress: () => {},
      icon: Svgs.Google,
    },
    {
      id: 3,
      label: 'Apple',
      onPress: () => {},
      icon: Svgs.Apple,
    },
  ];

  return (
    <AppScreen>
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

        <AppButton label={t('login.signIn')} />
      </View>
      <RowView gap={Spacing.width8} center>
        <AppText>{t('login.notAccount')}</AppText>
        <AppTouchable>
          <AppText color={Colors.primary}>{t('login.signUp')}</AppText>
        </AppTouchable>
      </RowView>
    </AppScreen>
  );
};
