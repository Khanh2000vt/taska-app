import {Images} from '@assets';
import {RefAppGalleryProps} from '@components';
import {IButton, IDataIntro} from '@interfaces';
import {useRef} from 'react';

export const IntroHook = () => {
  const refGallery = useRef<RefAppGalleryProps>(null);
  const data: IDataIntro[] = [
    {
      id: 1,
      source: Images.introCalendar,
      title: 'Organize Your Tasks & Projects Easily',
      textBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      source: Images.introChat,
      title: 'Always Connect with Team Anytime Anywhere',
      textBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      source: Images.introCircle,
      title: 'Everything You Can Do in the App',
      textBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const listButton: IButton[] = [
    {
      id: 1,
      label: 'Next',
      onPress: () => refGallery.current?.scrollNext(() => {}),
      secondary: false,
    },
    {
      id: 2,
      label: 'Skip',
      onPress: () => {},
      secondary: true,
    },
  ];

  return {data, refGallery, listButton};
};
