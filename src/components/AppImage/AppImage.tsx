import {Images} from '@assets';
import React from 'react';
import {Image, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FunctionHook} from './AppImage.hook';
import {styles} from './AppImage.style';
import {PropsAppImage} from './AppImage.type';
import {PlaceholderImage} from './PlaceholderImage';

export const AppImage = ({
  uri,
  style,
  resizeMode,
  source,
  styleDefault,
  stylesPlaceholder,
  showImageDefault = true,
}: PropsAppImage) => {
  const {loading, onLoadStart, onLoad, onError} = FunctionHook();
  return (
    <View style={{}}>
      {!!uri ? (
        <FastImage
          source={{
            uri: uri ?? undefined,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable,
          }}
          //@ts-ignore
          style={[styles.fastImage, style]}
          resizeMode={resizeMode ? resizeMode : 'cover'}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onError={onError}
        />
      ) : (
        <>
          {showImageDefault ? (
            <Image
              source={source || Images.avatarDefault}
              //@ts-ignore
              style={[style, styleDefault]}
            />
          ) : null}
        </>
      )}

      {!!uri && loading ? (
        <View style={[style, styles.containerPlaceholder, stylesPlaceholder]}>
          <PlaceholderImage />
        </View>
      ) : null}
    </View>
  );
};
