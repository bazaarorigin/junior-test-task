import { useEffect, useMemo, useRef } from 'react';
import { debounce } from 'lodash';
import useUnmount from './useUnmount';

export interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

interface ControlFunctions {
  cancel: () => void;
  flush: () => void;
  isPending: () => boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DebouncedState<T extends (...args: any) => ReturnType<T>>
  extends ControlFunctions {
  (...args: Parameters<T>): ReturnType<T> | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounceCallback<T extends (...args: any) => ReturnType<T>>(
  func: T,
  delay = 500,
  options?: DebounceOptions
): DebouncedState<T> {
  const debouncedFunc = useRef<ReturnType<typeof debounce>>();

  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });

  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(func, delay, options);

    const wrappedFunc: DebouncedState<T> = (...args: Parameters<T>) =>
      debouncedFuncInstance(...args);

    wrappedFunc.cancel = () => debouncedFuncInstance.cancel();

    wrappedFunc.isPending = () => !!debouncedFunc.current;

    wrappedFunc.flush = () => debouncedFuncInstance.flush();

    return wrappedFunc;
  }, [func, delay, options]);

  useEffect(() => {
    debouncedFunc.current = debounce(func, delay, options);
  }, [func, delay, options]);

  return debounced;
}
