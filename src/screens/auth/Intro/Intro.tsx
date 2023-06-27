import {AppButton, AppGallery, AppScreen, AppText} from '@components';
import {IDataIntro} from '@interfaces';
import {Fonts, FontSize} from '@themes';
import React from 'react';
import {Image, View} from 'react-native';
import {IntroHook} from './Intro.hook';
import {styles} from './Intro.style';

export const Intro = () => {
  const {data, refGallery, listButton} = IntroHook();
  return (
    <AppScreen horizontal={0}>
      <AppGallery file={data} showIndexCurrent={false} ref={refGallery}>
        {(item: IDataIntro) => {
          return (
            <View style={styles.body}>
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
      <View style={styles.viewButton}>
        {listButton.map(button => (
          <AppButton
            label={button.label}
            onPress={button.onPress}
            secondary={button.secondary}
            key={button.id}
          />
        ))}
      </View>
    </AppScreen>
  );
};
