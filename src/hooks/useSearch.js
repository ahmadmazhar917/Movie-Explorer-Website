import { useEffect, useState } from "react";

export function useSearch(searchFn, initialValue, params) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function searchData() {
      if (params) {
        setIsFetching(true);
        try {
          const data = await searchFn(params);
          setData(data);
        } catch (error) {
          setError({
            message: error.message || "Failed to fetch data.",
          });
        }
        setIsFetching(false);
      }
    }

    searchData();
  }, [searchFn, params]);

  return {
    data,
    isFetching,
    error,
  };
}
