import {useEffect} from 'react';
import axios, {CancelToken} from 'axios';
interface FunctionProps {
  cancelToken: CancelToken;
}
export const useCancelRequest = (
  handleFunction: (headers: FunctionProps) => void,
  callBackCancel?: () => void,
) => {
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    const newHeaders: FunctionProps = {
      cancelToken: ourRequest.token,
    };
    const fetchPost = async () => handleFunction(newHeaders);
    fetchPost();

    return () => {
      ourRequest.cancel();
      callBackCancel?.();
    };
  }, [handleFunction]);
};
