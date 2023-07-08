import {Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

export const checkPhotoLibrary = async (callback?: () => void) => {
  // Vì android ko cần dùng đến quyền photo library
  if (Platform.OS === 'ios') {
    try {
      const checkPermission = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      console.log('checkPermission: ', checkPermission);
      if (checkPermission === RESULTS.BLOCKED) {
        callback?.();
        return false;
      }
      if (checkPermission === RESULTS.DENIED) {
        const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        return result === RESULTS.GRANTED;
      }
      if (checkPermission === RESULTS.UNAVAILABLE) {
        return false;
      }
      return true;
    } catch (e) {
      console.log('error: ', e);
      return false;
    }
  }
  return true;
};
