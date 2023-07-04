import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images, Svgs} from '@assets';
import {scaler} from '@themes';

export const AvatarUser = () => {
  return (
    <View style={{alignSelf: 'center'}}>
      {/* <Text>AvatarUser</Text> */}
      <Image
        source={Images.avatarDefault}
        style={{width: scaler(140), height: scaler(140)}}
      />
      <Svgs.EditSquare
        style={{position: 'absolute', bottom: 0, right: 0, padding: scaler(4)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
