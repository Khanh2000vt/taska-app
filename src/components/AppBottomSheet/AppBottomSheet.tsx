import {
  Text as ReactNativeText,
  TextProps as TextProperties,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  TextStyle,
  ScrollView,
  FlatList,
  ViewStyle,
  KeyboardAvoidingView,
  Animated,
  AppState,
  Keyboard,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState, ReactNode, useCallback} from 'react';
// import Modal from 'react-native-modal';

// import {
//   FontSize,
//   Spacing,
//   Colors,
//   FontWithBold,
//   Device,
//   deviceHeight,
//   deviceWidth,
// } from '@assets';
// import {AppText, AppItem, AppInput, AppButton} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {useTheme} from '@theme';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useIsFocused} from '@react-navigation/native';
import {
  Colors,
  deviceHeight,
  deviceWidth,
  dimensions,
  Fonts,
  FontSize,
  scaler,
  Spacing,
  useTheme,
} from '@themes';

export interface AppBottomSheetProps {
  onBackdropPress: () => void;
  onClosePress?: () => void;
  onEditLevelPress?: () => void;
  onDonePress?: () => void;
  onConfirmPress?: () => void;
  hasSecondModal?: boolean;
  visible: boolean;
  title?: string;
  hasHeader?: boolean;
  style?: TextStyle | TextStyle[];
  modalStyle?: TextStyle | TextStyle[];
  children: ReactNode;
  avoidKeyboard?: boolean;
  isNeedPadding?: boolean;
  minHeightModal?: number;
  disableKeyboard?: boolean;
}

export const AppBottomSheet: React.FC<AppBottomSheetProps> = props => {
  // grab the props
  const {
    style,
    modalStyle,
    visible = false,
    hasHeader = true,
    children,
    title = 'Deadline',
    onBackdropPress,
    onClosePress,
    onDonePress,
    avoidKeyboard,
    isNeedPadding,
    minHeightModal,
    ...rest
  } = props;
  const {theme} = useTheme();
  const _translateY = React.useRef(new Animated.Value(0)).current;
  const appState = React.useRef(AppState.currentState);
  const isFocus = useIsFocused();
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const backAction = useCallback(() => {
    onBackdropPress();
    return true;
  }, [onBackdropPress]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // console.log('App has come to the foreground!');
      } else {
        onBackdropPress();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription?.remove?.();
    };
  }, []);

  useEffect(() => {
    if (!isFocus && visible) {
      onBackdropPress?.();
    }
  }, [visible, isFocus]);

  const onHide = () =>
    Animated.timing(_translateY, {
      toValue: deviceHeight,
      duration: 200,
      useNativeDriver: true,
    }).start();

  const _onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: _translateY,
        },
      },
    ],
    {
      useNativeDriver: false,
      listener: (e: any) => {
        if (e.nativeEvent.translationY < 0) {
          _translateY.setOffset(0);
          _translateY.setValue(0);
        }
      },
    },
  );
  useEffect(() => {
    _translateY.setOffset(0);
    _translateY.setValue(0);
  }, [visible]);

  const _onHandlerStateChange = React.useCallback((event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (event.nativeEvent.translationY > 100) {
        setTimeout(() => {
          onBackdropPress();
        }, 0);
        onHide();
      } else {
        _translateY.setOffset(0);
        _translateY.setValue(0);
      }
    }
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      Platform.OS === 'android' && setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      Platform.OS === 'android' && setKeyboardStatus(false);
    });

    const showSubscription1 = Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription1 = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription?.remove();
      hideSubscription?.remove();
      showSubscription1?.remove();
      hideSubscription1?.remove();
    };
  }, []);

  const ViewBoard =
    props.disableKeyboard && Platform.OS === 'android'
      ? View
      : KeyboardAvoidingView;

  const opacity = _translateY.interpolate({
    inputRange: [0, 50, 150],
    outputRange: [1, 0.5, 0],
  });

  if (!visible) {
    return null;
  }
  return (
    <PanGestureHandler
      onGestureEvent={_onGestureEvent}
      onHandlerStateChange={_onHandlerStateChange}>
      <Animated.View
        style={[
          styles.wrapper,
          style,
          {
            width: dimensions.width,
            height: deviceHeight,
            transform: [{translateY: _translateY}],
          },
        ]}>
        <Animated.View
          style={{
            width: '100%',
            height: '150%',
            backgroundColor: `rgba(0,0,0,0.1)`,
            position: 'absolute',
            opacity: opacity,
            top: -150,
          }}
        />
        <TouchableOpacity
          style={{
            height: deviceHeight,
            paddingTop: deviceHeight / 3,
            justifyContent: 'flex-end',
            // backgroundColor: 'red',
          }}
          activeOpacity={1}
          onPress={() => {
            onBackdropPress?.();
            Keyboard.dismiss();
          }}>
          <ViewBoard
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'transparent',
              justifyContent: 'flex-end',
              width: deviceWidth,
              height: '100%',
              // alignSelf: 'center',
            }}
            // keyboardVerticalOffset={50}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
            <TouchableOpacity
              style={[
                styles.modalWrapper,
                {
                  backgroundColor: Colors.white,
                  minHeight: minHeightModal || 380,
                },
                avoidKeyboard && {
                  paddingBottom: getBottomSpace(),
                },
                keyboardStatus &&
                  !isNeedPadding && {
                    paddingBottom: 15,
                  },
              ]}
              activeOpacity={1}
              onPress={() => {
                Keyboard.dismiss();
              }}>
              {children}
            </TouchableOpacity>
          </ViewBoard>
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: Colors.black,
    position: 'absolute',
    // flex: 1,
    left: -scaler(24),
    zIndex: 9999,
  },

  modalWrapper: {
    backgroundColor: Colors.dark,
    width: '100%',
    maxHeight: dimensions.height * 0.9,
    // flex: 1,
    paddingHorizontal: Spacing.width10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: getBottomSpace() + 60,
  },

  header: {
    padding: Spacing.height16,
    // backgroundColor: Colors.blue,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Spacing.height30,
    paddingHorizontal: Spacing.width10,
  },

  title: {
    ...Fonts.fontWeight600,
    fontSize: FontSize.Font18,
    color: Colors.dark,
  },

  chevonDownIcon: {
    position: 'absolute',
    right: Spacing.width1,
    padding: Spacing.width10,
    marginLeft: Spacing.width60,
  },
});
