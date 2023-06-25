import {Colors} from '@themes';
import {useRef} from 'react';
import {openSettings} from 'react-native-permissions';

export const ModalRequestPermissionHook = () => {
  const refModal = useRef<any>(null);

  const open = () => {
    refModal.current?.open();
  };

  const close = () => {
    handleCancel();
  };

  const listButton = [
    {
      id: 1,
      label: 'Cancel',
      onPress: () => handleCancel(),
      backgroundColor: Colors.white,
      color: Colors.primary,
    },
    {
      id: 2,
      label: 'Go to settings',
      onPress: () => handleGoToSettings(),
      backgroundColor: Colors.primary,
      color: Colors.white,
    },
  ];

  const handleCancel = () => {
    refModal.current?.close();
  };

  const handleGoToSettings = () => {
    openSettings().then();
    handleCancel();
  };
  return {listButton, refModal, open, close};
};
