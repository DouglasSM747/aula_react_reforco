import { useState, useEffect } from "react";

const useFetch = <T>(apiFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiFunction();
        setData(response);
      } catch (error) {
        setError(`${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunction]);

  return { data, loading, error, setData };
};

export default useFetch;
