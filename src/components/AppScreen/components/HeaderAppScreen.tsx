import {Svgs} from '@assets';
import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {goBack} from '@navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native/types';
import {AppScreenHeaderProps} from '../AppScreen.props';

export const HeaderAppScreen = ({header}: AppScreenHeaderProps) => {
  return (
    <SafeAreaView edges={['top']}>
      {!!header ? (
        <View>
          <AppTouchable onPress={() => goBack()}>
            <Svgs.ArrowLeft />
          </AppTouchable>
          <View>
            <AppText numberOfLines={1}>{header?.title}</AppText>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
