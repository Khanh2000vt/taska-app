import {useEffect} from 'react';
import axios, {CancelToken, CancelTokenSource} from 'axios';
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

export const useCancelToken = (
  des?: React.DependencyList | undefined,
  message?: string,
  callBackCancel?: () => void,
): CancelTokenSource => {
  const axiosCancelToken: CancelTokenSource = axios.CancelToken.source();
  useEffect(() => {
    return () => {
      !!callBackCancel && callBackCancel();
      axiosCancelToken?.cancel(message);
    };
  }, des);
  return axiosCancelToken;
};
