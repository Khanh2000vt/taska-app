import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IOption} from '@interfaces';
import {ItemOption} from './ItemOption';

export const ImagePickerComponent = () => {
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
  const handlePressCamera = () => {};

  const handlePressLibrary = () => {};
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
    </>
  );
};

const styles = StyleSheet.create({});
