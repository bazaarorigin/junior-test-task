import { useEffect, useReducer, useRef } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import unwrapError from '../utils';
import { TypedError } from '../types';

interface State<T> {
  data?: T;
  loading: boolean;
  error?: Error;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

const useFetch = <T = unknown, K = unknown>(
  service: (params?: K) => Promise<AxiosResponse<T>>,
  params?: K
): State<T> => {
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    loading: true,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return {
          ...initialState,
          loading: false,
          data: action.payload,
        };
      case 'error':
        return {
          ...initialState,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      try {
        const response = await service(params);
        if (response.statusText !== 'OK') {
          throw new Error(response.statusText);
        }

        const data = response.data as T;
        if (cancelRequest.current) return;

        dispatch({
          type: 'fetched',
          payload: data,
        });
      } catch (error) {
        if (cancelRequest.current) return;

        unwrapError(error as AxiosError<TypedError>);

        dispatch({
          type: 'error',
          payload: error as Error,
        });
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service, JSON.stringify(params)]);

  return state;
};

export default useFetch;
