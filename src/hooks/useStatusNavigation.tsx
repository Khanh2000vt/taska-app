import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export function useStatusNavigation() {
  const navigation = useNavigation();

  const [routePresent, setRoutePresent] = useState<any>({});
  const routeNamePresent = routePresent?.name;
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const infoNavigation = e?.data?.state ?? {};
      setRoutePresent(infoNavigation?.routes[infoNavigation.index]);
    });

    // Cleanup sự kiện khi component bị unmount
    return unsubscribe;
  }, []);
  return {routePresent, routeNamePresent, navigation};
}
