import {Images, Svgs} from '@assets';
import {
  AppButton,
  AppScreen,
  AppText,
  ColumnView,
  ScrollViewScreen,
} from '@components';
import {EContactForgot} from '@constants';
import {Colors, Fonts, FontSize, scaler} from '@themes';
import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {ContactForgot} from './components';
import {IContactForgot} from './ForgotPassword.props';

export const ForgotPassword = () => {
  const [contact, setContact] = useState<EContactForgot>(
    EContactForgot.UNDEFINED,
  );
  const data: IContactForgot[] = [
    {
      id: 1,
      title: 'via SMS:',
      body: '+1 111 ******99',
      value: EContactForgot.SMS,
      icon: Svgs.ChatPrimary,
      onPress: () => setContact(EContactForgot.SMS),
    },
    {
      id: 2,
      title: 'via Email:',
      body: 'dan***in@yourdomain.com',
      value: EContactForgot.EMAIL,

      icon: Svgs.MessagePrimary,
      onPress: () => setContact(EContactForgot.EMAIL),
    },
  ];
  return (
    <AppScreen header={{title: 'Forgot Password'}}>
      <ScrollViewScreen contentContainerStyle={styles.scroll}>
        <Image source={Images.lockForgot} style={styles.image} />
        <ColumnView gap={scaler(24)}>
          <AppText size={FontSize.Font16} font={Fonts.fontWeight400}>
            Select which contact details should we use to reset your password
          </AppText>
          {data.map(item => {
            return (
              <ContactForgot item={item} contact={contact} key={item.id} />
            );
          })}
        </ColumnView>
      </ScrollViewScreen>
      <AppButton
        label="Continue"
        style={{marginTop: scaler(16)}}
        disabled={contact === EContactForgot.UNDEFINED}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  image: {
    marginVertical: scaler(40),
    width: scaler(240),
    height: scaler(240),
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: scaler(40),
  },
});
