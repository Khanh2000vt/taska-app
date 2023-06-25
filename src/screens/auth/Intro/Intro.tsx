import {Images} from '@assets';
import {AppGallery} from '@components';
import React from 'react';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Intro.style';

export const Intro = () => {
  return (
    <View>
      <SafeAreaView edges={['top']} />
      <Image source={Images.introCalendar} style={styles.image} />
      <AppGallery>
        {item => {
          return <></>;
        }}
      </AppGallery>
    </View>
  );
};
