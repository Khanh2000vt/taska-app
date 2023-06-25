import {useCallback, useState} from 'react';

export const FunctionHook = () => {
  const [loading, setLoading] = useState<boolean | null>(null);

  const onLoadStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const onError = useCallback(() => {
    // setLoading(false);
  }, []);

  return {loading, onLoadStart, onLoad, onError};
};
