import {Images} from '@assets';
import {RefAppGalleryProps} from '@components';
import {IButton, IDataIntro, INavigateAuth} from '@interfaces';
import {ROUTE_AUTH} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';
import {useTranslation} from 'react-i18next';

export const IntroHook = () => {
  const {t} = useTranslation();
  const navigation =
    useNavigation<INavigateAuth<ROUTE_AUTH.INTRO, 'navigation'>>();

  const refGallery = useRef<RefAppGalleryProps>(null);
  const data: IDataIntro[] = [
    {
      id: 1,
      source: Images.introCalendar,
      title: t('intro.title.0'),
      textBody: t('intro.body'),
    },
    {
      id: 2,
      source: Images.introChat,
      title: t('intro.title.1'),
      textBody: t('intro.body'),
    },
    {
      id: 3,
      source: Images.introCircle,
      title: t('intro.title.2'),
      textBody: t('intro.body'),
    },
  ];

  const listButton: IButton[] = [
    {
      id: 1,
      label: t('common.next'),
      onPress: () => refGallery.current?.scrollNext(handleNavigate),
      secondary: false,
    },
    {
      id: 2,
      label: t('common.skip'),
      onPress: () => handleNavigate,
      secondary: true,
    },
  ];

  const handleNavigate = () => {
    navigation.navigate(ROUTE_AUTH.LOGIN);
  };

  return {data, refGallery, listButton};
};
