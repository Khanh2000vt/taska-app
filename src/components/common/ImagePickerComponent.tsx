import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IOption} from '@interfaces';
import {ItemOption} from './ItemOption';
import {checkPhotoLibrary} from '@utils';
import ImagePicker from 'react-native-image-crop-picker';
import {PHOTO} from '@constants';
import {
  ModalPermission,
  ModalRequestPermission,
} from '@components/ModalRequestPermission';
type ImagePickerComponentProps = {
  onOpenSettingsPermission?: () => void;
};

export const ImagePickerComponent = ({
  onOpenSettingsPermission = () => {},
}: ImagePickerComponentProps) => {
  const dataOption: IOption<number>[] = [
    {
      id: 1,
      label: 'Camera',
      value: 1,
      onPress: () => handlePressCamera(),
    },
    {
      id: 2,
      label: 'Library',
      value: 2,
      onPress: () => handlePressLibrary(),
    },
  ];

  const [response, setResponse] = useState<any>(null);

  const refPermission = useRef<ModalPermission>(null);

  useEffect(() => {
    console.log('response: ', response);
  }, [response]);

  const handlePressCamera = () => {
    console.log('handlePressCamera');
    onOpenLibraryApp(() => {
      handlePressOptionCamera(PHOTO.CAMERA);
    });
  };

  const handlePressLibrary = () => {
    console.log('handlePressLibrary');
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

  return (
    <>
      {dataOption.map(button => {
        return (
          <ItemOption
            label={button.label}
            onPress={button.onPress}
            key={button.id}
          />
        );
      })}
      <ModalRequestPermission
        ref={refPermission}
        onCallBack={onOpenSettingsPermission}
      />
    </>
  );
};

const styles = StyleSheet.create({});
