import {Images, Svgs} from '@assets';
import {AppTouchable} from '@components/AppTouchable';
import {scaler} from '@themes';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
type AvatarUserProps = {
  onPress: () => void;
};

export const AvatarUser = ({onPress}: AvatarUserProps) => {
  return (
    <AppTouchable style={{alignSelf: 'center'}} onPress={onPress}>
      {/* <Text>AvatarUser</Text> */}
      <Image
        source={Images.avatarDefault}
        style={{width: scaler(140), height: scaler(140)}}
      />
      <Svgs.EditSquare
        style={{position: 'absolute', bottom: 0, right: 0, padding: scaler(4)}}
      />
    </AppTouchable>
  );
};

const styles = StyleSheet.create({});
