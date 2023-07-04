import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: any) => {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    // 0.5 이후에 실행하겠다
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
