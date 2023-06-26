import {Images} from '@assets';
import {
  AppButton,
  AppGallery,
  AppScreen,
  AppText,
  RefAppGalleryProps,
} from '@components';
import {IDataIntro} from '@interfaces';
import {Fonts, FontSize, Spacing} from '@themes';
import React, {useRef} from 'react';
import {Image, View} from 'react-native';
import {styles} from './Intro.style';

export const Intro = () => {
  const refGallery = useRef<RefAppGalleryProps>(null);
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

  const listButton = [
    {
      id: 1,
      title: 'Next',
      onPress: () => refGallery.current?.scrollNext(() => {}),
      secondary: false,
    },
    {id: 2, title: 'Skip', onPress: () => {}, secondary: true},
  ];

  return (
    <AppScreen horizontal={0}>
      <AppGallery file={data} showIndexCurrent={false} ref={refGallery}>
        {(item: IDataIntro) => {
          return (
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: Spacing.width24,
              }}>
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
      <View
        style={{
          rowGap: Spacing.height12,
          paddingHorizontal: Spacing.width24,
        }}>
        {listButton.map(button => (
          <AppButton
            label={button.title}
            onPress={button.onPress}
            secondary={button.secondary}
            key={button.id}
          />
        ))}
      </View>
    </AppScreen>
  );
};
