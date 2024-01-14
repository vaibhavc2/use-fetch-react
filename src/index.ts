import { useEffect, useState } from "react";
import { getErrorMessage } from "./func/error";
import { fetchUrl } from "./func/fetch-url";

export const useFetch = (url: string, options?: any) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: false,
    errorMessage: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const data: any = await fetchUrl(url, options);
        setState((prev) => ({ ...prev, data, loading: false }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: true,
          errorMessage: getErrorMessage(error),
        }));
      }
    })();
  }, [url, options]);

  return state;
};
