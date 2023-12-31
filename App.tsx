import {GlobalService, GlobalUI} from '@components';
import {NavigationApp, NavigationUtils} from '@navigation';
import {persistor, store} from '@redux/store';
import {ThemeProvider} from '@themes';
import {initI18n, loadLocaleLanguage} from '@translations';
import {useEffect, useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import auth from '@react-native-firebase/auth';

initI18n();

const App = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<any | null>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    // Được dùng để đưa các định dạng chữ về mặc định khi vào app.
    // Tránh chữ trong app lấy các định dạng khác ở bên thứ 3.
    // getLocalize();
    //@ts-ignore
    Text.defaultProps = Text.defaultProps || {};
    //@ts-ignore
    Text.defaultProps.allowFontScaling = false;
    //@ts-ignore
    TextInput.defaultProps = TextInput.defaultProps || {};
    //@ts-ignore
    TextInput.defaultProps.allowFontScaling = false;
    //@ts-ignore
    View.defaultProps = View.defaultProps || {};
    //@ts-ignore
    View.defaultProps.allowFontScaling = false;
  }, []);

  function onAuthStateChanged(user: any) {
    setUser(user);
    console.log('user: ', user);
    if (initializing) setInitializing(false);
  }

  const onBeforeLift = () => {
    loadLocaleLanguage();
  };

  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={onBeforeLift}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <NavigationApp
            ref={(navigatorRef: any) => {
              NavigationUtils.setTopLevelNavigator(navigatorRef);
            }}
          />
          <GlobalUI ref={GlobalService.globalUIRef} />
          <FlashMessage
            style={styles.messageNotification}
            position="top"
            floating={true}
            hideStatusBar={false}
          />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  messageNotification: {
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : 0,
  },
});

export default App;
