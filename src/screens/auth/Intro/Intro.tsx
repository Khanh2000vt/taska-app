import {Images} from '@assets';
import {AppGallery, AppText} from '@components';
import {IDataIntro} from '@interfaces';
import {Fonts, FontSize} from '@themes';
import React from 'react';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Intro.style';

export const Intro = () => {
  const data: IDataIntro[] = [
    {
      id: 1,
      source: Images.introCalendar,
      title: 'Organize Your Tasks & Projects Easily',
      textBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      source: Images.introChat,
      title: 'Always Connect with Team Anytime Anywhere',
      textBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      source: Images.introCircle,
      title: 'Everything You Can Do in the App',
      textBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  return (
    <View>
      <SafeAreaView edges={['top']} />

      <AppGallery file={data} showIndexCurrent={false}>
        {(item: IDataIntro) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Image
                source={item.source}
                style={styles.image}
                resizeMode="contain"
              />
              <AppText size={FontSize.Font32} font={Fonts.fontWeight700} center>
                {item.title}
              </AppText>
              <AppText center>{item.textBody}</AppText>
            </View>
          );
        }}
      </AppGallery>
    </View>
  );
};
