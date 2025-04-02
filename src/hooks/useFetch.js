import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setError("");
        setData(data);
      } catch (error) {
        setError("Failed to fetch data.");
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    data,
    isFetching,
    error,
  };
}
