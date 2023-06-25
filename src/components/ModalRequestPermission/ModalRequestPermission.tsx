import {AppButton} from '@components/AppButton';
import {AppModal} from '@components/AppModal';
import {AppText} from '@components/AppText';
import {Colors, dimensions, FontSize, scaler} from '@theme';
import React, {forwardRef, useImperativeHandle} from 'react';
import {View} from 'react-native';
import {ModalRequestPermissionHook} from './ModalRequestPermission.hook';
import {styles} from './ModalRequestPermission.style';

export type ModalPermission = {
  open: () => void;
  close: () => void;
};

type Props = {};

export const ModalRequestPermission = forwardRef<ModalPermission, Props>(
  (props, ref) => {
    const {refModal, listButton, open, close} = ModalRequestPermissionHook();

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [],
    );

    return (
      <AppModal
        position="center"
        ref={refModal}
        modalBackgroundColor={Colors.white}
        modalSize={{
          width: dimensions.width - scaler(32),
          height: scaler(340),
        }}>
        <View style={styles.container}>
          <View style={styles.viewText}>
            <AppText size={FontSize.Font28} center>
              You have not granted permission
            </AppText>
            <AppText size={FontSize.Font18} center>
              You need to go to the app's settings to confirm the permission
            </AppText>
          </View>
          <View style={styles.viewButton}>
            {listButton.map(button => {
              return (
                <AppButton
                  label={button.label}
                  key={button.id}
                  onPress={button.onPress}
                  style={{flex: 1, backgroundColor: button.backgroundColor}}
                  labelStyle={{color: button.color}}
                />
              );
            })}
          </View>
        </View>
      </AppModal>
    );
  },
);
