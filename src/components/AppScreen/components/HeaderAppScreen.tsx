import {Svgs} from '@assets';
import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {goBack} from '@navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {AppScreenHeaderProps} from '../AppScreen.props';
import {Fonts, FontSize, scaler, Spacing} from '@themes';

export const HeaderAppScreen = ({
  header,
  padding = scaler(24),
}: AppScreenHeaderProps) => {
  return (
    <SafeAreaView edges={['top']}>
      {!!header ? (
        <View style={[styles.container]}>
          <AppTouchable
            onPress={() => goBack()}
            style={[
              {
                paddingLeft: padding,
              },
              styles.buttonLeft,
            ]}>
            <Svgs.ArrowLeft />
          </AppTouchable>
          <View style={styles.viewTitle}>
            <AppText
              size={FontSize.Font24}
              font={Fonts.fontWeight700}
              numberOfLines={1}>
              {header?.title}
            </AppText>
          </View>
          {header?.arrayIconRight && header?.arrayIconRight?.length > 0 ? (
            <View style={styles.viewRight}>
              {header?.arrayIconRight?.map((item, index) => (
                <AppTouchable
                  key={index}
                  style={[
                    styles.buttonRight,
                    index === 0 && {
                      paddingLeft: scaler(16),
                    },
                    index ===
                      (header?.arrayIconRight &&
                        header?.arrayIconRight?.length - 1) && {
                      paddingRight: padding,
                    },
                  ]}>
                  <>{item?.Icon}</>
                </AppTouchable>
              ))}
            </View>
          ) : (
            <View style={{paddingRight: padding}} />
          )}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Spacing.height12,
    marginTop: Spacing.height10,
  },
  viewTitle: {
    flex: 1,
  },
  viewRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLeft: {
    paddingRight: scaler(16),
    paddingVertical: scaler(10),
  },
  buttonRight: {
    paddingVertical: scaler(10),
    paddingLeft: scaler(10),
    paddingRight: scaler(10),
  },
});
