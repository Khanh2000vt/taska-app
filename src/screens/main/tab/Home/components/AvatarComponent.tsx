import {Images, Svgs} from '@assets';
import {
  AppTouchable,
  ModalPermission,
  ModalRequestPermission,
} from '@components';
import {PHOTO} from '@constants';
import {scaler} from '@theme';
import {checkPhotoLibrary} from '@utils';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const AvatarComponent = () => {
  const [response, setResponse] = useState<any>(null);

  const refPermission = useRef<ModalPermission>(null);

  useEffect(() => {
    console.log('response: ', response);
  }, [response]);

  const handlePressOptionCamera = useCallback(async (value: number) => {
    if (value === PHOTO.CAMERA) {
      ImagePicker.openCamera({
        mediaType: 'photo',
        width: 300,
        height: 300,
        cropping: true,
      }).then(image => {
        setResponse(image);
      });
    } else if (value === PHOTO.LIBRARY) {
      ImagePicker.openPicker({
        mediaType: 'photo',
        width: 300,
        height: 300,
        cropping: true,
      })
        .then(image => {
          setResponse(image);
        })
        .catch(e => console.log(e));
    }
  }, []);

  const onOpenLibrary = async () => {
    console.log('onOpenCamera');
    onOpenLibraryApp(() => {
      handlePressOptionCamera(PHOTO.LIBRARY);
    });
  };

  const onOpenLibraryApp = async (callback: () => void) => {
    const isCamera = await checkPhotoLibrary(() => {
      refPermission.current?.open();
    });
    !!isCamera &&
      setTimeout(() => {
        console.log('setTimeout-setTimeout');
        callback();
      }, 100);
  };
  return (
    <View style={styles.center}>
      <Image source={Images.avatarDefault} style={styles.avatar} />
      <AppTouchable
        onPress={onOpenLibrary}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: scaler(3),
        }}>
        <Svgs.EditSquare />
      </AppTouchable>
      <ModalRequestPermission ref={refPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: scaler(120),
    height: scaler(120),
    borderRadius: scaler(60),
  },
  center: {
    alignSelf: 'center',
  },
});
